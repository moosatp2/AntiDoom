#!/bin/bash

# AntiDoom Extension Packaging Script
echo "🔧 Packaging AntiDoom Chrome Extension..."

# Check if we're in the right directory
if [ ! -f "manifest.json" ]; then
    echo "❌ Error: manifest.json not found. Please run this script from the extension root directory."
    exit 1
fi

# Create dist directory
mkdir -p dist

# Copy all necessary files to dist
echo "📁 Copying files to dist directory..."
cp -r manifest.json dist/
cp -r background.js dist/
cp -r popup.html dist/
cp -r options.html dist/
cp -r js/ dist/
cp -r css/ dist/
cp -r assets/ dist/
cp -r README.md dist/

# Create a zip file for distribution
echo "📦 Creating distribution package..."
cd dist
zip -r ../AntiDoom-Extension.zip . -x "*.DS_Store" "*.git*"
cd ..

echo "✅ Extension packaged successfully!"
echo "📁 Distribution files created:"
echo "   - dist/ (unpacked extension directory)"
echo "   - AntiDoom-Extension.zip (packaged extension)"
echo ""
echo "🎯 To install:"
echo "   1. Open Chrome and go to chrome://extensions/"
echo "   2. Enable Developer mode"
echo "   3. Click 'Load unpacked' and select the 'dist' folder"
echo ""
echo "📤 To share: Send the 'AntiDoom-Extension.zip' file to others" 