/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center bg-background text-white text-center px-6"
        >
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-4 text-primary"
            >
                Maria Clara Carvalho Alves
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg max-w-2xl mb-8 text-gray-300"
            >
                Desenvolvedora Front-End Júnior com foco em React.js, interfaces
                modernas e experiências digitais encantadoras 💜
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <Button className="bg-primary hover:bg-primary/80 text-white text-lg px-6 py-3 rounded-xl">
                    <a href="#projects">Ver projetos</a>
                </Button>
            </motion.div>
        </section>
    );
}
