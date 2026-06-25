import { Stats } from "tylt-dev";

export function Default() {
  return (
    <Stats
      stats={[
        { value: "60%", label: "Lower cost than a US agency" },
        { value: "3×", label: "Faster planning-to-launch" },
        { value: "<24h", label: "Turnaround on live patches" },
        { value: "100%", label: "Product-led, senior oversight" },
      ]}
    />
  );
}
