# engineerjpark.github.io

Personal homepage + CV, generated from one set of data files.

**Edit only `_data/`.** The homepage (`/`) and the CV (`/cv/`) both read from it, so they never drift apart.

| File | What goes in it |
|---|---|
| `_data/profile.yml` | name, photo, links, bio paragraphs, publication filter names |
| `_data/news.yml` | news items (newest first) |
| `_data/publications.yml` | papers (newest first); field guide at the top of the file |
| `_data/cv.yml` | education, experience, patents, projects, awards, reviewing |

## Common tasks

- **New paper:** copy a block in `publications.yml`, put it at the top. Your own name is bolded automatically; add `*` for equal contribution.
- **Paper thumbnail:** put an image (4:3 works best) in `images/paper/` and set `thumb: /images/paper/name.png`. Without one, a placeholder with the venue is drawn.
- **PDF of the CV:** open `https://engineerjpark.github.io/cv/` → "Save as PDF" (or Ctrl+P → Save as PDF). The page sets its own margins, so no browser date/URL header or footer is printed, and the file name defaults to `Junsung_Park_CV`.
- **Hide an item from the CV only:** add `cv: false` to it (e.g. a preprint under review). `site: false` does the opposite.
- **Colors:** change `--accent` in `assets/css/style.css` and `assets/css/cv.css`.

## Local preview

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

The previous academicpages-based site is kept on the `backup/academicpages-2026-11` branch.
