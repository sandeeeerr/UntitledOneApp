import React from "react";

type Props = {
  title: string;
  id: string;
  children: React.ReactNode;
};

const Section = ({ title, id, children }: Props) => (
  <>
    <section id={id} className="pt-28 pb-12 border-b-2 min-h-[50vh]">
      <h2 className="mb-10">{title}</h2>
      {children}
    </section>
  </>
);

export default Section;
