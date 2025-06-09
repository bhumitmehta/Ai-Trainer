import { cn } from "../lib/utils"

export function GradientText({
  children,
  className,
  from = "from-pink-500",
  via = "via-purple-500",
  to = "to-cyan-500",
}) {
  return (
    <span className={cn("bg-clip-text text-transparent bg-gradient-to-r", from, via, to, className)}>{children}</span>
  )
}
