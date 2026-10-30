# abhishekash.github.io

Personal site for **Abhishek Ash** — Senior Staff Engineer in Berlin. Work, open source,
life outside the terminal, and writing.

Live at <https://abhishekash.github.io/>.

## Design

A warm-paper editorial page with pencil mountain studies and one dark "index card" as the
visual anchor. The palette: paper `#F2EEE4`, graphite `#1B1A15`, rust accent `#8A4A12`,
amber `#FFBD69`, and lavender `#C5ADFF`.

- One self-contained HTML file per page: inline CSS and JS, system fonts, data-URI favicon.
- No web fonts, analytics, cookies, or third-party requests. Pages are self-contained.
- `og.png` and the blog social card are used only by link-preview crawlers.
- Light and dark themes: follows `prefers-color-scheme`, with a manual toggle that
  persists in `localStorage`.
- The homepage includes two inline pencil studies: Goechala (Kanchenjunga from the pass)
  and Annapurna (the massif with Machapuchare). They are decorative and labelled as such.
- Responsive from 320px, keyboard accessible, reduced-motion aware, and printable.

## Contact

LinkedIn only. No email address is published in the markup, JSON-LD, or commit metadata.

## Structure

```text
index.html                              homepage
404.html                                standalone not-found page
og.png                                  1200×630 homepage social card
blog/index.html                         writing index
blog/agents-dont-fail-loudly.html       essay with six inline figures
blog/og-agents-dont-fail-loudly.png     1200×630 essay social card
blog/feed.xml                           RSS 2.0 feed
sitemap.xml                             homepage, blog index, essay
robots.txt                              allow all + sitemap
.nojekyll                              skip Jekyll processing on GitHub Pages
```

## The essay

**Agents Don't Fail Loudly** is a design essay built around a hypothetical refund. The
figures are inline SVG / HTML and carry the argument:

1. Support-chat phone mockup with an `outcome unknown` record.
2. Two-world fork: request never arrived vs. refund issued, response lost.
3. Operation state machine, including `Unknown` as a real state.
4. Idempotency-key comparison: same key vs. fresh key on retry.
5. Responsibility map: model, server, human.
6. Receipt ladder: accepted, pending, completed, resolved.

Wide diagrams become horizontally scrollable with a visible hint below 720px.

## Content sources

- <https://github.com/abhishekash/agenturm>
- <https://github.com/abhishekash/spanhound>
- <https://github.com/abhishekash/agent-harness>
- <https://github.com/abhishekash/agent-evals>
- <https://github.com/abhishekash/agent-skills>
- <https://github.com/abhishekash/trekFinder>
- <https://github.com/abhishekash/trek-ai>
- <https://github.com/abhishekash/abhishekash>
- LinkedIn posts linked from the Writing and Elsewhere sections
- The essay source in `learnings/agents-dont-fail-loudly.md`

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
- Personal section and pencil studies: `#life` and `.sketchbook`.
- Writing section: `#writing`.
- Blog post list: `blog/index.html`.
- Essay figures and article CSS: `blog/agents-dont-fail-loudly.html`.
- Contact: `#contact` and the JSON-LD block at the end of the homepage.
