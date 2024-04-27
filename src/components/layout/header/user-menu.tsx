import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
  // TODO: subscribe authenticated user
  // const { data: user } = useUser();
  const user = {
    name: "Barbara",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <div>Hi, {user.name}</div>
        <ChevronDownIcon width={20} height={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
