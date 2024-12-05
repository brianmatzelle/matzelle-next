import { forwardRef } from "react"

const Bold = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`font-bold text-slate-400 ${className || ""}`}
        {...props}
      />
    )
  }
)
Bold.displayName = "Bold"

export { Bold }
