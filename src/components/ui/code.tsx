import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Code = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        {...props}
        className={cn("bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold text-sm", className)}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = "Code";

export default Code;
