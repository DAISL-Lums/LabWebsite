# Distributed and AI Systems Lab @ LUMS

The lab website. It is plain HTML and CSS with one small script: no build step
and nothing to install.

```
index.html          home page
research.html       research areas and projects
people.html         faculty, students, and alumni
publications.html   papers by year
news.html           announcements
assets/styles.css   colors, fonts, and layout
assets/theme.js     light and dark mode toggle
assets/favicon.svg  browser tab icon and header logo
```

The site opens in light mode. The header button switches to dark mode, and the
browser remembers the visitor's choice.

## Preview

Open `index.html` in a browser, then refresh after each change. The menu links
between the pages.

## Edit the content

| To change        | Do this                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------- |
| Hero text        | In `index.html`, edit the `<h1>` and `<p class="lead">`                                 |
| Research areas   | In `research.html`, edit a `<section>`; update its card in `index.html` and jump link   |
| Faculty          | In `people.html`, copy an `<article class="profile">`                                   |
| Students         | In `people.html`, copy an `<li>` in a `<ul class="people">`                             |
| Publications     | In `publications.html`, add an `<li>` under the year, or copy a `<div class="year">`    |
| News             | In `news.html`, add an `<li>` at the top of the list                                    |
| Colors and fonts | Edit the variables at the top of `assets/styles.css` (light and dark have their own)    |

The home page shows the latest news and papers. Update those short lists in
`index.html` when you add new items.

The header and footer are repeated in all five HTML files. When you change a
menu link, the address, or the email, change it in every file.

For a photo, put a square image in `assets/people/` and replace
`<span class="avatar">FN</span>` with
`<img class="avatar" src="assets/people/name.jpg" alt="">`.

## Before going live

- [ ] Replace the placeholder people, projects, publications, and news
- [ ] Check the hero text and research descriptions (they are drafts)
- [ ] Replace `contact@example.com` in all five HTML files
- [ ] Replace or remove the `href="#"` links

## Publish with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then save.

The site will appear at `https://daisl-lums.github.io/LabWebsite/`.

On GitHub's free plan, Pages only works for public repositories. Make this
repository public first, or upgrade the organization's plan.
