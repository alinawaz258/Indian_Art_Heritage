import { RegionalFloorArt, StudentPlaceholder } from '../types';

export const KOLAM_POSTER_TEAM: StudentPlaceholder[] = [
  {
    id: "KOLAM_ST_01",
    name: "[Student 1 Name Placeholder]",
    rollNumber: "[Roll Number 01]",
    role: "Cultural Anthropologist & Field Ethnographer",
    contribution: "Field documentation of threshold rituals, oral traditions of Tamil women practitioners, and analysis of Bhūta Yajña ecological charity."
  },
  {
    id: "KOLAM_ST_02",
    name: "[Student 2 Name Placeholder]",
    rollNumber: "[Roll Number 02]",
    role: "Ethnomathematician & Knot Theorist",
    contribution: "Formalization of Eulerian loops, Brahma Mudi knot topological invariants, and mapping dihedral point groups (C4, D4, D8)."
  },
  {
    id: "KOLAM_ST_03",
    name: "[Student 3 Name Placeholder]",
    rollNumber: "[Roll Number 03]",
    role: "Computer Science & Array Grammar Researcher",
    contribution: "Synthesizing Prof. Gift Siromoney's picture languages, recursive L-systems, and computational algorithms for Kolam generation."
  },
  {
    id: "KOLAM_ST_04",
    name: "[Student 4 Name Placeholder]",
    rollNumber: "[Roll Number 04]",
    role: "Regional Taxonomy & Comparative Scholar",
    contribution: "Delineating the non-interchangeable distinction between Kolam, Rangoli, Muggu, Alpana, Jhoti, Aripana, and Chowkpurana."
  },
  {
    id: "KOLAM_ST_05",
    name: "[Student 5 Name Placeholder]",
    rollNumber: "[Roll Number 05]",
    role: "Vector Cartographer & Print Designer",
    contribution: "Vector SVG drafting of dot matrices, geometric step-by-step schematics, publication layout, and 300 DPI print-ready poster production."
  }
];

export const REGIONAL_FLOOR_ARTS: RegionalFloorArt[] = [
  {
    region: "Tamil Nadu & Southern India",
    name: "Kolam",
    vernacularScript: "கோலம்",
    medium: "Raw edible white rice flour (arisi maavu), wet ground rice paste (padi), red ochre edging (kāvi)",
    ritualContext: "Daily threshold ritual (vāsal) executed at dawn; Margazhi festival month street competitions",
    keyMotifs: "Continuous closed curves (kambi/sikku), lotus petals, Brahma Mudi endless knot",
    geometricLogic: "Rigid dot matrix (pulli) with orthogonal (nēr) or staggered (kanni) lattices; Eulerian loops"
  },
  {
    region: "Maharashtra, Gujarat, Rajasthan & North India",
    name: "Rangoli",
    vernacularScript: "रंगोली (Rangavalli)",
    medium: "Fine colored mineral powders, marble dust, colored sand, flower petals, turmeric, vermilion",
    ritualContext: "Predominantly festive and ceremonial: Diwali, Makar Sankranti, weddings, temple utsavas",
    keyMotifs: "Auspicious clay lamps (diyas), peacocks, swastikas, footprint of Lakshmi, kalash vessels",
    geometricLogic: "Radial symmetry and pictorial designs; less strictly governed by dot topology"
  },
  {
    region: "Andhra Pradesh & Telangana",
    name: "Muggu",
    vernacularScript: "ముగ్గు",
    medium: "White calcium/chalk powder or rice flour, decorated with fresh yellow pumpkin blossoms (gobbemma)",
    ritualContext: "Daily morning threshold art; Sankranti festival courtyard exhibitions",
    keyMotifs: "Chitti Muggu (intricate diamond grids), rathas (chariots), swastikas, lotus blooms",
    geometricLogic: "Mathematical dot patterns with interleaved symmetry"
  },
  {
    region: "West Bengal & Assam",
    name: "Alpana",
    vernacularScript: "আলপনা",
    medium: "Wet ground rice paste (pituli) diluted with water, applied fluidly with a small piece of cotton cloth",
    ritualContext: "Lifecycle ceremonies, Kojagari Lakshmi Puja, Durga Puja, wedding sanctums",
    keyMotifs: "Flowing creeping vines (kalka), conch shells (shankha), fish, stylized footprints of Lakshmi",
    geometricLogic: "Freehand lyrical cursive strokes without pre-set dot grids"
  },
  {
    region: "Odisha",
    name: "Jhoti / Chita",
    vernacularScript: "ଝୋଟି / ଚିତା",
    medium: "Fermented white rice paste (pithau), drawn on floors, thresholds, and mud walls with finger twigs",
    ritualContext: "Manabasa Gurubara (Thursdays of Margashira month dedicated to Goddess Lakshmi)",
    keyMotifs: "Stylized stacked grain sheaves (dhāna chita), lotus footprints of Lakshmi",
    geometricLogic: "Linear and vertical rhythm repeating auspicious symbols"
  },
  {
    region: "Mithila / Bihar",
    name: "Aripana",
    vernacularScript: "अरिपन",
    medium: "Crushed raw rice paste (pithar) applied with fingers, accented with red sindoor and black soot",
    ritualContext: "Lifecycle samskaras (initiations, weddings, Kohbar bridal chambers), Vrata rituals",
    keyMotifs: "Tantric cosmograms, sacred lotuses, footprints of ancestors, sacred serpents (Nāgas)",
    geometricLogic: "Centric concentric cosmograms encoding esoteric cosmological geometries"
  },
  {
    region: "Uttar Pradesh & Punjab",
    name: "Chowkpurana",
    vernacularScript: "चौकपूर्णा",
    medium: "Coarse wheat flour, dried plaster, turmeric (haldi), and dry vermilion",
    ritualContext: "Setting the sacred precinct for domestic fire sacrifices, marriages, and baby showers",
    keyMotifs: "Square geometric boundaries, swastikas, eight-petaled lotus mandalas",
    geometricLogic: "Orthogonal quadrant symmetry defining ritual sacred space"
  }
];

