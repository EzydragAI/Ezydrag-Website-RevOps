import { Hero } from "@/components/home/Hero";
import { Thesis } from "@/components/home/Thesis";
import { Method } from "@/components/home/Method";
import { Practices } from "@/components/home/Practices";
import { Desks } from "@/components/home/Desks";
import { ProductsReel } from "@/components/home/ProductsReel";
import { Proof } from "@/components/home/Proof";
import { Index } from "@/components/home/Index";
import { Desk } from "@/components/home/Desk";

export default function HomePage() {
  return (
    <>
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
