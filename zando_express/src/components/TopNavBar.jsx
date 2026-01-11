import { Heart, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { SearchField } from "./ui/searchField";
import { Link } from "react-router-dom";

export const TopNavBar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-5 space-x-4 shadow-sm">
      <p className="text-2xl text-black font-bold">Zando_Express</p>
      <div className="flex justify-center items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link to={"/categories"}>
                  <NavigationMenuLink>
                    All products categories
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <SearchField />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Heart size={20} />

        <ShoppingCart size={20} />
      </div>
    </div>
  );
};
