import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./Context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={() => closeSidebar()}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => (
            <article key={item.pageId}>
              <h4>{item.page}</h4>
              <div className="sidebar-sublinks">
                {item.links.map((link) => (
                  <a href={link.url} key={link.id}>
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
