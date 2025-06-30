---
author: jarinosuke
datetime: '2025-06-27'
title: Astro でブログを再リニューアルした
slug: migrate-to-astro
featured: false
draft: false
tags:
  - astro
  - blog
  - hugo
  - migration
description: Hugo から Astro へブログを移行した話
---

### Hugo から Astro へ

今年の4月に Hugo でブログをリニューアルしたばかりだったが、今度は Astro に移行することにした。

Hugo でも十分だったけれど、最近 Astro の話をよく聞くようになり、試してみたくなったのが主な理由。モダンなWeb開発の体験を求めていた。

### なぜ Astro を選んだか

いくつかの理由があった：

- **パフォーマンス**: 静的サイト生成でありながら、必要に応じてインタラクティブな要素を追加できる
- **開発体験**: TypeScript や JSX のような馴染みのある技術が使える
- **エコシステム**: npm パッケージが豊富で、React/Vue などのコンポーネントも使える
- **学習コスト**: 比較的シンプルで理解しやすい設計

### 移行作業

移行作業は思ったより簡単だった：

1. **プロジェクトセットアップ**: Astro の blog template から開始
2. **コンテンツ移行**: Hugo の markdown ファイルを Astro の content collections に変換
3. **デザイン適用**: AstroPaper v4 Special の Leaf Blue テーマを参考にした
4. **URL 構造維持**: `/posts/` の既存 URL をそのまま維持して SEO を保護
5. **機能実装**: タグシステム、RSS フィード、ダークモード対応

### デザインとテーマ

今回は [steipete.me](https://steipete.me/) からインスピレーションを得つつ、[AstroPaper v4 Special](https://astro-paper.pages.dev/posts/predefined-color-schemes/) の Leaf Blue テーマを適用した。

- **カラーパレット**: 淡いグリーンの背景に青いアクセント
- **レスポンシブデザイン**: Tailwind CSS でモバイルファーストな設計
- **ダークモード**: ワンクリックでテーマ切り替え可能

### 技術的な改善点

- **パフォーマンス**: Hugo も十分高速だったが、Astro はさらに最適化されている
- **開発体験**: TypeScript による型安全性、コンポーネントベースの開発
- **メンテナンス性**: npm エコシステムの活用でライブラリの選択肢が豊富

### 移行して良かった点

- **モダンな開発体験**: TypeScript、JSX、Component 指向の開発
- **柔軟性**: 静的サイトでありながら、必要に応じて動的な要素を追加可能
- **エコシステム**: React/Vue などの既存の知識を活かせる
- **学習**: 新しい技術スタックを学ぶ良い機会になった

### 今後

Astro への移行により、ブログの更新や機能追加がより楽しくなりそう。

引き続き技術的な内容を中心に、学んだことや試したことを発信していきたい。新しいツールチェインで、また書くモチベーションが上がりそうだ。

---

*※ このブログ移行作業は [Claude Code](https://claude.ai/code) を使用して実装しました。*
