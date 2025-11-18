# Companies Directory

A modern, responsive web application showcasing a list of companies with search, filters, pagination, and animated cards. Built with **React**, **Tailwind CSS**, and **Framer Motion** for smooth UI interactions.

---

## Features

- Responsive **card and table views** for company listings.
- **Search** companies by name.
- Filter by **industry** and **location**.
- **Pagination** for large datasets.
- Animated **cards** with hover effects using **Framer Motion**.
- **Visit Website** links open company websites in a new tab.
- Professional gradient card styling with soft, neutral background.

---

## Technologies Used

- **React.js** – Frontend library.
- **TypeScript** – Type-safe development.
- **Tailwind CSS** – Utility-first styling framework.
- **Framer Motion** – Animations for hover and transitions.
- **Lucide React** – Icons for UI enhancements.

---

## Project Structure

src/
├─ components/
│ ├─ CompanyCard.tsx # Individual card component with animations
│ ├─ CompanyList.tsx # Card & table views + toggle
│ ├─ Filters.tsx # Search and filter functionality
│ ├─ Pagination.tsx # Pagination controls
├─ api/
│ └─ useFetch.ts # Custom hook to fetch companies.json
├─ types/
│ └─ Company.ts # Type definitions
├─ utils/
│ └─ sortCompanies.ts # Sorting logic
├─ App.tsx # Main app component
└─ index.css # Tailwind & custom fonts
public/
└─ companies.json # Sample data of 50 companies
