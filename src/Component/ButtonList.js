import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing arrow icons from react-icons

const youtubeButtonList = [
  "Play",
  "Pause",
  "Like",
  "Dislike",
  "Share",
  "Subscribe",
  "Unsubscribe",
  "Comment",
  "Save to Watch Later",
  "Download",
  "Report",
];

const ButtonList = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -100, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 100, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
      >
        <FaChevronLeft />
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-auto whitespace-nowrap p-4 bg-gray-100 border border-gray-300 scroll-smooth"
      >
        {youtubeButtonList.map((label, index) => (
          <button
            className="bg-slate-300 px-4 py-2 border border-cyan-50 rounded font-semibold mr-2 last:mr-0"
            key={index}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ButtonList;
