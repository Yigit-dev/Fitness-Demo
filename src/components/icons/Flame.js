import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgFlame = (props) => (
  <Svg
    width={16}
    height={17}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <G clipPath="url(#flame_svg__a)" fill="currentColor">
      <Path d="M12.321 8.427c-.072 1.042-.666 1.773-1.352 2.083-.727.329-1.463.148-1.83-.451-.6-.98-.188-1.662.212-2.322.452-.748.966-1.596.473-3.245-.388-1.302-1.15-2.395-2.262-3.248a6.989 6.989 0 0 0-.943-.61c.373.908.858 2.596.351 4.462-.32 1.184-1.17 2.08-1.99 2.948-1.082 1.143-2.2 2.324-2.2 4.211 0 1.464.51 2.631 1.516 3.467.762.633 1.54.88 1.547.882h1.855-.039c-.007-.006-.714-.564-.726-1.204-.006-.299.151-.586.467-.853.473-.4.733-.831.795-1.318.038-.298 0-.612-.117-.952.785.33 1.598 1.048 1.873 1.94.247.802.018 1.627-.66 2.387h2.03c1.33-1.042 2.078-2.29 2.225-3.71.187-1.812-.641-3.518-1.225-4.467ZM7.698 16.604l1.566.03.026-.03H7.698Z" />
    </G>
    <Defs>
      <ClipPath id="flame_svg__a">
        <Path
          fill="currentColor"
          transform="translate(.576 .634)"
          d="M0 0h15.2v16H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgFlame;
