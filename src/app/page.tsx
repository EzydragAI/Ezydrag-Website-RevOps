import { Hero } from "@/components/home/Hero";
import { Thesis } from "@/components/home/Thesis";
import { Method } from "@/components/home/Method";
import { Practices } from "@/components/home/Practices";
import { Desks } from "@/components/home/Desks";
import { ProductsReel } from "@/components/home/ProductsReel";
import { Proof } from "@/components/home/Proof";
import { Index } from "@/components/home/Index";
import { Desk } from "@/components/home/Desk";
import { faqs } from "@/content/story";
import { services } from "@/content/services";
import { site } from "@/content/site";

// FAQPage and Service structured data: makes the page's questions and offers
// directly quotable by search engines and generative/AI answer engines.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "RevOps AI production readiness services",
  url: `${site.url}/#practices`,
  itemListElement: services.map((service, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@type": "Organization", name: site.legalName, url: site.url },
      serviceType: "AI production readiness and governance for Revenue Operations",
      areaServed: "Worldwide",
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Hero />
      <Thesis />
      <Method />
      <Practices />
      <Desks />
      <ProductsReel />
      <Proof />
      <Index />
      <Desk />
    </>
  );
}
