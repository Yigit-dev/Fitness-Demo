import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCircleBack = (props) => (
  <Svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 122.88"
    width={32}
    height={32}
    fill="currentColor"
    className=""
    {...props}
  >
    <Path
      fill="currentColor"
      d="M61.44 0A61.51 61.51 0 1 1 18 18 61.25 61.25 0 0 1 61.44 0Zm5 45.27a7.23 7.23 0 1 0-10.3-10.14L35 56.57a7.24 7.24 0 0 0 0 10.15l20.71 21a7.23 7.23 0 1 0 10.35-10.1l-8.73-8.87 24.86-.15a7.24 7.24 0 1 0-.13-14.47l-24.44.14 8.84-9Z"
      style={{
        fillRule: "evenodd",
      }}
    />
  </Svg>
);

export default SvgCircleBack;
