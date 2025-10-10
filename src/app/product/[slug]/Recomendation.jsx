import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import MainCard from "../../../components/MainCard";

export default function RecommendationSection({ dataMenu }) {
  const itemsPerPage = 4; // tampilkan 4 produk per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dataMenu.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dataMenu.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-5xl text-black">
        Recommendation <span className="text-secondary">For You</span>
      </h1>

      {/* Grid produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MainCard data={currentItems} />
      </div>

      {/* Pagination */}
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary cursor-pointer"
          } text-white`}
        >
          <GoArrowLeft />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`flex justify-center items-center p-2 w-10 rounded-full ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-gray-300 text-black"
            } cursor-pointer`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary cursor-pointer"
          } text-white`}
        >
          <GoArrowRight />
        </button>
      </div>
    </section>
  );
}
