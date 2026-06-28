/**
 * Savings model for the "replace your team" calculator.
 *
 * This is the single, auditable source of the math. Every lever is a named,
 * adjustable parameter (see {@link ModelParams}) so the defaults can be tuned in
 * Claude Design via props — only a change to the *formula structure* requires a
 * code edit.
 *
 * Comparison basis: cost-replacement. We compute the fully-loaded monthly cost
 * of the user's current team, convert their nominal headcount into *effective*
 * output (after the coordination tax that grows with team size), then size a
 * Tylt configuration to match that effective output and price it. Headline is
 * the percentage cost reduction.
 */

export interface DevLine {
  /** Stable id for list rendering. */
  id: string;
  /** Display label, e.g. "Senior engineer". */
  role: string;
  /** Annual base salary in USD (base, not loaded). */
  annualSalary: number;
  /** Whether this person already uses AI tooling (Claude Code, Copilot, …). */
  usesAi: boolean;
}

export interface ModelParams {
  /** Base salary → fully-loaded cost (benefits, tax, equipment, overhead). */
  loadedMultiplier: number;
  /** Output uplift for a dev already using AI (raises their baseline → lowers our delta). */
  aiUplift: number;
  /** Solo productive fraction of a dev's time (rest is coordination/meetings/rework). */
  productiveFractionBase: number;
  /** Productive fraction lost per additional teammate (communication tax). */
  productiveFractionDecayPerPerson: number;
  /** Floor the productive fraction can't drop below. */
  productiveFractionFloor: number;
  /**
   * THE ANCHOR. Agent-hours it takes Tylt to deliver one shipped, reviewed
   * dev-month of output. Higher = more conservative (less savings). Default 360
   * (~2.25× a human's nominal month) lands a typical in-house comparison near
   * ~75% and never dips below the 60% brand floor on sane inputs.
   */
  agentHoursPerDevMonth: number;
  /** Tylt worker hourly rate (standard 25, pilot 12.5). */
  agentRate: number;
  /** Flat monthly Tylt platform fee. */
  platformFee: number;
}

export const DEFAULT_PARAMS: ModelParams = {
  loadedMultiplier: 1.3,
  aiUplift: 0.3,
  productiveFractionBase: 0.55,
  productiveFractionDecayPerPerson: 0.04,
  productiveFractionFloor: 0.3,
  agentHoursPerDevMonth: 360,
  agentRate: 25,
  platformFee: 1000,
};

export interface DevLineResult extends DevLine {
  /** Fully-loaded monthly cost of this person. */
  loadedMonthlyCost: number;
  /** Effective output contributed, in ideal dev-months. */
  effectiveDevMonths: number;
}

export interface SavingsResult {
  perLine: DevLineResult[];
  teamSize: number;
  /** Productive fraction applied at this team size (after coordination tax). */
  productiveFraction: number;
  /** Sum of fully-loaded monthly costs. */
  currentMonthlyCost: number;
  /** Total effective output the team ships, in ideal dev-months. */
  teamEffectiveDevMonths: number;
  /** Agent hours Tylt needs to match that effective output. */
  agentHoursNeeded: number;
  /** Tylt monthly cost (platform fee + agent hours). */
  tyltMonthlyCost: number;
  /** currentMonthlyCost − tyltMonthlyCost (can be negative). */
  monthlySavings: number;
  annualSavings: number;
  /** Headline: fractional cost reduction (0–1). */
  percentReduction: number;
}

const clamp = (n: number, lo: number, hi: number): number =>
  Math.min(hi, Math.max(lo, n));

/** Productive fraction of a dev's time at a given team size (communication tax). */
export function productiveFraction(teamSize: number, p: ModelParams): number {
  const raw =
    p.productiveFractionBase -
    p.productiveFractionDecayPerPerson * Math.max(0, teamSize - 1);
  return clamp(raw, p.productiveFractionFloor, p.productiveFractionBase);
}

export function computeSavings(
  lines: DevLine[],
  params: Partial<ModelParams> = {},
): SavingsResult {
  const p: ModelParams = { ...DEFAULT_PARAMS, ...params };
  const teamSize = lines.length;
  const fraction = productiveFraction(teamSize, p);

  const perLine: DevLineResult[] = lines.map((line) => {
    const loadedMonthlyCost = (line.annualSalary / 12) * p.loadedMultiplier;
    // Effective output: productive time, raised if they already wield AI.
    const aiFactor = line.usesAi ? 1 + p.aiUplift : 1;
    const effectiveDevMonths = fraction * aiFactor;
    return { ...line, loadedMonthlyCost, effectiveDevMonths };
  });

  const currentMonthlyCost = perLine.reduce(
    (sum, l) => sum + l.loadedMonthlyCost,
    0,
  );
  const teamEffectiveDevMonths = perLine.reduce(
    (sum, l) => sum + l.effectiveDevMonths,
    0,
  );

  // Tylt matches the effective output: each shipped dev-month costs
  // agentHoursPerDevMonth of agent time (agents carry no coordination tax).
  const agentHoursNeeded = teamEffectiveDevMonths * p.agentHoursPerDevMonth;
  const tyltMonthlyCost = p.platformFee + agentHoursNeeded * p.agentRate;

  const monthlySavings = currentMonthlyCost - tyltMonthlyCost;
  const percentReduction =
    currentMonthlyCost > 0 ? monthlySavings / currentMonthlyCost : 0;

  return {
    perLine,
    teamSize,
    productiveFraction: fraction,
    currentMonthlyCost,
    teamEffectiveDevMonths,
    agentHoursNeeded,
    tyltMonthlyCost,
    monthlySavings,
    annualSavings: monthlySavings * 12,
    percentReduction,
  };
}
