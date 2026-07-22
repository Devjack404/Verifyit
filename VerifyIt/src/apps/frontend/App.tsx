import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AnalyzePage from "./pages/AnalyzePage";

export default function MyApp() {
  return (
    <div className="flex flex-1 flex-col bg-gray-100 min-h-screen ">
      <Navbar />

      <main className="flex-1 ">
        <AnalyzePage />
      </main>

      <Footer />
    </div>
  );
}
