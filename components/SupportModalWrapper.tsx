"use client";

import { SupportModal } from "./SupportModal";
import { useSupportModal } from "@/lib/useSupportModal";

export function SupportModalWrapper() {
  const { isOpen, onClose, onRemindLater } = useSupportModal();

  return (
    <SupportModal
      isOpen={isOpen}
      onClose={onClose}
      onRemindLater={onRemindLater}
    />
  );
} 