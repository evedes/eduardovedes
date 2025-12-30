"use client";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
            {/* Black hole effect - light mode (softer, lighter) */}
            <div
                className="absolute inset-x-0 top-0 h-[90vh] dark:hidden"
                style={{
                    background: `
                        radial-gradient(ellipse 100% 70% at 50% 0%,
                            rgba(139, 92, 246, 0.15) 0%,
                            rgba(59, 130, 246, 0.12) 25%,
                            rgba(147, 197, 253, 0.1) 45%,
                            rgba(191, 219, 254, 0.05) 65%,
                            transparent 85%
                        )
                    `,
                }}
            />
            {/* Inner glow - light mode */}
            <div
                className="absolute inset-x-0 top-0 h-[500px] dark:hidden"
                style={{
                    background: `
                        radial-gradient(ellipse 50% 100% at 50% 0%,
                            rgba(109, 40, 217, 0.2) 0%,
                            rgba(139, 92, 246, 0.15) 25%,
                            rgba(167, 139, 250, 0.1) 50%,
                            transparent 75%
                        )
                    `,
                }}
            />

            {/* Black hole effect - dark mode (original) */}
            <div
                className="absolute inset-x-0 top-0 h-[90vh] hidden dark:block"
                style={{
                    background: `
                        radial-gradient(ellipse 100% 70% at 50% 0%,
                            rgba(88, 28, 135, 0.4) 0%,
                            rgba(59, 130, 246, 0.3) 25%,
                            rgba(139, 92, 246, 0.2) 45%,
                            rgba(30, 64, 175, 0.1) 65%,
                            transparent 85%
                        )
                    `,
                }}
            />
            {/* Inner glow - dark mode */}
            <div
                className="absolute inset-x-0 top-0 h-[500px] hidden dark:block"
                style={{
                    background: `
                        radial-gradient(ellipse 50% 100% at 50% 0%,
                            rgba(0, 0, 0, 0.8) 0%,
                            rgba(15, 23, 42, 0.6) 25%,
                            rgba(88, 28, 135, 0.3) 50%,
                            transparent 75%
                        )
                    `,
                }}
            />

            {/* Fade to background at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 via-50% to-transparent" />
        </div>
    );
}
