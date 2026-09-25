import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <Select defaultValue="acwi">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Endeks ailesi seçin" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="acwi">MSCI ACWI</SelectItem>
        <SelectItem value="world">MSCI World</SelectItem>
        <SelectItem value="em">MSCI Emerging Markets</SelectItem>
        <SelectItem value="factor">Factor Indexes</SelectItem>
      </SelectContent>
    </Select>
  );
}

export const code = `<Select defaultValue="acwi">
  <SelectTrigger className="w-56"><SelectValue /></SelectTrigger>
  <SelectContent>
    <SelectItem value="acwi">MSCI ACWI</SelectItem>
  </SelectContent>
</Select>`;
