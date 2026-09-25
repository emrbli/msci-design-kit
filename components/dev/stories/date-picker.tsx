"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-56 justify-start">
          <CalendarIcon />
          {date ? date.toLocaleDateString("tr-TR") : "Tarih seçin"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

export const code = `<Popover>
  <PopoverTrigger asChild><Button variant="outline"><CalendarIcon />Tarih seçin</Button></PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`;
