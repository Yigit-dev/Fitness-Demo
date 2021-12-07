import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBell = (props) => (
  <Svg
    width={24}
    height={24}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M19 11V8A7 7 0 1 0 5 8v3c0 3.3-3 4.1-3 6 0 1.7 3.9 3 10 3s10-1.3 10-3c0-1.9-3-2.7-3-6Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 22c-1.011 0-1.961-.034-2.855-.1a2.992 2.992 0 0 0 5.71 0c-.894.066-1.844.1-2.855.1Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgBell;
