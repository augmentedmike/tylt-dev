import { Avatar, AvatarFallback } from "tylt-dev";

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
};

export function Default() {
  return (
    <div style={row}>
      <Avatar>
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Initials() {
  return (
    <div style={row}>
      <Avatar>
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PA</AvatarFallback>
      </Avatar>
    </div>
  );
}
