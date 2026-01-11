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
import { Sidebar } from "../components/ui/sidebar";
import { ProductsCategories } from "./ProductsCategories";

export const Dashboard = () => {
  return (
    <div>
      <TopNavBar />
      <div className="flex gap-2">
        <ProductsCategories />
        <Products />
      </div>
    </div>
  );
};
