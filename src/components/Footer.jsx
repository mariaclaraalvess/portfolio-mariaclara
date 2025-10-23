import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
    const links = [
        { icon: <Linkedin />, href: "https://www.linkedin.com/in/mariaclara--alvess/" },
        { icon: <Github />, href: "https://github.com/mariaclaraalvess" },
        { icon: <FileText />, href: "http://lattes.cnpq.br/1094945502500220" },
        { icon: <Mail />, href: "mailto:mrclrcarvalhoalves@gmail.com" },
    ];

    return (
        <footer className="bg-background border-t border-primary/20 py-8 text-center text-gray-300">
            <div className="flex justify-center gap-6 mb-4">
                {links.map((link, i) => (
                    <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            <p className="text-sm">
                © {new Date().getFullYear()} Maria Clara Carvalho Alves — feito com 💜
            </p>
        </footer>
    );
}
