# Abhishek Ash

Personal site for Abhishek Ash, Senior Staff Engineer at HelloFresh in Berlin.
Writing, professional focus, open source, and a little life outside work.

Live site: <https://abhishekash.github.io/>.

## Design

A compact editorial layout: warm paper, forest-green links, serif headings, system
fonts, fine rules, and a real portrait. The homepage puts the current role, selected
writing, and working software before personal interests.

See [the benchmark review](docs/site-review.md) for the comparison and remaining content gaps.

- Identity → current role → selected writing → open source → personal interests → contact.
- Projects link directly to demos, source, architecture decisions, or evaluation reports.
- Agenturm uses an actual terminal screenshot labelled as synthetic demo records.
- The essay and its six figures retain their original main markup and URL.
- Light/dark themes follow the system preference with a persisted manual override.
- Fonts, images, styles, and scripts are local. No analytics or third-party embeds.
- Responsive CSS includes narrow-screen, reduced-motion, and print layouts.
- Contact is LinkedIn only; no email address is published.

## Files

```text
index.html                            homepage
blog/index.html                       writing index
blog/agents-dont-fail-loudly.html      original essay and six figures
blog/feed.xml                         RSS feed (original publication date)
404.html                              not-found page
assets/site.css                       shared design and responsive layouts
assets/article.css                    essay reading layout and diagrams
assets/site.js                        theme toggle and article progress
assets/portrait.png                   public GitHub portrait
assets/agenturm-terminal.png          screenshot from the Agenturm repository
og.png                                homepage social preview
blog/og-agents-dont-fail-loudly.png    original essay social preview
sitemap.xml                           published URLs
.nojekyll                             serve static files directly
```

## Preview and deploy

No build or dependencies are required:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. GitHub Pages serves the repository root on `main`;
merging a change into `main` publishes it through the existing Pages configuration.

## Editing

Update the current role in `index.html`, the author summary in `blog/index.html`,
and the homepage Person JSON-LD together. Headers/footers are plain HTML in each
page; update all four when changing navigation.

When publishing an essay, add it to both writing lists, the RSS feed, and the sitemap.
Only show dates and results supported by the source. Keep scripted regression
results distinct from repeated live-model evaluation.

## Sources

- Title confirmed by the owner; employer and focus retained from the existing public site.
- [LinkedIn](https://www.linkedin.com/in/abhishekash/).
- Verified public READMEs: [Agenturm](https://github.com/abhishekash/agenturm),
  [SpanHound](https://github.com/abhishekash/spanhound),
  [agent-harness](https://github.com/abhishekash/agent-harness),
  [agent-evals](https://github.com/abhishekash/agent-evals), and
  [agent-skills](https://github.com/abhishekash/agent-skills).
- Portrait: the owner's public GitHub avatar, downloaded locally.
- Terminal image: `media/agenturm-terminal.png` from Agenturm (MIT).
- Original essay, LinkedIn links, and Himalayan illustrations retained.
