import React, { useState } from "react";
import type { Company } from "../types/Company";
import CompanyCard from "./CompanyCard";
import Pagination from "./Pagination";

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = ({ companies }) => {
  const [view, setView] = useState<"card" | "table">("card");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(companies.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = companies.slice(start, start + itemsPerPage);

  return (
    <div className="w-full">
      {/* Header + Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Company Directory
        </h2>

        {/* Toggle */}
        <div
          onClick={() => setView(view === "card" ? "table" : "card")}
          className="relative w-36 h-10 bg-gray-200 rounded-full cursor-pointer flex items-center px-1 shadow-inner"
        >
          <div
            className="absolute top-1 h-8 w-16 bg-blue-100 rounded-full shadow-md transition-all duration-300"
            style={{
              left: view === "card" ? "4px" : "calc(100% - 68px)",
            }}
          ></div>

          <div className="flex-1 flex items-center justify-center z-10">
            <span
              className={`text-sm font-medium ${
                view === "card" ? "text-blue-700" : "text-gray-600"
              }`}
            >
              Card
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center z-10">
            <span
              className={`text-sm font-medium ${
                view === "table" ? "text-blue-700" : "text-gray-600"
              }`}
            >
              Table
            </span>
          </div>
        </div>
      </div>

      {/* CARD VIEW */}
      {view === "card" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paginated.length > 0 ? (
            paginated.map((c) => <CompanyCard key={c.id} company={c} />)
          ) : (
            <p className="text-gray-500 text-sm">No companies found.</p>
          )}
        </div>
      )}

      {/* TABLE VIEW */}
      {view === "table" && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full rounded-2xl overflow-hidden shadow-lg">
            <thead className="bg-linear-to-r from-blue-50 to-blue-100 text-sm text-gray-700">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Industry</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Employees</th>
                <th className="p-3 text-left">Website</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-gray-200 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                >
                  <td className="p-3 text-sm font-semibold text-gray-800">
                    {c.name}
                  </td>
                  <td className="p-3 text-sm">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {c.industry}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">{c.location}</td>
                  <td className="p-3 text-sm text-gray-700">{c.employees}</td>
                  <td className="p-3 text-sm">
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-3 py-1 text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 font-medium"
                    >
                      Visit Website
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default CompanyList;
