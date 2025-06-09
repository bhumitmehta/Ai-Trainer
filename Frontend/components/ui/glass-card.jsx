import { cn } from "../../lib/utils"

export function GlassCard({ children, className, hoverEffect = false, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl",
        hoverEffect && "transition-all duration-300 hover:shadow-2xl hover:bg-white/20 hover:scale-[1.02]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
