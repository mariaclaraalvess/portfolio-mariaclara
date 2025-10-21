import Header from "@/components/Header";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact"; // criaremos já já
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
