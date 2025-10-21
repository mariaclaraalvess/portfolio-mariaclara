/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import minhaFoto from "@/assets/maria.jpg"; // 👈 caminho da sua imagem real

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-background text-white px-6 py-20 gap-12"
        >
            {/* Foto com animação */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <img
                    src={minhaFoto}
                    alt="Maria Clara Carvalho Alves"
                    className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-primary/50 backdrop-blur-md"
                />
            </motion.div>

            {/* Texto */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-xl text-center md:text-left"
            >
                <h2 className="text-4xl font-bold text-primary mb-6">Sobre mim</h2>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                    Sou <strong>Maria Clara Carvalho Alves</strong>, desenvolvedora Front-End Júnior
                    apaixonada por criar interfaces modernas, acessíveis e cheias de personalidade.
                    Tenho experiência com <strong>React.js</strong>, <strong>TailwindCSS</strong> e
                    <strong> animações com Framer Motion</strong>.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Gosto de transformar ideias em experiências digitais fluidas e intuitivas —
                    sempre com atenção aos detalhes e um toque criativo 💜.
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/80 transition"
                >
                    Ver meus projetos
                </a>
            </motion.div>
        </section>
    );
}
