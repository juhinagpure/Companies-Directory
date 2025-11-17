import React from "react";
import type { Company } from "../types/Company";
import CompanyCard from "./CompanyCard";

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = ({ companies }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Company Directory
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {companies.length > 0 ? (
          companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No companies found.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyList;
