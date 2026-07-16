import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

export default function MyApp() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Analayze a Website</h1>
        <p>
          Stay one step ahead of digital threats. Enter a URL below to receive an instant
          security appraisal and browse with confidence.
        </p> 
      </main>
      <SearchBar />
    </>
  );
}
