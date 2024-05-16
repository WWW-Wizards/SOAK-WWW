import * as React from "react";

function CatClass(props) {
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
        <style>{".prefix__cls-2{stroke-width:0;fill:#1a1a1a}"}</style>
      </defs>
      <g id="prefix__Layer_1-2" data-name="Layer 1">
        <path
          className="prefix__cls-2"
          d="M64 80.962a2.5 2.5 0 01-1.235-.327l-55-31.23a2.5 2.5 0 010-4.348l55-31.23a2.5 2.5 0 012.469 0l55 31.23a2.5 2.5 0 010 4.348l-55 31.23a2.5 2.5 0 01-1.234.327zm-49.937-33.73L64 75.586l49.936-28.356L64 18.875 14.063 47.231z"
        />
        <path
          className="prefix__cls-2"
          d="M64 95.303c-12.478 0-24.957-1.936-37.347-5.807a2.5 2.5 0 01-1.755-2.386V57.777a2.5 2.5 0 115 0v27.48c22.637 6.723 45.567 6.723 68.204 0v-27.48a2.5 2.5 0 115 0V87.11a2.5 2.5 0 01-1.755 2.386C88.957 93.367 76.478 95.303 64 95.303zM113.5 91.048a2.5 2.5 0 01-2.5-2.5V50.354a2.5 2.5 0 115 0v38.194a2.5 2.5 0 01-2.5 2.5z"
        />
        <path
          className="prefix__cls-2"
          d="M113.5 114.5c-3.902 0-7.077-3.175-7.077-7.076v-14.3c0-3.901 3.175-7.076 7.077-7.076s7.076 3.175 7.076 7.076v14.3c0 3.901-3.175 7.076-7.076 7.076zm0-23.452a2.079 2.079 0 00-2.077 2.076v14.3c0 1.144.932 2.076 2.077 2.076s2.076-.932 2.076-2.076v-14.3a2.079 2.079 0 00-2.076-2.076z"
        />
        <path strokeWidth={0} fill="none" d="M0 0h128v128H0z" />
      </g>
    </svg>
  );
}

const MemoCatClass = React.memo(CatClass);
export default MemoCatClass;
