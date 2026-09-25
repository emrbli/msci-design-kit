import { BarChart3, Globe, ShieldCheck } from "lucide-react";
import { FeatureGrid } from "@/components/blocks/feature-grid";

export default function FeatureGridDemo() {
  return (
    <FeatureGrid
      features={[
        { icon: BarChart3, title: "Analitik", description: "Portföy performansını çok boyutlu izleyin." },
        { icon: ShieldCheck, title: "Risk yönetimi", description: "Çoklu varlık sınıfı risk modelleri." },
        { icon: Globe, title: "Küresel kapsam", description: "150'den fazla pazardan veri." },
      ]}
    />
  );
}

export const code = `<FeatureGrid features={[
  { icon: BarChart3, title: "Analitik", description: "..." },
  { icon: ShieldCheck, title: "Risk yönetimi", description: "..." },
]} />`;
