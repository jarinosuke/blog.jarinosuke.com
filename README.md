# blog.jarinosuke.com

Astro 5 + Tailwind のブログ。ローカル開発やビルド時に使うコマンドをまとめています。

## 前提

- Node.js 18+（Astro 5 系必須）
- npm（このリポジトリは npm ロックファイルを使用）

## セットアップ

```sh
cd astro-blog
npm install
```

## 開発

```sh
npm run dev
```

- デフォルト: http://localhost:4321

## ビルドとプレビュー

```sh
npm run build      # 型チェック → Astro ビルド → Pagefind 生成
npm run preview    # dist をローカルで確認
```

## 記事の作成手順

1. `src/content/blog/` に `slug.md` 形式でファイルを作成（例: `my-new-post.md`）。拡張子は `.md` でも `.mdx` でも可。
2. フロントマターを記入（必須は `title`, `datetime`, `description`）。`slug` を省略するとファイル名が URL になる。
3. 本文を書く。Markdown/MDX が使用可能。
4. 下記コマンドでチェックとプレビュー。

```yaml
---
title: 記事タイトル
datetime: 2025-01-01
description: 記事の説明文（一覧やOGP用）
tags:
  - sample
draft: false        # 下書きなら true
featured: false     # トップの「注目」に出すなら true
ogImage: /og/default.png # 任意。1200x630 以上の画像またはパス
---
```

```sh
npm run check   # 型/フロントマターを検証
npm run dev     # プレビュー（http://localhost:4321）
```

### Makefile で記事を自動作成する場合

```sh
make new-post slug=my-new-post title="My New Post" description="短い説明"
```

- 必須: `slug`
- 省略可: `title`（省略時は slug）、`description`（省略時はプレースホルダー）
- 出力先: `src/content/blog/<slug>.md`
- 生成時は `draft: true`、`featured: false` で作成される

## 主要スクリプト

- `npm run check` : `astro check` と `astro sync` による型/コンテンツ検証
- `npm run format`: Prettier での整形
- `npm run postbuild`: Pagefind の検索インデックスを生成し、必要なファイルをコピー
