/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center text-center bg-background text-foreground px-6"
        >
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-6 text-primary"
            >
                Contato
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg text-gray-400 mb-8 max-w-xl"
            >
                Vamos conversar? 💌 Entre em contato por e-mail ou me encontre nas redes.
            </motion.p>

            <motion.div
                className="flex space-x-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <a
                    href="mailto:mrclrcarvalhoalves@gmail.com"
                    className="text-primary hover:text-primary/70 transition"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Mail size={32} />
                </a>
                <a
                    href="https://www.linkedin.com/in/mariaclara--alvess/"
                    className="text-primary hover:text-primary/70 transition"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Linkedin size={32} />
                </a>
                <a
                    href="https://github.com/mariaclaraalvess"
                    className="text-primary hover:text-primary/70 transition"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github size={32} />
                </a>
            </motion.div>
        </section>
    );
}
