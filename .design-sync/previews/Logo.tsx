import { Logo } from "tylt-dev";

export function Default() {
  return <Logo />;
}

export function MarkOnly() {
  return <Logo showWordmark={false} />;
}
