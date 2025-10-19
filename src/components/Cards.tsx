// src/components/Cards.tsx
import type { ReactNode } from "react";

/* ---------- Utils ---------- */
const base =
  "group rounded-3xl border border-white/10 bg-white/[0.04] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

/* Accent map untuk ikon/badge */
type AccentKey = "blue" | "emerald" | "amber" | "violet";
const ACCENT: Record<AccentKey, { text: string; bg: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-400/10" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10" },
  amber: { text: "text-amber-400", bg: "bg-amber-400/10" },
  violet: { text: "text-violet-400", bg: "bg-violet-400/10" },
};

/* ---------- PillarCard (3 pilar) ---------- */
type PillarCardProps = {
  icon?: ReactNode;
  title: string;
  desc: string;
  accent?: AccentKey;     // default "blue"
  eyebrow?: string;       // NEW: label kecil di atas judul
};

export function PillarCard({
  icon,
  title,
  desc,
  accent = "blue",
  eyebrow,
}: PillarCardProps) {
  const a = ACCENT[accent];
  return (
    <div className={`${base} p-5`}>
      {icon && (
        <div
          className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${a.bg} ring-1 ring-white/10 ${a.text}`}
          aria-hidden
        >
          {icon}
        </div>
      )}

      {eyebrow && (
        <div className="text-[11px] uppercase tracking-wider text-white/60">
          {eyebrow}
        </div>
      )}

      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-white/80">{desc}</p>
    </div>
  );
}


/* ---------- ProofCard (kartu bukti/solusi) ---------- */
type ProofCardProps = {
  title: string;
  desc: string;
  imageUrl?: string; // optional placeholder / screenshot
};
export function ProofCard({ title, desc, imageUrl }: ProofCardProps) {
  return (
    <div className={`${base} overflow-hidden`}>
      <div className="h-32 bg-gradient-to-br from-white/5 to-transparent ring-1 ring-inset ring-white/10">
        {imageUrl ? <img src={imageUrl} alt={title} className="h-full w-full object-cover" /> : null}
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2 text-white/80">{desc}</p>
      </div>
    </div>
  );
}

/* ---------- PrototypeCard (opsional; tidak wajib dipakai) ---------- */
type PrototypeCardProps = {
  title: string;
  desc: string;
  cta?: string;
  href?: string;
  onClick?: () => void;
  snapshot?: ReactNode;
};
export function PrototypeCard({
  title,
  desc,
  cta = "Lihat Detail",
  href,
  onClick,
  snapshot,
}: PrototypeCardProps) {
  return (
    <div className={`${base} overflow-hidden`}>
      <div className="h-40 bg-gradient-to-br from-white/[0.06] to-transparent ring-1 ring-inset ring-white/10">
        {snapshot}
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2 text-white/80">{desc}</p>
        {(href || onClick) && (
          <div className="mt-4">
            {href ? (
              <a
                href={href}
                className="inline-flex rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
              >
                {cta}
              </a>
            ) : (
              <button
                onClick={onClick}
                className="inline-flex rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
              >
                {cta}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- ContactCard (dipakai di /kontak) ---------- */
type ContactCardProps = {
  icon?: ReactNode;
  title: string;
  desc: string;
  href?: string; // optional CTA link
  ctaText?: string;
};
export function ContactCard({ icon, title, desc, href, ctaText = "Hubungi" }: ContactCardProps) {
  return (
    <div className={`${base} p-5`}>
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
