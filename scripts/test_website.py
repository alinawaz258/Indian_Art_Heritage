import requests

BASE_URL = "http://localhost:3000"

def test_site():
    print("Testing website at", BASE_URL)
    
    # Test index.html
    r = requests.get(BASE_URL)
    assert r.status_code == 200, f"Expected 200, got {r.status_code}"
    assert "INDIAN ART HERITAGE" in r.text or "root" in r.text, "Index HTML missing root"
    print("✓ Index HTML loaded (200 OK)")

    # Test key deliverable URLs
    deliverables = [
        "/deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.pdf",
        "/deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.html",
        "/deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.docx",
        "/deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.pdf",
        "/deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation.pptx",
        "/deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation_Deck.html",
        "/deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.pdf",
        "/deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.html"
    ]
    for d in deliverables:
        res = requests.get(BASE_URL + d)
        assert res.status_code == 200, f"Deliverable {d} returned {res.status_code}"
        assert len(res.content) > 1000, f"Deliverable {d} too small ({len(res.content)} bytes)"
        print(f"✓ Deliverable accessible: {d} ({len(res.content)} bytes)")

    # Test key authentic images
    images = [
        "/assets/authentic/ajanta_cave_17_facade.jpg",
        "/assets/authentic/ajanta_cave_17_mural_chaddanta.jpg",
        "/assets/authentic/mahabalipuram_descent_ganges_monolith.jpg",
        "/assets/authentic/mahabalipuram_shore_temple_exterior.jpg",
        "/assets/authentic/mahabalipuram_pancha_rathas_overview.jpg",
        "/assets/authentic/mahabalipuram_gajalakshmi_panel.jpg",
        "/assets/authentic/kolam_margazhi_pavement.jpg",
        "/assets/authentic/rangoli_diwali_colors.jpg",
        "/assets/diagrams/diagram_pulli_grid_types.svg",
        "/assets/diagrams/diagram_sikku_eulerian.svg",
        "/assets/diagrams/diagram_symmetry_groups.svg",
        "/assets/illustrations/panel_1_reconstruction.jpg",
        "/assets/illustrations/panel_2_reconstruction.jpg",
        "/assets/illustrations/panel_3_reconstruction.jpg",
        "/assets/illustrations/panel_4_reconstruction.jpg",
        "/assets/illustrations/panel_8_reconstruction.jpg"
    ]
    for img in images:
        res = requests.get(BASE_URL + img)
        assert res.status_code == 200, f"Image {img} returned {res.status_code}"
        assert len(res.content) > 500, f"Image {img} too small"
        print(f"✓ Image accessible: {img} ({len(res.content)} bytes)")

    print("\nALL HTTP AND DELIVERABLE CHECKS PASSED PERFECTLY!")

if __name__ == "__main__":
    test_site()
