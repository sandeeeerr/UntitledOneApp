"use client"

import Section from '@module/Section/Section';
import ButtonsStyleGuide from '@module/StyleGuide/Components/Buttons';

import hljs from 'highlight.js';
import markdown from 'highlight.js/lib/languages/markdown';
import { useEffect } from 'react';


hljs.registerLanguage('markdown', markdown);

export default function ComponentsStyleGuide() {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);

  return (
    <>
      <Section title='Buttons' id='btn'>
        <ButtonsStyleGuide />
      </Section>

    </>
  )
}
