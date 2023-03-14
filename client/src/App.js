import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Note from "./pages/Note";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dear/:uniqId" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}
