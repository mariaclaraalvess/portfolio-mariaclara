/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

const projetos = [
    {
        title: "🌿 Fazenda Santa Rita de Cássia",
        description:
            "Landing page simples e responsiva pra uma fazenda. Feita com HTML, CSS e JS.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/mariaclaraalvess/fazenda-santa-rita-de-cassia",
        live: "https://mariaclaraalvess.github.io/fazenda-santa-rita-de-cassia/",
        image: "https://mariaclaraalvess.github.io/fazenda-santa-rita-de-cassia/imagens/por-do-sol.jpg",
    },{
    title: "✅ CRUD de Tarefas",
    description:
        "Aplicação de gerenciamento de tarefas com funcionalidades de criação, edição e exclusão. Desenvolvida com React, TypeScript e estilizada com TailwindCSS.",
    tech: ["React", "TypeScript", "TailwindCSS", "localStorage"],
    github: "https://github.com/mariaclaraalvess/crud-tarefas",
    live: "https://crud-tarefas-nu.vercel.app",
    image: "https://github.com/mariaclaraalvess/crud-tarefas//imagens/Crud.jpg",
},
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col items-center min-h-screen bg-background text-white py-16 px-6"
        >
            <motion.h2
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold mb-10 text-primary text-center"
            >
                Meus Projetos
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                {projetos.map((proj, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white/5 border border-white/10 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="rounded-t-2xl h-52 w-full object-cover"
                            />
                            <CardContent className="p-5">
                                <h3 className="text-2xl font-semibold text-primary mb-2">
                                    {proj.title}
                                </h3>
                                <p className="text-gray-300 mb-4 text-base leading-relaxed">
                                    {proj.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {proj.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Button
                                        variant="outline"
                                        className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                                    >
                                        <Github size={18} />
                                        <a href={proj.github} target="_blank">
                                            Código
                                        </a>
                                    </Button>

                                    <Button className="flex items-center gap-2 bg-primary hover:opacity-80 text-white">
                                        <Globe size={18} />
                                        <a href={proj.live} target="_blank">
                                            Live
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
