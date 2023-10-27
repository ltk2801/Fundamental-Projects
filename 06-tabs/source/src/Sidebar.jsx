import React from "react";

const Sidebar = ({ jobList, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobList.map((item, index) => (
        <button
          key={item.id}
          className={`job-btn ${currentItem === index ? "active-btn" : ""}`}
          onClick={() => setCurrentItem(index)}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
