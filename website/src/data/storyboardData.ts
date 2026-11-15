import { StoryboardPanel, StudentPlaceholder } from '../types';

export const AJANTA_TEAM: StudentPlaceholder[] = [
  {
    id: "STUDENT_01",
    name: "[Student 1 Name Placeholder]",
    rollNumber: "[Roll Number 01]",
    role: "Lead Iconographer & Epigraphical Researcher",
    contribution: "Cave 17 donor inscriptions analysis, Pali Jātaka 514 comparative textual collation, and iconographic verification against Dieter Schlingloff's scene mappings."
  },
  {
    id: "STUDENT_02",
    name: "[Student 2 Name Placeholder]",
    rollNumber: "[Roll Number 02]",
    role: "Narrative Scriptwriter & Dialogue Dramatist",
    contribution: "Dramatization of the eight-panel sequential narrative, dialogue translation from classical idioms, and pedagogical storytelling structure."
  },
  {
    id: "STUDENT_03",
    name: "[Student 3 Name Placeholder]",
    rollNumber: "[Roll Number 03]",
    role: "Composition & Visual Storyboard Artist",
    contribution: "Scene-by-scene visual framing, architectural reconstruction of Vākāṭaka court pavilions, character silhouette design, and perspective staging."
  },
  {
    id: "STUDENT_04",
    name: "[Student 4 Name Placeholder]",
    rollNumber: "[Roll Number 04]",
    role: "Colorist & Mineral Pigment Specialist",
    contribution: "Reconstruction of Ajanta's mineral chromatic system (red/yellow ochres, terra verde, Afghan lapis lazuli), lighting, and textural shading."
  },
  {
    id: "STUDENT_05",
    name: "[Student 5 Name Placeholder]",
    rollNumber: "[Roll Number 05]",
    role: "Editorial Designer & Digital Archivist",
    contribution: "Typography layout, publication design, image metadata curation, accessibility verification, and interactive web component integration."
  }
];

