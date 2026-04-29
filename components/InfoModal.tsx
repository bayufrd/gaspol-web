"use client";

import type { ReactNode } from "react";

export default function InfoModal({
  open,
  title,
  onClose,
  children
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="absolute left-1/2 top-1/2 w-[min(920px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2">
        <div className="bg-surface dark:bg-[#121212] text-on-surface dark:text-white rounded-3xl border border-outline-variant/30 shadow-2xl overflow-hidden">
          <div className="px-6 sm:px-8 py-5 border-b border-outline-variant/20 flex items-center justify-between gap-4">
            <div className="font-display text-xl sm:text-2xl font-black tracking-tight">{title}</div>
            <button
              type="button"
              onClick={onClose}
              className="h-10 w-10 grid place-items-center rounded-full border border-outline-variant/30 hover:bg-surface-container-low transition-colors"
              aria-label="Close"
              title="Close"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <div className="px-6 sm:px-8 py-6 max-h-[70vh] overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

