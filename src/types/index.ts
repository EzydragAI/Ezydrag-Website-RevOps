export type HeaderTheme = "light" | "inverse";
export type ColorMode = "light" | "dark";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  status: "coming-soon";
  image: string;
  imageAlt: string;
  href: string;
};
