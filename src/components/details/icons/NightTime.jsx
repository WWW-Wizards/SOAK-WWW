import * as React from "react";

function NightTime(props) {
  return (
    <svg
      data-name="Layer 2"
      width="2.2em"
      height="2.2em"
      viewBox="0 0 128 128"
      {...props}
    >
      <g data-name="Layer 1">
        <path
          d="M62.463 119.5c-24.216 0-45.846-15.39-53.824-38.296a2.501 2.501 0 014.04-2.674c8.624 7.814 19.736 12.117 31.29 12.117 25.738 0 46.677-20.94 46.677-46.677 0-11.555-4.302-22.667-12.116-31.292a2.499 2.499 0 012.675-4.04c22.905 7.979 38.295 29.61 38.295 53.825 0 31.45-25.587 57.037-57.037 57.037zm-45.2-31.337c9.125 16.058 26.3 26.337 45.2 26.337 28.693 0 52.037-23.344 52.037-52.037 0-18.9-10.28-36.075-26.337-45.2a51.389 51.389 0 017.483 26.707c0 28.495-23.181 51.677-51.676 51.677-9.48 0-18.69-2.614-26.707-7.484z"
          fill="#1a1a1a"
        />
        <path fill="none" d="M0 0h128v128H0z" />
      </g>
    </svg>
  );
}

const MemoNightTime = React.memo(NightTime);
export default MemoNightTime;
