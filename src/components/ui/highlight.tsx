import { forwardRef } from "react";

const Highlight = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span ref={ref} className={`text-yellow-200 ${className || ""}`} {...props} />
    )
  }
)
Highlight.displayName = "Highlight"

export { Highlight }