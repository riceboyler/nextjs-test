import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold uppercase">Contact Us</h3>
      <div className="space-2 flex flex-wrap gap-y-2">
        <div className="flex basis-full items-center space-x-2">
          <div className="basis-1/3 text-right md:basis-1/5">
            <Label>Telephone</Label>
          </div>
          <div className="basis-2/3 md:basis-4/5">
            <Input type="text" placeholder="123-1234567" disabled />
          </div>
        </div>
        <div className="flex basis-full items-center space-x-2">
          <div className="basis-1/3 text-right md:basis-1/5">
            <Label>Email</Label>
          </div>
          <div className="basis-2/3 md:basis-4/5">
            <Input type="email" placeholder="test@email.com" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
