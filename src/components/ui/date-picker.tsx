"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "@heroicons/react/24/outline";
import cx from "clsx";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  className?: string;
  placeholder?: string;
  value?: Date;
  onChange?: (date?: Date) => void;
}

export const DatePicker = ({
  className,
  placeholder = "Pick a date",
  value,
  onChange,
}: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cx(
            className,
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
