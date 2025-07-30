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
const scope = [
  {
    language: "js",
    filename: "exemple.js",
    code: `if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined`,
  },
];
const scopeVar = [
  {
    language: "js",
    filename: "exemple.js",
    code: `if (true) {
  var x = 5;
}
console.log(x); // x is 5`,
  },
];

const constCode = [
  {
    language: "js",
    filename: "exemple.js",
    code: `// THIS WILL CAUSE AN ERROR
function f() {}
const f = 5;

// THIS WILL CAUSE AN ERROR TOO
function f() {
  const g = 5;
  var g;
}`,
  },
];

const conversion = [
  {
    filename: "conversion.js",
    language: "js" as BundledLanguage,
    code: `let answer = 42;
answer = "Thanks for all the fish!";`,
  },
];

const plusOperator = [
  {
    filename: "plus-operator.js",
    language: "js" as BundledLanguage,
    code: `x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"`,
  },
];

const mathOperators = [
  {
    filename: "math.js",
    language: "js" as BundledLanguage,
    code: `"37" - 7; // 30
"37" * 7; // 259`,
  },
];

const arrayLiteral = [
  {
    filename: "arrays.js",
    language: "js" as BundledLanguage,
    code: `const coffees = ["French Roast", "Colombian", "Kona"];`,
  },
];

const objectLiteral = [
  {
    filename: "car.js",
    language: "js" as BundledLanguage,
    code: `const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : \`Sorry, we don't sell \${name}.\`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota`,
  },
];

const strings = [
  {
    filename: "strings.js",
    language: "js" as BundledLanguage,
    code: `'foo'
"bar"
'1234'
'one line \\n another line'
"Joyo's cat"`,
  },
];

const templateLiterals = [
  {
    filename: "template.js",
    language: "js" as BundledLanguage,
    code: `const name = "Lev", time = "today";
\`Hello \${name}, how are you \${time}?\`;`,
  },
];

const task2 = [
  {
    filename: "strings.js",
    language: "js" as BundledLanguage,
    code: `var a = 1;
let b = 2;
const c = 3;

// Попробуй изменить значения:
a = 10;
b = 20;
c = 30; // Что произойдет?`,
  },
];
const task3 = [
  {
    filename: "strings.js",
    language: "js" as BundledLanguage,
    code: `console.log(x); // Что выведется?
var x = 5;`,
  },
];
const task4 = [
  {
    filename: "strings.js",
    language: "js" as BundledLanguage,
    code: `console.log(y);
let y = 10;`,
  },
];

const task5 = [
  {
    filename: "strings.js",
    language: "js" as BundledLanguage,
    code: `let x = "5" + 2;
let y = "5" - 2;
let z = "5" * "2";`,
  },
];

