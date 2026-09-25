import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AY</AvatarFallback>
        </Avatar>
      </div>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AY</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>BK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}

export const code = `<Avatar>
  <AvatarImage src="/user.png" alt="" />
  <AvatarFallback>AY</AvatarFallback>
</Avatar>`;
