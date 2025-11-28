import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-card border-t mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">S</span>
                            </div>
                            <span className="text-lg font-bold gradient-accent bg-clip-text text-transparent">
                                StudyMate
                            </span>
                        </div>

                        <p className="text-foreground/70 max-w-xs">
                            Connect with study partners based on subjects, learning preferences, and nearby locations.
                            Build your learning community today.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-end items-start gap-4">
                        {[
                            { icon: <Facebook size={20} />, label: "Facebook" },
                            { icon: <Twitter size={20} />, label: "Twitter" },
                            { icon: <Linkedin size={20} />, label: "LinkedIn" },
                            { icon: <Instagram size={20} />, label: "Instagram" }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                aria-label={item.label}
                                className="
                                    w-10 h-10 rounded-full 
                                    border border-border 
                                    flex items-center justify-center 
                                    transition-all

                                    hover:border-white
                                    hover:bg-white/10 
                                    hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]
                                    hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
                                "
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-border pt-8">
                    <p className="text-center text-foreground/60 text-sm">
                        © {new Date().getFullYear()} StudyMate. All rights reserved. Connecting learners, building communities.
                    </p>
                </div>
            </div>
        </footer>
    );
}
