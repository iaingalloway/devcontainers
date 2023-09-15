#!/bin/sh
set -e

mkdir -p /home/vscode/repos
git clone https://github.com/iaingalloway/env.git /home/vscode/repos/env
sudo -u vscode bash /home/vscode/repos/env/setup-env.sh
