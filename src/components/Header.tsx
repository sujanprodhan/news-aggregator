import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ onSearch, onFilter }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    date: "",
    category: "",
    source: "",
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      onFilter?.(newFilters); // Trigger filter update
      return newFilters;
    });
  };

  return (<header className="">
    <div className="bg-red-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Smart News</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">World</a>
          <a href="#" className="hover:underline">Technology</a>
          <a href="#" className="hover:underline">Sports</a>
        </nav>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search news..."
          className="p-2 rounded text-black hidden sm:block"
          onChange={(e) => onSearch?.(e.target.value)}
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 p-4">
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>World</a>
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Technology</a>
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Sports</a>

          <input
            type="text"
            placeholder="Search news..."
            className="p-2 rounded text-black"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </nav>
      )}


    </div>
    {/* Filter Menu */}
    <div className="left-0 right-0  pl-8 pr-8  pt-8 bg-white z-50 flex items-center space-x-4">
      <span> Filter by: </span>

      <input type="date" name="date"
        value={filters.date} onChange={handleFilterChange} className="p-2 rounded text-black" />
      <select
        name="category"
        value={filters.category}
        onChange={handleFilterChange}
        className="p-2 rounded text-black"
      >
        <option value="">All Categories</option>
        <option value="news">News</option>
        <option value="sports">Sports</option>
        <option value="tech">Technology</option>
      </select>

      <select
        name="source"
        value={filters.source}
        onChange={handleFilterChange}
        className="p-2 rounded text-black"
      >
        <option value="">All Sources</option>
        <option value="bbc">BBC</option>
        <option value="cnn">CNN</option>
        <option value="reuters">Reuters</option>
      </select>
    </div>
  </header>
  );
};

export default Header;
