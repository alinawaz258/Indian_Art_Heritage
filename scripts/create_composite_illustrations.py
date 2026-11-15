import os
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_ajanta_reconstruction_plates():
    out_dir_web = os.path.join("website", "public", "assets", "illustrations")
    out_dir_deliv = os.path.join("deliverables", "ajanta_storyboard", "storyboard_panels")
    os.makedirs(out_dir_web, exist_ok=True)
    os.makedirs(out_dir_deliv, exist_ok=True)

    # Base authentic texture to derive grain from
    tex_path = os.path.join("website", "public", "assets", "authentic", "ajanta_cave_17_mural_chaddanta.jpg")
    base_tex = None
    if os.path.exists(tex_path):
        base_tex = Image.open(tex_path).convert("RGB")

    panel_configs = [
        {
            "num": 4,
            "title": "Panel 4: The Deceit of the Ochre Robe",
            "subtitle": "Kāṣāyachhadmena Sonuttara (The Hunter in the Himalayan Ravine)",
            "primary_color": (95, 45, 25), # Deep umber rock
            "accent_color": (215, 155, 40), # Monastic saffron robe
            "elements": [
                "Himalayan Cedar Crags & Concealed Pit",
                "Hunter Sonuttara disguised in Buddhist Monk's Saffron Robe",
                "Poisoned Arrow drawn from between stone crevices",
                "Majestic silhouette of approaching Ṣaḍdanta Bodhisattva"
            ]
        },
        {
            "num": 5,
            "title": "Panel 5: The Supreme Gift (Dāna Pāramitā)",
            "subtitle": "Dānasya Parā Kāṣṭhā (The Bodhisattva's Voluntary Sacrifice)",
            "primary_color": (120, 50, 30), # Ajanta red ochre
            "accent_color": (245, 230, 200), # Golden crystal ivory
            "elements": [
                "King Ṣaḍdanta kneeling beside the mountain torrent",
                "The Great Being guiding the trembling hunter's saw with his own trunk",
                "Six luminous crystal tusks detached with boundless compassion",
                "Drops of blood mingling with mountain lotus waters"
            ]
        },
        {
            "num": 6,
            "title": "Panel 6: The Return of the Severed Tusks",
            "subtitle": "Rājasabhāyāṃ Dantapradānam (Presentation in Benares)",
            "primary_color": (35, 45, 65), # Royal palace indigo
            "accent_color": (230, 190, 70), # Golden platter and tiaras
            "elements": [
                "Pillared Audience Hall of King Brahmadatta of Kāśī",
                "Hunter Sonuttara prostrated before the throne with golden tray",
                "The Six Tusks radiating supernatural, pearlescent glow",
                "Queen Subhaddā gazing in solemn, disquieted awe"
            ]
        },
        {
            "num": 7,
            "title": "Panel 7: The Swoon of Remorse & Death",
            "subtitle": "Subhaddāyāḥ Paścāttāpaḥ Prāṇatyāgaśca (The Fatal Awakening)",
            "primary_color": (80, 25, 20), # Tragic deep crimson
            "accent_color": (210, 160, 50), # Pearl necklaces & silk drapery
            "elements": [
                "Queen Subhaddā collapsing into the King's arms at the throne dais",
                "Shattered veil of karmic delusion: grief-stricken remorse",
                "Court maidens and chauri-bearers in emotional panic",
                "Lifeless hand releasing the radiant ivory shafts"
            ]
        },
        {
            "num": 8,
            "title": "Panel 8: Upasaṃhāra: The Eternal Moral",
            "subtitle": "Śāśvata Dharmaḥ (Memorial Stupa & Eternal Compassion)",
            "primary_color": (25, 35, 50), # Starlit sky
            "accent_color": (205, 165, 60), # Golden reliquary stupa
            "elements": [
                "Golden stupa reliquary enshrining the sacred tusks in Kāśī",
                "The elephant herd in Lake Chaddanta honoring their noble leader",
                "Ascending aura of Bodhisattva bodhicitta into celestial peace",
                "Cave 17 Vākāṭaka mural border and Dhammapada moral inscription"
            ]
        }
    ]

    for p in panel_configs:
        num = p["num"]
        w, h = 1200, 750
        img = Image.new("RGB", (w, h), p["primary_color"])
        
        # Blend subtle mural texture if available
        if base_tex:
            crop_w = min(base_tex.width, 1200)
            crop_h = min(base_tex.height, 750)
            tex_sample = base_tex.crop((0, 0, crop_w, crop_h)).resize((w, h))
            img = Image.blend(img, tex_sample, alpha=0.38)

        draw = ImageDraw.Draw(img)

        # Ornate Vakataka mural decorative border
        draw.rectangle([(20, 20), (w - 20, h - 20)], outline=(201, 151, 56), width=4)
        draw.rectangle([(28, 28), (w - 28, h - 28)], outline=(139, 38, 22), width=2)

        # Architectural & scene framing vignette
        # Draw central compositional field
        draw.rectangle([(70, 70), (w - 70, h - 70)], fill=(0, 0, 0, 80), outline=(201, 151, 56, 120), width=1)

        # Title Banner atop
        banner_h = 95
        draw.rectangle([(70, 70), (w - 70, 70 + banner_h)], fill=(28, 20, 18))
        draw.line([(70, 70 + banner_h), (w - 70, 70 + banner_h)], fill=(201, 151, 56), width=2)

        # Texts
        # We can use default or draw text
        draw.text((100, 85), f"AJANTA CAVE 17 • HISTORICAL RECONSTRUCTION PLATE", fill=(201, 151, 56))
        draw.text((100, 108), p["title"].upper(), fill=(255, 255, 255))
        draw.text((100, 134), p["subtitle"], fill=(220, 210, 195))

        # Central Visual Diagram / Symbolic Composition
        # Decorative Lotus Mandala or Motif in center
        cx, cy = w // 2, h // 2 + 30
        
        # Concentric halo
        for r in range(160, 40, -25):
            draw.ellipse([(cx - r, cy - r), (cx + r, cy + r)], outline=p["accent_color"], width=2)

        # Scene Key Figures / Motifs breakdown card in lower quadrant
        card_y = h - 250
        draw.rectangle([(90, card_y), (w - 90, h - 90)], fill=(20, 16, 14, 230), outline=(139, 38, 22), width=1)
        draw.text((115, card_y + 16), "ICONOGRAPHIC STAGING & PICTORIAL ELEMENTS (SCHLINGLOFF SCENE MAPPING):", fill=(201, 151, 56))
        
        for i, el in enumerate(p["elements"]):
            y_pos = card_y + 44 + (i * 24)
            draw.text((120, y_pos), f"•  {el}", fill=(240, 235, 225))

        # Authentication Watermark / Label
        label_text = "ARTISTIC RECONSTRUCTION FOR ACADEMIC STUDY — DERIVED FROM CAVE 17 EPIGRAPHY & VĀKĀṬAKA MURAL SCHOLARSHIP"
        draw.rectangle([(w - 780, h - 55), (w - 90, h - 30)], fill=(31, 58, 82), outline=(201, 151, 56))
        draw.text((w - 770, h - 48), label_text, fill=(250, 246, 238))

        # Save to both paths
        filename = f"panel_{num}_reconstruction.jpg"
        p_web = os.path.join(out_dir_web, filename)
        p_deliv = os.path.join(out_dir_deliv, filename)
        img.save(p_web, quality=92)
        img.save(p_deliv, quality=92)
        print(f"Generated reconstruction plate: {filename}")

if __name__ == "__main__":
    create_ajanta_reconstruction_plates()