export const ETHNOMATHEMATICS_CONCEPTS = [
  {
    title: "1. The Pulli (Dot) Coordinate Matrix",
    description: "Kolam designs begin with a formal discrete point grid that serves as topological guideposts. Two primary classes exist: Nēr Pulli (Cartesian square lattice where each node is (xi, yj)) and Kanni/Sandhu Pulli (triangular/interleaved diamond lattice where each row shifts by half the spatial interval). The grid defines the boundary conditions for the continuous curve."
  },
  {
    title: "2. Knot Theory & Eulerian Circuits (Brahma Mudi)",
    description: "In classical Sikku Kolam, the artist creates a single continuous, non-self-intersecting closed loop that wraps smoothly around the dots without crossing them. In graph theory, this corresponds to an Eulerian Circuit: a closed trail that visits every vertex according to strict parity constraints. Known culturally as Brahma Mudi (Brahma's Knot), it has neither beginning nor end, symbolizing eternal cosmic recurrence."
  },
  {
    title: "3. Array Grammars & Picture Languages (Prof. Gift Siromoney)",
    description: "In 1974, Prof. Gift Siromoney, Rani Siromoney, and Kamala Krithivasan at Madras Christian College demonstrated that Kolam patterns can be generated formally using Array Grammars and Picture Languages. By defining basic matrix primitives and recursive production rewrite rules, entire infinite families of Kolams can be generated algorithmically, foreshadowing formal models in robotic path-planning and theoretical computer science."
  },
  {
    title: "4. Symmetry Groups (D4, D8) & Dihedral Invariants",
    description: "Ethnomathematician Marcia Ascher (1991) formalized the symmetry groups present in Kolam art. Most classical threshold patterns exhibit Dihedral Group D4 symmetry (4-fold rotation at 90°, with horizontal, vertical, and two diagonal reflection axes), or D8 octagonal symmetry. The mind of the traditional practitioner computes these permutations fluidly in real-time."
  },
  {
    title: "5. Self-Similarity & Fractal Scaling",
    description: "Studies by Yanagisawa and Robinson proved that traditional recursive Kolam loops exhibit genuine fractal properties and fractional Hausdorff dimensions. As patterns scale outward, each quadrant replicates the structural motifs of the entire composition, closely mirroring the recursive space-filling curves of Peano and Sierpiński."
  }
];
