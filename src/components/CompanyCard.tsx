import React from "react";
import type { Company } from "../types/Company";

interface Props {
  company: Company;
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>

      <p className="text-sm text-gray-500 mt-1">
        {company.industry} • {company.location}
      </p>

      <p className="mt-3 text-sm text-gray-700 font-medium">
        👥 Employees: <span className="font-normal">{company.employees}</span>
      </p>

      <a
        href={company.website}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
      >
        Visit Website →
      </a>
    </div>
  );
};

export default CompanyCard;
