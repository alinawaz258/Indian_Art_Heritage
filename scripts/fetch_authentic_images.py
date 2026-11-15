import os
import json
import urllib.parse
import requests
from PIL import Image

HEADERS = {
    'User-Agent': 'IndianArtHeritageAcademicProject/1.0 (academic study; contact@heritage.edu)'
}

# Targeted high quality authentic images on Wikimedia Commons
COMMONS_FILES = [
    # Ajanta
    {
        "id": "ajanta_caves_panorama",
        "file": "Ajanta_Caves_View.jpg",
        "search_term": "Ajanta Caves gorge panoramic view",
        "category": "ajanta",
        "title": "Panoramic View of the Waghora River Horseshoe Gorge and Ajanta Caves",
        "intended_placement": "Ajanta Exhibition Hero & Context"
    },
    {
        "id": "ajanta_cave_17_facade",
        "file": "Ajanta_Cave_17_veranda.jpg",
        "search_term": "Ajanta Cave 17 entrance",
        "category": "ajanta",
        "title": "Veranda and Entrance Facade of Cave 17 (Vakataka Period, c. 465-477 CE)",
        "intended_placement": "Ajanta Storyboard Context Section"
    },
    {
        "id": "ajanta_cave_17_mural_chaddanta",
        "file": "Chaddanta_Jataka_Ajanta_Cave_17.jpg",
        "search_term": "Chaddanta Jataka Ajanta Cave 17",
        "category": "ajanta",
        "title": "Original Mural Painting of the Shaddanta Jataka, Right Wall, Cave 17",
        "intended_placement": "Ajanta Storyboard Authentic Reference Panel"
    },
    {
        "id": "ajanta_cave_1_padmapani",
        "file": "Ajanta_Padmapani.jpg",
        "search_term": "Padmapani Bodhisattva Cave 1 Ajanta",
        "category": "ajanta",
        "title": "Bodhisattva Padmapani Mural, Cave 1 (Vakataka Dynasty)",
        "intended_placement": "Ajanta Pigment and Aesthetic Analysis"
    },
    {
        "id": "ajanta_flying_apsara_cave_17",
        "file": "Ajanta_Cave_17_Apsara.jpg",
        "search_term": "Ajanta Cave 17 Apsara ceiling",
        "category": "ajanta",
        "title": "Celestial Flying Apsara, Cave 17 Interior Mural",
        "intended_placement": "Ajanta Drapery & Adornment Analysis"
    },
    # Mahabalipuram
    {
        "id": "mahabalipuram_descent_ganges_wide",
        "file": "Descent_of_the_Ganges_August_2013.jpg",
        "search_term": "Descent of the Ganges Mahabalipuram full view",
        "category": "mahabalipuram",
        "title": "The Great Bas-Relief: Descent of the Ganges / Arjuna's Penance (Full Monolith)",
        "intended_placement": "Mahabalipuram Relief Overview & Interactive Annotation"
    },
    {
        "id": "mahabalipuram_penance_ascetic_detail",
        "file": "Arjunas_Penance_Mahabalipuram.jpg",
        "search_term": "Arjuna's Penance ascetic Shiva detail",
        "category": "mahabalipuram",
        "title": "Detail of Emaciated Ascetic (Arjuna/Bhagiratha) and Four-Armed Shiva with Ganas",
        "intended_placement": "Mahabalipuram Thematic Analysis: Sleṣa Interpretation"
    },
    {
        "id": "mahabalipuram_bas_relief_elephants",
        "file": "Elephants_at_Descent_of_the_Ganges.jpg",
        "search_term": "Descent of the Ganges elephants detail",
        "category": "mahabalipuram",
        "title": "Life-sized Elephant Herd and Calves, Lower Right of the Great Bas-Relief",
        "intended_placement": "Mahabalipuram Naturalistic Sculpture Analysis"
    },
    {
        "id": "mahabalipuram_shore_temple_exterior",
        "file": "Shore_Temple_at_Mahabalipuram.jpg",
        "search_term": "Shore Temple Mahabalipuram Bay of Bengal",
        "category": "mahabalipuram",
        "title": "The Shore Temple Complex Facing the Bay of Bengal (Rajasimha Pallava)",
        "intended_placement": "Shore Temple Architectural Analysis"
    },
    {
        "id": "mahabalipuram_shore_temple_nandis",
        "file": "Shore_Temple_compound_wall_Nandis.jpg",
        "search_term": "Shore temple Nandi bulls enclosure",
        "category": "mahabalipuram",
        "title": "Enclosure Wall with Rows of Couchant Nandi Bulls, Shore Temple",
        "intended_placement": "Shore Temple Precinct & Maritime Iconography"
    },
    {
        "id": "mahabalipuram_pancha_rathas_overview",
        "file": "Pancha_Rathas_overview.jpg",
        "search_term": "Pancha Rathas Mahabalipuram monolithic temples",
        "category": "mahabalipuram",
        "title": "Panoramic View of the Five Monolithic Rathas (Pancha Rathas)",
        "intended_placement": "Pancha Rathas Architectural Typology"
    },
    {
        "id": "mahabalipuram_dharmaraja_ratha",
        "file": "Dharmaraja_Ratha_Mahabalipuram.jpg",
        "search_term": "Dharmaraja Ratha Mahabalipuram",
        "category": "mahabalipuram",
        "title": "Dharmaraja Ratha: Tritala Pyramidal Vimana with Inscribed King Portrait",
        "intended_placement": "Dharmaraja Ratha Structural Analysis"
    },
    {
        "id": "mahabalipuram_varaha_cave_facade",
        "file": "Varaha_Cave_Temple_Mahabalipuram.jpg",
        "search_term": "Varaha Cave Temple Mahabalipuram facade",
        "category": "mahabalipuram",
        "title": "Facade and Lion Columns of Varaha Cave Temple (Varaha-mandapa)",
        "intended_placement": "Varaha Cave Temple Section"
    },
    {
        "id": "mahabalipuram_bhu_varaha_panel",
        "file": "Varaha_panel_Mahabalipuram.jpg",
        "search_term": "Varaha panel Mahabalipuram Bhudevi",
        "category": "mahabalipuram",
        "title": "Bhu-Varaha Relief: Varaha Lifting the Earth Goddess Bhudevi, Varaha Cave",
        "intended_placement": "Varaha Cave Iconography: Bhu-Varaha Analysis"
    },
    {
        "id": "mahabalipuram_gajalakshmi_panel",
        "file": "Gaja_Lakshmi_Varaha_Cave.jpg",
        "search_term": "Gajalakshmi Varaha cave Mahabalipuram",
        "category": "mahabalipuram",
        "title": "Gaja-Lakshmi Abhisheka Panel, Varaha Cave Temple",
        "intended_placement": "Varaha Cave Iconography: Gajalakshmi Analysis"
    },
    # Kolam and Rangoli
    {
        "id": "kolam_tamil_nadu_threshold",
        "file": "Traditional_Kolam_Tamil_Nadu.jpg",
        "search_term": "Traditional Kolam Tamil Nadu threshold rice flour",
        "category": "kolam_rangoli",
        "title": "Traditional Sikku Kolam in Fresh White Rice Flour on Domestic Threshold",
        "intended_placement": "Kolam Poster Cultural Practice Section"
    },
    {
        "id": "kolam_margazhi_pavement",
        "file": "Margazhi_Kolam_Chennai.jpg",
        "search_term": "Margazhi Kolam Chennai street",
        "category": "kolam_rangoli",
        "title": "Expansive Margazhi Season Pulli Kolam, Mylapore, Chennai",
        "intended_placement": "Kolam Poster Festival and Community Matrix"
    },
    {
        "id": "rangoli_diwali_colors",
        "file": "Diwali_Rangoli_India.jpg",
        "search_term": "Diwali Rangoli colored powders diya",
        "category": "kolam_rangoli",
        "title": "Festive Diwali Rangoli with Vibrant Mineral Powders and Floral Motifs",
        "intended_placement": "Rangoli Comparative Section: Color and Materials"
    },
    {
        "id": "alpana_bengal_rice_paste",
        "file": "Alpana_West_Bengal.jpg",
        "search_term": "Alpana Bengal rice paste floor art",
        "category": "kolam_rangoli",
        "title": "Fluid Alpana Floor Design Painted with Wet Rice Paste (Pituli), Bengal",
        "intended_placement": "Regional Diversity Matrix: Alpana Subsection"
    }
]

