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
import { Products } from "../components/Products";

export const Dashboard = () => {
  return (
    <div>
      <TopNavBar />
      <Products />
    </div>
  );
};
