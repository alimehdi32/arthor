"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "bg-[var(--accent)] text-white px-5 py-2 rounded-md font-medium",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export { PrimaryButton };
