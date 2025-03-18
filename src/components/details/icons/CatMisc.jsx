import * as React from "react";

function CatMisc(props) {
  return (
    <svg
      data-name="Layer 2"
      width="2em"
      height="2em"
      viewBox="0 0 128 128"
      {...props}
    >
      <g data-name="Layer 1">
        <path
          d="M25 119.5a2.5 2.5 0 01-2.168-3.745l28.085-48.886H25a2.5 2.5 0 01-2.059-3.919L59.715 9.582A2.5 2.5 0 0161.773 8.5h35.974a2.5 2.5 0 012.058 3.919L79.874 41.345H103a2.501 2.501 0 011.71 4.324l-78 73.154a2.494 2.494 0 01-1.71.677zm4.759-57.631h25.477a2.5 2.5 0 012.168 3.745l-21.883 38.091 61.158-57.36H75.115a2.5 2.5 0 01-2.059-3.918L92.988 13.5H63.087L29.759 61.87z"
          fill="#1a1a1a"
        />
        <path fill="none" d="M0 0h128v128H0z" />
      </g>
    </svg>
  );
}

const MemoCatMisc = React.memo(CatMisc);
export default MemoCatMisc;
