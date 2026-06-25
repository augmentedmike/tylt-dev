import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "tylt-dev";

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
};

export function Status() {
  return (
    <div style={row}>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="Dana Reyes" />
        <AvatarFallback>DR</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Marcus Hale" />
        <AvatarFallback>MH</AvatarFallback>
        <AvatarBadge style={{ backgroundColor: "#22c55e" }} />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>PA</AvatarFallback>
        <AvatarBadge style={{ backgroundColor: "#9ca3af" }} />
      </Avatar>
    </div>
  );
}
