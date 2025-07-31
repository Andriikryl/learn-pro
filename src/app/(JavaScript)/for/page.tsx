"use client";
import Heading from "@/components/Typography/Heading";
import React from "react";
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
import TypographyBlockquote from "@/components/Typography/TypographyBlockquote";
import { Badge } from "@/components/ui/badge";

const exe1 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `let str = "";

for (let i = 0; i < 9; i++) {
  str += i;
}

console.log(str);
// Expected output: "012345678"
`,
  },
];
const exe2 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `for (initialization; condition; afterthought)
  statement
  `,
  },
];
const exe3 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
    `,
  },
];
const exe4 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `// Parenthesize the whole initializer
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
  console.log(i);
}

// Parenthesize the in expression
for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}`,
  },
];
const exe5 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}`,
  },
];
const exe6 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}`,
  },
];
const exe7 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}`,
  },
];
const exe8 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}`,
  },
];
const exe9 = [
  {
    language: "js",
    filename: "exemple.js",
    code: `const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}
// 1 6
// 2 5
// 3 4`,
  },
];

export default function For() {
  return (
    <main>
      <section className="flex flex-col gap-[20px]">
        <Heading level={1}>For</Heading>
        <p>
          The for statement creates a loop that consists of three optional
          expressions, enclosed in parentheses and separated by semicolons,
          followed by a statement (usually a block statement) to be executed in
          the loop.
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
        <Heading level={2}>Syntax</Heading>
        <CodeBlock data={exe2} defaultValue={exe2[0].language}>
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
        <TypographyBlockquote>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            {" "}
            initialization Optional
          </Badge>{" "}
          An expression (including assignment expressions) or variable
          declaration evaluated once before the loop begins. Typically used to
          initialize a counter variable. This expression may optionally declare
          new variables with var or let keywords. Variables declared with var
          are not local to the loop, i.e., they are in the same scope the for
          loop is in. Variables declared with let are local to the statement.
          The result of this expression is discarded.
        </TypographyBlockquote>
        <TypographyBlockquote>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            {" "}
            condition Optional
          </Badge>{" "}
          An expression to be evaluated before each loop iteration. If this
          expression evaluates to true, statement is executed. If the expression
          evaluates to false, execution exits the loop and goes to the first
          statement after the for construct. This conditional test is optional.
          If omitted, the condition always evaluates to true.
        </TypographyBlockquote>
        <TypographyBlockquote>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            {" "}
            afterthought Optional
          </Badge>{" "}
          An expression to be evaluated at the end of each loop iteration. This
          occurs before the next evaluation of condition. Generally used to
          update or increment the counter variable.
        </TypographyBlockquote>
        <TypographyBlockquote>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            {" "}
            statement
          </Badge>{" "}
          A statement that is executed as long as the condition evaluates to
          true. You can use a block statement to execute multiple statements. To
          execute no statement within the loop, use an empty statement (;).
        </TypographyBlockquote>
        <Heading level={3}>Description</Heading>
        <p>
          Like other looping statements, you can use control flow statements
          inside statement: break stops statement execution and goes to the
          first statement after the loop. continue stops statement execution and
          re-evaluates afterthought then condition.
        </p>
        <Heading level={3}>Examples</Heading>
        <p>
          Using for The following for statement starts by declaring the variable
          i and initializing it to 0. It checks that i is less than nine,
          performs the two succeeding statements, and increments i by 1 after
          each pass through the loop.
        </p>
        <CodeBlock data={exe3} defaultValue={exe3[0].language}>
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
        <CodeBlock data={exe4} defaultValue={exe4[0].language}>
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
        <Heading level={3}>Optional for expressions</Heading>
        <p>
          All three expressions in the head of the for loop are optional. For
          example, it is not required to use the initialization block to
          initialize variables:
        </p>
        <CodeBlock data={exe5} defaultValue={exe5[0].language}>
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
          Like the initialization block, the condition part is also optional. If
          you are omitting this expression, you must make sure to break the loop
          in the body in order to not create an infinite loop.
        </p>
        <CodeBlock data={exe6} defaultValue={exe6[0].language}>
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
          You can also omit all three expressions. Again, make sure to use a
          break statement to end the loop and also modify (increase) a variable,
          so that the condition for the break statement is true at some point.
        </p>
        <CodeBlock data={exe7} defaultValue={exe7[0].language}>
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
        <Heading level={3}>
          Lexical declarations in the initialization block
        </Heading>
        <p>
          Declaring a variable within the initialization block has important
          differences from declaring it in the upper scope, especially when
          creating a closure within the loop body. For example, for the code
          below:
        </p>
        <CodeBlock data={exe8} defaultValue={exe8[0].language}>
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
        <TypographyBlockquote>
          Using for with two iterating variables You can create two counters
          that are updated simultaneously in a for loop using the comma
          operator. Multiple let and var declarations can also be joined with
          commas.
        </TypographyBlockquote>
        <CodeBlock data={exe9} defaultValue={exe9[0].language}>
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
        <Heading level={1}>Tasks:</Heading>
        <p>Задание 1: Выведи в консоль числа от 1 до 10 с помощью цикла for.</p>
        <p>
          Задание 2: С помощью цикла for создай строку {'"012345"'} и выведи её
          в консоль.
        </p>
        <p>Задание 3: Выведи только чётные числа от 2 до 10 с помощью for.</p>
        <p>
          Задание 4: В цикле for опусти часть инициализации. Объяви переменную i
          вне цикла и используй её для счёта от 0 до 4.
        </p>
        <p> Задание 5 Сумма всех чисел от 1 до 100:</p>
        <p>
          Задание 6 Создай массив из 5 имён. Используй цикл for, чтобы вывести
          приветствие для каждого 
        </p>
        <p>Задание 7 Выведи 10 раз фразу: {'"Я учу JavaScript!"'}</p>
        <p> Задание 8
        Выведи числа от 10 до 1 (в обратном порядке).</p>
        <p> Задание 9
Выведи квадрат каждого числа от 1 до 10.
(1² = 1, 2² = 4, и т.д.)</p>
<p>Задание 10 Выведи все нечётные числа от 1 до 20.</p>
<p> Задание 10
Выведи сумму всех нечётных чисел от 1 до 20.</p>
<p>Задание 11
Создай массив из 10 чисел и выведи только числа больше 5.</p>
<p>Задание 12 Выведи строку из 10 звёздочек:</p>
<p>Задание 13 Выведи «лестницу» из звёздочек:</p>
<p>`
*
**
***
****
*****`</p>
<p>Задание 14  Счётчик от 0 до 20, который выводит:

even — если число чётное,

odd — если нечётное.</p>
      </section>
    </main>
  );
}
