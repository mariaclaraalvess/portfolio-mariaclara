import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
    const links = [
        { icon: <Linkedin />, href: "https://linkedin.com/in/seu-perfil" },
        { icon: <Github />, href: "https://github.com/seu-usuario" },
        { icon: <FileText />, href: "https://lattes.cnpq.br/seu-lattes" },
        { icon: <Mail />, href: "mailto:seuemail@gmail.com" },
    ];

    return (
        <footer
            id="contact"
            className="bg-background border-t border-primary/20 py-8 text-center text-gray-300"
        >
            <div className="flex justify-center space-x-6 mb-4">
                {links.map((link, i) => (
                    <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="text-sm">
                © {new Date().getFullYear()} Maria Clara Carvalho Alves — Todos os
                direitos reservados.
            </p>
        </footer>
    );
}
