import os
import subprocess
import time

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
BASE_DIR = os.path.abspath(".")

TASKS = [
    {
        "name": "Ajanta Storyboard Publication",
        "html": os.path.join(BASE_DIR, "deliverables", "ajanta_storyboard", "Ajanta_Storyboard_Publication.html"),
        "pdf": os.path.join(BASE_DIR, "deliverables", "ajanta_storyboard", "Ajanta_Storyboard_Publication.pdf")
    },
    {
        "name": "Mahabalipuram Thematic Report",
        "html": os.path.join(BASE_DIR, "deliverables", "mahabalipuram_analysis", "Mahabalipuram_Thematic_Report.html"),
        "pdf": os.path.join(BASE_DIR, "deliverables", "mahabalipuram_analysis", "Mahabalipuram_Thematic_Report.pdf")
    },
    {
        "name": "Mahabalipuram Presentation Slide Deck",
        "html": os.path.join(BASE_DIR, "deliverables", "mahabalipuram_analysis", "Mahabalipuram_Presentation_Deck.html"),
        "pdf": os.path.join(BASE_DIR, "deliverables", "mahabalipuram_analysis", "Mahabalipuram_Presentation_Deck.pdf")
    },
    {
        "name": "Kolam & Rangoli Academic Poster",
        "html": os.path.join(BASE_DIR, "deliverables", "kolam_rangoli_poster", "Kolam_Rangoli_Academic_Poster.html"),
        "pdf": os.path.join(BASE_DIR, "deliverables", "kolam_rangoli_poster", "Kolam_Rangoli_Academic_Poster.pdf")
    }
]

def export_all():
    print("Exporting PDFs via Chrome headless...")
    for t in TASKS:
        html_file = t["html"]
        pdf_file = t["pdf"]
        
        # Check relative images inside HTML and convert to absolute paths or file URIs if needed
        # Read HTML, replace relative /assets/ with absolute file:/// URIs for seamless rendering
        with open(html_file, "r", encoding="utf-8") as f:
            content = f.read()
            
        assets_abs = os.path.join(BASE_DIR, "website", "public", "assets").replace("\\", "/")
        fixed_content = content.replace('src="/assets/', f'src="file:///{assets_abs}/')
        
        temp_html = html_file.replace(".html", "_temp_print.html")
        with open(temp_html, "w", encoding="utf-8") as f:
            f.write(fixed_content)
            
        file_uri = "file:///" + temp_html.replace("\\", "/")
        cmd = [
            CHROME_PATH,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--run-all-compositor-stages-before-draw",
            f"--print-to-pdf={pdf_file}",
            file_uri
        ]
        
        try:
            res = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
            time.sleep(1) # Ensure file lock release
            if os.path.exists(pdf_file) and os.path.getsize(pdf_file) > 1000:
                print(f"SUCCESS: {t['name']} -> {pdf_file} ({os.path.getsize(pdf_file)} bytes)")
            else:
                print(f"FAILED: {t['name']} (stderr: {res.stderr})")
        except Exception as e:
            print(f"EXCEPTION for {t['name']}: {e}")
            
        if os.path.exists(temp_html):
            os.remove(temp_html)

if __name__ == "__main__":
    export_all()