const task6 = [
  {
    filename: "strings.js",
    language: "js" as BundledLanguage,
    code: `const obj = { key: "value" };
const arr = [1, 2, 3];`,
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
        <p>
          Some examples of legal names are Number_hits, temp99, $credit, and
          _name.
        </p>
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
        <p>
          const declarations always need an initializer, because they forbid any
          kind of assignment after declaration, and implicitly initializing it
          with undefined is likely a programmer mistake.
        </p>
        <Heading level={2}>Variable scope</Heading>
        <p>A variable may belong to one of the following scopes:</p>
        <ul className="my-6 [&>li]:mt-2 list-none">
          <li>
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Global scope:
            </Badge>{" "}
            - The default scope for all code running in script mode.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Module scope:
            </Badge>{" "}
            - The scope for code running in module mode. it to a value.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Function scope
            </Badge>{" "}
            - The scope created with a function.
          </li>
        </ul>
        <p>
          In addition, variables declared with let or const can belong to an
          additional scope:
        </p>
        <p>
          Block scope: The scope created with a pair of curly braces (a block).
        </p>
        <p>
          When you declare a variable outside of any function, it is called a
          global variable, because it is available to any other code in the
          current document. When you declare a variable within a function, it is
          called a local variable, because it is available only within that
          function.
        </p>
        <p>
          let and const declarations can also be scoped to the block statement
          that they are declared in.
        </p>
        <CodeBlock data={scope} defaultValue={code[0].language}>
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
          However, variables created with var are not block-scoped, but only
          local to the function (or global scope) that the block resides within.
          For example, the following code will log 5, because the scope of x is
          the global context (or the function context if the code is part of a
          function). The scope of x is not limited to the immediate if statement
          block.
        </p>
        <CodeBlock data={scopeVar} defaultValue={code[0].language}>
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
        <Heading level={2}>Constants</Heading>
        <p>
          You can create a read-only, named constant with the const keyword. The
          syntax of a constant identifier is the same as any variable
          identifier: it must start with a letter, underscore, or dollar sign
          ($), and can contain alphabetic, numeric, or underscore characters.
        </p>
        <p>
          A constant cannot change value through assignment or be re-declared
          while the script is running. It must be initialized to a value. The
          scope rules for constants are the same as those for let block-scope
          variables. You cannot declare a constant with the same name as a
          function or variable in the same scope. For example:
        </p>
        <CodeBlock data={constCode} defaultValue={code[0].language}>
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
        <Heading level={2}>Data types</Heading>
        <p>The latest ECMAScript standard defines eight data types:</p>
        <p>Seven data types that are primitives:</p>
        <ul className="my-6 [&>li]:mt-2 list-none">
          <li>
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Boolean.:
            </Badge>{" "}
            true and false.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              null:
            </Badge>{" "}
            A special keyword denoting a null value. (Because JavaScript is
            case-sensitive, null is not the same as Null, NULL, or any other
            variant.)
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              undefined:
            </Badge>{" "}
            A top-level property whose value is not defined.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Number.
            </Badge>{" "}
            An integer or floating point number. For example: 42 or 3.14159.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              BigInt.
            </Badge>{" "}
            An integer with arbitrary precision. For example: 9007199254740992n.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              String.
            </Badge>{" "}
            A sequence of characters that represent a text value. For example:
            Howdy.
          </li>
          <li>
            {" "}
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Symbol.
            </Badge>{" "}
            A data type whose instances are unique and immutable.
          </li>
        </ul>
        <p>and Object</p>
        <Heading level={2}>Data type conversion</Heading>
        <p>
          JavaScript is a dynamically typed language. This means you dont have
          to specify the data type of a variable when you declare it. It also
          means that data types are automatically converted as-needed during
          script execution.
        </p>
        <p>
          So, for example, you could define a variable as follows / And later,
          you could assign the same variable a string value, for example:
        </p>
        <CodeBlock data={conversion} defaultValue={code[0].language}>
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
        <Heading level={2}>Numbers and the + operator</Heading>
        <p>
          In expressions involving numeric and string values with the +
          operator, JavaScript converts numeric values to strings. For example,
          consider the following statements:
        </p>
        <CodeBlock data={plusOperator} defaultValue={code[0].language}>
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
          With all other operators, JavaScript does not convert numeric values
          to strings. For example:
        </p>
        <CodeBlock data={mathOperators} defaultValue={code[0].language}>
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
        <Heading level={2}>Literals</Heading>
        <ul>
          <li>Array literals</li>
          <li>Boolean literals</li>
          <li>Numeric literals</li>
          <li>Object literals</li>
          <li>RegExp literals</li>
          <li>String literals</li>
        </ul>
        <Heading level={3}>Array literals</Heading>
        <p>
          An array literal is a list of zero or more expressions, each of which
          represents an array element, enclosed in square brackets ([]). When
          you create an array using an array literal, it is initialized with the
          specified values as its elements, and its length is set to the number
          of arguments specified.
        </p>
        <CodeBlock data={arrayLiteral} defaultValue={code[0].language}>
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
          An array literal creates a new array object every time the literal is
          evaluated. For example, an array defined with a literal in the global
          scope is created once when the script loads. However, if the array
          literal is inside a function, a new array is instantiated every time
          that function is called.
        </p>
        <Heading level={3}>Numeric literals</Heading>
        <p>
          JavaScript numeric literals include integer literals in different
          bases as well as floating-point literals in base-10.
        </p>
        <p>
          Note that the language specification requires numeric literals to be
          unsigned. Nevertheless, code fragments like -123.4 are fine, being
          interpreted as a unary - operator applied to the numeric literal
          123.4.
        </p>
        <Heading level={3}>Object literals</Heading>
        <p>
          An object literal is a list of zero or more pairs of property names
          and associated values of an object, enclosed in curly braces ({}).
        </p>
        <p>
          The following is an example of an object literal. The first element of
          the car object defines a property, myCar, and assigns to it a new
          string, Saturn; the second element, the getCar property, is
          immediately assigned the result of invoking the function
          (carTypes(Honda)); the third element, the special property, uses an
          existing variable (sales).
        </p>
        <CodeBlock data={objectLiteral} defaultValue={code[0].language}>
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
        <Heading level={3}>String literals</Heading>
        <p>
          A string literal is zero or more characters enclosed in double (
          {'" "'}) or single ({'"'}) quotation marks. A string must be delimited
          by quotation marks of the same type (that is, either both single
          quotation marks, or both double quotation marks). The following are
          examples of string literals:
        </p>
        <CodeBlock data={strings} defaultValue={code[0].language}>
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
          You should use string literals unless you specifically need to use a
          String object. See String for details on String objects. You can call
          any of the String objects methods on a string literal value.
          JavaScript automatically converts the string literal to a temporary
          String object, calls the method, then discards the temporary String
          object. You can also use the length property with a string literal:
        </p>
        <p>
          Template literals are also available. Template literals are enclosed
          by the back-tick (`) (grave accent) character instead of double or
          single quotes. Template literals provide syntactic sugar for
          constructing strings. (This is similar to string interpolation
          features in Perl, Python, and more.)
        </p>
        <CodeBlock data={templateLiterals} defaultValue={code[0].language}>
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
        <Heading level={2}>Tasks</Heading>
        <p>
          Задание 1: Создай переменную с именем Früh и присвой ей строку{" "}
          {'"Доброе утро"'}. Затем создай другую переменную früh и присвой ей
          строку {'"Доброй ночи"'}. Выведи обе переменные в консоль.
        </p>
        <p>
          Задание 2: Создай переменные с помощью var, let, и const. Попробуй
          изменить их значения и посмотри, какие ошибки произойдут (или не
          произойдут).
        </p>
        <CodeBlock data={task2} defaultValue={code[0].language}>
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
          Задание 3: Внутри блока if (true) создай переменные x и y с помощью
          var и let, затем выведи их за пределами блока. Объясни поведение.
        </p>
        <p>
          Задание 4: Предскажи результат выполнения следующего кода и объясни,
          почему он такой:
        </p>
        <CodeBlock data={task3} defaultValue={code[0].language}>
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
        <p>Задание 5: Объясни, почему следующий код вызывает ошибку:</p>
        <CodeBlock data={task4} defaultValue={code[0].language}>
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
          Задание 6 : Преобразуй строку {'"42"'} в число и сложи с числом 8.
          Выведи результат двумя способами: С помощью Number() С помощью
          унарного плюса +
        </p>
        <p>Задание 7: Какие будут значения переменных?</p>
        <CodeBlock data={task5} defaultValue={code[0].language}>
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
          Задание 8: Создай массив с названиями любимых блюд. Выведи третий
          элемент массива в консоль.
        </p>
        <p>
          Задание 9: Создай объект person с полями name, age и isStudent. Выведи
          имя и возраст в консоль.
        </p>
        <p>
          Задание 10: Создай объект car с вложенным объектом engine, содержащим
          поле horsePower. Выведи car.engine.horsePower.
        </p>
        <p>
          Задание 11: Создай переменные name и hobby, и используй template
          literal, чтобы вывести строку: Привет, меня зовут [name]. Я люблю
          [hobby].
        </p>
        <p>Задание 12:
        Объяви const объект и массив. Попробуй изменить их содержимое (не саму переменную, а вложенные значения).</p>
        <CodeBlock data={task6} defaultValue={code[0].language}>
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
