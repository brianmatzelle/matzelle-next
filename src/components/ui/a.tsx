import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const aVariants = cva("hover:underline hover:underline-offset-4", {
  variants: {
    variant: {
      primary: "text-blue-500 text-lg font-semibold",
      secondary: "font-semibold text-white",
      source: "text-blue-500",
      lowkey: "text-black/[.5] dark:text-white/[.5] text-sm hover:no-underline transition-all duration-300 blur-[2px] opacity-50 hover:blur-none hover:opacity-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof aVariants> {}

const A = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <a
        className={cn(aVariants({ variant, className }))}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
)
A.displayName = "Link"

export { A, aVariants }
