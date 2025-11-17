import React from "react";
import type { Company } from "../types/Company";

interface Props {
  company: Company;
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="text-lg font-bold">{company.name}</h3>
      <p className="text-sm text-gray-600">
        {company.industry} • {company.location}
      </p>
      <p className="mt-2 text-sm">Employees: {company.employees}</p>

      <a
        href={company.website}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline text-sm mt-3 inline-block"
      >
        Visit Website
      </a>
    </div>
  );
};

export default CompanyCard;
