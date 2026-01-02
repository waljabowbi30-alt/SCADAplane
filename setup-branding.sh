#!/bin/bash

# setup-branding.sh
# This script helps configure branding for the application.

set -e

echo "Welcome to the Branding Setup Wizard!"
echo "This script will help you customize the branding of the application."
echo ""

# Function to prompt for input with a default value
prompt() {
  local prompt_text="$1"
  local default_value="$2"
  local var_name="$3"

  read -p "$prompt_text [$default_value]: " input
  if [ -z "$input" ]; then
    eval $var_name="\"$default_value\""
  else
    eval $var_name="\"$input\""
  fi
}

prompt "Enter your App Name" "Plane" APP_NAME
prompt "Enter your App Short Name" "$APP_NAME" APP_SHORT_NAME
prompt "Enter your App Description" "A modern project management tool." APP_DESCRIPTION

echo ""
echo "Updating manifest.json files..."

# Update apps/web/manifest.json
cat > apps/web/manifest.json <<EOF
{
  "theme_color": "#3579f6",
  "background_color": "#ffffff",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "name": "$APP_NAME",
  "short_name": "$APP_SHORT_NAME",
  "description": "$APP_DESCRIPTION",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
EOF

# Update apps/web/public/manifest.json
cat > apps/web/public/manifest.json <<EOF
{
  "name": "$APP_NAME",
  "short_name": "$APP_SHORT_NAME",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-348x348.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#FFFFFF",
  "background_color": "#FFFFFF",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait"
}
EOF

echo "Manifest files updated."
echo ""
echo "---------------------------------------------------------"
echo "NEXT STEPS:"
echo "1. Set the following environment variables in your deployment or .env file:"
echo "   VITE_SITE_NAME=\"$APP_NAME\""
echo "   VITE_SITE_TITLE=\"$APP_NAME | $APP_DESCRIPTION\""
echo "   VITE_SITE_DESCRIPTION=\"$APP_DESCRIPTION\""
echo ""
echo "2. Replace the logos and icons in the following directories:"
echo "   - apps/web/public/favicon/"
echo "   - apps/web/public/icons/"
echo "   - apps/web/public/plane-logos/"
echo ""
echo "   Note: Keep the filenames and dimensions same for easiest replacement."
echo "---------------------------------------------------------"
echo "Done!"
