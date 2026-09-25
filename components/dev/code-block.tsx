"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Minimal copyable code snippet used under each story's live preview. */
function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can fail (permissions, insecure context) — ignore silently.
    }
  }

  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-brand-ink", className)}>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={handleCopy}
        className="absolute top-2 right-2 text-background/70 hover:bg-background/10 hover:text-background"
        aria-label="Kodu kopyala"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </Button>
      <pre className="overflow-x-auto p-4 pr-12 font-mono text-xs leading-relaxed text-background/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export { CodeBlock };
