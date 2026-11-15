import urllib.request
import ssl

ctx = ssl.create_default_context()
base_url = "https://alinawaz258.github.io/Indian_Art_Heritage"

test_paths = [
    "/",
    "/assets/index-CwjKVbF5.js",
    "/assets/index-PqVKz-FW.css",
    "/assets/authentic/ajanta_cave_17_facade.jpg",
    "/assets/authentic/mahabalipuram_descent_ganges_monolith.jpg",
    "/assets/diagrams/diagram_sikku_eulerian.svg",
    "/deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.pdf",
    "/deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.docx",
    "/deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.pdf",
    "/deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation.pptx",
    "/deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.pdf"
]

all_passed = True
for path in test_paths:
    url = base_url + path
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as resp:
            status = resp.getcode()
            length = len(resp.read())
            print(f"[{status}] OK: {path} ({length:,} bytes)")
    except urllib.error.HTTPError as e:
        all_passed = False
        print(f"[{e.code}] FAILED: {path} - {e.reason}")
    except Exception as e:
        all_passed = False
        print(f"[ERR] FAILED: {path} - {e}")

print("====================================")
if all_passed:
    print("ALL LIVE ENDPOINTS AND ASSETS VERIFIED (100% HEALTHY)!")
else:
    print("SOME ENDPOINTS FAILED.")
