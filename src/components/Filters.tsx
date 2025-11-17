import React from "react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  industry: string;
  setIndustry: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: "asc" | "desc") => void;
  industries: string[];
  locations: string[];
}

const Filters: React.FC<Props> = ({
  search,
  setSearch,
  industry,
  setIndustry,
  location,
  setLocation,
  sortOrder,
  setSortOrder,
  industries,
  locations,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search company..."
        className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
      />

      {/* Industry */}
      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
      >
        <option value="">All Industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>

      {/* Location */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
      >
        <option value="asc">Sort: A → Z</option>
        <option value="desc">Sort: Z → A</option>
      </select>
    </div>
  );
};

export default Filters;
