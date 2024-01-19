import React from "react";
import RedArrows from "./redArrows";

const OpeningAnimationContainer = () => {
  return (
    <div className="min-h-90vh bg-slate-900 relative">
      <div className="animating-container top relative bg-gray-900">
        <h3 className="text-6xl opening-text">Logo Animation</h3>

        <video
          className="w-full h-full object-cover opening-montage"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <RedArrows
          anchor="#work"
          className="arrows -mb-12"
          width="117"
          height="175.5"
        />
      </div>
    </div>
  );
};

export default OpeningAnimationContainer;
