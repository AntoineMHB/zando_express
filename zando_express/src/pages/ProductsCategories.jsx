import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import { useProducts } from "../context/ProductsContext";

export const ProductsCategories = () => {
  const { productsCategories, loading, error, fetchProductsByCategory } =
    useProducts();

  const handleCategoryClick = (categoryName) => {
    fetchProductsByCategory(categoryName);
  };

  return (
    <div>
      <Sidebar className="mt-19 h-[calc(100vh-4rem)]">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold text-xs">
              All Products Categories
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {productsCategories.map((item) => (
                  <SidebarMenuItem key={item.slug}>
                    <SidebarMenuButton asChild>
                      <button
                        onClick={() => handleCategoryClick(item.slug)}
                        className="w-full text-left"
                      >
                        {item.name}
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
