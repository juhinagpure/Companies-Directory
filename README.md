import { motion } from "framer-motion";
import React from "react";

const README = () => {
return (
<motion.div
className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg"
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }} >
<motion.h1
className="text-4xl font-bold mb-4 text-center text-blue-700"
whileHover={{ scale: 1.05 }} >
Companies Directory
</motion.h1>

      <p className="text-gray-700 mb-4">
        A modern, responsive web application showcasing a list of companies
        with search, filters, pagination, and animated cards. Built with{" "}
        <strong>React</strong>, <strong>Tailwind CSS</strong>, and{" "}
        <strong>Framer Motion</strong> for smooth UI interactions.
      </p>

      <hr className="my-4 border-gray-300" />

      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-600"
        whileHover={{ x: 5 }}
      >
        Features
      </motion.h2>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>Responsive <strong>card and table views</strong> for company listings.</li>
        <li><strong>Search</strong> companies by name.</li>
        <li>Filter by <strong>industry</strong> and <strong>location</strong>.</li>
        <li><strong>Pagination</strong> for large datasets.</li>
        <li>Animated <strong>cards</strong> with hover effects using <strong>Framer Motion</strong>.</li>
        <li><strong>Visit Website</strong> links open company websites in a new tab.</li>
        <li>Professional gradient card styling with soft, neutral background.</li>
      </ul>

      <hr className="my-4 border-gray-300" />

      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-600"
        whileHover={{ x: 5 }}
      >
        Technologies Used
      </motion.h2>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li><strong>React.js</strong> – Frontend library.</li>
        <li><strong>TypeScript</strong> – Type-safe development.</li>
        <li><strong>Tailwind CSS</strong> – Utility-first styling framework.</li>
        <li><strong>Framer Motion</strong> – Animations for hover and transitions.</li>
        <li><strong>Lucide React</strong> – Icons for UI enhancements.</li>
      </ul>

      <hr className="my-4 border-gray-300" />

      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-600"
        whileHover={{ x: 5 }}
      >
        Project Structure
      </motion.h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-gray-800 overflow-x-auto">

{`src/
├─ components/
│  ├─ CompanyCard.tsx # Individual card component with animations
│  ├─ CompanyList.tsx # Card & table views + toggle
│  ├─ Filters.tsx # Search and filter functionality
│  ├─ Pagination.tsx # Pagination controls
├─ api/
│  └─ useFetch.ts # Custom hook to fetch companies.json
├─ types/
│  └─ Company.ts # Type definitions
├─ utils/
│  └─ sortCompanies.ts # Sorting logic
├─ App.tsx # Main app component
└─ index.css # Tailwind & custom fonts
public/
└─ companies.json # Sample data of 50 companies`}
</pre>
</motion.div>
);
};

export default README;
