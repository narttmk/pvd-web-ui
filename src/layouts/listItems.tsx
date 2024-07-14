import { Category, FeaturedPlayList } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as React from "react";

export interface IMenuItem {
  text: string;
  link: string;
  icon: React.ReactNode;
}
export const mainListItems: IMenuItem[] = [
  {
    text: "Dashboard",
    link: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    text: "Categories",
    link: "/admin/categories",
    icon: <Category />,
  },
  {
    text: "Products",
    link: "/admin/products",
    icon: <FeaturedPlayList />,
  },
  {
    text: "Orders",
    link: "/admin/orders",
    icon: <ShoppingCartIcon />,
  },
  {
    text: "Customers",
    link: "/admin/customers",
    icon: <PeopleIcon />,
  },
  {
    text: "Medias",
    link: "/admin/medias",
    icon: <ShoppingCartIcon />,
  },
];
