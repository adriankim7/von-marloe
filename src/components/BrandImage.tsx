import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Brand artwork (wordmarks, swan emblem) is hosted by Lovable and does not load on other hosts.
 * When the image fails this renders `fallback` instead (nothing by default), so a page never
 * shows a broken-image icon. With the artwork available it behaves like a plain <img>.
 */
export function BrandImage({
  src,
  alt,
  className,
  fallback = null,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  // On prerendered pages the image can fail before React attaches onError, so check once on mount.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setFailedSrc(src);
  }, [src]);

  if (failedSrc === src) return <>{fallback}</>;
  return <img ref={ref} src={src} alt={alt} className={className} onError={() => setFailedSrc(src)} />;
}

/** Text stand-in for a wordmark image; inherits its color from the surrounding element. */
export function WordmarkText({ children }: { children: ReactNode }) {
  return <span className="font-serif text-base font-medium uppercase leading-none tracking-[0.35em]">{children}</span>;
}
