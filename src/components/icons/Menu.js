import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgMenu = (props) => (
  <Svg
    width={24}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <G filter="url(#Menu_svg__a)" fill="currentColor">
      <Path d="M0 7a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 1a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgMenu;
