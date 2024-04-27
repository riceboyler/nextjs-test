import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AboutForm = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <h3 className="col-span-4 text-2xl font-semibold uppercase">About</h3>
      <div className="col-span-4 flex items-center space-x-2 md:col-span-2">
        <div className="basis-1/3 text-right md:basis-1/2">
          <Label>UNIQUE ID</Label>
        </div>
        <div className="basis-2/3 md:basis-1/2">
          <Input type="text" placeholder="12-1234567" disabled />
        </div>
      </div>
      <div className="col-span-4 flex items-center space-x-2 md:col-span-2">
        <div className="basis-1/3 text-right md:basis-1/2">
          <Label>ALT ID</Label>
        </div>
        <div className="basis-2/3 md:basis-1/2">
          <Input type="text" placeholder="12-1234567" disabled />
        </div>
      </div>
      <div className="col-span-4 flex items-center space-x-2 md:col-span-2">
        <div className="basis-1/3 text-right md:basis-1/2">
          <Label>DLN</Label>
        </div>
        <div className="basis-2/3 md:basis-1/2">
          <Input type="text" placeholder="123-456-789" disabled />
        </div>
      </div>
      <div className="col-span-4 flex items-center space-x-2 md:col-span-3">
        <div className="basis-1/3 text-right">
          <Label>LAST NAME</Label>
        </div>
        <div className="basis-2/3">
          <Input type="text" placeholder="12-1234567" disabled />
        </div>
      </div>
      <div className="col-span-4 flex items-center space-x-2 md:col-span-3">
        <div className="basis-1/3 text-right">
          <Label>GIVEN NAME</Label>
        </div>
        <div className="basis-2/3">
          <Input type="text" placeholder="12-1234567" disabled />
        </div>
      </div>
      <div className="col-span-4 flex items-center space-x-2 md:col-span-2">
        <div className="basis-1/3 text-right md:basis-1/2">
          <Label>GENDER</Label>
        </div>
        <div className="basis-2/3 md:basis-1/2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="M">M - MALE</SelectItem>
              <SelectItem value="F">F - FEMALE</SelectItem>
              <SelectItem value="Undefined">Better not say</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="col-span-4 flex items-center space-x-2 md:col-span-2 md:row-start-7">
        <div className="basis-1/3 text-right md:basis-1/2">
          <Label>DOB</Label>
        </div>
        <div className="basis-2/3 md:basis-1/2">
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default AboutForm;
