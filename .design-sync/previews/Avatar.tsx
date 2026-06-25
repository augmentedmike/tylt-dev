import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
} from "tylt-dev";

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
};

export function Single() {
  return (
    <div style={row}>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Tyler Quinn" />
        <AvatarFallback>TY</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Fallback() {
  return (
    <div style={row}>
      <Avatar>
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Group() {
  return (
    <div style={row}>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Tyler" />
          <AvatarFallback>TY</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/80?img=32" alt="Mara" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/80?img=45" alt="Devon" />
          <AvatarFallback>DV</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}

export function WithBadge() {
  return (
    <div style={row}>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="Priya" />
        <AvatarFallback>PR</AvatarFallback>
        <AvatarBadge />
      </Avatar>
    </div>
  );
}
