"use client";

import { usePathname, useRouter } from "next/navigation";

import { Search as SearchIcon } from "lucide-react";
import { filterSearchWords } from "@/lib/helper";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (formData: FormData) => {
    const search = formData.get("search");

    if (filterSearchWords(search as string)) {
      throw new Error("Invalid search word");
    }
    const newQuery = `/?search=${search}`;
    router.push(`${newQuery}`);
  };

  return (
    <form
      action={handleSearch}
      className="flex flex-1 items-center space-x-2 bg-[#3b3b3b] px-3 py-1 md:py-2 rounded-3xl text-gray-400 cursor-pointer"
    >
      <button type="submit">
        <SearchIcon />
      </button>
      <input
        name="search"
        type="text"
        placeholder="Search for games"
        className="bg-[#3b3b3b] rounded-r-3xl w-full outline-none"
      />
    </form>
  );
};

export default Search;
