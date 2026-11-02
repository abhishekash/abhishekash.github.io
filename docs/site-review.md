# Personal site review — 2 November 2026

## Assessment

The main presentation gap was hierarchy. The old homepage gave substantial space
to an illustrative Figma frame and personal interests before showing the writing.
The professional role appeared in short introductory copy and an About panel, while
the section called Work contained only independent projects. Project tiles described
the software but hid the practical entry points behind another click.

This made it harder to answer three questions quickly: what does Abhishek do
professionally, what has he explained well, and what can I try or inspect?

## Benchmarks

These are qualitative comparisons of the public sites read during the review,
not a ranking or a claim of equivalent career achievement. Job titles and employers
can change; the design lessons below do not depend on their present titles.

| Reference | What works | Application here |
| --- | --- | --- |
| [Andrej Karpathy](https://karpathy.ai/) | Brief professional context, curated writing, and concrete projects with explanations. Readers have clear starting points. | Compact introduction, selected essays before the project archive, meaningful descriptions and direct links. |
| [Brendan Gregg](https://www.brendangregg.com/) and his [overview](https://www.brendangregg.com/overview.html) | Professional context connects to an identifiable specialty. A curated overview helps readers navigate a larger body of work. | Separate HelloFresh role from independent work; show the connected theme across tracing, runtime controls, and evaluation. |
| [Nelson Elhage](https://nelhage.com/) | Work, personal projects, writing, and code are explicitly separated. Contributions link to inspectable artifacts. | A current-work section; independent tools with source, architecture, demonstrations, and reports. |
| [Dan Luu](https://danluu.com/) | Writing is the destination. Direct article links make a large technical archive easy to enter. | Readable hierarchy, compact writing rows, summaries, and visible links. |
| [Simon Willison](https://simonwillison.net/) | Writing, tools, notes, and releases continually point readers toward each other. | Connect the essay, project notes, runnable tools, and a reproducible debugging story; expose RSS. |

The shared pattern is a recognizable area of interest backed by work people can
read, run, or inspect. The durable advantage is the body of work and judgment it
demonstrates. Visual polish helps readers discover it.

## Changes

1. Replace the oversized illustrated hero with a real portrait, name, role, and technical focus.
2. Give HelloFresh a distinct professional section near the top, linked to LinkedIn.
3. Move selected writing ahead of open source and personal interests.
4. Feature Agenturm with its terminal UI, install command, interactive demo, source, and package.
5. Explain how SpanHound, agent-harness, agent-evals, and agent-skills connect, with direct artifact links.
6. Add a debugging story connecting the runtime, trace inspection, and a regression check.
7. Keep the essay, publication date, public URLs, personal projects, and Himalayan sketches.
8. Apply a shared editorial design to the homepage, writing index, essay navigation, and 404 page.

No production scale, business outcome, customer use, awards, or live-model success
rate has been invented. The terminal image and regression walkthrough are labelled
as synthetic/scripted evidence.

## Remaining content gaps

The current role is visible, but it does not yet demonstrate the scope of the day job.
The strongest next addition would be one employer-approved engineering case study:
the problem, constraints, alternatives considered, personal contribution, rollout,
and observed outcome. Link an existing public company article or talk if available.
Use numbers only when they are public and approved for reuse.

The owned essay archive currently contains one essay. The LinkedIn pieces and GitHub
notes give readers other entry points, but do not yet create the depth of the reference
sites. Useful next essays could explain a real architecture decision, a tracing failure,
or what a measured evaluation changed. Publish when the evidence is ready.

External contributions can become a separate section when there are substantive,
verifiable upstream pull requests to feature. Owned repositories are shown as owned
projects rather than contributions to unrelated ecosystems.

## Verification and limits

- Current title confirmed by the owner. Employer and focus retained from the existing public site.
- LinkedIn restricts automated access to the full experience section; no extra career history was inferred from similarly named profiles.
- Public repository READMEs checked for names, commands, capabilities, and demo links.
- Page headings, duplicate IDs, local assets, internal links, and fragment targets checked.
- Essay main markup compared exactly with the original, including its six figures.
- JavaScript syntax and theme/progress behavior checked, including restricted localStorage and system theme changes.
- RSS and sitemap checked as XML.
- Public site, repository, artifact, package, and demo links returned HTTP 200. Agenturm's demo anchor is `#demo`; the previous profile's `#live-ui` anchor no longer exists and is corrected in the companion profile change. LinkedIn links are retained from the existing site; automated access remains restricted.
- Homepage social preview inspected at 1200 × 630. Local PNG assets verified. The theme button retains a 44-pixel target; print styles reset both automatic and explicit dark themes.
- Browser access was unavailable after the crash (the browser host reports itself unavailable). Responsive CSS is provided, but rendered layouts and keyboard behavior still need browser review before merge. JavaScript behavior checks use a Node sandbox and do not substitute for that review.

## Companion GitHub profile

The `abhishekash/abhishekash` README now leads with the confirmed role, professional
focus, website, writing, and LinkedIn. Selected writing comes before the tools.
Agenturm and SpanHound retain quickstarts and demo links, with the Agenturm animation
in an expandable section. Supporting repositories link to their concrete artifacts,
and the scripted evaluation baseline remains clearly labelled.

The profile's employer and technical focus match this site. The change does not add
unverified career history or employer metrics. Existing profile artwork and media
remain available in the repository.
