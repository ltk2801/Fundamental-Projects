import React from "react";

const Header = ({ text, categories, setKeyFilter }) => {
  const filterHandler = (e) => {
    setKeyFilter(e);
  };

  return (
    <div className="flex">
      <h3>{text || "Default Title"}</h3>
      <div className="title-underline"></div>
      <div className="btn-container">
        {categories.map((cate, index) => (
          <button
            type="button"
            className="btn"
            key={index}
            onClick={() => filterHandler(cate)}
          >
            {cate}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
