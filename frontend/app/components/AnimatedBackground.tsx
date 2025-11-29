"use client";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid-black dark:bg-grid-white opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-background/0 dark:bg-background/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
    );
}
