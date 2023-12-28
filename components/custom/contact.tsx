import React from "react";

const Contact = () => {
  return (
    <div className="bg-testYellow">
      <div
        id="contact"
        className="bg-testYellow pt-16 pb-16 min-h-screen flex flex-col overflow-hidden"
      >
        <div className="container flex flex-row flex-grow relative">
          <div className="absolute left-0 top-0 text-white text-5xl lg:text-8xl lg:ml-8 w-full lg:w-9/12 font-expletus">
            <p className="mb-2 text-left">“Lorem ipsum</p>
            <p className="mb-2 text-right">dolor sit amet,</p>
            <p className="mb-2 text-center">consectetur </p>
            <p>adipiscing elit.”</p>
          </div>
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-12 lg:col-span-8 flex flex-col justify-end order-2 lg:order-1">
              <div className="mb-9">
                <p className="text-sm">instagram</p>
                <p className="break-words text-2xl lg:text-4xl">
                  douglas_reddan
                </p>
              </div>
              <div>
                <p className="text-sm">email</p>
                <p className="break-words text-2xl lg:text-4xl">
                  douglasreddan@gmail.com
                </p>
              </div>
            </div>
            {/* <div className="lg:col-span-2"></div> */}
            <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 mb-6 mobile-height lg:h-auto">
              <div className="img w-full contact-img bg-center bg-cover h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
