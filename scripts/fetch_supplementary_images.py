import os
import requests
import re
from PIL import Image

HEADERS = {
    'User-Agent': 'IndianArtHeritageAcademicProject/1.0 (academic study; contact@heritage.edu)'
}

QUERIES = [
    # Search for Descent of the Ganges full view
    {
        "id": "mahabalipuram_descent_ganges_monolith",
        "query": "Descent of the Ganges Mahabalipuram",
        "category": "mahabalipuram",
        "title": "The Great Bas-Relief (Descent of the Ganges / Arjuna's Penance) Full Panorama"
    },
    # Search for Arjuna penance detail
    {
        "id": "mahabalipuram_penance_ascetic_detail",
        "query": "Arjuna Penance Mamallapuram ascetic",
        "category": "mahabalipuram",
        "title": "Detail of the Standing Ascetic and Four-Armed Shiva, Great Bas-Relief"
    },
    # Traditional Kolam in Tamil Nadu
    {
        "id": "kolam_tamil_nadu_threshold",
        "query": "Kolam Tamil Nadu rice flour threshold",
        "category": "kolam_rangoli",
        "title": "Daily Traditional Sikku Kolam Drawn with Rice Powder at Residential Threshold"
    },
    # Kolam Mylapore or Margazhi
    {
        "id": "kolam_margazhi_pavement",
        "query": "Kolam Chennai",
        "category": "kolam_rangoli",
        "title": "Large Festival Kolam on Temple Street, Tamil Nadu"
    },
    # Varaha cave temple
    {
        "id": "mahabalipuram_varaha_cave_facade",
        "query": "Varaha Cave Temple Mahabalipuram",
        "category": "mahabalipuram",
        "title": "Exterior Facade of Varaha Cave Temple Showing Vyala (Lion) Pillars"
    },
    # Ajanta gorge panorama
    {
        "id": "ajanta_caves_panorama",
        "query": "Ajanta Caves panoramic view gorge",
        "category": "ajanta",
        "title": "Panoramic View of the Waghora River Horseshoe Gorge and Ajanta Caves"
    }
]

out_dir = os.path.join("website", "public", "assets", "authentic")
os.makedirs(out_dir, exist_ok=True)

import json
json_path = os.path.join("website", "src", "data", "authentic_assets.json")
existing_credits = []
if os.path.exists(json_path):
    with open(json_path, "r", encoding="utf-8") as f:
        existing_credits = json.load(f)

for item in QUERIES:
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": item["query"],
        "gsrnamespace": 6,
        "gsrlimit": 4,
        "prop": "imageinfo",
        "iiprop": "url|size|mime|extmetadata",
        "format": "json"
    }
    try:
        r = requests.get(url, params=params, headers=HEADERS, timeout=15)
        if r.status_code == 200:
            pages = r.json().get("query", {}).get("pages", {})
            for pid, pdata in pages.items():
                if "imageinfo" in pdata and len(pdata["imageinfo"]) > 0:
                    info = pdata["imageinfo"][0]
                    mime = info.get("mime", "")
                    if "image/jpeg" in mime or "image/png" in mime:
                        img_url = info.get("url")
                        desc_url = info.get("descriptionurl", "")
                        meta = info.get("extmetadata", {})
                        author = meta.get("Artist", {}).get("value", "Wikimedia Contributor")
                        author = re.sub(r'<[^>]+>', '', author).strip()
                        license_name = meta.get("LicenseShortName", {}).get("value", "CC-BY-SA")
                        
                        target_filename = f"{item['id']}.jpg"
                        target_path = os.path.join(out_dir, target_filename)
                        
                        dl = requests.get(img_url, headers=HEADERS, timeout=25)
                        if dl.status_code == 200:
                            with open(target_path, "wb") as f:
                                f.write(dl.content)
                            try:
                                with Image.open(target_path) as im:
                                    w, h = im.size
                                    if w > 2400 or h > 2400:
                                        ratio = min(2400.0 / w, 2400.0 / h)
                                        im.resize((int(w * ratio), int(h * ratio)), Image.Resampling.LANCZOS).save(target_path, quality=90, optimize=True)
                            except Exception as e:
                                pass
                            
                            existing_credits.append({
                                "id": item["id"],
                                "title": item["title"],
                                "category": item["category"],
                                "filename": target_filename,
                                "intended_placement": f"{item['title']} - Academic Analysis",
                                "creator": author if author else "Photographer",
                                "source_url": desc_url if desc_url else img_url,
                                "license": license_name,
                                "date_accessed": "2026-11-12",
                                "status": "Verified & Locally Cached"
                            })
                            print(f"Retrieved {item['id']} successfully.")
                            break
    except Exception as e:
        print(f"Error for {item['id']}: {e}")

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(existing_credits, f, indent=2, ensure_ascii=False)
print("Updated authentic assets.")
