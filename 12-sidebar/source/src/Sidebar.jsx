import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import { useGlobalContext } from "./context";
import { social, links } from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-links">
        {social.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
