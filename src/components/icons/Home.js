import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHome = (props) => (
  <Svg
    width={27}
    height={26}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="m25.64 11.309-.002-.002L15.032.701A2.377 2.377 0 0 0 13.34 0c-.64 0-1.24.249-1.693.701l-10.6 10.6-.011.011a2.396 2.396 0 0 0 .005 3.38 2.38 2.38 0 0 0 1.662.702h.422v7.805A2.804 2.804 0 0 0 5.927 26h4.15c.42 0 .761-.341.761-.762V19.12a1.28 1.28 0 0 1 1.278-1.278h2.447a1.28 1.28 0 0 1 1.278 1.278v6.12c0 .42.342.761.762.761h4.15a2.804 2.804 0 0 0 2.801-2.801v-7.805h.392c.64 0 1.24-.25 1.693-.701.932-.933.933-2.45 0-3.384Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgHome;