export const AJANTA_PANELS: StoryboardPanel[] = [
  {
    panelNumber: 1,
    title: "The Himalayan Lotus Sanctuary",
    sanskritTitle: "Padmavane Chaddantavāsa",
    setting: "Lake Chaddanta beneath the Golden Mount (Kañcanagiri), Himalayas",
    narration: "In ancient times, the Bodhisattva dwelt in the secluded Himalayan vales as Ṣaḍdanta, the noble king of eight thousand elephants. Luminous as snow, endowed with six radiant tusks, he governed his realm with supreme gentleness amidst azure lotuses and fragrance-laden groves.",
    dialogue: [
      {
        speaker: "King Ṣaḍdanta",
        text: "Drink freely of the pure waters, gentle ones. In this secluded sanctuary, compassion is our sole law and sanctuary."
      },
      {
        speaker: "Queen Mahāsubhaddā",
        text: "The lake is blessed by your presence, my Lord. May peace ever shelter this herd."
      }
    ],
    iconographicNotes: "Corresponds to Dieter Schlingloff Scene 1 on Cave 17 right corridor wall. Depicts the Bodhisattva in the center of the lake, surrounded by his two consorts and herd. Notice the naturalistic rendering of elephants frolicking amidst blue utpala lotuses, painted with lapis lazuli imported via ancient Silk Road routes from Badakhshan.",
    ethicalTheme: "Ahiṃsā (Universal Non-violence) and Sovereign Harmony",
    reconstructionImage: "/assets/illustrations/panel_1_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_mural_chaddanta"
  },
  {
    panelNumber: 2,
    title: "The Slight of the Śāla Blossom & The Fatal Vow",
    sanskritTitle: "Subhaddāyāḥ Krodhapranidhi",
    setting: "A flowering forest glade of Śāla and Campaka trees",
    narration: "A sudden misfortune ignited tragic wrath. As the king playfully shook a blooming bough, sweet blossoms and fragrant pollen showered upon the elder queen Mahāsubhaddā, while dry twigs, withered leaves, and biting red ants tumbled upon Chullasubhaddā. Consumed by poisonous envy, she mistook innocent chance for calculated scorn.",
    dialogue: [
      {
        speaker: "Chullasubhaddā (aside)",
        text: "He showers her with royal blossoms and flings foul twigs upon my brow! If ascetic penance holds power, I shall starve myself, perish, and be reborn in Benares to destroy him!"
      },
      {
        speaker: "King Ṣaḍdanta (in distance)",
        text: "Come, Subhaddā! The shade is sweet and the breeze brings perfume from the peaks!"
      }
    ],
    iconographicNotes: "Cave 17 continuous narrative sequence. Schlingloff notes the psychological tension conveyed through Chullasubhaddā's averted posture, isolated in the lower corner of the grove, refusing the offerings of the herd.",
    ethicalTheme: "Īrṣyā (Jealousy) and the Poison of Misinterpreted Scorn",
    reconstructionImage: "/assets/illustrations/panel_2_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_mural_chaddanta"
  },
  {
    panelNumber: 3,
    title: "The Royal Court of Benares & The Feigned Longing",
    sanskritTitle: "Vārāṇasyām Dohadaśchalam",
    setting: "Audience hall of King Brahmadatta of Kāśī, Benares",
    narration: "Her bitter penance bore venomous fruit. Reborn as the peerless chief consort of King Brahmadatta of Kāśī, the unresolved grievance burned unquenched. Feigning a mortal pregnancy longing (dohada), she summoned the fiercest hunters of the kingdom to demand the six luminous tusks of the Himalayan elephant king.",
    dialogue: [
      {
        speaker: "Queen Subhaddā",
        text: "O Great King! A vision haunts my soul. In my dreams, six crystal tusks glowing with celestial light pierced the veil of night. Unless their radiance touches my breast, your queen shall not survive the dawn!"
      },
      {
        speaker: "King Brahmadatta",
        text: "Calm your trembling spirit, my Queen. Whatever beast roams between earth and sky, my boldest hunter shall fetch its treasures for your healing."
      }
    ],
    iconographicNotes: "Cave 17 upper register. Masterpiece of Vākāṭaka courtly depiction: slender pillars, pearl necklaces (ekāvalī), striped cotton textiles, and expressive court maidens holding fly-whisks (chauris).",
    ethicalTheme: "The Manipulation of Sovereign Power for Vengeance",
    reconstructionImage: "/assets/illustrations/panel_3_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_facade"
  },
  {
    panelNumber: 4,
    title: "The Deceit of the Ochre Robe",
    sanskritTitle: "Kāṣāyachhadmena Sonuttara",
    setting: "A rocky ravine in the distant Himalayan cedar forest",
    narration: "For seven years, seven months, and seven days, the hunter Sonuttara climbed frozen mountain crags. Knowing the Bodhisattva's boundless reverence for dharma, he wrapped himself in the sacred ochre robe (kāṣāya) of a Buddhist monk and hid within a concealed pit, aiming a deadly poisoned arrow at the approaching monarch.",
    dialogue: [
      {
        speaker: "Hunter Sonuttara",
        text: "The great beast cannot strike a holy monk! Wrapped in this sacred yellow cloth, my poisoned shaft shall strike from behind the stones."
      },
      {
        speaker: "King Ṣaḍdanta",
        text: "Who rests within the rocky cleft clad in the noble vestments of the venerable saṅgha?"
      }
    ],
    iconographicNotes: "Central thematic pivot in Buddhist ethics. The mural emphasizes the sacrilege of wearing the kāṣāya robe for deceit, contrasting Sonuttara's predatory crouch with the Bodhisattva's towering calm.",
    ethicalTheme: "Betrayal of Sacred Trust vs. Unshakable Reverence for Dharma",
    reconstructionImage: "/assets/illustrations/panel_4_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_mural_chaddanta"
  },
  {
    panelNumber: 5,
    title: "The Supreme Gift (Dāna Pāramitā)",
    sanskritTitle: "Dānasya Parā Kāṣṭhā",
    setting: "Beside the mountain stream; King Ṣaḍdanta and the hunter",
    narration: "Pierced by the venomous dart, the Bodhisattva felt the agony of mortal death. Yet when he beheld the yellow monastic cloth, all wrath subsided into infinite pity. Learning of Queen Subhaddā's command, he knelt. Seeing the hunter's arms tremble with exhaustion, the Great Being grasped the saw with his own trunk, voluntarily severing his glorious tusks.",
    dialogue: [
      {
        speaker: "King Ṣaḍdanta",
        text: "Take these tusks, friend, that your arduous journey not be in vain. Sweeter to me than these mortal ivory shafts is the omniscience of supreme enlightenment (bodhi) to liberate all beings!"
      },
      {
        speaker: "Hunter Sonuttara",
        text: "O Noble Being... forgive this wretched wretch! Never has mortal earth witnessed mercy such as this!"
      }
    ],
    iconographicNotes: "The emotional apex of the entire mural cycle. Schlingloff highlights the tender downward curve of Ṣaḍdanta's trunk as he assists his own mutilation, symbolizing the total triumph of bodhicitta over bodily attachment.",
    ethicalTheme: "Dāna Pāramitā (The Perfection of Giving) & Kṣānti (Forbearance)",
    reconstructionImage: "/assets/illustrations/panel_5_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_mural_chaddanta"
  },
  {
    panelNumber: 6,
    title: "The Return of the Severed Tusks to Benares",
    sanskritTitle: "Rājasabhāyāṃ Dantapradānam",
    setting: "The inner royal pavilion of the palace of Benares",
    narration: "Carrying the sacred burden through wild forests, Sonuttara returned to the capital of Kāśī. He knelt before the royal throne, presenting the six radiant, blood-tinged tusks on a golden platter—silent, incorruptible witnesses to a love that surpassed death itself.",
    dialogue: [
      {
        speaker: "Hunter Sonuttara",
        text: "Behold, O Queen! The six gleaming tusks of the Great White King. Know this: he surrendered them of his own free will, breathing blessings upon those who sought his life."
      },
      {
        speaker: "Queen Subhaddā",
        text: "He... he surrendered them willingly? He did not curse my name?"
      }
    ],
    iconographicNotes: "Cave 17 right wall, lower section. The tusks radiate a supernatural pearlescent glow against the rich mineral ochre background of the royal hall.",
    ethicalTheme: "Confrontation Between Earthly Vanity and Divine Selflessness",
    reconstructionImage: "/assets/illustrations/panel_6_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_facade"
  },
  {
    panelNumber: 7,
    title: "The Swoon of Remorse & The Fatal Awakening",
    sanskritTitle: "Subhaddāyāḥ Paścāttāpaḥ Prāṇatyāgaśca",
    setting: "The throne dais; court attendants rushing in anguish",
    narration: "Reaching out to touch the cold, radiant ivory, the veil of karmic delusion shattered. In a blinding flash, she remembered the gentle king of the lotus lake who had loved her without flaw. The catastrophic weight of her own malice struck her breast like a thunderbolt. Uttering a heart-rending cry, she collapsed lifeless into the arms of the King.",
    dialogue: [
      {
        speaker: "Queen Subhaddā (final whisper)",
        text: "My Lord... what have I destroyed? Your soul was as pure as the mountain snow, and my envy was as venomous as the serpent! Forgive me..."
      },
      {
        speaker: "King Brahmadatta",
        text: "Subhaddā! Awaken! What terrible shadow has quenched your life?"
      }
    ],
    iconographicNotes: "One of the most celebrated human figures in world art. The dying queen is portrayed with fluid, limpid grace, her torso slackening, eyes rolling back, caught in mid-fall by her grief-stricken maidens. Praised by Yazdani and Kramrisch for unmatched psychological realism.",
    ethicalTheme: "The Catastrophic Nemesis of Envy & The Awakening of Conscience",
    reconstructionImage: "/assets/illustrations/panel_7_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_mural_chaddanta"
  },
  {
    panelNumber: 8,
    title: "Upasaṃhāra: The Eternal Moral",
    sanskritTitle: "Upasaṃhāraḥ: Śāśvata Dharmaḥ",
    setting: "Dual composition: Royal funeral in Benares & Starlit Himalayan peaks",
    narration: "Thus declared the Buddha: 'Hatred does not cease by hatred at any time; hatred ceases only by love. This is an eternal law.' King Brahmadatta enshrined the sacred tusks in a golden stupa, while in the Himalayan sanctuary, the herd honored their departed leader beneath the immortal stars.",
    dialogue: [
      {
        speaker: "Narrator / Chronicler",
        text: "He who conquers anger by love, and malice by generosity, attains the unshakeable peace of the liberated."
      },
      {
        speaker: "Cave 17 Inscription (Verse 29)",
        text: "As long as the sun dispels darkness with its rays, so long may this mountain vihāra grant delight to the world!"
      }
    ],
    iconographicNotes: "Synthesizes the moral doctrine of the Jātaka with the living architecture of Cave 17. The mural served not merely as decoration, but as an immersive visual sermon for monks and pilgrims meditating along the ambulatory.",
    ethicalTheme: "Universal Compassion (Karuṇā) Transcending Mortality",
    reconstructionImage: "/assets/illustrations/panel_8_reconstruction.jpg",
    authenticReferenceId: "ajanta_cave_17_facade"
  }
];

