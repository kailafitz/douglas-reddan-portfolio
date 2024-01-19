import React from "react";
import { Button } from "../ui/button";

type Props = {
  title: string;
  description: string;
  vid: string;
};

const Project = (props: Props) => {
  return (
    <div className="w-11/12 flex flex-col lg:flex-row justify-center mb-20 last:mb-0 mx-auto">
      <div className="flex flex-col justify-center relative w-full lg:w-4/5">
        <div className="bg-testRed hidden lg:block absolute h-full w-12 top-0 right-0 -mr-1"></div>
        <div className="bg-white w-full lg:h-80 relative z-10">
          <video
            className="w-full h-full object-bottom lg:object-cover bg-slate-900"
            muted
            autoPlay
            loop
            playsInline
            controls
          >
            <source src={`/${props.vid}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="bg-testRed p-7 w-full lg:w-3/6">
        <h2 className="mb-4 text-3xl">{props.title}</h2>
        <p className="mb-4">{props.description}</p>
        <Button
          variant="outline"
          className="bg-transparent rounded-none border-4 border-current text-lg font-semibold btn-animation-primary"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Project;
