#!/bin/bash
git clone https://git.prophets.be/playground/lets-disagree-to-agree.git . 
#remove this when merged into master
git fetch origin
git checkout -t remotes/origin/13-prefix-commit-messages-with-branch-name
#end remove
rm -rf .git 
git init
cp git/hooks/prepare-commit-msg .git/hooks/prepare-commit-msg
rm -rf git
rm -rf bash
git add -A 
git commit -m 'initial commit'