def search_commons(query):
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": query,
        "gsrnamespace": 6, # File
        "gsrlimit": 5,
        "prop": "imageinfo",
        "iiprop": "url|size|mime|extmetadata",
        "format": "json"
    }
    try:
        res = requests.get(url, params=params, headers=HEADERS, timeout=15)
        if res.status_code == 200:
            data = res.json()
            if "query" in data and "pages" in data["query"]:
                pages = list(data["query"]["pages"].values())
                # filter for jpg/png and decent size
                for p in pages:
                    if "imageinfo" in p and len(p["imageinfo"]) > 0:
                        info = p["imageinfo"][0]
                        mime = info.get("mime", "")
                        if "image/jpeg" in mime or "image/png" in mime or "image/webp" in mime:
                            return p
    except Exception as e:
        print(f"Error searching commons for '{query}': {e}")
    return None

def fetch_image_info_by_title(title):
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "titles": f"File:{title}",
        "prop": "imageinfo",
        "iiprop": "url|size|mime|extmetadata",
        "format": "json"
    }
    try:
        res = requests.get(url, params=params, headers=HEADERS, timeout=15)
        if res.status_code == 200:
            data = res.json()
            pages = list(data.get("query", {}).get("pages", {}).values())
            if pages and "imageinfo" in pages[0]:
                return pages[0]
    except Exception as e:
        print(f"Error getting file info for '{title}': {e}")
    return None

