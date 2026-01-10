import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full block rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="card-icon mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                            {item.icon}
                        </div>
                        <h3 className="card-number text-2xl font-bold text-white mb-2">{item.number}</h3>
                        <div className="card-label text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">{item.label}</div>
                        <p className="card-description text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-6 overflow-hidden bg-zinc-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-0">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
