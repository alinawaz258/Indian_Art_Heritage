import subprocess
import os

# 1. Retrieve the authenticated GitHub token from GCM
p = subprocess.Popen(['git', 'credential', 'fill'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
out, err = p.communicate(input='protocol=https\nhost=github.com\n')
token = ''
for line in out.splitlines():
    if line.startswith('password='):
        token = line.split('=', 1)[1]

dist_dir = os.path.abspath('website/dist')
print(f"Deploying dist from {dist_dir} to gh-pages branch...")

# Configure git inside dist_dir
def run_git(args, cwd=dist_dir):
    res = subprocess.run(['git'] + args, cwd=cwd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Git command failed: git {' '.join(args)}\nError: {res.stderr}")
    else:
        print(f"git {' '.join(args)} -> {res.stdout.strip()}")
    return res

# Clean existing .git in dist if any
git_dir = os.path.join(dist_dir, '.git')
if os.path.exists(git_dir):
    import shutil
    shutil.rmtree(git_dir)

run_git(['init'])
run_git(['checkout', '-b', 'gh-pages'])
run_git(['config', 'user.name', 'alinawaz258'])
run_git(['config', 'user.email', 'alinawaz2006@outlook.com'])
run_git(['add', '-A'])
run_git(['commit', '-m', 'Deploy Indian Art Heritage Exhibition to GitHub Pages'])

remote_url = f"https://x-access-token:{token}@github.com/alinawaz258/Indian_Art_Heritage.git"
res = run_git(['push', '-f', remote_url, 'gh-pages'])

if res.returncode == 0:
    print("SUCCESS: gh-pages branch pushed to GitHub!")
else:
    print("FAILED to push gh-pages branch.")
