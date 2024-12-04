import { forwardRef } from "react";

const Code = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        {...props}
        className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"
      >
        {children}
      </code>
    );
  }
);

export default Code;
