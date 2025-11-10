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

interface CaseDetails {
  patientInfo: string;
  locationDetail: string;
  facility: string;
  reportedBy: string;
  reportingMethod: string;
  reportedDate: string;
  symptoms: string;
  linkedCases?: string;
  responseStatus?: string;
  labResults?: string;
}

const caseDetailsMap: Record<string, CaseDetails> = {
  "NCDC-2025-001": {
    patientInfo: "12 years, Male",
    locationDetail: "Sabon Gari, Kano",
    facility: "Community Health Clinic, Kano",
    reportedBy: "Nurse Fatima Ibrahim",
    reportingMethod: "ATOM Mobile App - Real-time Alert",
    reportedDate: "2025-11-10, 09:30 AM",
    symptoms: "Sore throat (2 days), Grey membrane on tonsils, Difficulty swallowing, Low-grade fever",
    linkedCases: "3 additional suspected cases identified in same compound (automated contact tracing initiated)",
    responseStatus: "Vaccination team deployed within 1 hour. Community health education campaign activated. Isolation protocols in place.",
    labResults: "Sample collected and sent for confirmation. Preliminary rapid test: Positive for diphtheria"
  }
};

export function CaseDetailsPanel({ caseData }: CaseDetailsPanelProps) {
  const details = caseDetailsMap[caseData.id] || {
    patientInfo: "45 years, Male",
    locationDetail: caseData.location === "Abuja" ? "Garki, Abuja" : caseData.location,
    facility: `National Hospital ${caseData.location}`,
    reportedBy: "Dr Okonkwo",
    reportingMethod: "Via Health worker App",
    reportedDate: "2025-10-26",
    symptoms: "Severe diarrhoea, Dehydration, Vomiting"
  };

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
        <p className="text-sm">{details.patientInfo}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Location</p>
        <p className="text-sm">{details.locationDetail}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Facility</p>
        <p className="text-sm">{details.facility}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Reported by</p>
        <p className="text-sm">{details.reportedBy}</p>
        <p className="text-xs text-muted-foreground mt-1">{details.reportingMethod}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Reported Date</p>
        <p className="text-sm">{details.reportedDate}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Symptoms</p>
        <p className="text-sm">{details.symptoms}</p>
      </div>

      {details.linkedCases && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">Linked Cases</p>
          <p className="text-sm">{details.linkedCases}</p>
        </div>
      )}

      {details.responseStatus && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">Response Status</p>
          <p className="text-sm">{details.responseStatus}</p>
        </div>
      )}

      {details.labResults && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">Lab Results</p>
          <p className="text-sm">{details.labResults}</p>
        </div>
      )}

      <Button className="w-full">Update case</Button>
    </div>
  );
}
