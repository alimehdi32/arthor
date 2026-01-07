"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { cn } from "@/lib/utils";

const Modal = ({ 
  open, 
  onOpenChange, 
  children, 
  title, 
  description, 
  footer,
  className,
  ...props 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn("sm:max-w-md", className)}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {(title || description) && (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
          )}
          <div className="py-4">
            {children}
          </div>
          {footer && <DialogFooter>{footer}</DialogFooter>}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export { Modal };
