# abhishekash.github.io

Personal site for **Abhishek Ash** — Senior Staff Engineer in Berlin. Work, open source,
life outside the terminal, and notes.

Live at <https://abhishekash.github.io/>.

## Design

A warm-paper editorial page with one dark "index card" as the visual anchor. The palette
carries over from the Agenturm field instrument: paper `#F2EEE4`, graphite `#1B1A15`, rust
accent `#8A4A12`, amber `#FFBD69`, and lavender `#C5ADFF`.

- One self-contained HTML file: inline CSS and JS, system fonts, data-URI favicon.
- No web fonts, analytics, cookies, or third-party requests. The page itself is one file.
- `og.png` is used only by link-preview crawlers, never loaded by the page.
- Light and dark themes: follows `prefers-color-scheme`, with a manual toggle that
  persists in `localStorage`.
- Responsive from 320px, keyboard accessible, reduced-motion aware, and printable.

## Contact

LinkedIn only. No email address is published in the markup, JSON-LD, or commit metadata.

## Structure

```text
index.html   the site (all content and styles)
404.html     standalone not-found page
og.png       1200×630 social preview card
robots.txt   allow all
.nojekyll    skip Jekyll processing on GitHub Pages
```

## Content sources

All claims and links come from public work:

- <https://github.com/abhishekash/agenturm>
- <https://github.com/abhishekash/spanhound>
- <https://github.com/abhishekash/agent-harness>
- <https://github.com/abhishekash/agent-evals>
- <https://github.com/abhishekash/agent-skills>
- <https://github.com/abhishekash/trekFinder>
- <https://github.com/abhishekash/trek-ai>
- <https://github.com/abhishekash/abhishekash>
- LinkedIn posts linked from the Notes section

The site avoids metrics and superlatives. Any technical claim is either linked to a
repository or stated as an opinion.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

The repository is named `abhishekash.github.io`; GitHub Pages serves `main` from the
repository root.

```bash
git add -A
git commit -m "Update personal site"
git push
```

## Edit points

- Hero copy and index card: `.hero` and `.snapshot` in `index.html`.
- Current work and project list: `#work`.
- Personal section: `#life`.
- Notes links: `#notes`.
- Contact: `#contact` and the JSON-LD block at the end of the file.
