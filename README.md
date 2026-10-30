# abhishekash.github.io

Personal site for **Abhishek Ash** — Senior Staff Engineer in Berlin, building open-source
runtime, tracing, and evaluation tools for AI agents.

Live at <https://abhishekash.github.io/>.

## Design

A warm-paper editorial page with a single dark "trace record" as the visual anchor. The
palette and monospace details carry over from the Agenturm field instrument: paper
`#F2EEE4`, graphite `#1B1A15`, rust accent `#8A4A12`, amber `#FFBD69`, and lavender
`#C5ADFF`.

- One self-contained HTML file: inline CSS and JS, system fonts, data-URI favicon.
- No external assets, fonts, analytics, cookies, or third-party requests.
- Light and dark themes: follows `prefers-color-scheme`, with a manual toggle that
  persists in `localStorage`.
- Responsive from 320px, keyboard accessible, reduced-motion aware, and printable.

## Structure

```text
index.html   the site (all content and styles)
404.html     standalone not-found page
robots.txt   allow all
.nojekyll    skip Jekyll processing on GitHub Pages
```

## Content sources

All claims and links are taken from the public repositories and the GitHub profile README:

- <https://github.com/abhishekash/agenturm>
- <https://github.com/abhishekash/spanhound>
- <https://github.com/abhishekash/agent-harness>
- <https://github.com/abhishekash/agent-evals>
- <https://github.com/abhishekash/agent-skills>
- <https://github.com/abhishekash/abhishekash>

The 8/8 eval figure is labelled as a scripted mechanism baseline, not a live-model score.
The hero trace is labelled as reconstructed, with synthetic identifiers.

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

- Hero copy and trace panel: `.hero` in `index.html`.
- Projects: the `.feature` article and `.cards` block.
- Notes links: `.notes`.
- Contact links: `.contact` and the JSON-LD block at the end of the file.
