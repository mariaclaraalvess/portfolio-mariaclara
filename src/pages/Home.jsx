/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <section
            id="home"
            className="flex flex-col justify-center items-center min-h-screen bg-background text-white text-center px-6"
        >
            {/* título principal */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl font-bold mb-3 text-primary"
            >
                Maria Clara Carvalho Alves
            </motion.h2>

            {/* subtítulo */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="text-lg max-w-2xl mb-9 text-gray-300 leading-relaxed"
            >
                Desenvolvedora Front-End Júnior apaixonada por criar interfaces modernas
                e experiências digitais encantadoras 💜
            </motion.p>

            {/* botão */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
            >
                <Button className="bg-primary hover:opacity-80 text-white text-lg px-6 py-3 rounded-xl">
                    <a href="#projects">Ver projetos</a>
                </Button>
            </motion.div>
        </section>
    );
}
