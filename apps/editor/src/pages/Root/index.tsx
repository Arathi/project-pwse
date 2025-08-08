import { Outlet } from "react-router";
import backgroundSrc from "../../assets/page_bg_raw.jpg";
import "./index.less";

const Root = () => {
  return (
    <div className="root-layout">
      <img
        className="backgound-image"
        src={backgroundSrc}
        alt="background palworld"
      />
      <Outlet />
    </div>
  );
};

export default Root;
