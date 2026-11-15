import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, hex_color):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def create_report():
    doc = docx.Document()
    
    # Page setup: Standard A4 / Letter with 1-inch margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)
        
    # Styles setup
    style_normal = doc.styles['Normal']
    font_normal = style_normal.font
    font_normal.name = 'Georgia'
    font_normal.size = Pt(11)
    font_normal.color.rgb = RGBColor(0x2C, 0x22, 0x1E) # Raw umber
    style_normal.paragraph_format.line_spacing = 1.25
    style_normal.paragraph_format.space_after = Pt(6)

    # Palette
    COLOR_PRIMARY = RGBColor(0x8B, 0x26, 0x16) # Deep Terracotta
    COLOR_SECONDARY = RGBColor(0x1F, 0x3A, 0x52) # Pallava Indigo
    COLOR_MUTED = RGBColor(0x66, 0x55, 0x4E)

    # -------------------------------------------------------------
    # TITLE & HEADER BLOCK
    # -------------------------------------------------------------
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(12)
    title_p.paragraph_format.space_after = Pt(4)
    title_run = title_p.add_run("GRANITE, SEA, AND SACRED SOVEREIGNTY")
    title_run.font.name = 'Georgia'
    title_run.font.size = Pt(24)
    title_run.font.bold = True
    title_run.font.color.rgb = COLOR_PRIMARY
    
    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_after = Pt(18)
    sub_run = sub_p.add_run("A Thematic Architectural and Iconographic Analysis of Pallava Monuments at Māmallapuram")
    sub_run.font.name = 'Georgia'
    sub_run.font.size = Pt(14)
    sub_run.font.italic = True
    sub_run.font.color.rgb = COLOR_SECONDARY

    # Metadata Table
    meta_table = doc.add_table(rows=2, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_table.autofit = False
    
    col_widths = [Inches(3.2), Inches(3.3)]
    for row in meta_table.rows:
        for idx, width in enumerate(col_widths):
            row.cells[idx].width = width

    cell_00 = meta_table.cell(0, 0)
    cell_00.paragraphs[0].add_run("Course: Indian Art History & Sacred Architecture\nAcademic Session: 2026–2027\nInstitution: Department of Fine Arts & Archaeology").font.size = Pt(9.5)
    
    cell_01 = meta_table.cell(0, 1)
    cell_01.paragraphs[0].add_run("Author Team: Research Group IV\nStudent Placeholders: [Team of 5 Candidates]\nDate of Submission: November 2026").font.size = Pt(9.5)

    cell_10 = meta_table.cell(1, 0)
    set_cell_background(cell_10, "F0E8D5")
    p10 = cell_10.paragraphs[0]
    p10.add_run("Core Monuments Examined:").bold = True
    p10.add_run("\n1. The Great Bas-Relief (Descent of the Ganges / Arjuna's Penance)\n2. The Shore Temple Complex\n3. The Five Monolithic Rathas (Pancha Rathas)\n4. The Varaha Cave Temple (Varāha-maṇḍapa)")
    p10.runs[0].font.size = Pt(9)
    p10.runs[1].font.size = Pt(8.5)

    cell_11 = meta_table.cell(1, 1)
    set_cell_background(cell_11, "F0E8D5")
    p11 = cell_11.paragraphs[0]
    p11.add_run("Scholarly Methodology:").bold = True
    p11.add_run("\nTextual, epigraphical, and structural analysis grounded in ASI documentation, K.R. Srinivasan, Michael D. Rabe, and Stella Kramrisch. Incorporates the theory of visual śleṣa (polysemy).")
    p11.runs[0].font.size = Pt(9)
    p11.runs[1].font.size = Pt(8.5)

    doc.add_paragraph().paragraph_format.space_after = Pt(12)

    # -------------------------------------------------------------
    # SECTION 1: HISTORICAL & MARITIME PALLAVA CONTEXT
    # -------------------------------------------------------------
    h1 = doc.add_paragraph()
    h1.paragraph_format.space_before = Pt(16)
    h1.paragraph_format.space_after = Pt(4)
    r_h1 = h1.add_run("1. The Historical and Maritime Matrix of Māmallapuram")
    r_h1.font.size = Pt(16)
    r_h1.font.bold = True
    r_h1.font.color.rgb = COLOR_PRIMARY

    p_intro = doc.add_paragraph()
    p_intro.add_run(
        "Māmallapuram (popularly Mahabalipuram), situated along the storm-beaten Coromandel coast of modern Tamil Nadu, "
        "represents one of the most audacious creative moments in the architectural history of South Asia. During the seventh and "
        "early eighth centuries CE, under the energetic patronage of the Pallavas of Kanchipuram, this littoral harbor became not "
        "only the commercial gateway to Southeast Asia, Sri Lanka, and China, but also a transformative open-air laboratory for rock-cut "
        "and structural temple experimentation. As documented in the Periplus of the Erythraean Sea (identifying it as Sopatma) and Ptolemy's "
        "Geography, Māmallapuram stood at the nexus of trans-oceanic spice and silk trade routes."
    )

    p_dynasty = doc.add_paragraph()
    p_dynasty.add_run(
        "The dynastic evolution of Pallava architecture unfolds through three monumental phases: first, the subterranean cave-temple excavations "
        "inaugurated by Mahendravarman I (c. 600–630 CE), who proudly recorded in the Mandagapattu inscription his triumph over ephemeral materials "
        "by creating temples without brick, timber, metal, or mortar; second, the breathtaking monolithic rock-cut shrines (*rathas*) and colossal "
        "reliefs under his son Narasimhavarman I Māmalla ('the Great Wrestler', c. 630–668 CE); and third, the sophisticated structural granite "
        "masonry sanctuaries perfected under Narasimhavarman II Rājasiṃha (c. 700–728 CE). Across this stylistic continuum, granite—a material of "
        "notorious hardness and coarse crystalline texture—was treated with fluid, lyrical plasticity, mirroring the living waters of the Bay of Bengal."
    )

    # -------------------------------------------------------------
    # SECTION 2: THE GREAT BAS-RELIEF & THE ŚLEṢA DEBATE
    # -------------------------------------------------------------
    h2 = doc.add_paragraph()
    h2.paragraph_format.space_before = Pt(16)
    h2.paragraph_format.space_after = Pt(4)
    r_h2 = h2.add_run("2. The Great Bas-Relief: Deciphering the Visual Text of 'Arjuna's Penance' vs. 'Descent of the Ganges'")
    r_h2.font.size = Pt(16)
    r_h2.font.bold = True
    r_h2.font.color.rgb = COLOR_PRIMARY

    p_relief_1 = doc.add_paragraph()
    p_relief_1.add_run(
        "Spanning two massive natural granite boulders measuring 27 meters (90 feet) in length and 9 meters (30 feet) in height, the Great Bas-Relief "
        "stands as the largest continuous rock-cut narrative relief in the world. Dominating the composition is a profound natural cleft separating the "
        "two boulders. In antiquity, stone masonry cisterns constructed on the summit directed monsoon rains down this central cleft through an artificial "
        "sluice, transforming the fissure into a literal, cascading cataract that splashed down over life-sized sculptures of the serpent king Nāgarāja "
        "and his consort Nāgī swimming upwards with hands folded in reverent adoration (*añjali-mudrā*)."
    )

    # Insert Image 1: Monolith
    img_path_1 = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_descent_ganges_monolith.jpg")
    if os.path.exists(img_path_1):
        doc.add_paragraph().paragraph_format.space_after = Pt(2)
        doc.add_picture(img_path_1, width=Inches(6.2))
        cap1 = doc.add_paragraph()
        cap1.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cap1.paragraph_format.space_after = Pt(8)
        run_cap1 = cap1.add_run("Figure 1. The Great Bas-Relief at Māmallapuram: 27m panoramic granite monolith depicting the descent of the sacred river amidst celestials, ascetics, and wildlife. Photo: Wikimedia Commons / CC BY-SA.")
        run_cap1.font.size = Pt(8.5)
        run_cap1.font.italic = True
        run_cap1.font.color.rgb = COLOR_MUTED

    p_relief_debate = doc.add_paragraph()
    p_relief_debate.add_run(
        "For over a century, art historians have intensely debated the iconographical identity of the relief. Two competing schools of thought emerged:\n"
        "1. The 'Descent of the Ganges' (Bhagīratha's Penance): Championed by J. Ph. Vogel (1914) and T. N. Ramachandran (1951), this interpretation "
        "reads the scene as the mythological descent of the celestial river Gaṅgā to earth, brought down through the austere penance of King Bhagīratha "
        "to purify the ashes of his sixty thousand ancestors (the sons of Sagara). The central cleft represents Gaṅgā, flanked by the four-armed Śiva "
        "who arrives to grant the boon, accompanied by soaring vidyādharas, gandharvas, kinnaras, and terrestrial hermits performing sandhyā rituals at a riverbank temple.\n"
        "2. The 'Arjuna's Penance' (Kirātārjunīya): Advocated by J. Dubreuil (1916) and C. Sivaramamurti (1978), this view identifies the emaciated ascetic "
        "standing on one leg with arms raised aloft (*ūrdhva-bāhu*) as the Pāṇḍava hero Arjuna performing severe tapas on Indrakīla mountain to win the divine "
        "weapon *Pāśupatāstra* from Lord Śiva, as narrated in the Mahābhārata and Bhāravi's court epic *Kirātārjunīya*."
    )

    p_relief_slesha = doc.add_paragraph()
    p_relief_slesha.add_run(
        "The Definitive Scholarly Synthesis — The Theory of Śleṣa: Rather than forcing an artificial binary, modern scholarship, definitively "
        "articulated by Michael D. Rabe (*The Great Penance at Māmallapuram: Deciphering a Visual Text*, 2001) and endorsed by K. R. Srinivasan (1964), "
        "demonstrates that the relief is an intentional visual masterpiece of **śleṣa** (simultaneous polysemy / double-entendre). In the sophisticated "
        "Sanskrit and Tamil courtly milieu of the 7th-century Pallavas, royal poets regularly composed verses with twin, perfectly valid semantic readings. "
        "Visually, the composition functions identically: the ascetic is simultaneously Bhagīratha (the pious ancestor who channels life-giving water to dry "
        "land) and Arjuna (the invincible warrior who secures divine weapons for dynastic victory). By conflating both archetypes, the relief serves as a grand "
        "imperial panegyric (*praśasti*) honoring King Narasimhavarman I Māmalla himself, celebrating him as both protector of cosmic order and provider of waters "
        "for the drought-prone realm of Tondaimandalam."
    )

    # Detail of elephant herd
    img_path_ele = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_bas_relief_elephants.jpg")
    if os.path.exists(img_path_ele):
        doc.add_paragraph().paragraph_format.space_after = Pt(2)
        doc.add_picture(img_path_ele, width=Inches(5.8))
        cap2 = doc.add_paragraph()
        cap2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cap2.paragraph_format.space_after = Pt(8)
        run_cap2 = cap2.add_run("Figure 2. Detail of the life-sized elephant herd, lower right quadrant of the Great Relief. Note the young calves sheltering beneath the tusker, demonstrating naturalistic observation. Photo: Wikimedia Commons / CC BY-SA.")
        run_cap2.font.size = Pt(8.5)
        run_cap2.font.italic = True
        run_cap2.font.color.rgb = COLOR_MUTED

    p_relief_nature = doc.add_paragraph()
    p_relief_nature.add_run(
        "Equally remarkable is the relief's ecological and naturalistic genius. In the lower right, a life-sized male tusker stands with majestic grandeur, "
        "beneath whose belly baby elephant calves shelter with affectionate intimacy. Nearby, monkeys groom each other, deer drink from the stream, and a "
        "clever satirical tableau depicts an ascetic cat standing on its hind legs in false piety while unsuspecting mice dance at its feet—a witty allusion "
        "to fables from the Pañcatantra warning against hypocritical holy men."
    )

    # -------------------------------------------------------------
    # SECTION 3: THE SHORE TEMPLE COMPLEX
    # -------------------------------------------------------------
    h3 = doc.add_paragraph()
    h3.paragraph_format.space_before = Pt(16)
    h3.paragraph_format.space_after = Pt(4)
    r_h3 = h3.add_run("3. The Shore Temple Complex: Littoral Architecture and Cosmic Syncretism")
    r_h3.font.size = Pt(16)
    r_h3.font.bold = True
    r_h3.font.color.rgb = COLOR_PRIMARY

    p_shore_1 = doc.add_paragraph()
    p_shore_1.add_run(
        "Erected during the reign of Narasimhavarman II Rājasiṃha (c. 700–728 CE), the Shore Temple (*Alaivāy-k-koyil*) signifies the monumental transition "
        "from subtractive rock-cut architecture to additive, structural masonry engineering. Positioned right on the water's edge of the Coromandel coast, "
        "the temple complex was engineered from finely cut blocks of local charnockite granite, designed to serve both as a sacred ritual compound and as an "
        "imposing navigational beacon for merchants sailing the Indian Ocean."
    )

    img_path_shore = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_shore_temple_exterior.jpg")
    if os.path.exists(img_path_shore):
        doc.add_paragraph().paragraph_format.space_after = Pt(2)
        doc.add_picture(img_path_shore, width=Inches(5.8))
        cap3 = doc.add_paragraph()
        cap3.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cap3.paragraph_format.space_after = Pt(8)
        run_cap3 = cap3.add_run("Figure 3. The Shore Temple facing the Bay of Bengal, showing the eastern five-tiered vimāna and surrounding enclosure wall. Photo: Wikimedia Commons / CC BY-SA.")
        run_cap3.font.size = Pt(8.5)
        run_cap3.font.italic = True
        run_cap3.font.color.rgb = COLOR_MUTED

    p_shore_arch = doc.add_paragraph()
    p_shore_arch.add_run(
        "Architectural Layout and Tripartite Sanctum: The temple complex houses three interconnected shrines within a walled precinct:\n"
        "1. Kṣatriyasiṃheśvara (East-Facing Śiva Shrine): The grander of the two pyramidal towers, featuring a five-tiered (*pañcatāla*) Dravidian vimāna "
        "crowned by an octagonal śikhara and kalasa finial. The sanctum enshrines a sixteen-faceted black basalt Dharalinga and a rear wall carved with the "
        "classic Pallava Somāskanda relief (Śiva, Umā, and the infant Skanda).\n"
        "2. Rājasimheśvara (West-Facing Śiva Shrine): A three-tiered vimāna facing the landward approach, displaying identical iconographical motifs.\n"
        "3. Jalaśayana Perumāl (Central Intermediate Shrine): A flat-roofed chamber situated between the two towers, enshrining a magnificent rock-cut "
        "monolith of Lord Viṣṇu reclining upon the serpent Śeṣanāga (*Anantaśāyī Viṣṇu*). Crucially, this Viṣṇu carving was executed in situ from an original "
        "living granite rock outcrop around which the entire structural masonry complex was subsequently built. This juxtaposition reveals a deliberate "
        "theological synthesis, uniting Śaiva and Vaiṣṇava devotions under royal patronage."
    )

    p_shore_cons = doc.add_paragraph()
    p_shore_cons.add_run(
        "Conservation Dynamics & The 2004 Tsunami Revelations: Subjected to thirteen centuries of relentless salt-spray aerosol, wind abrasion, and tidal surges, "
        "the Shore Temple has suffered catastrophic granitic exfoliations. To counteract this decay, the Archaeological Survey of India (ASI) has implemented "
        "stone consolidation treatments, paper-pulp desalting poultices, and a protective coastal buffer zone of Casuarina trees. On December 26, 2004, the "
        "devastating Indian Ocean tsunami caused the sea to withdraw briefly by over 500 meters, dramatically exposing submerged foundation walls, dressed granite "
        "blocks, and a monumental rock-carved lion relief 300 meters offshore. This geological event corroborated ancient European maritime travelogues (such as "
        "William Chambers in 1788) that documented the legendary 'Seven Pagodas' of Māmallapuram, proving that the present Shore Temple was merely the lone survivor "
        "of a vast littoral temple complex."
    )

    # -------------------------------------------------------------
    # SECTION 4: THE PANCHA RATHAS
    # -------------------------------------------------------------
    h4 = doc.add_paragraph()
    h4.paragraph_format.space_before = Pt(16)
    h4.paragraph_format.space_after = Pt(4)
    r_h4 = h4.add_run("4. The Pancha Rathas: Architectural Laboratory of the Dravidian Order")
    r_h4.font.size = Pt(16)
    r_h4.font.bold = True
    r_h4.font.color.rgb = COLOR_PRIMARY

    p_rathas_1 = doc.add_paragraph()
    p_rathas_1.add_run(
        "Located 1.5 kilometers south of the village center, the Pancha Rathas ('Five Chariots') represent an unprecedented architectural achievement. Carved out "
        "of a single north-to-south sloping whale-backed whale outcrop of granite during the reign of Narasimhavarman I Māmalla (mid-7th century CE), these shrines "
        "are not built masonry, but monolithic rock-cut sculptures excavated top-down in full exterior three dimensions. Although named after the five Pāṇḍava brothers "
        "and Draupadī from the Mahābhārata by local folklore, they bear no historic connection to epic personalities, functioning instead as full-scale architectural "
        "prototypes exploring every primary roof form of early South Indian temple design."
    )

    img_path_rathas = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_pancha_rathas_overview.jpg")
    if os.path.exists(img_path_rathas):
        doc.add_paragraph().paragraph_format.space_after = Pt(2)
        doc.add_picture(img_path_rathas, width=Inches(5.8))
        cap4 = doc.add_paragraph()
        cap4.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cap4.paragraph_format.space_after = Pt(8)
        run_cap4 = cap4.add_run("Figure 4. Panoramic view of the Pancha Rathas excavated from a single granite outcrop. From left to right: Draupadi, Arjuna, Bhima, and Dharmaraja Rathas. Photo: Wikimedia Commons / CC BY-SA.")
        run_cap4.font.size = Pt(8.5)
        run_cap4.font.italic = True
        run_cap4.font.color.rgb = COLOR_MUTED

    p_rathas_detail = doc.add_paragraph()
    p_rathas_detail.add_run(
        "Typological Analysis of the Five Shrines:\n"
        "1. Draupadi Ratha: The northernmost and most modest shrine, designed on a square plan with a curvilinear, four-sided sloping roof directly imitating a rural "
        "thatched mud hut (*kuṭāgāra* or *bānglā* type). Dedicated to Goddess Durgā, its outer niches feature delicate female guardians (*dvārapālikās*), and its inner "
        "sanctum depicts Durgā receiving floral offerings from a devotee and the self-sacrifice of another offering his own severed head (*navakhandam*).\n"
        "2. Arjuna Ratha: Sharing a contiguous granite plinth with Draupadi, this shrine exemplifies the early square, two-tiered (*dvitāla*) Dravidian vimāna with an "
        "octagonal domical roof (*śikhara*). Its exterior walls are adorned with exquisitely modeled niche sculptures of mithuna royal couples, Śiva leaning upon Nandi, "
        "and Viṣṇu with Garuḍa.\n"
        "3. Bhima Ratha: Demonstrates an oblong, rectangular ground plan with an imposing barrel-vaulted or wagon-shaped roof (*śālā-śikhara*), bordered by arched chaitya "
        "gables (*kūḍu*). Supported on pillared verandahs with lion-based columns, this structure was designed to enshrine a colossal reclining deity.\n"
        "4. Dharmaraja Ratha: The southern, largest, and most structurally evolved monument. Rising across three storeys (*tritāla*) to a height of 35 feet, it serves as "
        "the definitive archetype of the classic South Indian pyramidal vimāna. It contains twenty-eight corner sculptural panels, including the earliest known South Indian "
        "depiction of *Ardhanārīśvara* (the composite half-Śiva, half-Pārvatī figure representing cosmic balance), Harihara, and the famous royal portrait of King "
        "Narasimhavarman I bearing his grandiloquent epigraphical titles: *Śrī Megha* ('Cloud of Bounty') and *Trailokyanātha* ('Lord of the Three Realms').\n"
        "5. Nakula-Sahadeva Ratha: Positioned slightly to the west, this two-tiered shrine features an apsidal, horseshoe-shaped ground plan (*gajapṛṣṭha* or 'elephant-back' "
        "profile). Standing directly adjacent is a magnificent, free-standing monolithic granite sculpture of a life-sized elephant."
    )

    # -------------------------------------------------------------
    # SECTION 5: THE VARAHA CAVE TEMPLE
    # -------------------------------------------------------------
    h5 = doc.add_paragraph()
    h5.paragraph_format.space_before = Pt(16)
    h5.paragraph_format.space_after = Pt(4)
    r_h5 = h5.add_run("5. The Varaha Cave Temple: Intimate Relief Mastery in the Subterranean Mandapa")
    r_h5.font.size = Pt(16)
    r_h5.font.bold = True
    r_h5.font.color.rgb = COLOR_PRIMARY

    p_varaha_1 = doc.add_paragraph()
    p_varaha_1.add_run(
        "Excavated into the main granite hill of Māmallapuram during the mid-7th century CE (reign of Narasimhavarman I), the Varaha Cave Temple (Varāha-maṇḍapa) "
        "presents the zenith of Pallava cave sculpture. Unlike the colossal panoramic scale of the Great Bas-Relief, the Varaha Cave offers an architecturally "
        "framed, intimate experience. Its pillared portico (*mukha-maṇḍapa*) is borne upon two central columns resting on the backs of seated *vyālas* (mythical "
        "horned lions), leading into an inner hall featuring four monumental high-relief sculptural compositions of unparalleled emotional and iconographic depth."
    )

    img_path_gaja = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_gajalakshmi_panel.jpg")
    if os.path.exists(img_path_gaja):
        doc.add_paragraph().paragraph_format.space_after = Pt(2)
        doc.add_picture(img_path_gaja, width=Inches(5.0))
        cap5 = doc.add_paragraph()
        cap5.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cap5.paragraph_format.space_after = Pt(8)
        run_cap5 = cap5.add_run("Figure 5. The Gaja-Lakṣmī Abhiṣeka panel, Varaha Cave Temple. The Goddess is bathed by celestial elephants pouring consecrated water. Photo: ASI / Wikimedia Commons / CC BY-SA.")
        run_cap5.font.size = Pt(8.5)
        run_cap5.font.italic = True
        run_cap5.font.color.rgb = COLOR_MUTED

    p_varaha_panels = doc.add_paragraph()
    p_varaha_panels.add_run(
        "The Four Masterpiece Compositions:\n"
        "1. Bhū-Varāha (The Boar Incarnation): Dominating the north wall, Lord Viṣṇu as the colossal boar-headed Varāha rises triumphantly from the primordial waters "
        "after slaying the demon Hiraṇyākṣa. Varāha's muscular right foot rests upon the hooded coils of the serpent king Śeṣanāga. With supreme tenderness, he cradles "
        "the slender, reverent figure of Bhūdevī (the Earth Goddess) upon his uplifted right knee and arm, their faces tilted in profound mutual intimacy. The scene captures "
        "the cosmic triumph of divine protection over chaotic deluge.\n"
        "2. Gaja-Lakṣmī (The Royal Bath of Fortune): Centered on the rear wall, the Goddess Lakṣmī is seated upon a blossoming lotus throne in *padmāsana*, holding lotus "
        "buds in her hands. Flanking her, two majestic royal elephants shower sacred water over her from upturned jars, while celestial maidens bearing perfumes and garlands "
        "complete the composition. The symmetry and fluid drapery reflect royal sovereignty and auspicious plenty.\n"
        "3. Trivikrama (The Three Cosmic Strides of Vāmana): Portrays Viṣṇu expanding into cosmic dimensions, one foot planted on earth while his left leg is hurled straight "
        "upward into the highest celestial vault of Brahmā, dynamically bisecting the composition.\n"
        "4. Durgā Mahiṣāsuramardinī: The goddess stands poised upon the severed head of the buffalo demon, radiating tranquil serenity amidst righteous triumph."
    )

    # -------------------------------------------------------------
    # SECTION 6: CONCLUSION & SCHOLARLY SYNTHESIS
    # -------------------------------------------------------------
    h6 = doc.add_paragraph()
    h6.paragraph_format.space_before = Pt(16)
    h6.paragraph_format.space_after = Pt(4)
    r_h6 = h6.add_run("6. Conclusion: The Legacy of Pallava Granite Sculptural Heritage")
    r_h6.font.size = Pt(16)
    r_h6.font.bold = True
    r_h6.font.color.rgb = COLOR_PRIMARY

    p_conclusion = doc.add_paragraph()
    p_conclusion.add_run(
        "The monuments of Māmallapuram represent a watershed moment in the visual culture of India. Through the medium of intractable granite, Pallava master sculptors "
        "synthesized royal ideology, cosmic theology, and breathtaking naturalism into a unified aesthetic language. Whether in the dynamic visual *śleṣa* of the Great "
        "Bas-Relief, the pioneering Dravidian architectural taxonomy of the Pancha Rathas, the structural resilience of the surf-lashed Shore Temple, or the sublime "
        "devotional intimacy of the Varaha Cave, Māmallapuram demonstrated how sacred architecture could express both metaphysical transcendence and imperial sovereignty. "
        "Today, recognized as a UNESCO World Heritage Site, Māmallapuram stands as an eternal monument to the sublime dialogues between human artistry, stone, and the sea."
    )

    # -------------------------------------------------------------
    # BIBLIOGRAPHY & REFERENCES
    # -------------------------------------------------------------
    doc.add_page_break()
    h_bib = doc.add_paragraph()
    h_bib.paragraph_format.space_before = Pt(16)
    h_bib.paragraph_format.space_after = Pt(6)
    r_bib = h_bib.add_run("References & Academic Bibliography")
    r_bib.font.size = Pt(16)
    r_bib.font.bold = True
    r_bib.font.color.rgb = COLOR_PRIMARY

    references = [
        ("Archaeological Survey of India.", "World Heritage Series: Mamallapuram. New Delhi: ASI, 2006."),
        ("Dehejia, Vidya.", "Indian Art. London: Phaidon Press, 1997."),
        ("Dubreuil, Gabriel Jouveau.", "Pallava Antiquities. London: Probsthain & Co., 1916."),
        ("Kramrisch, Stella.", "The Hindu Temple. 2 vols. Calcutta: University of Calcutta, 1946; reprint, Delhi: Motilal Banarsidass, 1976."),
        ("Lockwood, Michael, Gift Siromoney, and P. Dayanandan.", "Mahabalipuram Studies. Madras: Christian Literature Society, 1974."),
        ("Rabe, Michael D.", "The Great Penance at Māmallapuram: Deciphering a Visual Text. Chennai: Institute of Asian Studies, 2001."),
        ("Ramachandran, T. N.", "Mamallapuram (Seven Pagodas): The Great Bas-Relief. Transactions of the Archaeological Society of South India, 1951."),
        ("Sivaramamurti, C.", "Mahabalipuram. 4th ed. New Delhi: Archaeological Survey of India, 1978."),
        ("Srinivasan, K. R.", "Cave-Temples of the Pallavas. Architectural Survey of Temples, No. 1. New Delhi: Archaeological Survey of India, 1964."),
        ("Srinivasan, K. R.", "The Dharmaraja Ratha and Its Sculptures: Mahabalipuram. New Delhi: Archaeological Survey of India, 1975."),
        ("Vogel, J. Ph.", "\"The Great Relief of Mamallapuram: The Seven Pagodas.\" In The Arts and Crafts of India and Ceylon. London, 1914.")
    ]

    for author, citation in references:
        p_ref = doc.add_paragraph()
        p_ref.paragraph_format.left_indent = Inches(0.5)
        p_ref.paragraph_format.first_line_indent = Inches(-0.5)
        p_ref.paragraph_format.space_after = Pt(4)
        run_auth = p_ref.add_run(author + " ")
        run_auth.bold = True
        run_cite = p_ref.add_run(citation)
        run_cite.font.size = Pt(9.5)

    out_docx = os.path.join("deliverables", "mahabalipuram_analysis", "Mahabalipuram_Thematic_Report.docx")
    doc.save(out_docx)
    print(f"Report generated successfully: {out_docx}")

if __name__ == "__main__":
    create_report()
