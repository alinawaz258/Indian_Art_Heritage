# Indian Art Heritage — Project Instructions

## Scope and priority
Build only what directly satisfies the assessed work. Rubric requirements outrank visual extras, animations, and novelty. Do not start implementation until the research and content checkpoints below are complete.

The final experience must showcase all three assessed components in one polished, interactive website:
1. Ajanta Cave Paintings storyboard.
2. Mahabalipuram thematic analysis.
3. Kolam and Rangoli poster.

## Non-negotiable standards
- Accuracy first: verify every historical claim, date, artwork identification, translation, and attribution.
- Use credible, traceable sources: ASI, UNESCO, scholarly books and journal articles, museum collections, and reputable academic institutions. Cite factual claims, images, and quotations near their use; include consolidated references.
- Never invent a Jataka-tale identification, artwork provenance, inscription, date, or citation. Mark unresolved facts as pending verification.
- Represent living and sacred traditions respectfully. Avoid stereotypes, exoticising language, costume-like treatment, or sacred imagery used merely as decoration.
- Ensure accessibility: semantic HTML, keyboard operation, visible focus states, meaningful alt text, sufficient contrast, and captions/transcripts where relevant.
- Make layouts responsive from mobile to desktop.
- Use maintainable architecture: small content-driven components, clear source metadata, reusable styles, and no premature abstraction.
- Use safe Git practices: inspect status before changes, never overwrite/delete user work, avoid secrets in the repository.
- Add proportionate tests and documentation. Do not overengineer.

## Required content

### 1. Ajanta Cave Paintings storyboard — team of five
Create a 6–8 panel illustrated storyboard based on one Jataka tale demonstrably represented at Ajanta. Verify the tale-to-painting/cave link with credible sources before illustration.

Each panel requires:
- Numbered sequence and illustrated scene.
- Brief dialogue and/or caption advancing the story.
- Respectful, historically informed visual direction without presenting reconstruction as fact.
- Image/source credits or an explicit original-illustration note.

Include:
- A concise historical note on Ajanta, the selected Jataka tale, and the painting context.
- Five student placeholders: name, roll number, assigned panel/research task.
- References and image credits.

### 2. Mahabalipuram thematic analysis
Produce content suitable for either a 5–7 page report or a 10-minute presentation. Cover:
- Arjuna's Penance / Descent of the Ganges.
- Shore Temple.
- Pancha Rathas.
- Varaha Cave Temple.

For every monument, address iconography and historical, religious, cultural, and artistic significance. Include selected images, descriptive captions, and credible references. Explain the scholarly uncertainty around the Arjuna's Penance/Descent of the Ganges interpretation; do not present one reading as settled fact.

### 3. Kolam and Rangoli poster — team of five
Create a coherent poster containing:
- Clear title and short slogan.
- Original or properly credited pattern imagery.
- Cultural significance and regional/contextual variation.
- Concluding statement.
- Five student placeholders: name, roll number, contribution.
- Image credits and references.

Do not treat Kolam and Rangoli as interchangeable. Explain their relationship and differences using sources.

## Website requirements
- Provide clear navigation to all three components and an evidence/source path from each section.
- Use a calm, high-quality visual system inspired by the subject without imitating sacred art as decoration.
- Prioritize readability: strong hierarchy, intentional typography, spacing, responsive media, optimized images, and no inaccessible text baked into images.
- Use progressive enhancement; essential content must remain readable if interactions fail.
- Keep student-placeholder data separate from researched public content.

## Preferred initial stack
Use React 18 + Vite + TypeScript only after verifying current compatible versions, official guidance, and the existing workspace state. Do not install dependencies or scaffold the project until explicitly authorised. If another version becomes necessary, document why and seek approval before changing the stack.

## Staged workflow
1. **Requirements and research:** map the rubric to deliverables; define research questions, source standards, image-rights checks, and a content inventory.
2. **Content validation:** verify claims and image licenses; record citations; flag uncertainty; obtain student details.
3. **Design system:** define accessible color, typography, spacing, component, illustration, and responsive-layout rules from validated content.
4. **Implementation:** build the smallest content-first architecture meeting the rubric; complete the three assessed sections before optional polish.
5. **QA:** check citations, image credits, keyboard and screen-reader basics, contrast, mobile/desktop layouts, loading, performance, links, and tests.
6. **Deliverable export:** prepare the final report/presentation/poster/storyboard outputs and website documentation only after QA sign-off.

## Definition of done
A task is complete only when rubric coverage is explicit, claims and images are validated and credited, required student placeholders are present, interactions are accessible, the website is responsive, tests pass, and documentation explains setup, sources, and limitations. Do not claim completion based solely on an attractive interface.