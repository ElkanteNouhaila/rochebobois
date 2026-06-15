import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import VirtualVisits from "./pages/VirtualVisits";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/visits" element={<VirtualVisits />} />
      </Routes>
    </BrowserRouter>
  );
}