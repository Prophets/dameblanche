#!/bin/bash
git clone https://git.prophets.be/playground/lets-disagree-to-agree.git .
git checkout --track -b origin/13-prefix-commit-messages-with-branch-name
rm -rf .git;
git init;
cp git/hooks/prepare-commit-msg .git/hooks/
git add -A;
git commit -m 'initial commit';
