import React from "react";

type Props = {};

const Brands = (props: Props) => {
  return (
    <div className="container flex flex-row flex-wrap justify-around mt-24">
      {[1, 2, 3, 4, 5].map((brand) => {
        return (
          <p
            key={brand}
            className="opacity-50 font-bold text-3xl lg:text-7xl font-bellota mb-8 px-4"
          >
            Brand
          </p>
        );
      })}
    </div>
  );
};

export default Brands;
