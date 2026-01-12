import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  as,
  children,
  shadow,
  className,
  href,
  border = true,
  topRounded = true,
  ...props
}) => {
  let Component = as || "div";

  if (href) {
    Component = "a";
  }

  return (
    <Component
      {...props}
      href={href}
      tabIndex={0}
      className={cn(
        `p-3 rounded-sm
        ${!topRounded ? "rounded-t-none" : ""}
        bg-white
        ${border ? "border border-gray-300" : ""}
        w-fit
        focus-visible:border-ring
        focus-visible:ring-ring/50
        focus-visible:ring-[3px]
        ${href ? "hover:bg-gray-100" : ""}
        ${shadow ? "shadow" : ""}
        ${className || ""}`
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
