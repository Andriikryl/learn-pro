"use client";

import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/code/CodeBlock";
import Heading from "@/components/Typography/Heading";
import TypographyBlockquote from "@/components/Typography/TypographyBlockquote";
import { Badge } from "@/components/ui/badge";
import React from "react";

const code = [
  {
    language: "js",
    filename: "exemple.js",
    code: `let x;
console.log(x); // logs "undefined"`,
  },
];

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
        <Heading level={2}>Declarations</Heading>
        <Heading level={3}>
          JavaScript has three kinds of variable declarations.
        </Heading>
        <ul className="my-6 [&>li]:mt-2 list-none">
          <li>
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              var
            </Badge>{" "}
            - Declares a variable, optionally initializing it to a value.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              let
            </Badge>{" "}
            - Declares a block-scoped, local variable, optionally initializing
            it to a value.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              const
            </Badge>{" "}
            - Declares a block-scoped, read-only named constant.
          </li>
        </ul>
        <Heading level={2}>Variables</Heading>
        <p>
          You use variables as symbolic names for values in your application.
          The names of variables, called identifiers, conform to certain rules.
        </p>
        <p>
          A JavaScript identifier usually starts with a letter, underscore (_),
          or dollar sign ($). Subsequent characters can also be digits (0 – 9).
          Because JavaScript is case sensitive, letters include the characters A
          through Z (uppercase) as well as a through z (lowercase).
        </p>
        <p>
          You can use most Unicode letters such as å and ü in identifiers. (For
          more details, see the lexical grammar reference.) You can also use
          Unicode escape sequences to represent characters in identifiers.
        </p>
        <Badge>
          Some examples of legal names are Number_hits, temp99, $credit, and
          _name.
        </Badge>
        <Heading level={2}>Declaring variables</Heading>
        <p>You can declare a variable in two ways:</p>
        <TypographyBlockquote>
          With the keyword <Badge>var</Badge>. For example,{" "}
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            var x = 42
          </Badge>
          . This syntax can be used to declare both local and global variables,
          depending on the execution context.
        </TypographyBlockquote>
        <TypographyBlockquote>
          With the keyword <Badge>const</Badge> or <Badge>let</Badge>. For
          example,{" "}
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            {" "}
            let y = 13
          </Badge>
          . This syntax can be used to declare a block-scope local variable.
          (See Variable scope below.)
        </TypographyBlockquote>
        <p>
          You can declare variables to unpack values using the destructuring
          syntax. For example, <code>const &#123; bar &#125; = foo</code>. This
          will create a variable named <code>bar</code> and assign to it the
          value corresponding to the key of the same name from our object{" "}
          <code>foo</code>.
        </p>
        <p>
          Variables should always be declared before they are used. JavaScript
          used to allow assigning to undeclared variables, which creates an
          undeclared global variable. This is an error in strict mode and should
          be avoided altogether.
        </p>
        <Heading level={2}>Declaration and initialization</Heading>
        <TypographyBlockquote>
          In a statement like let x = 42, the let x part is called a
          declaration, and the = 42 part is called an initializer. The
          declaration allows the variable to be accessed later in code without
          throwing a ReferenceError, while the initializer assigns a value to
          the variable. In var and let declarations, the initializer is
          optional. If a variable is declared without an initializer, it is
          assigned the value undefined.
        </TypographyBlockquote>
        <CodeBlock data={code} defaultValue={code[0].language}>
          <CodeBlockHeader>
            <CodeBlockFiles>
              {(item) => (
                <CodeBlockFilename key={item.language} value={item.language}>
                  {item.filename}
                </CodeBlockFilename>
              )}
            </CodeBlockFiles>
            <CodeBlockSelect>
              <CodeBlockSelectTrigger>
                <CodeBlockSelectValue />
              </CodeBlockSelectTrigger>
              <CodeBlockSelectContent>
                {(item) => (
                  <CodeBlockSelectItem
                    key={item.language}
                    value={item.language}
                  >
                    {item.language}
                  </CodeBlockSelectItem>
                )}
              </CodeBlockSelectContent>
            </CodeBlockSelect>
            <CodeBlockCopyButton
              onCopy={() => console.log("Copied code to clipboard")}
              onError={() => console.error("Failed to copy code to clipboard")}
            />
          </CodeBlockHeader>
          <CodeBlockBody>
            {(item) => (
              <CodeBlockItem key={item.language} value={item.language}>
                <CodeBlockContent language={item.language as BundledLanguage}>
                  {item.code}
                </CodeBlockContent>
              </CodeBlockItem>
            )}
          </CodeBlockBody>
        </CodeBlock>
      </section>
    </main>
  );
}
