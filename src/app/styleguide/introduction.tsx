import Image from "next/image";
import ColorBlock from "@element/ColorBlock";
import Devider from "@element/Devider";
import { Icons } from "@/components/elements/Icons";

export default function Introduction() {
  return (
    <>
      <section id="intro" className="mb-36 pb-20 min-h-[60vh] ">
        <h2 className="mb-10">Introduction</h2>

        <h4>About</h4>
        <p className="mb-5 text-gray-400">
          Welcome to the &quot;Untitled One&quot; Design System! UntitledOne is
          a comprehensive resource that empowers students and teachers to
          create, collaborate, and navigate their musical journey with ease and
          style. This guide is the designer and developers key to understanding
          the principles, components, and guidelines that shape the user
          experience across the platform.{" "}
        </p>

        <Devider />

        <h4>Goals</h4>
        <div className=" gap-y-2 my-4 grid items-start lg:grid-cols-3">
          <div>
            <Icons.personStanding className="h-24 w-24 my-8 text-primary" />
            <h3 className="text-xl font-medium mb-3">Consistency</h3>
            <p className="text-gray-400">
              Ensure a uniform visual and interactive experience across all
              platforms, maintaining reliable user interfaces at every
              touchpoint.
            </p>
          </div>
          <div>
            <Icons.timerReset className="h-24 w-24 my-8 text-danger" />
            <h3 className="text-xl font-medium mb-3">Efficiency</h3>
            <p className="text-gray-400">
              Streamline workflow for designers and developers by providing a
              centralized repository of standardized design elements and
              practices.
            </p>
          </div>
          <div>
            <Icons.scaling className="h-24 w-24 my-8 text-amber-400" />
            <h3 className="text-xl font-medium mb-3">Scalability</h3>
            <p className="text-gray-400">
              Facilitate effortless expansion and diversification, enabling the
              integration of new features while preserving brand and user
              experience quality.
            </p>
          </div>
        </div>

        <Devider />

        <h4>faq</h4>
        <p className="mb-5 font-small text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    </>
  );
}
