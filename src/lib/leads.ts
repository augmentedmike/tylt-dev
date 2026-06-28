// Server-only: MongoDB-backed store for booking/call leads. Imported by the
// submitLead server action and the /system dashboard. Never reaches the client.
import { MongoClient, ObjectId, type Collection } from "mongodb";

export type LeadType = "pilot" | "consultation";

/** Stored shape. `_id` is assigned by MongoDB on insert. */
export interface LeadDoc {
  _id?: ObjectId;
  type: LeadType;
  name: string;
  email: string;
  company: string;
  context: string;
  message: string;
  createdAt: Date;
  handledAt: Date | null;
}

/** Fields supplied when a lead is created. */
export type NewLead = Pick<
  LeadDoc,
  "type" | "name" | "email" | "company" | "context" | "message"
>;

/** Serialized shape handed to the UI (plain JSON, no Mongo types). */
export interface Lead {
  id: string;
  type: LeadType;
  name: string;
  email: string;
  company: string;
  context: string;
  message: string;
  createdAt: string;
  handledAt: string | null;
}

export type LeadFilter = "open" | "handled" | "all";

const DB_NAME = "tylt";
const COLLECTION = "leads";

// Cache the connection promise across hot reloads (dev) and warm serverless
// invocations (prod) so we don't open a new pool on every request.
const globalForMongo = globalThis as unknown as {
  _leadClientPromise?: Promise<MongoClient>;
};

function clientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MISSING_MONGODB_URI");
  if (!globalForMongo._leadClientPromise) {
    globalForMongo._leadClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._leadClientPromise;
}

async function leads(): Promise<Collection<LeadDoc>> {
  const client = await clientPromise();
  return client.db(DB_NAME).collection<LeadDoc>(COLLECTION);
}

function serialize(doc: LeadDoc): Lead {
  return {
    id: doc._id!.toString(),
    type: doc.type,
    name: doc.name,
    email: doc.email,
    company: doc.company,
    context: doc.context,
    message: doc.message,
    createdAt: doc.createdAt.toISOString(),
    handledAt: doc.handledAt ? doc.handledAt.toISOString() : null,
  };
}

/** Persist a new lead. */
export async function insertLead(lead: NewLead): Promise<void> {
  const col = await leads();
  await col.insertOne({
    ...lead,
    createdAt: new Date(),
    handledAt: null,
  });
}

/** List leads, newest first. Filter: open (default), handled, or all. */
export async function listLeads(filter: LeadFilter = "open"): Promise<Lead[]> {
  const col = await leads();
  const query =
    filter === "open"
      ? { handledAt: null }
      : filter === "handled"
        ? { handledAt: { $ne: null } }
        : {};
  const docs = await col
    .find(query)
    .sort({ createdAt: -1 })
    .limit(500)
    .toArray();
  return docs.map(serialize);
}

/** Count of unhandled leads — used for the dashboard badge. */
export async function countOpenLeads(): Promise<number> {
  const col = await leads();
  return col.countDocuments({ handledAt: null });
}

/** Mark a lead handled (or re-open it). No-op for an invalid id. */
export async function setLeadHandled(
  id: string,
  handled: boolean,
): Promise<void> {
  if (!ObjectId.isValid(id)) return;
  const col = await leads();
  await col.updateOne(
    { _id: new ObjectId(id) },
    { $set: { handledAt: handled ? new Date() : null } },
  );
}
