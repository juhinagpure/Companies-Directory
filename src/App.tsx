import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useFetch } from "./api/useFetch";
import type { Company } from "./types/Company";

import CompanyList from "./components/CompanyList";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import { sortCompanies } from "./utils/sortCompanies";

function App() {
  const { data, loading, error } = useFetch<Company[]>("/companies.json");

  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  const filtered = useMemo(() => {
    if (!data) return [];

    let list = data;

    if (search) {
      list = list.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (industry) {
      list = list.filter((c) => c.industry === industry);
    }

    if (location) {
      list = list.filter((c) => c.location === location);
    }

    return sortCompanies(list, sortOrder);
  }, [data, search, industry, location, sortOrder]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const industries = [...new Set(data?.map((c) => c.industry) ?? [])];
  const locations = [...new Set(data?.map((c) => c.location) ?? [])];

  return (
    <div className="container mx-auto p-6">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Companies Directory
      </motion.h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <>
          <Filters
            search={search}
            setSearch={setSearch}
            industry={industry}
            setIndustry={setIndustry}
            location={location}
            setLocation={setLocation}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            industries={industries}
            locations={locations}
          />

          <CompanyList companies={paginated} />

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
