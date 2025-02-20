import {  useSearchParams } from "react-router-dom";
import Search from "../components/Search";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        sort: e.target.value,
      });
    }
  };
  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        cat: category,
      });
    }
  };
  return (
    <div className="px-4 h-max sticky top-8">
      <h3 className="mb-4 text-sm font-medium">Search</h3>
      <Search />
      <h3 className="mt-8 mb-4 text-sm font-medium">Filters</h3>
      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 
                       cursor-pointer rounded-sm checked:bg-blue-800 "
          />
          Newest
        </label>
        <label className="flex items-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 
                       cursor-pointer rounded-sm checked:bg-blue-800 "
          />
          Most Popular
        </label>
        <label className="flex items-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 
                       cursor-pointer rounded-sm checked:bg-blue-800 "
          />
          Trending
        </label>
        <label className="flex items-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 
                       cursor-pointer rounded-sm checked:bg-blue-800 "
          />
          Oldest
        </label>
      </div>
      <h3 className="mt-8 mb-4 text-sm font-medium">Categories</h3>
      <div className="flex flex-col gap-2 text-sm">
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("general")}
        >
          All
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("web-design")}
        >
          Web Design
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("development")}
        >
          Development
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("databases")}
        >
          Databases
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("seo")}
        >
          Search Engines
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("marketing")}
        >
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
