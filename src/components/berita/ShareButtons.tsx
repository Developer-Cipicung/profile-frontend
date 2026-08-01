"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

// ---------------------------------------------------------------------------
// Inline SVG brand icons — lucide-react v1.x does not include social brands
// ---------------------------------------------------------------------------

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

type ShareButtonsProps = {
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Always use the current page URL so it works on any domain/env.
  const getUrl = () =>
    typeof window !== "undefined" ? window.location.href : "";

  // ── Facebook ──────────────────────────────────────────────────────────────
  // sharer.php opens the official Facebook share dialog pre-filled with the URL.
  const openFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`;
    window.open(url, "_blank", "width=600,height=400,noopener,noreferrer");
  };

  // ── WhatsApp ──────────────────────────────────────────────────────────────
  // wa.me with pre-filled text: title on first line, URL on second line.
  const openWhatsApp = () => {
    const text = `*${title}*\n\n${getUrl()}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ── X / Twitter ───────────────────────────────────────────────────────────
  const openX = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(title)}`;
    window.open(url, "_blank", "width=600,height=400,noopener,noreferrer");
  };

  // ── Native Share (Instagram & more) ──────────────────────────────────────
  // Uses the Web Share API — on mobile this opens the native share sheet
  // which includes Instagram, Telegram, Line, etc.
  // Falls back to copying the URL on desktop.
  const openNativeShare = async () => {
    const pageUrl = getUrl();
    if (navigator.share) {
      try {
        await navigator.share({ title, url: pageUrl });
      } catch {
        // User cancelled or share failed — silently ignore
      }
    } else {
      // Desktop fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(pageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard API not available
      }
    }
  };

  const PLATFORMS = [
    {
      name: "Facebook",
      Icon: FacebookIcon,
      color: "bg-[#1877F2] hover:bg-[#1558b0]",
      onClick: openFacebook,
    },
    {
      name: "WhatsApp",
      Icon: WhatsAppIcon,
      color: "bg-[#25D366] hover:bg-[#1da851]",
      onClick: openWhatsApp,
    },
    {
      name: "X / Twitter",
      Icon: XIcon,
      color: "bg-[#0f1419] hover:bg-[#272c30]",
      onClick: openX,
    },
  ] as const;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
        <Share2 size={15} strokeWidth={2} aria-hidden="true" />
        Bagikan:
      </span>

      {/* Direct share buttons */}
      {PLATFORMS.map(({ name, Icon, color, onClick }) => (
        <button
          key={name}
          type="button"
          onClick={onClick}
          aria-label={`Bagikan ke ${name}`}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-200 hover:scale-110 ${color}`}
        >
          <Icon />
        </button>
      ))}

      {/* Native share / copy-link button */}
      <button
        type="button"
        onClick={openNativeShare}
        aria-label={copied ? "Tautan disalin" : "Bagikan atau salin tautan"}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 ${
          copied
            ? "bg-hijau"
            : "bg-gray-500 hover:bg-gray-700"
        }`}
      >
        {copied ? (
          <Check size={16} strokeWidth={2.5} aria-hidden="true" />
        ) : (
          <Copy size={15} strokeWidth={1.8} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
