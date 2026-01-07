"use client";

import { motion } from "framer-motion";
import { Card } from "./card";
import { cn } from "@/lib/utils";

const AnimatedCard = ({ children, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={cn(
          "bg-[var(--card)] shadow-sm hover:shadow-lg transition-shadow duration-200",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
};

export { AnimatedCard };
