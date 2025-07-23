import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Header2() {
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;
  return (
    <div className="flex justify-around items-center bg-gray-400/20 py-[.6rem] header2__rsp">
      <div className="flex flex-col items-center justify-center">
        <IconButton>
          <ShoppingCartIcon fontSize="small" sx={{ color: "black" }} />
          <CartBadge badgeContent={2} color="primary" overlap="circular" />
        </IconButton>
        Shopping Cart
      </div>

      <div className="flex flex-col items-center justify-center">
        <PersonIcon />
        Account
      </div>

      <div className="flex flex-col items-center justify-center">
        <MenuIcon />
        Menue
      </div>

      <div className="flex flex-col items-center justify-center">
        <HomeIcon />
        Main page
      </div>
    </div>
  );
}
