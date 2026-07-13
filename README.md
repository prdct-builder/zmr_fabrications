# Tri2 Import/Export - Vue UI

Modern Vue 3 frontend application for the Tri2 Import/Export system.

## Features

- 🎨 Modern, responsive UI built with Vue 3 and Element Plus
- 🌲 Tree-based hierarchical navigation
- 📤 Import/Export operations with drag-and-drop file upload
- 📋 Copy/Paste functionality for configurations
- 🔒 Role-based security management
- ⚡ Fast development with Vite
- 📱 Fully responsive design

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend tooling
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management
- **Element Plus** - Vue 3 UI library
- **Axios** - HTTP client

## Prerequisites

- Node.js 16+ and npm

## Installation

```bash
cd vue-app
npm install
```

## Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Build for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
vue-app/
├── src/
│   ├── components/         # Reusable components
│   ├── views/             # Page components
│   │   ├── ImportExportView.vue
│   │   └── RoleSecurityView.vue
│   ├── stores/            # Pinia state management
│   │   └── importExport.js
│   ├── services/          # API services
│   │   └── api.js
│   ├── router/            # Vue Router configuration
│   │   └── index.js
│   ├── App.vue            # Root component
│   └── main.js            # Application entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## API Integration

The application is configured to proxy API requests to `http://localhost:8080`. Update the proxy configuration in `vite.config.js` to match your backend server.

Mock data is currently used for demonstration. To connect to the real backend:

1. Ensure the Java backend is running
2. Update API endpoints in `src/services/api.js`
3. Remove mock data from `src/stores/importExport.js`

## Features Guide

### Import/Export View

- **Tree Navigation**: Browse application configurations hierarchically
- **Import**: Upload configuration files (ZIP format)
- **Export**: Download configurations as ZIP files
- **Copy/Paste**: Copy node types, workflow states, and properties
- **Delete**: Remove configurations with confirmation
- **Make a Copy**: Duplicate applications or workflows

### Role-Based Security View

- **Roles Management**: Add, view, and delete security roles
- **Permissions**: Configure role permissions using a tree structure
- **User Count**: See how many users are assigned to each role

## Customization

### Theme Colors

The application uses Element Plus theming. To customize colors, modify the CSS variables in `App.vue`.

### API Endpoints

Update API endpoints in `src/services/api.js` to match your backend URLs.

## License

Copyright @2017, Triniti Corporation. All rights reserved.
