"use client";
type Props = {
  name: string;
  hex: string;
  textColor?: string;
};

const MenuItem = ({ name, hex, textColor }: Props) => (
  <div
    className={`bg-${name} ${
      textColor ? ` text-${textColor} ` : "text-black"
    } border-2  flex h-14 w-full items-center justify-center rounded-lg`}
  >
    <p
      className={`bg-${name} ${
        textColor ? ` text-${textColor} ` : "text-black"
      } text-center`}
    >
      {name} ({hex})
    </p>
  </div>
);

export default MenuItem;
