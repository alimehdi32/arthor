"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const SecondaryButton = ({ children, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        variant="outline"
        className={cn(
          "border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--secondary)]",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export { SecondaryButton };
