# Website Setup Guide

## Quick Start

1. Install dependencies:
```bash
cd website
npm install
```

2. Add your download files:
   - Copy your DMG/EXE/AppImage files to `public/downloads/`
   - Or update the download URLs in `app/page.tsx` to point to your hosting/CDN

3. Update download links in `app/page.tsx`:
   - Find the `platforms` array (around line 33)
   - Update the `download` field with your actual URLs:
     - **GitHub Releases**: `https://github.com/yourusername/idea-machine/releases/download/v1.0.1/filename.dmg`
     - **Direct hosting**: `https://yourdomain.com/downloads/file.dmg`
     - **Local files**: `/downloads/file.dmg` (place files in `public/downloads/`)
   - Set `available: true` when the download is ready

4. Run development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
npm start
```

## Building App for Windows & Linux

### Windows Build
1. Make sure you're on Windows or have a Windows build environment
2. Run: `npm run build`
3. The installer will be in: `release/1.0.1/Idea Machine-Windows-1.0.1-Setup.exe`

### Linux Build
1. Make sure you're on Linux or have a Linux build environment
2. Run: `npm run build`
3. The AppImage will be in: `release/1.0.1/Idea Machine-Linux-1.0.1.AppImage`
4. Make it executable: `chmod +x "Idea Machine-Linux-1.0.1.AppImage"`

### Adding Build Files to Website
1. Upload your Windows/Linux builds to your hosting/CDN
2. Update the download URLs in `app/page.tsx` platforms array
3. Set `available: true` for the respective platform

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Self-hosted
1. Build: `npm run build`
2. Start: `npm start`
3. Configure your web server to proxy to port 3000

## Customization

- Update colors in `tailwind.config.js`
- Modify content in `app/page.tsx`
- Add more pages in `app/` directory
- Update metadata in `app/layout.tsx`

