import React from "react";
import { Button } from "../ui/button";

type Props = {
  title: string;
  description: string;
};

const Project = (props: Props) => {
  return (
    <div className="w-11/12 flex flex-row justify-center mb-20 mx-auto">
      <div className="flex flex-col justify-center relative w-4/5">
        <div className="bg-testRed absolute h-full w-12 top-0 right-0 -mr-1"></div>
        <div className="bg-white w-full h-80 relative z-10"></div>
      </div>
      <div className="bg-testRed p-7 w-3/6">
        <h2 className="mb-4 text-3xl">{props.title}</h2>
        <p className="mb-4">{props.description}</p>
        <Button
          variant="outline"
          className="bg-transparent rounded-none border-2 border-current text-lg font-semibold"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Project;
