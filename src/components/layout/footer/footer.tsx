import { Container } from "@/components/ui/container";
import { Routes } from "@/constants/routes";
import Link from "next/link";

const footerLinks: { label: string; href: Routes }[] = [
  {
    label: "Contact",
    href: Routes.CONTACT,
  },
  {
    label: "Terms",
    href: Routes.TERMS,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-2">
      <Container className="flex flex-col justify-between md:flex-row">
        <p>20xx All rights reserved</p>
        <div className="flex flex-col gap-2 md:flex-row">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
