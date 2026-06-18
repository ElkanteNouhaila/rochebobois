import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MessageCircle } from "lucide-react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import VirtualVisits from "./pages/VirtualVisits";
import FurnitureCatalog from "./pages/FurnitureCatalog";
import CreateProject from "./pages/CreateProject";
import ProjectDetails from "./pages/ProjectDetails";

function AppLayout() {
  return (
    <div className="app-gradient">
      <div className="app-shell">
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <main className="app-main">
            <Outlet />
          </main>
        </div>
      </div>
      <button className="chat-fab" aria-label="Chat">
        <MessageCircle size={22} />
      </button>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/virtual-visits" element={<VirtualVisits />} />
          <Route path="/virtual-visits/:id" element={<ProjectDetails />} />
          <Route path="/catalog" element={<FurnitureCatalog />} />
          <Route path="/create" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
