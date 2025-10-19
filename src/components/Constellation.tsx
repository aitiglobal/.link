import { useMemo, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  /** jumlah titik bintang (default 42) */
  points?: number;
};

export default function Constellation({ className, points = 42 }: Props) {
  // ViewBox tetap agar responsif
  const vb = { w: 1200, h: 520 };
  const pts = useMemo(() => {
    // generate sekali, posisi stabil
    const rnd = (n: number) => Math.floor(Math.random() * n);
    // sebarkan dengan padding supaya tidak nempel tepi
    const pad = 24;
    const arr = Array.from({ length: points }).map((_, i) => ({
      x: pad + rnd(vb.w - pad * 2),
      y: pad + rnd(vb.h - pad * 2),
      r: 1 + Math.random() * 1.6,
      d: 120 + Math.random() * 110, // threshold koneksi
      delay: (i * 0.15).toFixed(2),
    }));

    // edge list (garis antar titik dekat)
    const edges: Array<[number, number]> = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const dx = arr[i].x - arr[j].x;
        const dy = arr[i].y - arr[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < Math.min(arr[i].d, arr[j].d)) edges.push([i, j]);
      }
    }
    return { arr, edges };
  }, [points]);

  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <motion.svg
      ref={svgRef}
      viewBox={`0 0 ${vb.w} ${vb.h}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      // parallax drift ringan
      animate={{ x: [0, 10, 0], y: [0, -6, 0] }}
      transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
    >
      <defs>
        {/* gradient untuk garis + fade tepi */}
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(96,165,250,0.7)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0.6)" />
        </linearGradient>
        <radialGradient id="fade" cx="50%" cy="10%" r="75%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id="soft">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* garis konstelasi */}
      <g stroke="url(#glow)" strokeOpacity="0.25">
        {pts.edges.map(([i, j], k) => {
          const a = pts.arr[i];
          const b = pts.arr[j];
          return (
            <line
              key={`e-${k}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              strokeWidth="1"
              filter="url(#soft)"
              opacity="0.0"
            >
              <animate
                attributeName="opacity"
                values="0;0.7;0"
                dur={`${8 + (k % 5)}s`}
                begin={`${(k % 20) * 0.35}s`}
                repeatCount="indefinite"
              />
            </line>
          );
        })}
      </g>

      {/* bintang */}
      <g fill="white">
        {pts.arr.map((p, i) => (
          <circle key={`p-${i}`} cx={p.x} cy={p.y} r={p.r} opacity="0.35" filter="url(#soft)">
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur={`${5 + (i % 7)}s`}
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* masker fade supaya halus ke tepi */}
      <rect width={vb.w} height={vb.h} fill="url(#fade)" />
    </motion.svg>
  );
}
