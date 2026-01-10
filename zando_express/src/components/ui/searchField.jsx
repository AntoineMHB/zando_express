import { Search } from "lucide-react";
import { Input } from "./input";

export const SearchField = () => {
  return (
    <div className="relative">
      <Input className=" pr-10" placeholder="Search anything" />

      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        size={20}
      />
    </div>
  );
};
