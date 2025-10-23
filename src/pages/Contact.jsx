/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contato() {
    return (
        <section
            id="fale-comigo"
            className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-8 text-center"
        >
            {/* título */}
            <motion.h2
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-semibold text-primary mb-6"
            >
                Contato
            </motion.h2>

            {/* subtítulo */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="text-gray-400 text-lg mb-10 max-w-lg"
            >
                Vamos conversar? 💌 Fique à vontade pra mandar um e-mail ou me achar nas redes.
            </motion.p>

            {/* ícones */}
            <motion.div
                className="flex gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.7 }}
            >
                <a
                    href="mailto:mrclrcarvalhoalves@gmail.com"
                    className="text-primary hover:opacity-75 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                // TODO: adicionar feedback visual no hover
                >
                    <Mail size={30} />
                </a>

                <a
                    href="https://www.linkedin.com/in/mariaclara--alvess/"
                    className="text-primary hover:opacity-75 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin size={30} />
                </a>

                <a
                    href="https://github.com/mariaclaraalvess"
                    className="text-primary hover:opacity-75 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github size={30} />
                </a>
            </motion.div>
        </section>
    );
}
