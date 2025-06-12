README: Approach Explanation

This project is a redesigned 'Choose Your Skip Size' page for the website WeWantWaste.co.uk. The goal was to improve the visual layout, enhance user interactivity, and provide a seamless experience for skip selection based on skip size data.

Approach Overview

1.Component Design:**
   The entire functionality is encapsulated within a single functional React component called `App`.
   The layout is split into a sidebar for navigation and a main content area for skip selection.
   Tailwind CSS (or equivalent) is used for utility-first styling.

2.State Management:**
   `selectedSkip` tracks the ID of the currently selected skip.
   `showModal` toggles the confirmation modal after a selection is made.
   `dropdownOpen` handles toggling the sidebar dropdown menu.

3.Data Binding:**
   Skip data is pulled from a mock file (`mockSkips.ts`) containing objects with skip attributes.
   Images for each skip size are mapped using a `sizes` object.

4.UX Enhancements:**
   A modal provides users with confirmation details when a skip is selected.
   Disabled/forbidden skips are visually greyed out and made unselectable.
   Interactive buttons and footer navigation enhance user flow.

5.Accessibility & Feedback:**
   Clear labels, prices, and visual indicators (badges) are provided for each skip.
   Dynamic rendering is used to reflect selection and availability in real-time.


Choose Your Skip Size – React Component

This project is a redesigned React-based UI for selecting skip sizes, as part of a front-end challenge. The user can view available skip options, see skip details including hire period and pricing, and select a skip with a visual confirmation modal. The design emphasizes responsiveness, clean layout, and user experience.

Tech Stack
- React (TypeScript)
- Tailwind CSS
- Supabase (for skip image hosting)
- Mock Data (local JSON file)

📁 Project Structure
.
├── public/
├── src/
│   ├── App.tsx           // Main component
│   ├── App.css           // Styling
│   ├── mockSkips.ts      // Mock skip data
│   └── assets/           // Skip images (hosted remotely)
├── README.md
├── package.json
└── tsconfig.json

How to Run
1. Install dependencies:
npm install
2. Start development server:
npm run dev
The app will be available at http://localhost:5173 (or 3000, depending on config).

Features
- Responsive grid layout for skip sizes
- Dynamic modal confirmation
- Sidebar navigation with dropdown
- Visual badges for availability & features
- Footer bar with "Back", "Continue", and delivery option dropdown

Notes
- Skip images are sourced from a Supabase public storage bucket.
- Forbidden skips are visually disabled.
- The dropdown in the footer lets users choose delivery options (e.g., Standard, Priority, Next Day).

Author
Liswoga Rofhiwa Moses
Liswogar1@gmail.com
