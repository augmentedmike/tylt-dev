import { SavingsCalculator } from "tylt-dev";

export function Default() {
  return (
    <div style={{ width: 980, padding: 8 }}>
      <SavingsCalculator
        ctaHref="#lead-consultation"
        defaultTeam={[
          { id: "1", role: "Senior engineer", annualSalary: 180000, usesAi: false },
          { id: "2", role: "Mid engineer", annualSalary: 140000, usesAi: false },
          { id: "3", role: "Product / PM lead", annualSalary: 160000, usesAi: false },
        ]}
      />
    </div>
  );
}
