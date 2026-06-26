import { DevLine } from "tylt-dev";

const noop = () => {};

export function Default() {
  return (
    <div style={{ width: 560, padding: 8 }}>
      <DevLine
        line={{
          id: "1",
          role: "Senior engineer",
          annualSalary: 180000,
          usesAi: false,
        }}
        onChange={noop}
        onRemove={noop}
      />
    </div>
  );
}

export function UsesAi() {
  return (
    <div style={{ width: 560, padding: 8 }}>
      <DevLine
        line={{
          id: "2",
          role: "Mid engineer",
          annualSalary: 140000,
          usesAi: true,
        }}
        onChange={noop}
        onRemove={noop}
      />
    </div>
  );
}
