import Heading from "@/components/Typography/Heading";
import React from "react";

export default function GrammarAndTypespage() {
  return (
    <main>
      <section className="flex flex-col gap-[20px]">
        <Heading level={1}>Grammar and types</Heading>
        <Heading level={6}>
          JavaScript is case-sensitive and uses the Unicode character set. For
          example, the word Früh (which means early in German) could be used as
          a variable name.
        </Heading>
      </section>
    </main>
  );
}
