import * as React from "react"
import { cn } from "@/lib/utils"
import { p } from "@/lib/styles"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `rounded-lg backdrop-blur-sm bg-slate-800/10 w-full ${p()}`,
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
