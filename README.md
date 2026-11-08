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
- **PDF of the CV:** nothing to do. On every push to `main`, `.github/workflows/deploy.yml` prints `/cv/` and each `/cv/<variant>/` page to `Junsung_Park_CV.pdf` in the same folder, and those URLs then open the PDF directly. Requires Settings → Pages → Source = "GitHub Actions".
- **Hide an item from the CV only:** add `cv: false` to it (e.g. a preprint under review). `site: false` does the opposite.
- **Section order / titles of the CV:** `sections` and `section_titles` at the top of `_data/cv.yml`.
- **Tailored CV (e.g. Krafton → `/cv/krafton/`):** `_data/variants/krafton.yml` holds only what differs (section order, research interest, research experience, languages, references); everything else comes from the shared data. For another company, copy that yml to `_data/variants/<name>.yml` and `cv-krafton.html` to `cv-<name>.html`, then change `variant:` and `permalink:` (`/cv/<name>/`, which gets its own PDF automatically). To keep it out of search engines, add its path to `robots.txt`.
- **Colors:** change `--accent` in `assets/css/style.css` and `assets/css/cv.css`.

## Local preview

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

Locally, `/cv/` shows the HTML that gets printed; the PDFs only exist on the deployed site.

The previous academicpages-based site is kept on the `backup/academicpages-2026-11` branch.
