# Project Structure

This document outlines the organized structure of the React spa application with proper separation of concerns.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── FilterDropdown.tsx
│   ├── LanguageSwitcher.tsx
│   ├── LoginForm.tsx
│   ├── PeopleGrid.tsx
│   ├── PeoplePagination.tsx
│   └── PersonCard.tsx
│
├── layouts/            # Layout components
│   ├── AppLayout.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HomeLayout.tsx
│   ├── MainHeader.tsx
│   └── TopHeader.tsx
│
├── pages/              # Page components (routes)
│   ├── BookingPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── ServicesPage.tsx
│   └── SpaHomePage.tsx
│
├── styles/             # All SCSS/CSS files organized by type
│   ├── components/     # Component-specific styles
│   │   ├── LanguageSwitcher.module.scss
│   │   └── PersonCard.module.scss
│   │
│   ├── layouts/        # Layout-specific styles
│   │   └── AppLayout.module.scss
│   │
│   ├── pages/          # Page-specific styles
│   │   ├── BookingPage.module.scss
│   │   ├── ContactPage.module.scss
│   │   ├── HomePage.module.scss
│   │   ├── LoginPage.module.scss
│   │   ├── ServicesPage.module.scss
│   │   └── SpaHomePage.module.scss
│   │
│   └── globals/        # Global styles
│       ├── App.css
│       └── index.css
│
├── contexts/           # React contexts
│   └── LanguageContext.tsx
│
├── hooks/              # Custom React hooks
│   └── useLanguage.ts
│
├── utils/              # Utility functions and data
│   └── translations.ts
│
├── assets/             # Static assets (images, icons, etc.)
│   ├── image/
│   ├── react.svg
│   └── [various image files]
│
├── App.tsx             # Main App component
├── main.tsx           # Entry point
└── vite-env.d.ts      # TypeScript declarations
```

## Import Path Conventions

### Component Styles
```tsx
import styles from '../styles/components/ComponentName.module.scss';
```

### Layout Styles
```tsx
import styles from '../styles/layouts/LayoutName.module.scss';
```

### Page Styles
```tsx
import styles from '../styles/pages/PageName.module.scss';
```

### Global Styles
```tsx
import '../styles/globals/index.css';
```

## Benefits of This Structure

1. **Clear Separation**: Each type of file has its dedicated location
2. **Easy Navigation**: Developers can quickly find what they need
3. **Scalability**: Easy to add new components, pages, or layouts
4. **Maintainability**: Related files are grouped together
5. **Import Clarity**: Clear import paths indicate file relationships

## File Naming Conventions

- **Components**: PascalCase (e.g., `PersonCard.tsx`)
- **Pages**: PascalCase with "Page" suffix (e.g., `HomePage.tsx`)
- **Layouts**: PascalCase with "Layout" suffix where applicable (e.g., `AppLayout.tsx`)
- **Styles**: Match component name + `.module.scss` (e.g., `PersonCard.module.scss`)
- **Contexts**: PascalCase with "Context" suffix (e.g., `LanguageContext.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useLanguage.ts`)
- **Utils**: camelCase (e.g., `translations.ts`)

## Color Scheme

The application uses a consistent spa-themed color palette:

- **Primary Background**: `#F8F4F0` (Light beige for warmth)
- **Accent 1**: `#C19A6B` (Luxury golden brown)
- **Accent 2**: `#8B5E3C` (Dark brown for titles and buttons)
- **Secondary**: `#A1B79F` (Soft pastel green)
- **Text**: `#444444` (Easy to read, not too dark)
