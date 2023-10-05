import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedLng } from "../../actions/action";

function Headers() {
  const dispatch = useDispatch();
  const headersMenus = [
    {
      route: "/",
      name: "Home",
      children: [],
    },
    {
      route: "/live-session",
      name: "Live Sessions",
      children: [],
    },
    {
      route: "/video-series",
      name: "Video Series",
      children: [],
    },
    {
      route: "/",
      name: "AP Books",
      children: [],
    },
  ];

  const handleLngSelection = (event) => {
    event.preventDefault();
    dispatch(setSelectedLng(event.target.value));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "yellow",
          padding: 10,
          color: "black",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {headersMenus &&
            headersMenus.length &&
            headersMenus.map((item) => (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 15,
                }}
              >
                {item.name}
              </p>
            ))}
        </div>
        <div>
          <select onChange={handleLngSelection} defaultValue={"english"}>
            <option value={"english"}>English</option>
            <option value={"hindi"}>Hindi</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Headers;
