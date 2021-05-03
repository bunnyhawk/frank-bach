import React from 'react'

const SunPath = () => (
  <div className="hidden md:inline">
    <svg id="svg" className="sunMoving" viewBox="0 0 1237 256"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    >
      <image
        id="sun"
        xlinkHref="/sun_symbol.png"
        width="155px"
        height="155px"
        y="-25"
        x="-50"
      >
        <animateMotion
          xlinkHref="#sun"
          dur="15s"
          repeatCount="1"
          rotate="auto"
          keyPoints="1;0"
          keyTimes="0;1"
          calcMode="linear"
        >
          <mpath xlinkHref="#animatePath" />
        </animateMotion>
      </image >

      <path
        d="M1 254.5C83.8333 168.5 346.4 -3.29987 610 1.50013C873.6 6.30013 1126.83 172.5 1236 254.5"
        fill="none"
        id="animatePath"
      />

    </svg >
  </div>
);


export default SunPath;