# Online VGU Website - Project Setup

## Overview
This is a static React-based website for Vivekananda Global University's online programs. The website has been successfully imported from GitHub and configured to run in the Replit environment.

## Project Architecture
- **Frontend**: Pre-built React application with static assets
- **Server**: Express.js server serving static files
- **Build System**: No build required - pre-compiled static assets
- **Deployment**: Configured for autoscale deployment

## Recent Changes
- **2025-09-27**: Initial project import and setup
  - Installed Node.js 20 and Express server
  - Created server.js to serve static files on port 5000
  - Configured SPA routing for React Router
  - Set up workflow for development server
  - Configured deployment settings for production
  - **Fixed image loading issues**: Resolved JavaScript errors that were causing images to flash
  - **Improved server configuration**: External service requests now return proper 404s instead of HTML content

## Technical Setup
- **Host**: 0.0.0.0:5000 (required for Replit proxy)
- **Static Files**: Served from root directory with proper MIME types
- **Cache Control**: Disabled for HTML files to ensure updates are visible
- **SPA Support**: Fallback to index.html for client-side routing
- **External Services**: Proper 404 handling for Google Analytics, Facebook Pixel, etc.

## Status
✅ **Project Import Complete**: Website is fully functional with no JavaScript errors
✅ **Images Loading**: All static assets load properly without flashing
✅ **Ready for Production**: Deployment configuration is set up and ready

## User Preferences
- Standard web development setup
- Focus on maintaining existing functionality
- Clean, professional deployment configuration

## Dependencies
- express: ^4.18.2
- serve-static: ^1.15.0
- Node.js 20

## File Structure
```
/
├── public/            # Public assets directory (served by web server)
│   ├── index.html     # Main HTML file
│   ├── scripts/       # JavaScript bundles
│   ├── styles/        # CSS files  
│   ├── images/        # Static assets
│   ├── documents/     # PDF documents
│   └── html/          # Additional HTML pages
├── server.js          # Express server (not publicly accessible)
├── package.json       # Node.js dependencies (not publicly accessible)
└── replit.md          # This documentation (not publicly accessible)
```