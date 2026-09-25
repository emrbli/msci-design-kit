import { Activity, Users, Wallet } from "lucide-react";
import { StatCard } from "@/components/blocks/stat-card";

export default function StatCardDemo() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard label="Toplam varlık" value="₺24.8M" change="+3.2% bu ay" trend="up" icon={Wallet} />
      <StatCard label="Aktif kullanıcı" value="1,204" change="-1.1% bu ay" trend="down" icon={Users} />
      <StatCard label="İşlem hacmi" value="8,930" change="Değişim yok" trend="neutral" icon={Activity} />
    </div>
  );
}

export const code = `<StatCard label="Toplam varlık" value="₺24.8M" change="+3.2% bu ay" trend="up" icon={Wallet} />`;
