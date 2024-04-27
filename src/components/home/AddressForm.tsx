import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddressForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold uppercase">Address</h3>
      <div className="space-2 flex flex-wrap gap-y-2">
        <div className="flex basis-full items-center space-x-2">
          <div className="basis-1/3 text-right md:basis-1/5">
            <Label>STREET</Label>
          </div>
          <div className="basis-2/3 md:basis-4/5">
            <Input type="text" placeholder="12-1234567" disabled />
          </div>
        </div>
        <div className="flex basis-full items-center space-x-2">
          <div className="basis-1/3 text-right md:basis-1/5">
            <Label>CITY</Label>
          </div>
          <div className="basis-2/3 md:basis-4/5">
            <Input type="text" placeholder="12-1234567" disabled />
          </div>
        </div>
        <div className="flex basis-full items-center space-x-2 md:basis-3/5">
          <div className="basis-1/3 text-right">
            <Label>STATE</Label>
          </div>
          <div className="basis-2/3">
            <Input type="text" placeholder="123-456-789" disabled />
          </div>
        </div>
        <div className="flex basis-full items-center space-x-2 md:basis-2/5">
          <div className="basis-1/3 text-right md:basis-1/2">
            <Label>ZIP</Label>
          </div>
          <div className="basis-2/3 md:basis-1/2">
            <Input type="text" placeholder="12-1234567" disabled />
          </div>
        </div>
        <div className="flex basis-full items-center space-x-2">
          <div className="basis-1/3 text-right md:basis-1/5">
            <Label>COUNTRY</Label>
          </div>
          <div className="basis-2/3 md:basis-4/5">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
