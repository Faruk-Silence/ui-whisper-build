import { Search, SlidersHorizontal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Case {
  id: string;
  disease: string;
  location: string;
  severity: "Critical" | "High" | "Medium";
  status: "Active" | "Under observation" | "Recovered";
  reported: string;
}

const cases: Case[] = [
  {
    id: "NCDC-2025-001",
    disease: "Diphtheria",
    location: "Lagos",
    severity: "Critical",
    status: "Active",
    reported: "2 hours ago",
  },
  {
    id: "NCDC-2025-002",
    disease: "Lassa Fever",
    location: "Kano",
    severity: "High",
    status: "Active",
    reported: "5 hours ago",
  },
  {
    id: "NCDC-2025-003",
    disease: "Cholera",
    location: "Abuja",
    severity: "Critical",
    status: "Under observation",
    reported: "30 mins ago",
  },
  {
    id: "NCDC-2025-004",
    disease: "Typhoid",
    location: "Rivers",
    severity: "Medium",
    status: "Recovered",
    reported: "1 day ago",
  },
  {
    id: "NCDC-2025-005",
    disease: "Cholera",
    location: "Oyo",
    severity: "Medium",
    status: "Under observation",
    reported: "4 hours ago",
  },
  {
    id: "NCDC-2025-006",
    disease: "Cholera",
    location: "Oyo",
    severity: "Medium",
    status: "Under observation",
    reported: "4 hours ago",
  },
];

interface CaseTableProps {
  onSelectCase: (caseData: Case) => void;
}

export function CaseTable({ onSelectCase }: CaseTableProps) {
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
    <div className="bg-card rounded-lg shadow-sm border border-border">
      <div className="p-4 border-b border-border space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search inventory"
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="default" size="sm">
              All
            </Button>
            <Button variant="outline" size="sm">
              Active
            </Button>
            <Button variant="outline" size="sm">
              Critical
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border bg-muted/50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Case ID
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Disease
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Location
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Severity
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Reported
              </th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseData) => (
              <tr
                key={caseData.id}
                onClick={() => onSelectCase(caseData)}
                className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <td className="py-4 px-4 text-sm">{caseData.id}</td>
                <td className="py-4 px-4 text-sm font-medium">{caseData.disease}</td>
                <td className="py-4 px-4 text-sm">{caseData.location}</td>
                <td className="py-4 px-4">
                  <Badge
                    variant="secondary"
                    className={cn("text-xs", getSeverityColor(caseData.severity))}
                  >
                    {caseData.severity}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <Badge
                    variant="secondary"
                    className={cn("text-xs", getStatusColor(caseData.status))}
                  >
                    {caseData.status}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {caseData.reported}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
