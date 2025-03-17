import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ onSearch, onFilter, onCategoryChange, onItemCategorySelect,selectedCategory }: any) => {
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

  return (
    <header>
      <div className="bg-red-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Smart News</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {["World", "Technology", "Sports", "Economics"].map((item) => (
              <a
                key={item}
                href="#"
                className={`relative px-[30px] py-2 rounded transition-all duration-300 ${
                  selectedCategory === item.toLowerCase() ? "bg-red-700 text-white" : "hover:bg-white/20"
                }`}
                // className="relative px-[30px] py-2 hover:bg-white/20 rounded transition-all duration-300"
                onClick={() => onItemCategorySelect(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search news..."
            className="p-2 rounded text-black hidden sm:block"
            onChange={(e) => onSearch?.(e.target.value)}
          />

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden flex flex-col space-y-4 p-4">
            {["Home", "World", "Technology", "Sports"].map((item) => (
              <a key={item} href="#" className="hover:underline" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
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
      <div className="left-0 right-0 pl-8 pr-8 pt-8 bg-white z-50 flex items-center space-x-4">
        <span>Filter by:</span>

        <input type="date" name="date" value={filters.date} onChange={handleFilterChange} className="p-2 rounded text-black" />
        
        <select name="category" value={filters.category} onChange={handleFilterChange} className="p-2 rounded text-black">
          <option value="">All Categories</option>
          <option value="news">News</option>
          <option value="sports">Sports</option>
          <option value="tech">Technology</option>
        </select>

        <select name="source" value={filters.source} onChange={handleFilterChange} className="p-2 rounded text-black">
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
