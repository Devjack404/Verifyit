import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

export default function MyApp() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-20">
        <h1 className="text-5xl font-bold">Analayze a Website</h1>
        
        <p className="mt-4 max-w-2xl text-center text-gray-600">
          Stay one step ahead of digital threats. Enter a URL below to receive an instant
          security appraisal and browse with confidence.
        </p>

        <div>
          <SearchBar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
