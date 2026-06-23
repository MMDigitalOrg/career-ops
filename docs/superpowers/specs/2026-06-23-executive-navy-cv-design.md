# Executive Navy CV Colour Design

## Objective

Replace the tailored CV's cyan-and-purple styling with a restrained corporate palette suitable for Head, Director and regulated-industry applications. Preserve all content, typography, spacing, section order, ATS behaviour and three-page A4 output.

## Approved Direction

**Executive Navy**, selected from three visual alternatives.

| Usage | Colour |
|-------|--------|
| Primary text and candidate name | `#102A43` |
| Section headings | `#183B5B` |
| Company names, project names and header rule | `#274C77` |
| Secondary metadata | `#687684` |
| Competency-tag text | `#183B5B` |
| Competency-tag background | `#EEF3F8` |
| Competency-tag border | `#C9D7E5` |
| Divider lines | `#DCE3EA` |

## Application

- Replace the header gradient with a solid `#274C77` rule.
- Use `#183B5B` for section headings.
- Use `#274C77` for company names, project titles, education organisations and certification organisations.
- Use the pale navy tag colours for competency and project badges.
- Keep body copy dark neutral and backgrounds white.
- Apply the palette through the shared HTML CV template so future tailored HTML/PDF CVs inherit it.
- Regenerate the existing Spoor & Fisher HTML and PDF from its renderer.

## Constraints

- Do not change CV wording, claims, metrics or section ordering.
- Do not introduce images, icons, sidebars, dark backgrounds or low-contrast text.
- Maintain selectable text and the existing ATS-safe single-column structure.
- Maintain A4 format and verify the PDF remains three pages.
- Use a solid rule rather than a gradient for a more conservative executive presentation.

## Verification

1. Search the generated HTML for the old cyan and purple tokens; none should remain in visible CV styling.
2. Generate the PDF with `generate-pdf.mjs` in A4 format.
3. Confirm the output is a valid three-page PDF.
4. Render a full-page preview and visually verify contrast, hierarchy and the absence of layout regressions.
