import { JsonLd } from "./JsonLd";
import {
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export function ArticleSchema(props: {
  locale: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  modifiedDate?: string;
  category?: string;
  author?: string;
  authorSameAs?: string[];
  wordCount?: number;
}) {
  return <JsonLd data={articleSchema(props)} />;
}

export function FAQPageSchema({
  pairs,
}: {
  pairs: { question: string; answer: string }[];
}) {
  return <JsonLd data={faqPageSchema(pairs)} />;
}

export function BreadcrumbSchema(props: {
  locale: string;
  items: { name: string; path: string }[];
}) {
  return <JsonLd data={breadcrumbSchema(props)} />;
}
