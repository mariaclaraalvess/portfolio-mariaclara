/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

const projects = [
    {
        title: "🌿 Fazenda Santa Rita de Cássia",
        description: "Landing page moderna e responsiva para uma fazenda familiar. Desenvolvida com React e TailwindCSS.",
        tech: ["React", "TailwindCSS", "Vite"],
        github: "https://github.com/seuusuario/fazenda-santa-rita",
        live: "#",
        image: "https://placehold.co/600x400?text=Fazenda+Santa+Rita",
    },
    {
        title: "💻 CRUD de Usuários",
        description: "Aplicação completa de cadastro e edição de usuários, com React Hooks e integração a API.",
        tech: ["React", "Axios", "Node.js"],
        github: "https://github.com/seuusuario/crud-usuarios",
        live: "#",
        image: "https://placehold.co/600x400?text=CRUD+Usuários",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-background text-white py-20 px-8 flex flex-col items-center"
        >
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-12 text-primary text-center"
            >
                Meus Projetos
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-t-2xl h-56 w-full object-cover"
                            />
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-semibold text-primary mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
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
                                        <Github size={18} />{" "}
                                        <a href={project.github} target="_blank">
                                            Código
                                        </a>
                                    </Button>
                                    <Button
                                        className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white"
                                    >
                                        <Globe size={18} />{" "}
                                        <a href={project.live} target="_blank">
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
