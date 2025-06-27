---
title: "ダークモード対応した"
description: "ダークモード対応したについて"
pubDate: "2020-07-25T09:00:00.000Z"
heroImage: ""
tags: ["frontend","blog"]
---

### やったこと

- `prefers-color-scheme` を使ってスタイルの切り替えを実装した（ダークモード対応）
  - それに伴って全体的にデザインを変更、普段使ってる Mac/iOS Note.app ぽい黄色にした
- シンタックスハイライトのデザイン変更した
- コードブロックの上にファイル名やタイトルを付け加えられるようにした
- 内部の Markdown へのリンク遷移時に、リロードされないようにした
  - `gatsby-plugin-catch-links` を使った
  - 直リンクだと、デプロイ前のプレビューで遷移確認できないのと、せっかくSPAぽく動いてるので無駄なリロードは避けたかったので

対応した PR は[これ](https://github.com/jarinosuke/blog.jarinosuke.com/pull/9)

### しなかったこと

- シンタックスハイライトのダークモード対応
  - 面倒そうだったのと、 `prism-tomorrow` でどちらの場合も事足りそうな雰囲気だったので見送り
- トグルやチェックボックスを置いて、ユーザがスタイルを切り替えるようにする
  - React Component をシュッと作れそうに無かったのと、そんなに使われなさそう

### CSS Media Query

ユーザの端末や設定などに CSS からアクセスするための仕組み

今回のダークモードについても `prefers-color-scheme` というキー名に対して以下の様にクエリを投げ、

その返り値が `light` か `dark` によってスタイルの出し分けを行っている

```css
@media (prefers-color-scheme: light) {
  body {} 
}

@media (prefers-color-scheme: dark) {
  body {} 
}
```

手元の Safari や Chrome では動くぽいので、既に一定標準なのかもしれない

### 参考

- [prefers-color-scheme を用いた Dark Mode 対応と User Preference Media Features](https://blog.jxck.io/entries/2018-11-10/dark-mode-via-prefers-color-scheme.html)
- [Gatsbyでブログを作りました](https://blog.ebiken.dev/blog/my-new-blog/)
- [Gatsbyにシンタックスハイライトを入れてコードをきれいに表示する](https://littlebylittle.work/2020/01/gatsby-syntax-highlighting/)
- [GatsbyJSで作っているブログでコードブロックにタイトルをつけられるようにした](https://kikunantoka.com/2019/12/11--install-code-title/)
- [Relative page links in markdown files within gatsby](https://medium.com/@sgpropguide/relative-page-links-in-markdown-files-within-gatsby-1f56ce69d06c)
- [Gatsby.js: Preprocessing Relative Path Links in Markdown](https://stackoverflow.com/questions/50300574/gatsby-js-preprocessing-relative-path-links-in-markdown)