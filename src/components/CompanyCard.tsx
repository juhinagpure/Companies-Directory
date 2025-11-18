import { motion } from "framer-motion";
import React from "react";
import type { Company } from "../types/Company";

interface Props {
  company: Company;
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-linear-to-br from-white via-blue-50 to-blue-100 border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
        <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-medium">
          {company.industry}
        </span>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-600 mt-3 flex items-center gap-1">
        📍 {company.location}
      </p>

      {/* Employees */}
      <p className="mt-4 text-sm text-gray-700">
        👥 <span className="font-semibold">{company.employees}</span> Employees
      </p>

      {/* Website */}
      <a
        href={company.website}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 px-3 py-1 text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 font-medium shadow-sm"
      >
        Visit Website →
      </a>
    </motion.div>
  );
};

export default CompanyCard;
