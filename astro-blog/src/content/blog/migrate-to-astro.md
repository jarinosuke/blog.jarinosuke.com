---
author: jarinosuke
datetime: '2025-06-30'
title: Hugo から Astro へブログを移行した話
slug: migrate-to-astro
featured: true
draft: false
tags:
  - astro
  - blog
  - hugo
  - migration
description: Hugo から Astro + AstroPaper テーマへの移行プロセスと学んだことをまとめた実践的な移行記録
---

## Hugo から Astro への移行を決めた理由

今年の4月にHugoでブログをリニューアルしたばかりだったが、この度Astroに移行することにした。

HugoでもGo言語ベースの高速なビルドや豊富なテーマエコシステムなど、十分満足していたのだが、以下の理由でAstroに惹かれるようになった：

### Astroを選んだ具体的な理由

**1. モダンな開発体験**
- TypeScriptネイティブサポート
- コンポーネントベース設計（.astroファイル）
- JSX風のシンタックスで馴染みやすい

**2. Islands Architecture**
- 必要な部分だけにJavaScriptを適用できる
- 静的サイトのパフォーマンスを保ちつつインタラクティブ要素を追加可能
- React/Vue/Svelteなど好きなフレームワークを組み合わせ可能

**3. Content Collections**
- TypeScriptによる型安全なコンテンツ管理
- フロントマターのスキーマ定義
- 自動補完とエラーチェック

## 移行プロセスの詳細

### Step 1: プロジェクトセットアップ

```bash
npm create astro@latest -- --template blog
```

最初はAstroの公式blogテンプレートから開始したが、後により機能が充実した[AstroPaper](https://github.com/satnaing/astro-paper)テーマに移行した。

### Step 2: Content Collections設定

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datetime: z.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

### Step 3: コンテンツ移行

Hugoのマークダウンファイルをそのまま利用できたが、フロントマターの形式を若干調整する必要があった：

**Before (Hugo):**
```yaml
---
title: "記事タイトル"
date: 2025-06-30T10:00:00+09:00
tags: ["tag1", "tag2"]
---
```

**After (Astro):**
```yaml
---
title: 記事タイトル
datetime: 2025-06-30
tags:
  - tag1
  - tag2
featured: false
draft: false
---
```

### Step 4: URL構造の決定

SEOを考慮して、最初は既存の`/posts/`URLを維持しようとしたが、最終的に本番環境と合わせて`/blog/`に統一した。

```typescript
// src/pages/blog/[...slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
}
```

## 実装した機能とカスタマイズ

### 1. 読了時間の計算

```typescript
// src/utils/getReadingTime.ts
export function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const plainText = content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  const wordCount = plainText.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return {
    text: `${minutes} min read`,
    minutes
  };
}
```

### 2. タグシステムの改善

当初、タグにアイコン（#）とテキストの間にスペースが入る問題があったが、以下の方法で解決：

```astro
<!-- 問題のあった実装 -->
</svg> <span>{name}</span>

<!-- 修正後 -->
</svg><span>{name}</span>

<!-- 最終的にシンプルなデザインに変更 -->
<a href={`/tags/${name}/`} class="inline-block bg-skin-card/50 hover:bg-skin-card rounded-full px-2 py-1">
  {name}
</a>
```

### 3. レスポンシブデザインの調整

画面幅とフォントサイズを調整してより読みやすくした：

```css
/* max-width を lg から xl に変更 */
.container {
  max-width: theme("screens.xl");
}

/* フォントサイズの向上 */
.prose {
  @apply text-lg leading-relaxed;
}
```

## 移行時に遭遇した課題と解決策

### 1. TypeScriptエラーへの対応

Content Collectionsの型定義で、nullableな値の扱いに注意が必要だった：

```typescript
// modDatetime が null の可能性がある場合
modDatetime: modDatetime || undefined
```

### 2. ビルド最適化

```json
{
  "scripts": {
    "build": "npm run check && astro build && npm run postbuild",
    "check": "astro check && astro sync"
  }
}
```

### 3. 検索機能の実装

Pagefindを使用した検索機能を追加：

```astro
<!-- src/pages/search.astro -->
<script>
  new PagefindUI({
    element: "#pagefind__search",
    resetStyles: false,
    showImages: false,
    translations: {
      placeholder: "ブログを検索...",
      // ... 日本語翻訳
    }
  });
</script>
```

## パフォーマンスの比較

移行前後でLighthouseスコアを比較した結果：

| 項目 | Hugo | Astro |
|------|------|-------|
| Performance | 98 | 100 |
| Accessibility | 95 | 98 |
| Best Practices | 92 | 100 |
| SEO | 100 | 100 |

特にJavaScriptのhydrationが最適化されており、Interactive要素があってもパフォーマンスが保たれている。

## 開発体験の向上

### TypeScriptサポート

```typescript
// 型安全なコンテンツアクセス
const posts = await getCollection('blog');
posts.forEach((post) => {
  // post.data は完全に型付けされている
  console.log(post.data.title); // string
  console.log(post.data.tags);  // string[] | undefined
});
```

### ホットリロード

Viteベースの開発サーバーにより、変更が即座に反映される。Hugoも高速だったが、Astroの方がより快適に感じる。

### コンポーネントの再利用性

```astro
<!-- src/components/Card.astro -->
---
interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  readingTime?: string;
}
---

<li class="my-8">
  <a href={href}>
    <h2>{frontmatter.title}</h2>
  </a>
  <div class="flex items-center gap-3">
    <Datetime datetime={frontmatter.datetime} />
    {readingTime && <span>• {readingTime}</span>}
  </div>
</li>
```

## 移行して良かった点

1. **型安全性**: TypeScriptによる開発時のエラー検出
2. **エコシステム**: npmパッケージの豊富さ
3. **学習コスト**: 既存のWeb開発知識を活かせる
4. **柔軟性**: 必要に応じてインタラクティブ要素を追加可能
5. **メンテナンス性**: コンポーネントベースの構成で保守しやすい

## 今後の展望

Astroへの移行により、以下のような機能追加を検討している：

- コメントシステム（giscus等）
- 記事の目次自動生成
- 関連記事の推薦機能
- アナリティクスの強化

Astroの柔軟性により、これらの機能を段階的に追加していけそうだ。

## まとめ

HugoからAstroへの移行は想像以上にスムーズに進んだ。特にContent Collectionsの型安全性とIslands Architectureの恩恵は大きく、今後のブログ運営がより楽しくなりそうだ。

静的サイトジェネレーターを検討している方には、Astroを強く推薦したい。特にTypeScriptやモダンなWeb開発に馴染みがある場合は、学習コストも低く導入しやすいはずだ。

---

*この移行作業は [Claude Code](https://claude.ai/code) と協力して実装しました。AI支援による開発の可能性も実感できた貴重な体験でした。*
