# Topics and lessons

Markdown files in this directory are the source of truth. The website discovers topics and lessons automatically; there is no central lesson list to edit.

```text
topics/
  your-topic/
    topic.md
    lessons/
      01-first-lesson/
        explanation.md
        math.md          # optional
      02-next-lesson/
        explanation.md
```

## Add a topic

Create a directory and a `topic.md` file:

```markdown
---
order: 3
---

# Your topic

A short description for the collection card.
```

`order` is optional. Topics otherwise sort by directory name.

## Add a lesson

Create a numbered directory inside `lessons/`. Its number determines the reading order. Add `explanation.md`:

```markdown
---
lesson_id: your-topic-first-lesson
summary: An optional short introduction.
---

# First lesson

## 01.01 · The idea

Your explanation in Markdown.

## 01.02 · Work it through

Examples and reasoning.
```

`lesson_id` and `summary` are optional. Without an ID, the site derives one from the topic and lesson directory. Keep IDs stable to preserve bookmarks.

For parallel reading, add `math.md` with the same title and the same `##` headings in the same order:

```markdown
# First lesson

## 01.01 · The idea

$$
E = mc^2
$$

## 01.02 · Work it through

The corresponding derivation.
```

Numbered section IDs are recommended for pairing, as in the QEC ZIP; matching plain headings also work. YAML front matter and the top-level title are removed before display. The first heading supplies the lesson title. Keep all explanation text in `explanation.md`; `math.md` is optional for ordinary single-pane lessons.

## Run and export

The development server discovers Markdown changes automatically. Search includes both panes. Downloads include both explanation and maths. A collection's Markdown ZIP preserves its topic directory structure so it can be copied back into `topics/`.

After editing content, update the static downloads and build:

```sh
npm run exports:generate
npm run build
```

Only changed notes and collections regenerate their PDFs. To regenerate every PDF after changing the PDF renderer:

```sh
npm run exports:generate -- --force
```

Chrome/Chromium is required only for generating PDFs; `CHROME_PATH` can specify its location.
