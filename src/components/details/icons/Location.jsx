import * as React from "react";

function Location(props) {
  return (
    <svg
      id="prefix__Layer_2"
      data-name="Layer 2"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__cls-1,.prefix__cls-2{fill:none;stroke-width:0}.prefix__cls-2{fill:#1a1a1a}"
          }
        </style>
      </defs>
      <g id="prefix__Layer_1-2" data-name="Layer 1">
        <path className="prefix__cls-1" d="M0 0h128v128H0z" />
        <path className="prefix__cls-1" d="M0 0h128v128H0z" />
        <path
          className="prefix__cls-2"
          d="M64 30.986c8.724 0 15.822 7.098 15.822 15.822S72.724 62.63 64 62.63s-15.822-7.097-15.822-15.822S55.276 30.986 64 30.986m0-5c-11.5 0-20.822 9.323-20.822 20.822S52.5 67.63 64 67.63s20.822-9.322 20.822-20.822S75.5 25.986 64 25.986z"
        />
        <path
          className="prefix__cls-2"
          d="M64 14c18.09 0 32.808 14.718 32.808 32.808 0 13.993-20.932 46.706-32.808 63.617-11.875-16.911-32.808-49.624-32.808-63.617C31.192 28.718 45.909 14 64 14m0-5C43.12 9 26.192 25.927 26.192 46.808S64 119 64 119s37.808-51.31 37.808-72.192S84.881 9 64 9z"
        />
      </g>
    </svg>
  );
}

const MemoLocation = React.memo(Location);
export default MemoLocation;
