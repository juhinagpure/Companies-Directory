import type { Company } from "../types/Company";

export const sortCompanies = (
  companies: Company[],
  sortOrder: "asc" | "desc"
) => {
  return [...companies].sort((a, b) => {
    if (sortOrder === "asc") return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });
};
