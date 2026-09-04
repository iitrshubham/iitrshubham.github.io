#!/usr/bin/env python3
"""Package the complete editable repository and prebuilt website, excluding temporary builds."""
from pathlib import Path
import sys
import zipfile

ROOT=Path(__file__).resolve().parents[1]
target=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else ROOT.parent/'shubham-complete-repository.zip'
if target.exists(): raise SystemExit('Output ZIP already exists. Choose a new filename to preserve the previous package.')
required=['assets','content','docs','tools','.github','reference-assets','reference-history',
          '.gitignore','README.md','CONTENT-GUIDE.md','VALIDATION.md','ROUTE-INVENTORY.md','NAVIGATION.md','LICENSE']
for rel in required:
    if not (ROOT/rel).exists(): raise SystemExit('Missing repository item: '+rel)
assert (ROOT/'docs/index.html').is_file()
assert (ROOT/'docs/about/index.html').is_file()
assert (ROOT/'docs/join/index.html').is_file()
target.parent.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(target,'w',zipfile.ZIP_DEFLATED) as z:
    for rel in required:
        source=ROOT/rel
        files=source.rglob('*') if source.is_dir() else [source]
        for file in sorted(files):
            if not file.is_file() or file.is_symlink() or '__pycache__' in file.parts or file.suffix=='.pyc': continue
            z.write(file,file.relative_to(ROOT))
with zipfile.ZipFile(target) as z:
    assert z.testzip() is None
    assert 'docs/.nojekyll' in z.namelist()
    assert 'tools/build.py' in z.namelist()
    print(f'Complete repository: {len(z.namelist())} files, {target.stat().st_size:,} bytes')
print(target)
