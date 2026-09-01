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
  title: string;
  focus: string;
  description: string;
  status: "coming-soon";
  image: string;
  imageAlt: string;
};
