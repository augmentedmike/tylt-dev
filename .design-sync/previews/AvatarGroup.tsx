import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "tylt-dev";

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
};

export function Stacked() {
  return (
    <div style={row}>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="Dana Reyes" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://i.pravatar.cc/80?img=12"
            alt="Marcus Hale"
          />
          <AvatarFallback>MH</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://i.pravatar.cc/80?img=32"
            alt="Priya Anand"
          />
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JT</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}
