# ARCHITECTURAL & SCHOLARLY DECISIONS

## 1. Topic Selection & Academic Rationale

### 1.1 Ajanta Jātaka Storyboard: *Ṣaḍdanta Jātaka* (Cave 17, Right Corridor Wall)
- **Selection:** *Ṣaḍdanta Jātaka* (Pali Jātaka No. 514 / Sanskrit *Kalpadrumāvadāna*).
- **Cave & Date:** Cave 17, right aisle wall, excavated under the patronage of the feudatory ruler Upendragupta of Rishika during the reign of Vākāṭaka Emperor Hariṣeṇa (c. 460–477 CE).
- **Scholarly Justification:**
  - Evaluated against *Mahājanaka Jātaka* (Cave 1). While Mahājanaka is architecturally grand, the *Ṣaḍdanta Jātaka* in Cave 17 is universally recognized by epigraphists and art historians (Dieter Schlingloff, Walter Spink, Ghulam Yazdani) as one of the emotional and compositional peaks of ancient Indian narrative painting.
  - It presents an unbroken narrative arc across 8 distinct sequential moments: the idyllic lotus lake, the slight of the lotus gift, the vow of vengeance, the court in Benares, the yellow-robed hunter Sonuttara, the Bodhisattva's self-amputation of his tusks (*dāna-pāramitā*), the presentation in court, and Queen Subhaddā's fatal collapse from guilt.
  - The mural explicitly incorporates ethical tensions: the hunter disguises himself in the yellow monastic robes of the saṅgha to exploit the Bodhisattva's piety—a critical element highlighted in Buddhist scholastic literature.

### 1.2 Mahabalipuram Monuments & The Great Relief Interpretation
- **Selected Monuments:**
  1. *The Great Bas-Relief* (Arjuna's Penance / Descent of the Ganges)
  2. *Shore Temple* (Alaivāy-k-koyil / Kṣatriyasiṃheśvara & Jalaśayana Perumāl)
  3. *Pancha Rathas* (Dharmaraja, Bhima, Arjuna, Draupadi, Nakula-Sahadeva Rathas)
  4. *Varaha Cave Temple* (Ādi-Varāha / Varāha-maṇḍapa)
- **The Bas-Relief Interpretation:**
  - Rather than artificially taking a single dogmatic side (J. Ph. Vogel's *Descent of the Ganges* vs. J. Dubreuil / C. Sivaramamurti's *Arjuna's Penance*), the project adopts the rigorous scholarly consensus advanced by Michael Rabe (2001) and K.R. Srinivasan (1964): **Śleṣa** (visual double-entendre / polysemy).
  - In 7th-century Pallava court culture (particularly under Narasimhavarman I Māmalla and Narasimhavarman II Rājasiṃha), royal panegyrics routinely combined dual mythological layers. The emaciated yogi embodies both Arjuna obtaining the Pāśupatāstra and Bhagīratha beseeching Shiva for Gaṅgā's descent, paralleling the king's cosmic duty to bring water and security to the realm.

### 1.3 Kolam and Rangoli Distinction & Ethnomathematics
- **Rigorous Cultural Distinction:**
  - Avoid the common mistake of treating Kolam and Rangoli as mere decorative synonyms.
  - *Kolam* (Tamil): Made of rice flour (*arisi maavu*); executed daily at dawn; purpose is *bhūta yajña* (nourishing insects and small organisms) and threshold protection; defined by dot-grid matrix (*pulli*) and closed topological continuous loops (*sikku / kambi*).
  - *Rangoli* (Sanskrit *Rangavalli*): Predominantly festival-oriented (Diwali, etc.); multi-colored mineral powders and petals; pictorial and symbolic motifs (lotuses, lamps, peacocks); less topological.
  - Comparative regional sisters: *Muggu* (Andhra/Telangana), *Alpana* (Bengal), *Jhoti/Chita* (Odisha), *Aripana* (Mithila), *Chowkpurana* (Northern India).
- **Ethnomathematical Framework:**
  - Incorporates the pioneering academic research of Prof. Gift Siromoney (Madras Christian College) on picture languages, array grammars, and Kolam algorithms.
  - Incorporates Marcia Ascher's ethnomathematics (symmetry groups $C_4, D_4$, permutations) and knot theory (Eulerian paths, endless loop *Brahma Mudi*).

---

## 2. Visual Identity & Editorial Design

- **Design Philosophy:** Premium digital cultural exhibition and academic publication. A clean, contemporary layout honoring classical proportions without faux-antiquated kitsch.
- **Color Palette:**
  - Terracotta / Deep Vermilion: `#A33E2B` / `#8B2616` (derived from Ajanta red ochre and Pallava brick/granite)
  - Sandstone / Aged Parchment: `#FAF6EE` / `#F0E8D5` (neutral background, warm ivory)
  - Raw Umber / Deep Espresso: `#2C221E` / `#1A1412` (high-contrast typography)
  - Antique Gold / Ochre: `#C99738` / `#D4A346` (accent, borders, highlights)
  - Deep Lapis Lazuli: `#1F3A52` / `#162736` (Ajanta blue pigment reference)
- **Typography:**
  - Display / Headings: `Cormorant Garamond` & `Cinzel` (graceful classical serifs with historical gravitas)
  - Body / Data: `Inter` / `Source Sans 3` (clean, highly readable sans-serif for rigorous academic text)
  - Accent / Quotes: Cormorant Italic

---

## 3. Technology Stack & Deliverable Formats

- **Website Application:**
  - React 18 + Vite + TypeScript
  - Tailwind CSS for responsive utility styling
  - Lucide React for crisp, accessible icons
  - Canvas & SVG for dynamic Kolam generators and mathematical symmetry diagrams
- **Offline / Archival Deliverables:**
  - *Ajanta Storyboard Booklet:* Standalone high-resolution HTML publication + PDF printable format.
  - *Mahabalipuram Thematic Report:* Formal academic report with figures, footnotes, and bibliography in `.docx` (via `python-docx`) and printable `.html` / `.pdf`.
  - *Mahabalipuram Presentation:* 10-minute slide deck with speaker notes, high-res images, and bibliography in `.pptx` (via `python-pptx`) and interactive web slide deck.
  - *Kolam & Rangoli Academic Poster:* Standalone print-ready A1/A2 format (HTML/CSS print-styled at 300 DPI layout + PDF export).