export const MINERAL_PIGMENTS = [
  {
    name: "Red & Yellow Ochre",
    vernacular: "Geru & Ramraj",
    origin: "Local Deccan ferruginous trap rock (iron oxides)",
    use: "Flesh tones, court textiles, architectural columns, framing borders"
  },
  {
    name: "Terra Verde (Celadonite)",
    vernacular: "Hara Pathar",
    origin: "Deccan volcanic basalt vesicles (hydrous silicate)",
    use: "Lush forest vegetation, tree canopies, shading, animal hides"
  },
  {
    name: "Lapis Lazuli (Ultramarine)",
    vernacular: "Lajward",
    origin: "Badakhshan mines (Afghanistan), Silk Road trade import",
    use: "Celestial lotuses (utpala), royal jewelry, Bodhisattva halo, divine water"
  },
  {
    name: "Kaolin & Conch-Shell White",
    vernacular: "Chunam & Khari",
    origin: "Slaked conch lime and white sedimentary kaolinite clay",
    use: "Radiant six tusks, pearl necklaces (muktāhāra), eye whites, highlights"
  },
  {
    name: "Lampblack",
    vernacular: "Kajal",
    origin: "Soot collected from burning mustard oil or sesame lamps",
    use: "Outlining contours, pupil details, hair tresses, shadow modeling"
  }
];
