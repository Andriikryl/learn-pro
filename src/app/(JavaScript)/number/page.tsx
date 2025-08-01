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
import React from "react";

const exe1 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)`,
  },
];

export default function Number() {
  return (
    <main>
      <section className="flex flex-col gap-[20px]">
        <Heading level={1}>Number</Heading>
        <p>Number values represent floating-point numbers like 37 or -9.25.</p>
        <TypographyBlockquote>
          A floating-point number is a way to represent real numbers (numbers
          with fractional parts) in computer systems. It uses a format similar
          to scientific notation, with a mantissa (representing the significant
          digits) and an exponent (indicating the magnitude). This allows for
          representing a wide range of numbers, both very large and very small,
          with varying precision.
        </TypographyBlockquote>
        <p>
          Numbers are most commonly expressed in literal forms like 255 or
          3.14159. The lexical grammar contains a more detailed reference.
        </p>
        <CodeBlock data={exe1} defaultValue={exe1[0].language}>
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
        <p>
          A number literal like 37 in JavaScript code is a floating-point value,
          not an integer. There is no separate integer type in common everyday
          use. (JavaScript also has a BigInt type, but its not designed to
          replace Number for everyday uses. 37 is still a number, not a BigInt.)
          When used as a function, Number(value) converts a string or other
          value to the Number type. If the value cant be converted, it returns
          NaN.
        </p>
        <TypographyBlockquote>
          Important Concepts 🔹 Number Type Is: IEEE 754 double-precision float
          Means it stores: 1 bit for sign (positive/negative) 11 bits for
          exponent 52 bits for mantissa (the digits) ➡️ This is why JS can
          handle decimals, very large numbers, and negative values, but with
          limited precision (~15–17 decimal digits).
        </TypographyBlockquote>
        <Heading level={2}>Tasks:</Heading>
        <p>
          Task 1: Basic Conversion 🧩 Problem: Convert the following values to
          numbers using the Number() function and log the result:
        </p>
        <ul>
          <li>const a = {'"42"'};</li>
          <li>const b = {'"3.14"'};</li>
          <li>const c = true;</li>
          <li>const d = null;</li>
          <li>const e = undefined;</li>
          <li>const f = {'"hello"'};</li>
        </ul>
        <p>
          Task 2: Check if a value is a finite number 🧩 Problem: Write a
          function checkFinite(value) that: Returns Valid number if the value is
          finite Returns Not a valid number if it’s Infinity, -Infinity, or NaN
          Use Number.isFinite().
        </p>
        <p>
          Task 3: Use toFixed() and toExponential() 🧩 Problem: Let the user
          input a number (hardcoded for now), and display it: Rounded to 2
          decimal places In exponential notation
        </p>
        <p>
          Task 4: Create a Safe Integer Checker 🧩 Problem: Write a function
          isSafe(n) that checks whether a given number is a safe integer using
          Number.isSafeInteger(). Also log the Number.MAX_SAFE_INTEGER.
        </p>
        <p>
          Task 5: Binary / Hex Conversion 🧩 Problem: Write a function
          convertToBase(n) that: Converts a number to binary Converts the same
          number to hexadecimal Use .toString(base).
        </p>
      </section>
    </main>
  );
}
