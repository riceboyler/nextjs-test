import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import LabelForm from "./LabelForm";
import AboutForm from "./AboutForm";
import AddressForm from "./AddressForm";
import ContactUsForm from "./ContactUsForm";
import LetterForm from "./LetterForm";

const Home = () => {
  return (
    <main className="py-2">
      <Container className="flex flex-col gap-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/profile">Profile</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex justify-between">
          <h1 className="text-4xl">Page Title</h1>
          <Link href="/profile" className="underline">
            Text Link
          </Link>
        </div>
        <LabelForm />
        <Separator />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="col-span-1">
            <AboutForm />
          </div>
          <div className="col-span-1 flex flex-col gap-8 md:gap-16">
            <AddressForm />
            <ContactUsForm />
          </div>
        </div>

        <h3 className="col-span-4 text-2xl font-semibold uppercase">Letter</h3>
        <Separator />
        <LetterForm />
      </Container>
    </main>
  );
};

export default Home;
