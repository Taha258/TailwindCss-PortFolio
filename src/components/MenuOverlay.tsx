import React from "react";
import NavLink from "./NavLink";

// Define the type for each link
interface LinkItem {
  path: string; // The path should be a string
  title: string; // The title should be a string
}

// Define the props type for MenuOverlay
interface MenuOverlayProps {
  links: LinkItem[]; // links is an array of LinkItem objects
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;