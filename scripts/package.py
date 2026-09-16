"""Build a release ZIP from an explicit runtime-file allowlist."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
files = [
    "manifest.json",
    "popup/popup.html", "popup/popup.js", "popup/popup.css",
    "options/options.html", "options/options.js", "options/options.css",
    "services/api.js", "utils/helper.js",
    "assets/icons/logo16.png", "assets/icons/logo32.png",
    "assets/icons/logo48.png", "assets/icons/logo128.png",
]
destination = root / "dist" / "smply.zip"
destination.parent.mkdir(exist_ok=True)
with ZipFile(destination, "w", ZIP_DEFLATED) as archive:
    for name in files:
        archive.write(root / name, name)
print(destination)
