import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CaseDetailsPanelProps {
  caseData: {
    id: string;
    disease: string;
    location: string;
    severity: string;
    status: string;
  };
}

export function CaseDetailsPanel({ caseData }: CaseDetailsPanelProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-critical/10 text-critical";
      case "High":
        return "bg-warning/10 text-warning";
      case "Medium":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success/10 text-success";
      case "Recovered":
        return "bg-primary/10 text-primary";
      case "Under observation":
        return "bg-warning/10 text-warning";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-1">Case details</h2>
        <p className="text-sm text-muted-foreground">{caseData.id}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Disease</p>
        <p className="text-lg font-semibold">{caseData.disease}</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">Severity</p>
          <Badge
            variant="secondary"
            className={cn("text-xs", getSeverityColor(caseData.severity))}
          >
            {caseData.severity}
          </Badge>
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">Status</p>
          <Badge
            variant="secondary"
            className={cn("text-xs", getStatusColor(caseData.status))}
          >
            {caseData.status}
          </Badge>
        </div>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Patient info</p>
        <p className="text-sm">45 years, Male</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Location</p>
        <p className="text-sm">{caseData.location === "Abuja" ? "Garki, Abuja" : caseData.location}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Facility</p>
        <p className="text-sm">National Hospital {caseData.location}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Reported by</p>
        <p className="text-sm">Dr Okonkwo</p>
        <p className="text-xs text-muted-foreground mt-1">Via Health worker App</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Reported Date</p>
        <p className="text-sm">2025-10-26</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Symptoms</p>
        <p className="text-sm">Severe diarrhoea, Dehydration, Vomiting</p>
      </div>

      <Button className="w-full">Update case</Button>
    </div>
  );
}
