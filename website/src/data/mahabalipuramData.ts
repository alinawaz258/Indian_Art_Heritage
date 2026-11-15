import { Monument } from '../types';

export const MAHABALIPURAM_MONUMENTS: Monument[] = [
  {
    id: "descent_ganges",
    name: "The Great Bas-Relief",
    tamilName: "கங்கை இறங்குதல் / அருச்சுனன் தபசு",
    period: "Reign of Narasimhavarman I Māmalla (c. 630–668 CE)",
    patron: "Pallava Dynasty of Kanchipuram",
    architectureType: "Open-Air Monolithic Narrative Granite Relief",
    summary: "The largest continuous rock-cut narrative relief in the world, spanning two gigantic boulders measuring 27 meters by 9 meters, split by a natural central fissure engineered as an active sacred water cascade.",
    image: "./assets/authentic/mahabalipuram_descent_ganges_monolith.jpg",
    caption: "The Great Bas-Relief (Descent of the Ganges / Arjuna's Penance). 27m granite monolith with central cleft representing holy Gaṅgā. Photo: Wikimedia / CC BY-SA 4.0",
    thematicAnalysis: "The Great Relief represents the zenith of Pallava royal ideology and cosmic myth. The central fissure, channeled by rainwater cisterns atop the rock, created an actual cascading waterfall over the sculpted Nāgarāja and Nāgī. The scene combines celestial beings, forest ascetics performing sandhyā rituals at a riverbank shrine, life-sized elephants, and a satirical tableau of an ascetic cat surrounded by naive mice.",
    iconography: [
      "Natural vertical fissure acting as the descending celestial river Gaṅgā",
      "Emaciated ascetic in ūrdhva-bāhu posture standing on one leg (Arjuna/Bhagīratha)",
      "Four-armed Lord Śiva standing with gaṇa attendants, granting boons in vara-mudrā",
      "Serpent king Nāgarāja and queen Nāgī swimming upwards with folded hands (añjali-mudrā)",
      "Monumental herd of elephants, featuring a protective bull and playful calves",
      "The 'Faux Ascetic Cat' parody from the Pañcatantra, preaching false piety to mice"
    ],
    architecturalFeatures: [
      "27 meters (90 feet) in length by 9 meters (30 feet) in height",
      "Excavated entirely out of living coarse-grained charnockite granite",
      "Summit waterworks: artificial stone sluice and cisterns for kinetic water effects",
      "Over 140 individual human, semi-divine, and animal figures sculpted in low and high relief"
    ],
    hotspots: [
      {
        id: "hs_ascetic",
        x: 46,
        y: 38,
        title: "The Ascetic (Arjuna or Bhagīratha)",
        description: "Standing on one leg with arms raised high in intense penance (tapas). Embodies both Bhagiratha bringing the river and Arjuna seeking the Pasupatastra weapon."
      },
      {
        id: "hs_cleft",
        x: 50,
        y: 52,
        title: "The Central Fissure & Nāgas",
        description: "The natural chasm representing Ganga descending to earth, flanked by life-sized aquatic serpent deities swimming in the current."
      },
      {
        id: "hs_elephants",
        x: 68,
        y: 65,
        title: "The Life-Sized Elephant Herd",
        description: "Praised as the finest naturalistic animal sculpture in world art, showing a massive bull shielding calves sheltering beneath him."
      },
      {
        id: "hs_cat",
        x: 48,
        y: 72,
        title: "The Ascetic Cat Parody",
        description: "A humorous Pañcatantra fable: the cat stands in false pious meditation while unsuspecting mice play around its paws."
      }
    ],
    conservationNotes: "Surface erosion from wind-blown coastal sand and thermal expansion cycles. Monitored by the Archaeological Survey of India (ASI) with micro-weathering sensors."
  },
  {
    id: "shore_temple",
    name: "The Shore Temple Complex",
    tamilName: "அலைவாய்க் கோயில் (Alaivāy-k-koyil)",
    period: "Reign of Narasimhavarman II Rājasiṃha (c. 700–728 CE)",
    patron: "Pallava Dynasty (Structural Masonry Phase)",
    architectureType: "Structural Granite Masonry Temple Complex",
    summary: "Built right at the water's edge of the Bay of Bengal, the Shore Temple marks the historical transition from subtractive rock-cut caves to additive dressed granite masonry, housing a unique triple-sanctum dedicated to both Śiva and Viṣṇu.",
    image: "./assets/authentic/mahabalipuram_shore_temple_exterior.jpg",
    caption: "The Shore Temple complex against the Bay of Bengal surf, showing the eastern five-tiered vimāna and perimeter Nandi bulls. Photo: Wikimedia / CC BY-SA 3.0",
    thematicAnalysis: "The Shore Temple served as both a royal sanctuary and an imposing visual landmark for maritime traders crossing the Bay of Bengal. Architecturally, it synthesizes Śaivism and Vaiṣṇavism: two towering vimānas for Śiva flank an intermediate flat-roofed chamber enshrining a rock-cut monolithic sculpture of Viṣṇu reclining on the living coastal reef (Jalaśayana Perumāl).",
    iconography: [
      "Eastern vimāna (Kṣatriyasiṃheśvara): 5-tiered Dravidian tower housing a 16-faceted black basalt Dharalinga",
      "Western vimāna (Rājasimheśvara): 3-tiered tower facing the landward approach",
      "Intermediate shrine (Jalaśayana Perumāl): Monolithic rock-carved Anantaśāyī Viṣṇu on the living reef",
      "Rear walls decorated with the classic Pallava Somāskanda panel (Śiva, Umā, and baby Skanda)",
      "Perimeter enclosure wall crowned by hundreds of couchant Nandi bulls gazing seaward"
    ],
    architecturalFeatures: [
      "Constructed from finely dressed ashlar blocks of local charnockite granite",
      "Steep pyramidal vimānas crowned with octagonal domical śikharas and stūpīs",
      "Littoral protective groynes and seawalls constructed by ASI to arrest coastal wave impact",
      "2004 Tsunami revelations: submerged foundations and a stone lion discovered 300m offshore"
    ],
    conservationNotes: "Relentless salt-spray crystallization inside granite pores causes granitic exfoliation. ASI treats stone with paper-pulp desalting poultices and maintains a Casuarina windbreak buffer."
  },
  {
    id: "pancha_rathas",
    name: "The Pancha Rathas (Five Chariots)",
    tamilName: "ஐந்து இரதங்கள் (Ainthu Rathangal)",
    period: "Reign of Narasimhavarman I Māmalla (c. 630–668 CE)",
    patron: "Pallava Dynasty (Monolithic Phase)",
    architectureType: "Monolithic Rock-Cut Temple Archetypes",
    summary: "A living laboratory of early Dravidian temple design, featuring five free-standing monolithic shrines carved top-down from a single whale-backed granite outcrop, each testing a distinct roof profile.",
    image: "./assets/authentic/mahabalipuram_pancha_rathas_overview.jpg",
    caption: "The Five Rathas: Draupadi, Arjuna, Bhima, Dharmaraja, and Nakula-Sahadeva Rathas. Photo: Wikimedia / CC BY-SA 3.0",
    thematicAnalysis: "Though associated with the heroes of the Mahābhārata by later folklore, these shrines are not chariots or palaces, but full-scale sculptural models exploring every primary roof form of South Indian sacred architecture. From the rural thatched hut of Draupadi Ratha to the three-tiered pyramidal tower of Dharmaraja Ratha, they established the enduring syntax of the Dravidian order.",
    iconography: [
      "Draupadi Ratha: Thatched hut roof (kuṭāgāra/bānglā), dedicated to Goddess Durgā with guardian dvārapālikās",
      "Arjuna Ratha: Square two-tiered (dvitāla) vimāna with graceful mithuna couples and Śiva with Nandi",
      "Bhima Ratha: Oblong plan with barrel-vaulted wagon roof (śālā-śikhara) and chaitya kūḍu arches",
      "Dharmaraja Ratha: 3-tiered (tritāla) vimāna featuring the earliest South Indian Ardhanārīśvara and royal portraits",
      "Nakula-Sahadeva Ratha: Apsidal elephant-backed (gajapṛṣṭha) design standing beside a monolithic granite elephant"
    ],
    architecturalFeatures: [
      "Carved top-down in full exterior 3D without internal supporting masonry",
      "Pioneering structural taxonomy that influenced Chola, Vijayanagara, and Southeast Asian temples",
      "Inscriptions in Pallava Grantha script recording King Narasimhavarman I's titles: 'Śrī Megha' and 'Trailokyanātha'"
    ],
    conservationNotes: "Unfinished state preserved in pristine dry condition; protected from direct ocean surf by natural inland granite berms."
  },
  {
    id: "varaha_cave",
    name: "The Varaha Cave Temple",
    tamilName: "வராக மண்டபம் (Varāha-maṇḍapa)",
    period: "Mid-7th Century CE (Reign of Narasimhavarman I Māmalla)",
    patron: "Pallava Dynasty",
    architectureType: "Subterranean Rock-Cut Mandapa Sanctuary",
    summary: "An architecturally framed subterranean cave sanctuary on the main hill, renowned for four monumental high-relief sculptural panels executed with slender, fluid anatomical grace.",
    image: "./assets/authentic/mahabalipuram_gajalakshmi_panel.jpg",
    caption: "The Gaja-Lakṣmī Abhiṣeka panel, Varaha Cave Temple. Goddess Lakṣmī anointed by royal elephants. Photo: ASI / Wikimedia / CC BY-SA 3.0",
    thematicAnalysis: "The Varaha Cave Temple offers an intimate counterpoint to the colossal open-air reliefs. Its pillared portico rests on the heads of mythical vyālas (horned lions), opening into a hall with four masterpieces of Pallava high-relief carving: the cosmic rescue of Bhūdevī by Varāha, the auspicious bath of Gaja-Lakṣmī, the celestial strides of Trivikrama, and the regal poise of Durgā.",
    iconography: [
      "Bhū-Varāha: Lord Viṣṇu as the boar hero stepping upon Śeṣanāga, tenderly cradling the Earth Goddess Bhūdevī",
      "Gaja-Lakṣmī: The Goddess of Fortune seated upon a lotus, bathed by celestial elephants pouring consecrated water",
      "Trivikrama: Viṣṇu's cosmic strides bisecting the heavens, witnessed by Brahmā, Śiva, Sun, and Moon",
      "Durgā / Harihara: Graceful, slender proportions characteristic of 7th-century Pallava court aesthetics"
    ],
    architecturalFeatures: [
      "Fluted columns supported on seated vyāla (lion) bases",
      "Carved directly into the western face of the central granitic ridge",
      "Intimate relief framing designed for lamp-lit devotional viewing"
    ],
    conservationNotes: "Protected from direct rainfall by deep overhanging rock eaves; periodic biological moss cleaning by ASI chemists."
  }
];

