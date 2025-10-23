import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const links = [
        { href: "#home", label: "Início" },
        { href: "#projects", label: "Projetos" },
        { href: "#about", label: "Sobre" },
        { href: "#contact", label: "Contato" },
    ];

    return (
        <header className="fixed top-0 w-full bg-background/70 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-primary">Maria Clara</h1>

                {/* menu desktop */}
                <nav className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* botão menu mobile */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? <X /> : <Menu />}
                </button>
            </div>

            {/* menu mobile */}
            {menuAberto && (
                <nav className="md:hidden bg-background border-t border-border flex flex-col items-center py-5 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuAberto(false)}
                            className="text-foreground hover:text-primary transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
