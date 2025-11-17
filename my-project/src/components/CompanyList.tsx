import React from "react";
import type { Company } from "../types/Company";
import CompanyCard from "./CompanyCard";

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = ({ companies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((c) => (
        <CompanyCard key={c.id} company={c} />
      ))}
    </div>
  );
};

export default CompanyList;
