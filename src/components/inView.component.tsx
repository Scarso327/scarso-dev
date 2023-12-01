"use client";

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react";

export default function InView({
    children,
    initial = {},
    visible = {},
    hidden = null,
    className = undefined
}: { children: React.ReactNode, initial: {}, visible: {}, hidden: {} | null, className: string | undefined }) {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [variant, setVariant] = useState<string>("initial");

    useEffect(() => {
        if (variant == "initial" && !inView) return; // This ensures it must've been visible at least once
        setVariant(inView ? "visible" : "hidden");
    }, [control, inView, variant])

    useEffect(() => {
        if (variant == "initial") return;
        control.start(variant);
    }, [control, variant])

    const variants = {
        initial: initial,
        visible: visible,
        hidden: hidden ?? visible // If no hidden value is provided it remains as visible state
    };

    return <div ref={ref}>
        <motion.div
            initial="initial"
            variants={variants}
            animate={control}
            className={className}
        >
            {children}
        </motion.div>
    </div>
}