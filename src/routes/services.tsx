import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../build.css";

export default function Services () {
  document.title = "Services - Radon Games";

  return (
    <div class="bg-gray-900 text-gray-100">
      <Navbar />
      <h1 class="text-2xl text-center py-10">Services</h1>
      <div class="text-center">
        <a target="_blank" href="https://github.com/Radon-Games/DNS" class="hover:underline">Radon DNS</a><br/>
        <a target="_blank" href="https://github.com/Radon-Games/Link-Bot" class="hover:underline">Link Bot</a>
      </div>
      <Footer />
    </div>
  );
}
