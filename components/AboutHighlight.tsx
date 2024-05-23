"use client";
import { motion } from "framer-motion";
import { HeroHighlight2, Highlight2 } from "./ui/hero-highlight-second";

export function AboutHighlightComponent2() {
  return (
    <HeroHighlight2 margin="my-2">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 1,
        }}
        className="text-3xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-3xl max-h-xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Become{" "}
        <Highlight2 className="text-black dark:text-white">
          unstoppable
        </Highlight2>
        .
      </motion.h1>
    </HeroHighlight2>
  );
}

export function HeaderComponent({ text }: { text: string }) {
  return (
    <HeroHighlight2 margin="my-2">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 1,
        }}
        className="text-3xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-3xl max-h-xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight2 className="text-black dark:text-white">{text}</Highlight2>
      </motion.h1>
    </HeroHighlight2>
  );
}
