import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgOptions = (props) => (
  <Svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    className=""
    fill="currentColor"
    {...props}
  >
    <G data-name="Layer 2">
      <G data-name="options">
        <Path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64zM21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13zM15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5z" />
      </G>
    </G>
  </Svg>
);

export default SvgOptions;
