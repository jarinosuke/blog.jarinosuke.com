// ABOUTME: This utility provides a Shiki transformer for adding file names to code blocks
// ABOUTME: It enables displaying file names above code blocks in the AstroPaper theme

import type { ShikiTransformer } from "@shikijs/core";

export function transformerFileName(): ShikiTransformer {
  return {
    name: "fileName",
    pre(node) {
      const fileName = this.options.meta?.__raw?.match(/title="([^"]+)"/)?.[1];
      if (fileName) {
        node.children.unshift({
          type: "element",
          tagName: "div",
          properties: {
            className: ["code-title"],
          },
          children: [
            {
              type: "text",
              value: fileName,
            },
          ],
        });
      }
    },
  };
}