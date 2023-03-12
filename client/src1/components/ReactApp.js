import React, { useState, useEffect } from "react";
import Homepage from "../components/pages/Homepage";
import Form from "../components/pages/Form";
import Note from "../components/pages/Note"


export default function ReactApp() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Form") {
      return <Form handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Note") {
      return <Note handlePageChange={handlePageChange} />
    }
  };

  useEffect(() => {
    document.title = "A note to you";
    if (window.location.href == "http://localhost:3000/note/dear/:uniqId"){
      handlePageChange("Note")
    }
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderPage()}
    </div>
  );
}