"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SparklesProps {
    id?: string;
    className?: string;
    background?: string;
    particleColor?: string;
    particleDensity?: number;
    minSize?: number;
    maxSize?: number;
}

export const SparklesCore: React.FC<SparklesProps> = ({
                                                          id = "tsparticles",
                                                          className,
                                                          background = "transparent",
                                                          particleColor = "#FFFFFF",
                                                          particleDensity = 75,
                                                          minSize = 0.4,
                                                          maxSize = 1,
                                                      }) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const init = async () => {
            if (canvasRef.current) {
                // Mocking particles.js-like behavior
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;

                let particles: any[] = [];
                const options = {
                    particles: {
                        number: {
                            value: particleDensity,
                        },
                        color: {
                            value: particleColor,
                        },
                        size: {
                            value: { min: minSize, max: maxSize },
                            random: true,
                        },
                        move: {
                            enable: true,
                            speed: 0.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                        },
                        opacity: {
                            value: { min: 0.1, max: 0.5 },
                            random: true,
                        },
                    },
                };

                const resizeCanvas = () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                };

                const createParticles = () => {
                    particles = [];
                    const number = options.particles.number.value;
                    for (let i = 0; i < number; i++) {
                        particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            vx: (Math.random() - 0.5) * options.particles.move.speed,
                            vy: (Math.random() - 0.5) * options.particles.move.speed,
                            size:
                                Math.random() * (options.particles.size.value.max - options.particles.size.value.min) +
                                options.particles.size.value.min,
                            opacity:
                                Math.random() * (options.particles.opacity.value.max - options.particles.opacity.value.min) +
                                options.particles.opacity.value.min,
                        });
                    }
                };

                const drawParticles = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = options.particles.color.value;

                    particles.forEach((p) => {
                        ctx.beginPath();
                        ctx.globalAlpha = p.opacity;
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                        ctx.fill();
                    });
                };

                const updateParticles = () => {
                    particles.forEach((p) => {
                        p.x += p.vx;
                        p.y += p.vy;

                        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                    });
                };

                const animate = () => {
                    updateParticles();
                    drawParticles();
                    requestAnimationFrame(animate);
                };

                window.addEventListener("resize", () => {
                    resizeCanvas();
                    createParticles();
                });

                resizeCanvas();
                createParticles();
                animate();
                setIsInitialized(true);
            }
        };
        init();
    }, [particleDensity, particleColor, minSize, maxSize]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    };

    return (
        <div
            className={cn("relative h-full w-full", className)}
            onMouseMove={handleMouseMove}
        >
            <div className="pointer-events-none absolute inset-0 z-30">
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-full"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                rgba(14, 165, 233, 0.1),
                transparent 80%
              )
            `,
                    }}
                />
            </div>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ background }}
            ></canvas>
        </div>
    );
};