export const SLESHA_DEBATE_POINTS = {
  title: "The Theory of Visual Śleṣa (Double-Entendre) in Pallava Art",
  scholar: "Dr. Michael D. Rabe (2001) & K. R. Srinivasan (1964)",
  summary: "Why choose between Arjuna and Bhagīratha when 7th-century Pallava court culture celebrated dual meanings?",
  aspects: [
    {
      heading: "Literary Parallel (Kāvya Tradition)",
      description: "In the 7th-century Sanskrit and Tamil court of Kanchi, where master poets like Daṇḍin and Bhāravi flourished, royal panegyrics (praśastis) routinely employed śleṣa—crafting verses where each word carried two divergent, equally valid meanings."
    },
    {
      heading: "The King as Both Ancestor & Hero",
      description: "By depicting the yogi as simultaneously Bhagīratha (who delivered life-giving water to dry land) and Arjuna (who secured the supreme weapon for victory), King Narasimhavarman I proclaimed himself both the fertility provider for drought-prone Tondaimandalam and the invincible martial defender of the realm."
    },
    {
      heading: "Resolution of the Dispute",
      description: "Modern scholarship no longer views Vogel's 'Ganges' and Dubreuil's 'Arjuna' as mutually exclusive, but as twin harmonic melodies played simultaneously across 90 feet of coastal granite."
    }
  ]
};
