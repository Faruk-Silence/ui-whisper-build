import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: number;
  change: number;
  label?: string;
}

export function MetricCard({ value, change, label = "Total cases" }: MetricCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span
          className={cn(
            "text-xs px-2 py-1 rounded-full",
            "bg-destructive/10 text-destructive"
          )}
        >
          +{change}
        </span>
      </div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}
