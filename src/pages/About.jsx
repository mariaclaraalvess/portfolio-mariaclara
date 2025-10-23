/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import minhaFoto from "@/assets/maria.jpg";

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-background text-white px-6 py-16 gap-10"
        >
            {/* foto */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <img
                    src={minhaFoto}
                    alt="Foto de Maria Clara"
                    className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-primary/50"
                />
            </motion.div>

            {/* texto */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-xl text-center md:text-left"
            >
                <h2 className="text-4xl font-bold text-primary mb-5">Sobre mim</h2>

                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    Oi! Eu sou <strong>Maria Clara</strong>, desenvolvedora Front-End Júnior 🌸.
                    Curto bastante trabalhar com <strong>React</strong>, <strong>TailwindCSS</strong> e
                    também com <strong>Framer Motion</strong> pra deixar tudo mais animado 😄.
                </p>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Gosto de transformar ideias em interfaces bonitas e fáceis de usar.
                    Tento sempre deixar meus projetos com um toque meu 💜
                </p>

                <a
                    href="#projects"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
                >
                    Ver meus projetos
                </a>
            </motion.div>
        </section>
    );
}
