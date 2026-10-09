# sIIr recall

A local, static collection of notes on quantum error correction, computational musicology, and the sIIr Music Observatory. Built with React and Vite, with the Siirsuite theme.

## Publish to GitHub Pages

The included `.github/workflows/pages.yml` builds and publishes the static site whenever `main` changes. It uses the Pages base path so fonts, the logo, and downloads work under `/siir-recall/`.

For the first publication, run these commands from this project directory:

```sh
gh auth login -h github.com
git init -b main
git add .
git commit -m "Initial sIIr recall site"
gh repo create siir-recall --private --source=. --remote=origin --push
gh api --method POST repos/{owner}/siir-recall/pages -f build_type=workflow
gh workflow run pages.yml --ref main
```

GitHub Pages from a private repository requires GitHub Pro, Team, or Enterprise. The repository stays private; the published website is public unless your organization has configured private Pages access. See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

Once the workflow finishes, its deployment summary contains the website URL. Subsequent pushes to `main` deploy automatically. Generated exports in `public/exports/` are committed alongside the Markdown sources.

## Run locally

Use Node.js 22.13 or later and npm:

```sh
npm install
npm run dev
```

Open the URL printed by Vite, normally http://localhost:5173. To select a port:

```sh
npm run dev -- --port 3000
```

## Build

```sh
npm run build
npm run preview
```

The `dist/` folder is a standalone static website. No account, backend, or database is required. Notes are loaded from Markdown directories under `topics/`; see [topics/README.md](topics/README.md) for the structure and instructions for adding a topic or lesson. The theme preference is stored locally in your browser.

After the first installation, use `npm ci` for reproducible installs from `package-lock.json`.

## Export notes

Open a note or collection and choose **Export** in the header. A note downloads as PDF or Markdown. A collection downloads as a combined PDF/Markdown file or a ZIP containing one file per note. The PDFs include typeset equations, the error-chain diagram, and the distance table. All exports are static files bundled with the site.

After changing Markdown content under `topics/`, regenerate the affected downloads:

```sh
npm run exports:generate
npm run build
```

Regeneration uses your installed Chrome/Chromium. Set `CHROME_PATH` if it is installed in a different location. Normal development and builds use the existing files and do not launch Chrome. Builds verify that export files match the current Markdown content. Unchanged PDFs are reused; use `npm run exports:generate -- --force` after changing the PDF renderer.

## Parallel reading

Lessons with both `explanation.md` and `math.md` show maths on the left and explanation on the right at wide screen sizes. Each shared section heading aligns a pair of blocks. On narrow screens, choose **Explanation** or **Maths**; switching keeps your place in the current section. Other topics can use the same structure, or omit `math.md` for a single-pane lesson.

The [sIIr Music Observatory topic](topics/siir/topic.md) explains the sibling Flutter project's signal analysis, descriptors, pitch and timbre, statistics and structure, beat tracking, fluid visuals, and cellular music generator. Its seven paired lessons document the inspected implementation; [source notes](topics/siir/SOURCES.md) identify the relevant project files.
