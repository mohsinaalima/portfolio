# Project cover images

Put project screenshots or cover images in this folder. Reference them from the
matching entry in `app/content/projects.ts` with a public URL path, for example:

```ts
{
  slug: "picscale",
  name: "PicScale",
  // ...the rest of the project data
  image: "/projects/picscale-cover.webp",
}
```

The file path starts with `/projects/` because files in `public` are served from
the site root. Use a wide 16:9 screenshot where possible. Until `image` is set,
the card shows a designed typographic cover.
