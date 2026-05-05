import { JsonLd } from "./JsonLd";
import { legalServiceSchema, websiteSchema } from "@/lib/schema";

export function LegalServiceSchema({ locale }: { locale: string }) {
  return <JsonLd data={legalServiceSchema(locale)} />;
}

export function WebsiteSchema() {
  return <JsonLd data={websiteSchema()} />;
}
