import companyLogo from "../assets/logo.png";

type Props = {
  /** ukuran kecil untuk footer/nav */
  small?: boolean;
  /** jika true, logo dibungkus tile putih rounded */
  framed?: boolean;
  /** alt text untuk aksesibilitas */
  alt?: string;
  /** class tambahan jika perlu */
  className?: string;
};

/**
 * Logo PNG
 * - Default: menampilkan PNG apa adanya (polos).
 * - Jika `framed` = true, dibungkus tile putih rounded (kontras di background gelap).
 */
export default function Logo({
  small = false,
  framed = false,
  alt = "AITI Global Nexus",
  className = "",
}: Props) {
  const rawSize = small ? "h-8 w-8" : "h-10 w-10";
  const tileSize = small ? "h-10 w-10 p-1.5" : "h-12 w-12 p-2";

  if (!framed) {
    return (
      <img
        src={companyLogo}
        alt={alt}
        className={`${rawSize} block object-contain ${className}`}
        width={small ? 32 : 40}
        height={small ? 32 : 40}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <div
      className={`grid place-items-center rounded-2xl bg-white text-[#0B1220] shadow-sm ${tileSize} ${className}`}
      aria-label={alt}
    >
      <img
        src={companyLogo}
        alt={alt}
        className="h-full w-full object-contain"
        width={small ? 40 : 48}
        height={small ? 40 : 48}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
