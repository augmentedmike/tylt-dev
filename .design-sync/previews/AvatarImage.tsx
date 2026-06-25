import { Avatar, AvatarImage, AvatarFallback } from "tylt-dev";

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
};

export function Default() {
  return (
    <div style={row}>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="Dana Reyes" />
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={row}>
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Marcus Hale" />
        <AvatarFallback>MH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/80?img=32" alt="Priya Anand" />
        <AvatarFallback>PA</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="Dana Reyes" />
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
    </div>
  );
}
