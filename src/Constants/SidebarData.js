import { v4 as uuidv4 } from "uuid";

export const SidebarData = [
  {
    id: uuidv4(),
    name: "Faceswap",
    href: "/",
  },
  {
    id: uuidv4(),
    name: "Multi-Faceswap",
    href: "/multi-faceswap",
  },
  {
    id: uuidv4(),
    name: "Blogs",
    href: "/blog",
  },
  {
    id: uuidv4(),
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    id: uuidv4(),
    name: "Terms of Service",
    href: "/terms",
  },
  {
    id: uuidv4(),
    name: "About",
    href: "/about",
  },
];

export const NavBar = [
  {
    id: uuidv4(),
    code: "\ue5d2",
    text: "Menu",
    // href: "",
    onClick: "toggleDrawer",
  },
  {
    id: uuidv4(),
    code: "\ue8b6",
    text: "Search",
    // href: "",
  },
  {
    id: uuidv4(),
    code: "\ue625",
    text: "Chat",
    // href: "",
  },
  {
    id: uuidv4(),
    code: "\ue8b8",
    text: "Setting",
    // href: "",
  },
  {
    id: uuidv4(),
    code: "\uea51",
    text: "Sports",
    href: "/",
  },
];
