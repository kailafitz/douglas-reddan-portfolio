import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-testYellow">
      <div className="container border-t-2 border-slate-950 pt-8 pb-3 text-center">
        <p className="text-xs">copyright {year}</p>
      </div>
    </div>
  );
};

export default Footer;