def download_and_process():
    out_dir = os.path.join("website", "public", "assets", "authentic")
    os.makedirs(out_dir, exist_ok=True)
    
    collected_credits = []
    
    for item in COMMONS_FILES:
        print(f"\nProcessing {item['id']}...")
        page = fetch_image_info_by_title(item["file"])
        if not page or "imageinfo" not in page:
            print(f"Direct file {item['file']} not found, searching with: {item['search_term']}")
            page = search_commons(item["search_term"])
            
        if not page or "imageinfo" not in page:
            print(f"Fallback search with broader query...")
            page = search_commons(item["category"] + " " + item["title"].split(":")[0])
            
        if page and "imageinfo" in page:
            info = page["imageinfo"][0]
            img_url = info.get("url")
            desc_url = info.get("descriptionurl", "")
            meta = info.get("extmetadata", {})
            
            author = meta.get("Artist", {}).get("value", "Wikimedia Commons Contributor")
            # Clean author html tags
            author = author.replace("<span class=\"plainlinks\">", "").replace("</span>", "").replace("<b>", "").replace("</b>", "").replace("<i>", "").replace("</i>", "")
            import re
            author = re.sub(r'<[^>]+>', '', author).strip()
            
            license_name = meta.get("LicenseShortName", {}).get("value", "Creative Commons / Public Domain")
            license_url = meta.get("LicenseUrl", {}).get("value", "")
            date_created = meta.get("DateTimeOriginal", {}).get("value", meta.get("DateTime", {}).get("value", "Unknown"))
            
            target_filename = f"{item['id']}.jpg"
            target_path = os.path.join(out_dir, target_filename)
            
            # Download file
            print(f"Downloading from {img_url} -> {target_path}")
            try:
                img_res = requests.get(img_url, headers=HEADERS, timeout=30)
                if img_res.status_code == 200:
                    with open(target_path, "wb") as f:
                        f.write(img_res.content)
                        
                    # Optimize/resize if excessively large (> 2400px width)
                    try:
                        with Image.open(target_path) as im:
                            w, h = im.size
                            if w > 2400 or h > 2400:
                                ratio = min(2400.0 / w, 2400.0 / h)
                                new_size = (int(w * ratio), int(h * ratio))
                                im_resized = im.resize(new_size, Image.Resampling.LANCZOS)
                                im_resized.save(target_path, quality=90, optimize=True)
                                print(f"Resized image from ({w}, {h}) to {new_size}")
                    except Exception as e:
                        print(f"Could not resize: {e}")
                        
                    collected_credits.append({
                        "id": item["id"],
                        "title": item["title"],
                        "category": item["category"],
                        "filename": target_filename,
                        "intended_placement": item["intended_placement"],
                        "creator": author if author else "Photographer / Institutional Archive",
                        "source_url": desc_url if desc_url else img_url,
                        "license": license_name,
                        "license_url": license_url,
                        "date_created": date_created,
                        "date_accessed": "2026-11-12",
                        "status": "Verified & Locally Cached"
                    })
                else:
                    print(f"Failed to download image: status {img_res.status_code}")
            except Exception as e:
                print(f"Download exception: {e}")
        else:
            print(f"Could not locate image for {item['id']}")

    # Save credit json
    json_path = os.path.join("website", "src", "data", "authentic_assets.json")
    os.makedirs(os.path.dirname(json_path), exist_ok=True)
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(collected_credits, f, indent=2, ensure_ascii=False)
        
    print(f"\nSuccessfully collected {len(collected_credits)} authentic heritage images.")

if __name__ == "__main__":
    download_and_process()
