import { cn } from "@/lib/utils";

interface TechBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "code" | "network" | "default";
}

export function TechBadge({
  className,
  variant = "default",
  ...props
}: TechBadgeProps) {
  const variantClasses = {
    default: "bg-primary/10 text-primary hover:bg-primary/20",
    code: "bg-code/10 text-code hover:bg-code/20",
    network: "bg-network/10 text-network hover:bg-network/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
