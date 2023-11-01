import React, { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (e) => {
    // setPageId(null);
    const submenu = submenuContainer.current;
    // Lấy ra tọa độ, vị trí của subMenu
    const { left, right, bottom } = submenu.getBoundingClientRect();

    // Lấy ra con trỏ giá trị X của client
    const { clientX, clientY } = e;

    // kiểm tra điều kiện, nếu vị trí con trỏ của client nhỏ hơn vị trí cạnh bên trái, lớn hơn vị trí cạnh bên phải, lớn hơn vị trí cạnh dưới của element thì set null
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {" "}
              {icon} {label}{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
