export default function GradientBlob() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />
    </div>
  );
}
