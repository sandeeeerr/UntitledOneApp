"use client";

import AvatarsStyleguide from "@/components/modules/StyleGuide/Components/Avatars";
import BreadcrumbsStyleguide from "@/components/modules/StyleGuide/Components/Breadcrumbs";
import FormsStyleguide from "@/components/modules/StyleGuide/Components/Forms";
import Section from "@/components/modules/section/Section";
import ButtonsStyleGuide from "@module/StyleGuide/Components/Buttons";

import hljs from "highlight.js";
import markdown from "highlight.js/lib/languages/markdown";
import { useEffect } from "react";

hljs.registerLanguage("markdown", markdown);

export default function ComponentsStyleGuide() {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <>
      <Section title="Buttons" id="btn">
        <ButtonsStyleGuide />
      </Section>

      <Section title="Form Elements" id="form">
        <FormsStyleguide />
      </Section>

      <Section title="Breadcrumbs" id="bread">
        <BreadcrumbsStyleguide />
      </Section>

      <Section title="Avatars" id="avatar">
        <AvatarsStyleguide />
      </Section>
    </>
  );
}
