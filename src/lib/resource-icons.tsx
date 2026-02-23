import type React from "react";
import {
  BookOpen,
  Smartphone,
  Clock,
  ClipboardCheck,
  ListChecks,
  HelpCircle,
  BookA,
} from "lucide-react";

export const resourceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/guide/eidas-2-compliance": BookOpen,
  "/guide/eudiw-preparation": Smartphone,
  "/eidas-2-timeline": Clock,
  "/assessment": ClipboardCheck,
  "/eidas-2-compliance-checklist": ListChecks,
  "/faq": HelpCircle,
  "/glossary": BookA,
};

export function getResourceIcon(href: string): React.ComponentType<{ className?: string }> | null {
  // Exact match first
  if (resourceIcons[href]) return resourceIcons[href];

  // Try matching by prefix (for glossary sub-pages, etc.)
  for (const [path, icon] of Object.entries(resourceIcons)) {
    if (href.startsWith(path)) return icon;
  }

  return null;
}
