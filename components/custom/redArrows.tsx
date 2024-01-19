import Link from "next/link";
import React from "react";

type Props = {
  className: string;
  anchor: string;
  width: string;
  height: string;
  onClick?: () => void | undefined;
};

const RedArrows = (props: Props) => {
  return (
    <Link href={props.anchor} onClick={props.onClick}>
      <svg
        className={props.className}
        width={props.width}
        height={props.height}
        viewBox="0 0 123 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2.5L61.5 61L120 2.5"
          stroke="currentColor"
          strokeWidth="8"
        />
        <path
          d="M3 119L61.5 177.5L120 119"
          stroke="currentColor"
          strokeWidth="8"
        />
        <path
          d="M3 61L61.5 119.5L120 61"
          stroke="currentColor"
          strokeWidth="8"
        />
      </svg>
    </Link>
  );
};

export default RedArrows;
