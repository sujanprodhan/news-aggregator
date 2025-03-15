import React,{ useState } from "react";

const Header = ({ onSearch:any }) => {
    return (
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Smart News</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">World</a>
            <a href="#" className="hover:underline">Technology</a>
            <a href="#" className="hover:underline">Sports</a>
          </nav>
          <input
            type="text"
            placeholder="Search news..."
            className="p-2 rounded text-black"
            // onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </header>
    );
  };
  export default Header;