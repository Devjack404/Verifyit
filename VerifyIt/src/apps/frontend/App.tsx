import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

export default function MyApp() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[300px] flex-col items-center justify-center px-6">
        <h1>Analayze a Website</h1>
        <p>
          Stay one step ahead of digital threats. Enter a URL below to receive an instant
          security appraisal and browse with confidence.
        </p>
        <div>
          <SearchBar />
        </div>
      </main>
      <Footer />
    </>
  );
}
