import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AnalyzePage from "./pages/AnalyzePage";

export default function MyApp() {
  return (
    <div className="flex bg-gray-100 min-h-screen flex-col">
      <Navbar />
      <AnalyzePage />
      <Footer />
    </div>
  );
}
