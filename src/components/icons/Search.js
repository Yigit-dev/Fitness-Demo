import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgSearch = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <G filter="url(#Search_svg__a)">
      <Path
        d="m.293 22.293 6.825-6.825A9.454 9.454 0 0 1 5 9.5C5 4.262 9.262 0 14.5 0S24 4.262 24 9.5 19.738 19 14.5 19a9.454 9.454 0 0 1-5.968-2.118l-6.825 6.825a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414ZM14.5 17c4.136 0 7.5-3.364 7.5-7.5S18.636 2 14.5 2 7 5.364 7 9.5s3.364 7.5 7.5 7.5Z"
        fill="currentColor"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgSearch;
