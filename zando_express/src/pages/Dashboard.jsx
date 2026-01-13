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
import { SortDropdown } from "../components/SortDropdown";

export const Dashboard = () => {
  return (
    <div>
      <TopNavBar />
      <p className="flex items-center justify-center text-2xl font-bold">
        All Products
      </p>
      <div className="py-5 flex items-center justify-center text-lg font-semibold gap-4">
        Sort products by: <SortDropdown />
      </div>

      <div className="flex gap-2">
        <ProductsCategories />
        <Products />
      </div>
    </div>
  );
};
