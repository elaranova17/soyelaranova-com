#!/bin/bash
KIT="$HOME/Documents/elara-nova/soyelaranova-com/web/public/_assets/photos/kit-web-real"
cp -v "$KIT"/evelyn-face-ref-*.jpg "$KIT"/evelyn-higgsfield-identity.json "$KIT"/evelyn-higgsfield-PROMPTS.txt "$HOME/Downloads/"
open "$HOME/Downloads"
echo "Done — files are in Downloads"
read -n 1 -p "Press any key..."
