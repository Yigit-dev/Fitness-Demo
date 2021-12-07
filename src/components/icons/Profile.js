import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgProfile = (props) => (
  <Svg
    width={24}
    height={24}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <G filter="url(#Profile_svg__a)">
      <Path
        d="M20.67 3.693A11.981 11.981 0 0 0 11.996 0C5.38-.008.008 5.35 0 11.967a11.983 11.983 0 0 0 3.693 8.667c.007.007.01.017.016.023.07.067.145.124.215.188.193.171.386.349.589.514.109.086.222.171.333.25.192.143.384.286.584.418.137.086.277.172.417.258.185.11.37.223.56.325.162.086.328.16.492.238.18.085.357.17.542.248.184.077.369.137.556.204.186.067.348.128.527.183.202.061.41.108.615.159.171.042.337.09.514.124.236.047.476.077.716.11.149.02.293.05.443.064.393.039.789.06 1.188.06.4 0 .795-.021 1.188-.06.15-.015.294-.044.442-.064.24-.033.48-.063.717-.11.171-.034.343-.086.514-.124.206-.05.413-.098.615-.159.18-.055.352-.121.527-.183.175-.062.374-.129.556-.204.183-.076.362-.164.542-.248.164-.078.33-.152.492-.238.19-.102.375-.214.56-.325.14-.086.28-.164.416-.258.2-.132.393-.275.585-.418.111-.086.224-.163.333-.25.203-.163.396-.336.589-.514.07-.064.145-.12.215-.188.007-.006.01-.016.016-.023 4.779-4.578 4.941-12.163.363-16.941Zm-1.926 16.044a10.003 10.003 0 0 1-.77.61 9.556 9.556 0 0 1-.829.537c-.15.086-.304.172-.459.257a11.7 11.7 0 0 1-.864.397c-.152.061-.313.118-.472.171-.144.05-.29.102-.436.145-.171.052-.35.094-.528.137-.138.032-.275.069-.416.096-.203.04-.41.067-.619.096-.118.015-.235.036-.355.048-.329.032-.662.051-.999.051-.336 0-.67-.019-.999-.05-.119-.013-.236-.034-.354-.05-.209-.028-.416-.055-.62-.095-.14-.027-.277-.064-.416-.096a11.77 11.77 0 0 1-.527-.137c-.147-.043-.292-.095-.436-.145a11.81 11.81 0 0 1-.472-.17c-.154-.062-.3-.129-.447-.196a7.79 7.79 0 0 1-.877-.459 10.444 10.444 0 0 1-1.599-1.147c-.037-.028-.072-.064-.108-.097a6.875 6.875 0 0 1 4.672-6.422 5.08 5.08 0 0 0 4.365 0 6.875 6.875 0 0 1 4.673 6.422c-.037.033-.07.065-.108.097ZM9.01 6.87a3.427 3.427 0 1 1 4.667 4.667c-.004 0-.01 0-.014.005a3.633 3.633 0 0 1-.717.304c-.044.013-.086.03-.133.04-.085.023-.175.038-.264.054-.166.029-.334.046-.503.05h-.097a3.465 3.465 0 0 1-.503-.05c-.086-.016-.177-.031-.264-.053-.046-.011-.086-.028-.133-.041a3.626 3.626 0 0 1-.716-.304l-.016-.005A3.428 3.428 0 0 1 9.01 6.87Zm11.363 11.07a8.612 8.612 0 0 0-4.588-5.907 5.142 5.142 0 1 0-7.575 0 8.612 8.612 0 0 0-4.587 5.907C.336 13.313 1.424 6.897 6.052 3.61a10.278 10.278 0 0 1 16.227 8.386c0 2.132-.667 4.21-1.908 5.944Z"
        fill="currentColor"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgProfile;