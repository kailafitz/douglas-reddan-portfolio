import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    // <div className="bg-yellow-400 pt-16 pb-16 min-h-screen flex">
    //   <div className="md:container flex flex-row flex-grow relative">
    //     <div className="absolute left-0 top-0 text-white text-8xl ml-8 w-3/5">
    //       <p className="mb-2 text-left">“Lorem ipsum</p>
    //       <p className="mb-2 text-right">dolor sit amet,</p>
    //       <p className="mb-2 text-center">consectetur </p>
    //       <p>adipiscing elit.”</p>
    //     </div>
    //     <div className="flex flex-col justify-end">
    //       <div className="mb-9">
    //         <p className="text-xs">instagram</p>
    //         <p className="text-4xl">douglas_reddan</p>
    //       </div>
    //       <div>
    //         <p className="text-xs">email</p>
    //         <p className="text-4xl">douglasredda@gmail.com</p>
    //       </div>
    //     </div>
    //     <div className="img w-2/5 contact-img bg-center bg-cover ml-24 h-full"></div>
    //   </div>
    // </div>
    <div id="contact" className="bg-testYellow pt-16 pb-16 min-h-screen flex">
      <div className="container flex flex-row flex-grow relative">
        <div className="absolute left-0 top-0 text-white text-8xl ml-8 w-3/5 font-expletus">
          <p className="mb-2 text-left">“Lorem ipsum</p>
          <p className="mb-2 text-right">dolor sit amet,</p>
          <p className="mb-2 text-center">consectetur </p>
          <p>adipiscing elit.”</p>
        </div>
        <div className="grid grid-cols-12 gap-x-36 w-full">
          <div className="col-span-4 flex flex-col justify-end">
            <div className="mb-9">
              <p className="text-sm">instagram</p>
              <p className="text-4xl">douglas_reddan</p>
            </div>
            <div>
              <p className="text-sm">email</p>
              <p className="text-4xl">douglasreddan@gmail.com</p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="img w-full contact-img bg-center bg-cover h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
