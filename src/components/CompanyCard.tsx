// import React from "react";
// import type { Company } from "../types/Company";

// interface Props {
//   company: Company;
// }

// const CompanyCard: React.FC<Props> = ({ company }) => {
//   return (
//     <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>

//         <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
//           {company.industry}
//         </span>
//       </div>

//       {/* Location */}
//       <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
//         📍 {company.location}
//       </p>

//       {/* Employees */}
//       <p className="mt-4 text-sm text-gray-700">
//         👥 <span className="font-semibold">{company.employees}</span> Employees
//       </p>

//       {/* Website */}
//       <a
//         href={company.website}
//         target="_blank"
//         rel="noreferrer"
//         className="block mt-4 text-sm text-blue-600 font-medium hover:underline"
//       >
//         Visit Website →
//       </a>
//     </div>
//   );
// };

// export default CompanyCard;

import { motion } from "framer-motion";
import React from "react";
import type { Company } from "../types/Company";

interface Props {
  company: Company;
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 border border-gray-300 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
        <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-medium">
          {company.industry}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-3 flex items-center gap-1">
        📍 {company.location}
      </p>

      <p className="mt-4 text-sm text-gray-700">
        👥 <span className="font-semibold">{company.employees}</span> Employees
      </p>

      <a
        href={company.website}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 px-3 py-1 text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 font-medium"
      >
        Visit Website →
      </a>
    </motion.div>
  );
};

export default CompanyCard;
