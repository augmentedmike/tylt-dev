"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  passwordMatches,
  signIn,
  signOut,
  isAuthenticated,
} from "@/lib/system-auth";
import { setLeadHandled } from "@/lib/leads";

/** Verify the password and start a session, or bounce back with an error. */
export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get("password") ?? "");
  if (!passwordMatches(password)) {
    redirect("/system?error=1");
  }
  await signIn();
  redirect("/system");
}

/** End the session. */
export async function logoutAction(): Promise<void> {
  await signOut();
  redirect("/system");
}

/** Mark a lead handled (handled=1) or reopen it (handled=0). Auth-guarded. */
export async function setHandledAction(formData: FormData): Promise<void> {
  if (!(await isAuthenticated())) return;
  const id = String(formData.get("id") ?? "");
  const handled = String(formData.get("handled") ?? "") === "1";
  await setLeadHandled(id, handled);
  revalidatePath("/system");
}
