import { PressHold } from "tylt-dev";
import { ArrowRight } from "lucide-react";

const noop = () => {};

export function Default() {
  return (
    <div style={{ width: 320, padding: 8 }}>
      <PressHold holdMs={6000} onComplete={noop}>
        Press &amp; hold to submit
        <ArrowRight className="size-4" />
      </PressHold>
    </div>
  );
}
