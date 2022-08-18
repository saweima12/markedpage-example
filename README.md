# Markedpage Example

A markedpage example project.

## Endpoints
```
src/site.config.js - See how to custom classifier
src/route/api/config.json/+server.ts - See how to get configuration
src/route/api/posts.json/+server.ts - See how to get the article list
src/route/api/posts/[slug].json/+server.ts - See how to get markdown content.
```

## Page
```
/                 - page list.
/post/marked-test - page content.
```

# HMR
```
vite.config.js
src/route/+layout.svelte
```

See how to add HMR support for markdown file.