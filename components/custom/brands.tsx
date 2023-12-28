import React from "react";

const Brands = () => {
  return (
    <div className="container flex flex-row flex-wrap justify-around mt-32">
      {[1, 2, 3, 4, 5].map((brand) => {
        return (
          <p
            key={brand}
            className="opacity-50 font-bold text-3xl lg:text-7xl font-expletus my-4 px-4"
          >
            Brand
          </p>
        );
      })}
    </div>
  );
};

export default Brands;
