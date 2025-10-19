import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type DrawerProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  width?: number; // px
};

export default function Drawer({ open, title, onClose, children, width = 560 }: DrawerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onMouseDown={(e) => {
              if (e.target === overlayRef.current) onClose();
            }}
          />
          {/* Panel */}
          <motion.aside
            className="absolute right-0 top-0 h-full w-full sm:w-auto bg-[#0B1220] border-l border-white/10 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            style={{ width: `min(${width}px, 100%)` }}
            role="dialog"
            aria-modal="true"
            aria-label={title || "Detail"}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.03]">
              <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
              <button aria-label="Tutup" onClick={onClose} className="rounded-xl p-2 hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[calc(100%-56px)] overflow-y-auto px-5 sm:px-6 py-5">
              {children}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// --- tambahkan di paling bawah: src/components/Cards.tsx ---

import type { ReactNode } from "react";

type ContactCardProps = {
  icon?: ReactNode;
  title: string;
  desc: string;
  href?: string;   // optional CTA
  ctaText?: string; // optional teks CTA
};

export function ContactCard({
  icon,
  title,
  desc,
  href,
  ctaText = "Hubungi",
}: ContactCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            {icon}
          </div>
        )}
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="mt-1 text-white/80">{desc}</p>
        </div>
      </div>

      {href && (
        <div className="mt-4">
          <a
            href={href}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
          >
            {ctaText}
          </a>
        </div>
      )}
    </div>
  );
}
