import React from "react";
import SideNav from "./SideNav/SideNav";
import SideNavMobile from "./SideNav/SideNavMobile";
import { useWindowSize } from "react-use";

const Landing = () => {
  const windowSize = useWindowSize();
  return <div>{windowSize.width < 769 ? <SideNavMobile /> : <SideNav />}</div>;
};

export default Landing;
