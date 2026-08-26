from pathlib import Path

image_dir = Path("result_processing_images")
pages_dir = Path("pages/results")

pages_dir.mkdir(parents=True, exist_ok=True)

galaxies = {}

for file in image_dir.glob("fit_*.jpg"):
    parts = file.stem.split("_")

    galaxy_id = parts[1]
    snapshot = int(parts[2])

    galaxies.setdefault(galaxy_id, []).append((snapshot, file.name))


for galaxy_id, images in galaxies.items():

    # 28, 27, 26, ... 12
    images.sort(reverse=True)

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Galaxy {galaxy_id}</title>

    <link rel="stylesheet" href="../../styles.css">
</head>

<body>

<h1>Galaxy {galaxy_id}</h1>

<p>
    <a href="../../index.html#results">← Back to main page</a>
</p>

<div class="results-column">
"""

    for snapshot, filename in images:
        html += f"""
    <div class="result-image">
        <h2>Snapshot {snapshot}</h2>
        <img src="../../{image_dir}/{filename}"
             alt="Galaxy {galaxy_id}, snapshot {snapshot}">
    </div>
"""

    html += """
</div>

</body>
</html>
"""

    output = pages_dir / f"{galaxy_id}.html"
    output.write_text(html, encoding="utf-8")

    print(output)
