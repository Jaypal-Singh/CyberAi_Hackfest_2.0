import { cn } from "../../lib/utils";
import React from "react";

export function GridBackground({ children, className }) {
    return (
        <div
            className={cn(
                "relative flex h-full w-full items-center justify-center bg-black",
                className
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 pointer-events-none animate-[scroll_40s_linear_infinite]",
                    "[background-size:80px_80px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />

            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            ></div>
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}
