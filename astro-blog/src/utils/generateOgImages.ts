// ABOUTME: This file generates dynamic OG images for blog posts using Satori and Resvg
// ABOUTME: It creates PNG images with post title, author, and site branding for social sharing

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@config";

const ogImageWidth = 1200;
const ogImageHeight = 630;

export async function generateOgImageForPost(
  post: CollectionEntry<"blog">
): Promise<ArrayBuffer> {
  // Google Fonts configuration for Japanese support
  const fontsConfig = [
    { name: "Noto Sans JP", font: "Noto+Sans+JP:wght@400", weight: 400, style: "normal" },
    { name: "Noto Sans JP", font: "Noto+Sans+JP:wght@700", weight: 700, style: "normal" },
    { name: "Noto Sans", font: "Noto+Sans:wght@400", weight: 400, style: "normal" },
    { name: "Noto Sans", font: "Noto+Sans:wght@700", weight: 700, style: "normal" },
  ];

  // Load fonts from Google Fonts API
  const fonts = await Promise.all(
    fontsConfig.map(async (fontConfig) => {
      const response = await fetch(
        `https://fonts.googleapis.com/css2?family=${fontConfig.font}&display=swap`
      );
      const css = await response.text();
      const fontUrl = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
      
      if (!fontUrl) {
        throw new Error(`Failed to extract font URL for ${fontConfig.name}`);
      }

      const fontResponse = await fetch(fontUrl);
      const fontData = await fontResponse.arrayBuffer();

      return {
        name: fontConfig.name,
        data: fontData,
        weight: fontConfig.weight,
        style: fontConfig.style as "normal",
      };
    })
  );

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "80px",
          fontFamily: "Noto Sans JP, Noto Sans, sans-serif",
          color: "#f8fafc",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      fontSize: "48px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      margin: 0,
                      color: "#f8fafc",
                      maxWidth: "900px",
                    },
                    children: post.data.title,
                  },
                },
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: "24px",
                      fontWeight: 400,
                      lineHeight: 1.4,
                      margin: 0,
                      color: "#cbd5e1",
                      maxWidth: "900px",
                    },
                    children: post.data.description || "",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "#1e293b",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid #334155",
                          },
                          children: "🪲",
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                          },
                          children: [
                            {
                              type: "p",
                              props: {
                                style: {
                                  fontSize: "20px",
                                  fontWeight: 600,
                                  margin: 0,
                                  color: "#f8fafc",
                                },
                                children: SITE.author,
                              },
                            },
                            {
                              type: "p",
                              props: {
                                style: {
                                  fontSize: "18px",
                                  fontWeight: 400,
                                  margin: 0,
                                  color: "#94a3b8",
                                },
                                children: SITE.title,
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      backgroundColor: "#1e293b",
                      borderRadius: "12px",
                      border: "1px solid #334155",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "#10b981",
                          },
                        },
                      },
                      {
                        type: "p",
                        props: {
                          style: {
                            fontSize: "16px",
                            fontWeight: 500,
                            margin: 0,
                            color: "#e2e8f0",
                          },
                          children: "blog.jarinosuke.com",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    } as any,
    {
      width: ogImageWidth,
      height: ogImageHeight,
      fonts: fonts as any,
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: ogImageWidth,
    },
  });

  const pngBuffer = resvg.render().asPng();
  const arrayBuffer = pngBuffer.buffer.slice(pngBuffer.byteOffset, pngBuffer.byteOffset + pngBuffer.byteLength);
  return arrayBuffer as ArrayBuffer;
}