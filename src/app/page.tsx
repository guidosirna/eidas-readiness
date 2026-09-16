import type { Metadata } from "next";
import HomePage, { homeMetadata, HOME_PATH } from "@/components/HomePage";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
  ...homeMetadata("en"),
  alternates: alternatesFor("en", HOME_PATH),
};

export default function Home() {
  return <HomePage locale="en" />;
}
