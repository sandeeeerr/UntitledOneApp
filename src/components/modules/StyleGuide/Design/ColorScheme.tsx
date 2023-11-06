import React from "react";
import ColorBlock from "@element/ColorBlock";
import Devider from "@element/Devider";

function ColorScheme() {
  return (
    <>
      <h4>Brand colors</h4>
      <p className="mb-5 text-gray-400 font-small">
        Utilizing a vibrant, trustworthy blue as our primary and a lively,
        positive green as our secondary, our brand colors not only enhance user
        engagement and trust but also provide a coherent and visually appealing
        interface across all platforms and materials, seamlessly blending
        reliability with vibrancy.
      </p>
      <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-1">
        <ColorBlock name="primary" hex="#31A0F0" textColor="black" />
        <ColorBlock name="secondary" hex="#31F080" textColor="black" />
      </div>
      <Devider />

      <h4>Greyscales</h4>
      <p className="mb-5 text-gray-400 font-small">
        Our grayscale palette, ranging from deep black to light grey,
        encompasses five nuanced shades meticulously chosen to provide depth,
        contrast, and readability across all design elements
      </p>
      <div className="grid gap-4 mb-6 lg:grid-cols-4 lg:grid-rows-1">
        <ColorBlock name="black" hex="#111111" textColor="white" />
        <ColorBlock name="background" hex="#212121" textColor="white" />
        <ColorBlock
          name="backgroundSecondary"
          hex="#2F2F2F"
          textColor="white"
        />
        <ColorBlock name="darkGrey" hex="#474747" textColor="white" />
        <ColorBlock name="lightGrey" hex="#AFAFAF" textColor="black" />
      </div>
      <Devider />

      <h4>UI Colors</h4>
      <p className="mb-5 text-gray-400 font-small">
        Utilizing our brand's blue and green for general UI, and incorporating a
        notable red for danger and a vivid yellow for warnings, we ensure our
        interface is not only visually cohesive but also effectively
        communicative regarding alerts and user guidance.
      </p>
      <div className="grid gap-1 mb-4 lg:grid-cols-5 lg:grid-rows-1">
        <ColorBlock name="primary-200" hex="#31A0F0" />
        <ColorBlock name="primary-300" hex="#31A0F0" />
        <ColorBlock name="primary" hex="#31F080" />
        <ColorBlock name="primary-700" hex="#31F080" textColor="white" />
        <ColorBlock name="primary-800" hex="#31F080" textColor="white" />
      </div>
      <div className="grid gap-1 mb-4 lg:grid-cols-5 lg:grid-rows-1">
        <ColorBlock name="secondary-200" hex="#31A0F0" />
        <ColorBlock name="secondary-300" hex="#31A0F0" />
        <ColorBlock name="secondary" hex="#31F080" />
        <ColorBlock name="secondary-700" hex="#31F080" textColor="white" />
        <ColorBlock name="secondary-800" hex="#31F080" textColor="white" />
      </div>
      <div className="grid gap-1 mb-4 lg:grid-cols-5 lg:grid-rows-1">
        <ColorBlock name="danger-200" hex="#31A0F0" />
        <ColorBlock name="danger-300" hex="#31A0F0" />
        <ColorBlock name="danger" hex="#31F080" />
        <ColorBlock name="danger-700" hex="#31F080" textColor="white" />
        <ColorBlock name="danger-800" hex="#31F080" textColor="white" />
      </div>
      <div className="grid gap-1 mb-4 lg:grid-cols-5 lg:grid-rows-1">
        <ColorBlock name="amber-200" hex="#31A0F0" />
        <ColorBlock name="amber-300" hex="#31A0F0" />
        <ColorBlock name="amber-500" hex="#31F080" />
        <ColorBlock name="amber-700" hex="#31F080" textColor="white" />
        <ColorBlock name="amber-800" hex="#31F080" textColor="white" />
      </div>
    </>
  );
}

export default ColorScheme;
