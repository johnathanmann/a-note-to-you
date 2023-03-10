import React, { useState, useEffect } from "react";
import Homepage from "../components/pages/Homepage";
import Form from "../components/pages/Form"

export default function ReactApp() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Form") {
      return <Form handlePageChange={handlePageChange} />;
    }
  };

  useEffect(() => {
    document.title = "A note to you";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderPage()}
    </div>
  );
}