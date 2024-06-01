"use client";

function SearchBar({ searchTerm,onSearch }) {
  return (
    <div className="mb-4 flex">
      <input
        type="text"
        className="p-2 border rounded-lg focus:outline-none focus:text-blue-800 focus:ring focus:ring-blue-200   w-1/2"
        placeholder="Search products ...."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar