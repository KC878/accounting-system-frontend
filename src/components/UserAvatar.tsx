import React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import type { AvatarProp } from "@src/interfaces/interfaces";

const UserAvatar: React.FC<AvatarProp> = ({ alt, src, badge, size }) => {
  return (
    <Badge
      key={src}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={badge} // number or any node
      color="primary"
    >
      <Avatar
        alt={alt}
        src={src ?? ""}
        sx={{
          width: size,
          height: size,
        }}
      />
    </Badge>
  );
};

export default UserAvatar;
