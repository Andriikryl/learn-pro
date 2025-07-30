"use client";
import React from "react";

import { AppWindowIcon, CodeIcon, TerminalIcon } from "lucide-react";
import { SandboxCodeEditor, SandboxConsole, SandboxLayout, SandboxPreview, SandboxProvider, SandboxTabs, SandboxTabsContent, SandboxTabsList, SandboxTabsTrigger } from "@/components/code/Editor";
export default function Editor() {
  return (
    <SandboxProvider
    options={{
        autorun: false,
        recompileMode: 'delayed',
        recompileDelay: 1000,
      }}
      
    >
      <SandboxLayout>
        <SandboxTabs defaultValue="preview">
          <SandboxTabsList>
            <SandboxTabsTrigger value="code">
              <CodeIcon size={14} />
              Code
            </SandboxTabsTrigger>
            <SandboxTabsTrigger value="preview">
              <AppWindowIcon size={14} />
              Preview
            </SandboxTabsTrigger>
            <SandboxTabsTrigger value="console">
              <TerminalIcon size={14} />
              Console
            </SandboxTabsTrigger>
          </SandboxTabsList>
          <SandboxTabsContent value="code">
            <SandboxCodeEditor showTabs />
          </SandboxTabsContent>
          <SandboxTabsContent value="preview">
            <SandboxPreview
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
            />
          </SandboxTabsContent>
          <SandboxTabsContent value="console">
            <SandboxConsole />
          </SandboxTabsContent>
        </SandboxTabs>
      </SandboxLayout>
    </SandboxProvider>
  );
}
