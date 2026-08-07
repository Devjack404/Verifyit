import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AnalyzePage from "./pages/AnalyzePage";
import DisplayResultPage from "./pages/DisplayResultPage";
import LandingPageAnalyze from "./pages/LandingPageAnalyze";

export default function App() {
  return (
    <div className="flex flex-1 flex-col bg-gray-100 min-h-screen ">
      <Navbar />

      <main className="flex-1 ">
        <Routes>
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/result" element={<DisplayResultPage />} />
          <Route path="/" element={<LandingPageAnalyze />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
