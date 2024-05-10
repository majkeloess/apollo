"use client";
import { motion } from "framer-motion";
import { HeroHighlight2, Highlight2 } from "./ui/hero-highlight-second";
export function AboutHighlightComponent() {
  return (
    <HeroHighlight2 margin="my-16">
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
          delay: 1,
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl max-h-xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        It's{" "}
        <Highlight2 className="text-black dark:text-white">not ok</Highlight2>{" "}
        to be weak.
      </motion.h1>
    </HeroHighlight2>
  );
}

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
        className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-3xl max-h-xl leading-relaxed lg:leading-snug text-center mx-auto "
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