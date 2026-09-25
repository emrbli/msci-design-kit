"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const markets = ["Türkiye", "Amerika Birleşik Devletleri", "Almanya", "Japonya", "Birleşik Krallık", "Brezilya"];

export default function ComboboxDemo() {
  return (
    <Combobox items={markets}>
      <ComboboxInput placeholder="Pazar arayın..." />
      <ComboboxContent>
        <ComboboxEmpty>Sonuç bulunamadı.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxCollection>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxCollection>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

export const code = `<Combobox items={markets}>
  <ComboboxInput placeholder="Pazar arayın..." />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxCollection>
        {(item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
      </ComboboxCollection>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`;
