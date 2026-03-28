---
name: new-post
description: Create a new blog post. Use when the user wants to write a new blog article.
---

Create a new blog post by running the following command in the `astro-blog/` directory:

```
make new-post slug="$0" title="$1" description="$2"
```

- `$0` (required): slug (URL-safe identifier, e.g. `my-new-post`)
- `$1` (optional): title (defaults to slug)
- `$2` (optional): description (defaults to placeholder)

After creating the post, open the generated file at `astro-blog/src/content/blog/<slug>.md` for editing.

If the user provides the content or topic but not a slug, generate an appropriate slug from it.
