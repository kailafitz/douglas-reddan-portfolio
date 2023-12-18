import React from "react";

const Bio = () => {
  return (
    <div id="bio" className="my-24 lg:my-32">
      <div className="grid grid-rows-3 lg:grid-rows-none grid-cols-12 lg:gap-x-9 lg:h-96 justify-between">
        <div className="bg-cover scale-pic-1 h-48 lg:h-auto img col-span-4 bg-left"></div>
        <div className="col-span-8 lg:hidden"></div>
        <div className="bg-cover col-start-2 h-48 lg:h-auto img col-span-10 lg:col-span-6"></div>
        <div className="col-span-10 lg:hidden"></div>
        <div className="bg-cover scale-pic-3 h-48 lg:h-auto img col-span-2 bg-right"></div>
      </div>
      <div className="container pt-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 w-full">
          <div className="col-span-12 lg:col-span-6">
            <h4 className="text-2xl mb-5 font-expletus">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;