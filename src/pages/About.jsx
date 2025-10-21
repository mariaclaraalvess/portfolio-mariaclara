/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const projects = [
    {
        title: "Portfólio Pessoal",
        description:
            "Meu site pessoal desenvolvido com React.js e TailwindCSS, focado em animações suaves e um design limpo.",
        tech: ["React", "TailwindCSS", "Framer Motion"],
        link: "#",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
        title: "Landing Page de Café",
        description:
            "Uma landing page moderna e responsiva para uma marca fictícia de café artesanal.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    },
    {
        title: "App de Tarefas",
        description:
            "Aplicativo simples de gerenciamento de tarefas com React e armazenamento local.",
        tech: ["React", "LocalStorage"],
        link: "#",
        image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center bg-background text-white px-6 py-20"
        >
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-primary mb-12"
            >
                Projetos
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-between h-60">
                            <div>
                                <h3 className="text-2xl font-semibold text-primary mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-base mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-secondary text-secondary-foreground px-3 py-1 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={project.link}
                                className="mt-4 inline-block text-primary hover:text-primary/80 font-medium transition"
                            >
                                Ver projeto →
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
