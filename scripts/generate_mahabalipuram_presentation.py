import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor

def add_styled_run(para, text, size=Pt(12), bold=False, color=None):
    r = para.add_run()
    r.text = text
    r.font.size = size
    r.font.bold = bold
    if color:
        r.font.color.rgb = color
    return r

def create_presentation():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    blank_layout = prs.slide_layouts[6]

    BG_SAND = RGBColor(0xFA, 0xF6, 0xEE)
    PRIMARY_TERRACOTTA = RGBColor(0x8B, 0x26, 0x16)
    SECONDARY_INDIGO = RGBColor(0x1F, 0x3A, 0x52)
    TEXT_DARK = RGBColor(0x2C, 0x22, 0x1E)
    GOLD_ACCENT = RGBColor(0xC9, 0x97, 0x38)
    WHITE = RGBColor(0xFF, 0xFF, 0xFF)

    def set_slide_background(slide, color):
        background = slide.background
        fill = background.fill
        fill.solid()
        fill.fore_color.rgb = color

    # Slide 1: Title Slide (Hero)
    slide1 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide1, SECONDARY_INDIGO)

    tb = slide1.shapes.add_textbox(Inches(1.0), Inches(1.5), Inches(11.333), Inches(4.5))
    tf = tb.text_frame
    tf.word_wrap = True

    p0 = tf.paragraphs[0]
    p0.text = "MĀMALLAPURAM"
    p0.font.size = Pt(20)
    p0.font.bold = True
    p0.font.color.rgb = GOLD_ACCENT
    p0.font.name = "Georgia"
    p0.space_after = Pt(14)

    p1 = tf.add_paragraph()
    p1.text = "Granite, Sea, and Sacred Sovereignty"
    p1.font.size = Pt(40)
    p1.font.bold = True
    p1.font.color.rgb = WHITE
    p1.font.name = "Georgia"
    p1.space_after = Pt(12)

    p2 = tf.add_paragraph()
    p2.text = "A Thematic Sculpture and Architectural Analysis of Pallava Monuments (7th–8th Century CE)"
    p2.font.size = Pt(18)
    p2.font.color.rgb = RGBColor(0xDF, 0xD7, 0xCA)
    p2.font.name = "Georgia"
    p2.space_after = Pt(24)

    p3 = tf.add_paragraph()
    p3.text = "Academic Presentation (~10 Minutes) | Student Research Team (5 Placeholders) | Course: Indian Art Heritage"
    p3.font.size = Pt(13)
    p3.font.color.rgb = GOLD_ACCENT

    slide1.notes_slide.notes_text_frame.text = (
        "Good morning, respected professors and peers. Welcome to our presentation on the Pallava monuments of Mamallapuram. "
        "Over the next ten minutes, we will explore how seventh-century sculptors transformed unyielding coastal granite into a living "
        "theological, political, and ecological dialogue between royalty and the sea. We examine four mandatory monuments: the Great Bas-Relief, "
        "the Shore Temple, the Pancha Rathas, and the Varaha Cave Temple."
    )

    # Slide 2: The Pallava Port & Historical Timeline
    slide2 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide2, BG_SAND)

    tb2 = slide2.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb2.text_frame.paragraphs[0]
    p.text = "1. The Historical & Maritime Matrix of the Pallavas"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    tb2_body = slide2.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(6.0), Inches(5.0))
    tf2 = tb2_body.text_frame
    tf2.word_wrap = True
    bullets2 = [
        ("Dynastic Vision:", "The Pallavas of Kanchipuram pioneered stone architecture in Tamil Nadu, transitioning from perishable timber/brick to enduring granite."),
        ("Three Architectural Epochs:", "• Mahendravarman I (600–630 CE): Subterranean cave temples (Mandagapattu).\n• Narasimhavarman I Māmalla (630–668 CE): Monolithic rathas & Great Relief.\n• Rajasimha Narasimhavarman II (700–728 CE): Structural masonry (Shore Temple)."),
        ("Maritime Gateway:", "A thriving Coromandel harbor known as 'Sopatma' in Greek texts. Trade hub connecting Kanchi to Sri Lanka, Sumatra, Java, Cambodia, and Byzantium."),
        ("Granite Plasticity:", "Coarse charnockite granite was sculpted with unprecedented lyrical softness, celebrating both royal victory and aquatic cosmology.")
    ]
    for b_title, b_desc in bullets2:
        pb = tf2.add_paragraph()
        pb.space_after = Pt(10)
        add_styled_run(pb, b_title + " ", size=Pt(13), bold=True, color=SECONDARY_INDIGO)
        add_styled_run(pb, b_desc, size=Pt(12), color=TEXT_DARK)

    img_shore = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_shore_temple_exterior.jpg")
    if os.path.exists(img_shore):
        slide2.shapes.add_picture(img_shore, Inches(7.2), Inches(1.8), Inches(5.3), Inches(4.5))

    slide2.notes_slide.notes_text_frame.text = (
        "To understand Mamallapuram, we must first locate it within the maritime world of the 7th-century Pallavas. "
        "As King Mahendravarman boasted in his Mandagapattu inscription, the Pallavas broke free from brick and timber. "
        "Mamallapuram served as the port where royal navies departed to intervene in Sri Lanka, and merchant ships carried Indian artistic "
        "motifs to Srivijaya and Angkor. Here, granite was not just building material; it was royal propaganda carved directly into nature."
    )

    # Slide 3: The Great Bas-Relief Overview
    slide3 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide3, BG_SAND)

    tb3 = slide3.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb3.text_frame.paragraphs[0]
    p.text = "2. The Great Bas-Relief: The World's Largest Narrative Boulder"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    img_monolith = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_descent_ganges_monolith.jpg")
    if os.path.exists(img_monolith):
        slide3.shapes.add_picture(img_monolith, Inches(0.8), Inches(1.6), Inches(7.5), Inches(4.8))

    tb3_right = slide3.shapes.add_textbox(Inches(8.6), Inches(1.6), Inches(4.0), Inches(5.0))
    tf3 = tb3_right.text_frame
    tf3.word_wrap = True
    points3 = [
        "Monolithic Scale: 27 meters (90 ft) long by 9 meters (30 ft) high across two colossal boulders.",
        "The Central Fissure: A natural vertical cleft acting as the descent path of the celestial river Gaṅgā.",
        "Hydraulic Engineering: Cisterns on the summit channeled rainwater down the cleft during festivals, creating an active stone waterfall.",
        "Cosmic Assembly: Over 140 carved figures: celestial vidyādharas, gandharvas, nāgas, ascetics, and wild animals gathering peacefully."
    ]
    for pt in points3:
        pb = tf3.add_paragraph()
        pb.space_after = Pt(12)
        add_styled_run(pb, "• " + pt, size=Pt(13), color=TEXT_DARK)

    slide3.notes_slide.notes_text_frame.text = (
        "Here we see the Great Bas-Relief. At nearly 90 feet across, it dwarfs the spectator. Notice the natural central split. "
        "Archaeological excavations revealed carved stone cisterns atop the rock: during temple festivals, real water was released down "
        "this chasm, cascading over the three-dimensional stone nagas in the cleft. It was a multimedia kinetic performance in granite."
    )

    # Slide 4: The Śleṣa Debate: Arjuna vs. Bhagīratha
    slide4 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide4, BG_SAND)

    tb4 = slide4.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb4.text_frame.paragraphs[0]
    p.text = "3. The Scholarly Debate: Arjuna's Penance vs. Descent of the Ganges"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    img_ascetic = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_penance_ascetic_detail.jpg")
    if os.path.exists(img_ascetic):
        slide4.shapes.add_picture(img_ascetic, Inches(0.8), Inches(1.7), Inches(4.5), Inches(4.8))

    tb4_text = slide4.shapes.add_textbox(Inches(5.6), Inches(1.7), Inches(7.0), Inches(5.0))
    tf4 = tb4_text.text_frame
    tf4.word_wrap = True

    p4_1 = tf4.paragraphs[0]
    add_styled_run(p4_1, "The Century-Long Scholarly Dispute:", size=Pt(15), bold=True, color=PRIMARY_TERRACOTTA)
    p4_1.space_after = Pt(8)

    debates = [
        ("Descent of the Ganges (Vogel, Ramachandran, ASI):", "The emaciated ascetic on one leg is King Bhagīratha beseeching Śiva to bring Gaṅgā down from heaven to purify his ancestors' ashes. The river cleft is the primary axis."),
        ("Arjuna's Penance (Dubreuil, Sivaramamurti):", "The ascetic is the Pāṇḍava hero Arjuna performing severe tapas to obtain the supreme weapon Pāśupatāstra from Śiva for the epic Mahābhārata war."),
        ("The Definitive Synthesis — Visual Śleṣa (Michael D. Rabe, 2001):", "In 7th-century Sanskrit and Tamil court poetry, royal poets routinely composed double-entendres (śleṣa). Visually, the relief is BOTH myths at once: the Pallava king is Bhagīratha providing water and fertility, and Arjuna providing invincible military defense. The polysemy is intentional.")
    ]
    for d_title, d_desc in debates:
        pb = tf4.add_paragraph()
        pb.space_after = Pt(10)
        add_styled_run(pb, d_title + " ", size=Pt(12.5), bold=True, color=SECONDARY_INDIGO)
        add_styled_run(pb, d_desc, size=Pt(12), color=TEXT_DARK)

    slide4.notes_slide.notes_text_frame.text = (
        "Now to the central intellectual controversy of South Indian art history. Is this Arjuna's Penance or the Descent of the Ganges? "
        "As we demonstrate in our research, modern scholarship has moved past this rigid binary. Dr. Michael Rabe proved that Pallava royal "
        "ideology relied on visual sleṣa, or deliberate double-entendre. The figure is simultaneously Bhagiratha bringing the river and Arjuna "
        "earning the divine weapon. The Pallava monarch Narasimhavarman I claims both titles: sovereign savior and invincible warrior."
    )

    # Slide 5: Naturalism & Satire in the Great Relief
    slide5 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide5, BG_SAND)

    tb5 = slide5.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb5.text_frame.paragraphs[0]
    p.text = "4. Naturalism & Irony: The Elephant Herd and the Ascetic Cat"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    img_ele = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_bas_relief_elephants.jpg")
    if os.path.exists(img_ele):
        slide5.shapes.add_picture(img_ele, Inches(0.8), Inches(1.7), Inches(5.8), Inches(4.8))

    tb5_text = slide5.shapes.add_textbox(Inches(7.0), Inches(1.7), Inches(5.5), Inches(5.0))
    tf5 = tb5_text.text_frame
    tf5.word_wrap = True
    sub_points5 = [
        ("The Life-Sized Elephant Herd:", "Masterpiece of tender animal observation. The monumental tusker stands protective, while playful baby calves nestle safely beneath his belly."),
        ("Cosmic Harmony (Sama-rasa):", "Lions, deer, and monkeys drink together peacefully beside the descending holy waters, reflecting the mythic golden age."),
        ("The 'Faux Ascetic Cat' (Pañcatantra Parody):", "Directly below the majestic ascetics, a cat stands on its hind legs imitating yogic penance, while trusting mice dance innocently around it! This witty Pañcatantra fable pokes philosophical fun at hypocritical spiritual posturing, balancing sacred grandeur with earthly humor.")
    ]
    for sp_title, sp_desc in sub_points5:
        pb = tf5.add_paragraph()
        pb.space_after = Pt(12)
        add_styled_run(pb, sp_title + "\n", size=Pt(13), bold=True, color=SECONDARY_INDIGO)
        add_styled_run(pb, sp_desc, size=Pt(12), color=TEXT_DARK)

    slide5.notes_slide.notes_text_frame.text = (
        "Look at the life-like tenderness in this elephant carving. But notice also the brilliant touch of humor: the ascetic cat. "
        "Carved right below the solemn yogis, a cat poses in imitation of penance while unsuspecting mice gather around it. "
        "This Pañcatantra reference grounds the cosmic relief in human wit, reminding viewers not to trust sanctimonious hypocrites."
    )

    # Slide 6: Shore Temple Architecture
    slide6 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide6, BG_SAND)

    tb6 = slide6.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb6.text_frame.paragraphs[0]
    p.text = "5. The Shore Temple: Structural Granite on the Ocean Front"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    if os.path.exists(img_shore):
        slide6.shapes.add_picture(img_shore, Inches(0.8), Inches(1.7), Inches(5.8), Inches(4.8))

    tb6_text = slide6.shapes.add_textbox(Inches(7.0), Inches(1.7), Inches(5.5), Inches(5.0))
    tf6 = tb6_text.text_frame
    tf6.word_wrap = True
    shore_pts = [
        ("Patron & Date:", "Built under Narasimhavarman II Rājasiṃha (c. 700–728 CE). Represents the shift from rock excavation to dressed stone masonry."),
        ("Tripartite Shrine Design:", "• Kṣatriyasiṃheśvara: 5-tiered east-facing vimāna for Śiva Dharalinga.\n• Rājasimheśvara: 3-tiered west-facing vimāna.\n• Jalaśayana Perumāl: Intermediate flat chamber with rock-carved Anantaśāyī Viṣṇu reclining on the living reef."),
        ("Theological Syncretism:", "Harmonizes Śaiva and Vaiṣṇava devotions in one integrated ocean sanctuary."),
        ("Enclosure of Nandis:", "Perimeter parapet wall adorned with monolithic couchant Nandi bulls gazing seaward.")
    ]
    for s_title, s_desc in shore_pts:
        pb = tf6.add_paragraph()
        pb.space_after = Pt(10)
        add_styled_run(pb, s_title + " ", size=Pt(13), bold=True, color=SECONDARY_INDIGO)
        add_styled_run(pb, s_desc, size=Pt(12), color=TEXT_DARK)

    slide6.notes_slide.notes_text_frame.text = (
        "Moving to our second monument, the Shore Temple. Built by Rajasimha in the early 8th century, it is not rock-cut but structural masonry. "
        "Notice its unique triple-sanctum arrangement. The twin Shiva towers flank a flat-roofed middle chamber that houses a reclining Vishnu, "
        "carved directly out of the living ocean reef. It was both a place of worship and a maritime lighthouse for ancient sea trade."
    )

    # Slide 7: Shore Temple Conservation & 2004 Tsunami
    slide7 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide7, BG_SAND)

    tb7 = slide7.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb7.text_frame.paragraphs[0]
    p.text = "6. Maritime Weathering & The 2004 Tsunami Discoveries"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    tb7_text = slide7.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(11.5), Inches(5.0))
    tf7 = tb7_text.text_frame
    tf7.word_wrap = True

    cons_points = [
        ("The Challenge of Littoral Erosion:", "For 1,300 years, sea spray, salt crystallization within granite pores, and wind-blown sand have softened the crisp carved lines of the vimānas. ASI employs chemical desalting poultices and protective casuarina windbreaks."),
        ("The Tsunami of December 26, 2004:", "When the tsunami violently pulled back the ocean waters by over 500 meters, it revealed ancient submerged foundations, square masonry blocks, and a monumental carved granite lion 300 meters offshore."),
        ("Validation of the 'Seven Pagodas' Legend:", "European travelers like William Chambers (1788) reported that seven great temples once lined the shore, six of which were consumed by the sea. The 2004 archaeological findings confirmed that the Shore Temple was part of a larger drowned sacred precinct.")
    ]
    for cp_title, cp_desc in cons_points:
        pb = tf7.add_paragraph()
        pb.space_after = Pt(16)
        add_styled_run(pb, cp_title + "\n", size=Pt(15), bold=True, color=PRIMARY_TERRACOTTA)
        add_styled_run(pb, cp_desc, size=Pt(13), color=TEXT_DARK)

    slide7.notes_slide.notes_text_frame.text = (
        "In 2004, the catastrophic Indian Ocean tsunami provided an unexpected archaeological revelation. As the waters pulled back hundreds of meters, "
        "submerged temple walls and stone lions emerged from the waves, confirming centuries-old folklore of the 'Seven Pagodas'."
    )

    # Slide 8: Pancha Rathas Overview
    slide8 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide8, BG_SAND)

    tb8 = slide8.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb8.text_frame.paragraphs[0]
    p.text = "7. The Pancha Rathas: Architectural Laboratory of Dravidian Forms"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    img_rathas = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_pancha_rathas_overview.jpg")
    if os.path.exists(img_rathas):
        slide8.shapes.add_picture(img_rathas, Inches(0.8), Inches(1.7), Inches(6.0), Inches(4.8))

    tb8_text = slide8.shapes.add_textbox(Inches(7.2), Inches(1.7), Inches(5.3), Inches(5.0))
    tf8 = tb8_text.text_frame
    tf8.word_wrap = True
    ratha_pts = [
        ("Monolithic Carving:", "Carved top-down from a single whale-backed granite outcrop under Narasimhavarman I Māmalla (c. 630–668 CE)."),
        ("Misnomer of the 'Chariots':", "Named after the Pāṇḍavas and Draupadī by local folklore, but they are not chariots; they are full-scale models of temple roof archetypes."),
        ("Roof Typologies Explored:", "1. Draupadi: Thatched hut (kuṭāgāra/bānglā).\n2. Arjuna: Square 2-tiered (dvitāla) vimāna.\n3. Bhima: Barrel-vaulted wagon roof (śālā).\n4. Dharmaraja: 3-tiered (tritāla) vimāna.\n5. Nakula-Sahadeva: Apsidal elephant-back (gajapṛṣṭha).")
    ]
    for rp_title, rp_desc in ratha_pts:
        pb = tf8.add_paragraph()
        pb.space_after = Pt(12)
        add_styled_run(pb, rp_title + " ", size=Pt(13), bold=True, color=SECONDARY_INDIGO)
        add_styled_run(pb, rp_desc, size=Pt(12), color=TEXT_DARK)

    slide8.notes_slide.notes_text_frame.text = (
        "Monument three: the Pancha Rathas. These are not built temples, but colossal monoliths carved out of a single granite whale-back. "
        "Art historians consider this site a living textbook or architectural laboratory. Each ratha tests a different roof typology—from "
        "Draupadi's thatched-hut profile to Dharmaraja's three-storeyed pyramidal tower."
    )

    # Slide 9: Dharmaraja Ratha & Royal Inscriptions
    slide9 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide9, BG_SAND)

    tb9 = slide9.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb9.text_frame.paragraphs[0]
    p.text = "8. Dharmaraja Ratha: Tritāla Vimāna & Royal Inscriptions"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    img_dharm = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_dharmaraja_ratha.jpg")
    if os.path.exists(img_dharm):
        slide9.shapes.add_picture(img_dharm, Inches(0.8), Inches(1.7), Inches(5.0), Inches(4.8))

    tb9_text = slide9.shapes.add_textbox(Inches(6.2), Inches(1.7), Inches(6.3), Inches(5.0))
    tf9 = tb9_text.text_frame
    tf9.word_wrap = True
    dharm_pts = [
        ("The Grandest Monolith:", "Reaches 35 feet in height across three tiers (tritāla). Square sanctum with an octagonal śikhara, defining the Dravidian temple prototype."),
        ("Earliest Ardhanārīśvara in Tamil Art:", "Features 28 sculptural niches, including the magnificent half-Śiva, half-Pārvatī figure demonstrating perfect philosophical balance of male and female cosmic principles."),
        ("Imperial Epigraphy (Grantha Script):", "Inscriptions record King Narasimhavarman I's royal titles (birudas): 'Śrī Megha' (Cloud of Prosperity), 'Atyantakāma' (Endless Desire), and 'Trailokyanātha' (Lord of the Three Realms), confirming royal authorship.")
    ]
    for dp_title, dp_desc in dharm_pts:
        pb = tf9.add_paragraph()
        pb.space_after = Pt(14)
        add_styled_run(pb, dp_title + "\n", size=Pt(14), bold=True, color=PRIMARY_TERRACOTTA)
        add_styled_run(pb, dp_desc, size=Pt(12.5), color=TEXT_DARK)

    slide9.notes_slide.notes_text_frame.text = (
        "Here is the Dharmaraja Ratha. Look at the balance of its tiers. The inscriptions in ancient Grantha script name King Narasimhavarman I "
        "as Sri Megha and Trailokyanatha. Its corner niches hold the earliest known Tamil depiction of Ardhanarisvara, half-male, half-female, "
        "celebrated for its supreme graceful poise."
    )

    # Slide 10: Varaha Cave Temple
    slide10 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide10, BG_SAND)

    tb10 = slide10.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb10.text_frame.paragraphs[0]
    p.text = "9. The Varaha Cave Temple: Intimate Relief Mastery"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    img_gaja = os.path.join("website", "public", "assets", "authentic", "mahabalipuram_gajalakshmi_panel.jpg")
    if os.path.exists(img_gaja):
        slide10.shapes.add_picture(img_gaja, Inches(0.8), Inches(1.7), Inches(4.5), Inches(4.8))

    tb10_text = slide10.shapes.add_textbox(Inches(5.6), Inches(1.7), Inches(7.0), Inches(5.0))
    tf10 = tb10_text.text_frame
    tf10.word_wrap = True
    varaha_pts = [
        ("Subterranean Mandapa Sanctuary:", "Excavated mid-7th century CE. Two fluted columns with seated vyāla (mythical lion) bases lead into an intimate shrine hall."),
        ("Bhū-Varāha (The Cosmic Boar):", "Varāha tenderly cradles Bhūdevī (Earth) on his knee after raising her from the cosmic ocean, standing upon the hooded serpent Śeṣanāga. Unmatched combination of cosmic power and tender devotion."),
        ("Gaja-Lakṣmī (The Royal Bath of Auspiciousness):", "Goddess Lakṣmī seated on a lotus throne, serenely anointed by water poured from jars by royal elephants, flanked by apsaras holding perfumes."),
        ("Trivikrama & Durgā:", "Cosmic strides of Vāmana and the regal composure of Durgā completing the four walls.")
    ]
    for vp_title, vp_desc in varaha_pts:
        pb = tf10.add_paragraph()
        pb.space_after = Pt(10)
        add_styled_run(pb, vp_title + " ", size=Pt(13), bold=True, color=SECONDARY_INDIGO)
        add_styled_run(pb, vp_desc, size=Pt(12), color=TEXT_DARK)

    slide10.notes_slide.notes_text_frame.text = (
        "Our fourth monument is the Varaha Cave Temple. In contrast to the open-air scale of the Great Relief, the Varaha Cave offers an "
        "intimate subterranean experience. The Bhu-Varaha relief shows the boar god lifting Earth with tender care, while the Gajalakshmi panel "
        "captures royal auspiciousness. The slender, elongated anatomy and smooth drapery are hallmarks of classical Pallava sculpture."
    )

    # Slide 11: Summary & Academic Synthesis
    slide11 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide11, SECONDARY_INDIGO)

    tb11 = slide11.shapes.add_textbox(Inches(1.0), Inches(0.8), Inches(11.333), Inches(6.0))
    tf11 = tb11.text_frame
    tf11.word_wrap = True

    p_s0 = tf11.paragraphs[0]
    p_s0.text = "SYNTHESIS & HERITAGE SIGNIFICANCE"
    p_s0.font.size = Pt(18)
    p_s0.font.bold = True
    p_s0.font.color.rgb = GOLD_ACCENT
    p_s0.space_after = Pt(12)

    synth_bullets = [
        ("Granite Transformation:", "The Pallavas transformed an intractable, unforgiving stone into fluid visual literature, demonstrating engineering mastery over natural topography."),
        ("Polysemy & Royal Legitimacy:", "Monuments functioned as ideological statements where epic heroes (Arjuna, Bhagīratha) and supreme deities (Śiva, Viṣṇu, Durgā) validated royal sovereignty."),
        ("Architectural Prototypes:", "The Pancha Rathas and Shore Temple laid the structural and stylistic blueprint for subsequent Chola, Vijayanagara, and Southeast Asian temple architectures."),
        ("UNESCO Living Heritage:", "Preserved by the Archaeological Survey of India; standing as a testament to maritime exchange, religious tolerance, and artistic ingenuity.")
    ]
    for sb_title, sb_desc in synth_bullets:
        pb = tf11.add_paragraph()
        pb.space_after = Pt(14)
        add_styled_run(pb, sb_title + " ", size=Pt(15), bold=True, color=GOLD_ACCENT)
        add_styled_run(pb, sb_desc, size=Pt(13), color=WHITE)

    slide11.notes_slide.notes_text_frame.text = (
        "To conclude: Mamallapuram represents the convergence of nature, statecraft, and sacred devotion. "
        "Its architectural breakthroughs defined the future of South Indian and Southeast Asian sacred spaces for a millennium. "
        "Thank you for your time. We now welcome questions and discussion."
    )

    # Slide 12: Bibliography & References
    slide12 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide12, BG_SAND)

    tb12 = slide12.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.5), Inches(1.0))
    p = tb12.text_frame.paragraphs[0]
    p.text = "Academic References & Bibliography"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_TERRACOTTA
    p.font.name = "Georgia"

    tb12_text = slide12.shapes.add_textbox(Inches(0.8), Inches(1.6), Inches(11.5), Inches(5.2))
    tf12 = tb12_text.text_frame
    tf12.word_wrap = True

    bib_entries = [
        "Archaeological Survey of India. World Heritage Series: Mamallapuram. New Delhi: ASI, 2006.",
        "Kramrisch, Stella. The Hindu Temple. 2 vols. Calcutta: University of Calcutta, 1946; reprint, Delhi: Motilal Banarsidass, 1976.",
        "Lockwood, Michael, Gift Siromoney, and P. Dayanandan. Mahabalipuram Studies. Madras: Christian Literature Society, 1974.",
        "Rabe, Michael D. The Great Penance at Māmallapuram: Deciphering a Visual Text. Chennai: Institute of Asian Studies, 2001.",
        "Sivaramamurti, C. Mahabalipuram. 4th ed. New Delhi: Archaeological Survey of India, 1978.",
        "Srinivasan, K. R. Cave-Temples of the Pallavas. Architectural Survey of Temples, No. 1. New Delhi: ASI, 1964.",
        "Vogel, J. Ph. 'The Great Relief of Mamallapuram: The Seven Pagodas.' In The Arts and Crafts of India and Ceylon, 1914."
    ]
    for b in bib_entries:
        pb = tf12.add_paragraph()
        pb.space_after = Pt(8)
        add_styled_run(pb, "• " + b, size=Pt(11.5), color=TEXT_DARK)

    out_pptx = os.path.join("deliverables", "mahabalipuram_analysis", "Mahabalipuram_Presentation.pptx")
    prs.save(out_pptx)
    print(f"Presentation generated successfully: {out_pptx}")

if __name__ == "__main__":
    create_presentation()
