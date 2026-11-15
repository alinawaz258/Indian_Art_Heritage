import glob
import re

files = glob.glob('website/src/**/*.tsx', recursive=True) + glob.glob('website/src/**/*.ts', recursive=True)
updated_files = []

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace "/assets/..." and "/deliverables/..." with "./assets/..." and "./deliverables/..."
    # Also handle template literals if any: `/assets/` -> `./assets/`
    new_content = re.sub(r'([\"\'`])/(assets|deliverables)/', r'\1./\2/', content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated_files.append(filepath)
        print(f"Updated {filepath}")

print(f"Total files updated: {len(updated_files)}")
