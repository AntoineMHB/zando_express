import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { SearchField } from "../components/ui/searchField";
import { TopNavBar } from "../components/TopNavBar";

export const Dashboard = () => {
  return (
    <div>
      <TopNavBar />
      <div>Welcome to the Dashboard</div>
    </div>
  );
};
