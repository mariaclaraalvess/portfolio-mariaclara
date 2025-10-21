import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "#home", label: "Início" },
        { href: "#projects", label: "Projetos" },
        { href: "#about", label: "Sobre" },
        { href: "#contact", label: "Contato" },
    ];

    return (
        <header className="fixed w-full top-0 bg-background/70 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-primary">Maria Clara</h1>

                {/* Desktop menu */}
                <nav className="hidden md:flex space-x-6">
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

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="md:hidden bg-background border-t border-border flex flex-col items-center py-4 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-foreground hover:text-primary transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
