"use client";

import hljs from "highlight.js";
import markdown from "highlight.js/lib/languages/markdown";
import { useEffect } from "react";
import ColorScheme from "@module/StyleGuide/Design/ColorScheme";
import Typography from "@module/StyleGuide/Design/Typography";
import Section from "@module/Section/Section";
import Animation from "@module/StyleGuide/Design/Animation";
import Border from "@module/StyleGuide/Design/Border";
import Layout from "@module/StyleGuide/Design/Layout";

hljs.registerLanguage("markdown", markdown);

export default function DesignStyleguide() {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <>
      <Section title="Color Scheme" id="color">
        <ColorScheme />
      </Section>

      <Section title="Typography" id="type">
        <Typography />
      </Section>

      <Section title="Animation" id="ani">
        <Animation />
      </Section>

      <Section title="Borders" id="bord">
        <Border />
      </Section>

      <Section title="Layout" id="lay">
        <Layout />
      </Section>
    </>
  );
}
