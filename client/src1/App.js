import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Homepage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}