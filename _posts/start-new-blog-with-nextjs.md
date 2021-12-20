---
title: "ブログをNext.jsへ移行した"
date: '2021-12-20T09:00:00.000Z'
---

### 課題感

1年以上前に[Gatsby + Netlify の新しいブログを作った](start-new-blog)けれど、
Gatsby を理解していないせいでカスタマイズが難しいなどの問題があって課題を途中から感じていた。

その中で [@wapa5powさん](https://twitter.com/wapa5pow)の[ブログをNext.jsへ移行しました](https://wapa5pow.com/posts/2021-03-02--blog-by-nextjs)をみて、課題感もかなり似ていたので、いつか移行したいなと思っていて、年末ということもあり移行することにした。

### 概要


#### テンプレート

[blog-starter-typescript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript)のテンプレートを使ってブログを作成した。
これで Markdown をベースに SSG で静的なブログが作れる。

#### Deploy

Deploy とホスティングは[Vercel](https://vercel.com/dashboard)を使っている。

体感だが以前より表示が速くなった気がする。

#### OGP

OGPも[node-canvas](https://github.com/Automattic/node-canvas)を使っていて、 `yarn build` 時に自動生成されるようにした。

Canvas は最新バージョンだとVercelのnodeのバージョンが対応しておらずビルドできなかったので以下を参考にした。

- [【Next.js × Vercel】OGP画像を動的生成してみた](https://ji23-dev.com/blogs/nextjs-ogp)
- [Next.js + Vercel で OGP の画像を動的に生成する](https://zenn.dev/tiwu_dev/articles/68d58d4ab710af)
- [【動的OGP】Next.js + TypeScript + Vercelデプロイで動的OGPを実現する](https://qiita.com/yuikoito/items/619120c592d99f9d3053)

動的と言っても静的ビルド時にMarkdownからタイトルを持ってきてpngとして書き出しているだけなので、リクエスト毎に生成されるわけでは無いので優しい。

#### CSS

[Tailwind CSS](https://tailwindcss.com)というのがバンドルされていたのでそれを使っている。
適当に検索して書くと良い感じのpaddingやmargin、リサイズしてくれるので便利。
正直雰囲気で書いている感は否めない。

### 未対応

- ダークモード
- 前blogからのリダイレクト(ドメインは同じだがpathが変わった)