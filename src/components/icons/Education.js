import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgEducation = (props) => (
  <Svg
    id="Education_svg__Icons"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    fill="currentColor"
    className=""
    {...props}
  >
    <Path d="M31 26c-.6 0-1-.4-1-1V12c0-.6.4-1 1-1s1 .4 1 1v13c0 .6-.4 1-1 1z" />
    <Path d="M16 21c-.2 0-.3 0-.5-.1l-15-8c-.3-.2-.5-.5-.5-.9s.2-.7.5-.9l15-8c.3-.2.6-.2.9 0l15 8c.3.2.5.5.5.9s-.2.7-.5.9l-15 8c-.1.1-.2.1-.4.1z" />
    <Path d="M17.4 22.6c-.4.3-.9.4-1.4.4s-1-.1-1.4-.4L6 18.1V22c0 3.1 4.9 6 10 6s10-2.9 10-6v-3.9l-8.6 4.5z" />
  </Svg>
);

export default SvgEducation;
