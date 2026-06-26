import { ResultPanel } from "tylt-dev";

const result = {
  perLine: [],
  teamSize: 3,
  productiveFraction: 0.47,
  currentMonthlyCost: 67167,
  teamEffectiveDevMonths: 1.72,
  agentHoursNeeded: 619,
  tyltMonthlyCost: 16480,
  monthlySavings: 50687,
  annualSavings: 608244,
  percentReduction: 0.755,
};

export function Savings() {
  return (
    <div style={{ width: 420, padding: 8 }}>
      <ResultPanel result={result} ctaHref="#lead-consultation" />
    </div>
  );
}
