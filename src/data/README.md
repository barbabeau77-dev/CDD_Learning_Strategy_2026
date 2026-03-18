# Quick Guide

All editable text lives in these two files:

- [pillars.json](/c:/Users/e124584/My%20Website/src/data/pillars.json)
- [site-content.json](/c:/Users/e124584/My%20Website/src/data/site-content.json)

The pages now read these JSON files directly. There is no extra TypeScript data layer in between.

Use `pillars.json` for pillar-specific text:

- `title`: pillar name
- `cardDescription`: text on the card on the start page
- `introText`: intro text at the top of the pillar page
- `detailParagraphs`: paragraphs under the main heading on the pillar page
- `focusBoxes`: boxes lower down on the pillar page
- `focusBoxes[].title`: box heading
- `focusBoxes[].description`: box text
- `focusBoxes[].priority2026`: shows the `2026 priority` label when `true`
- `icon`: symbol on the card
- `accent`: `teal`, `green`, `orange`, or `purple`

Use `site-content.json` for shared page text:

- `site.defaultMetaDescription`: page description in the browser/meta
- `home.pageTitle`: browser title for the start page
- `home.hero`: hero text and button on the start page
- `home.vision`: vision text and the small stats block
- `home.framework`: framework section heading and card link text
- `pillarPage`: shared text on all pillar pages

Fast rule:

- If you want to change a specific pillar, edit `pillars.json`.
- If you want to change headings, buttons, labels, or intro text shared by pages, edit `site-content.json`.

Example from `pillars.json`:

```json
{
  "slug": "skills-framework",
  "title": "Skills Framework",
  "cardDescription": "A single, clear structure that links every role, skill, and learning path.",
  "introText": "The foundation of everything we do...",
  "detailParagraphs": [
    "First paragraph",
    "Second paragraph"
  ],
  "focusBoxes": [
    {
      "title": "Single skills structure linked by role and learning assets",
      "description": "Single skills structure linked by role and learning assets.",
      "priority2026": true
    }
  ]
}
```

Example from `site-content.json`:

```json
{
  "home": {
    "hero": {
      "kicker": "LEARNING STRATEGY",
      "title": "Building a skills-based learner journey",
      "emphasis": "skills-based",
      "lead": "Here you'll find our learning strategy...",
      "ctaLabel": "Explore the pillars",
      "ctaHref": "#framework"
    }
  }
}
```
