// ABOUTME: This file loads Google Fonts for use in OG image generation with Satori
// ABOUTME: It fetches font files and returns ArrayBuffer for rendering text in images

interface FontOptions {
  family: string;
  weights?: number[];
  display?: string;
}

const GOOGLE_FONTS_API = "https://fonts.googleapis.com/css2";

export async function loadGoogleFont(
  family: string,
  weight = 400,
  text?: string
): Promise<ArrayBuffer> {
  const url = new URL(GOOGLE_FONTS_API);
  url.searchParams.set("family", `${family}:wght@${weight}`);
  
  if (text) {
    url.searchParams.set("text", text);
  }

  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    },
  }).then((res) => res.text());

  const fontUrl = css.match(/src: url\(([^)]+)\) format\(['"]woff2['"]\)/)?.[1];

  if (!fontUrl) {
    throw new Error(`Could not find font URL in CSS: ${css}`);
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export async function loadLocalFont(path: string): Promise<ArrayBuffer> {
  const fs = await import("fs/promises");
  const fontBuffer = await fs.readFile(path);
  const arrayBuffer = fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength);
  return arrayBuffer as ArrayBuffer;
}