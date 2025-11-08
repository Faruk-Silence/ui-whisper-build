import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MetricCard } from "@/components/MetricCard";
import { CaseTable } from "@/components/CaseTable";
import { CaseDetailsPanel } from "@/components/CaseDetailsPanel";
import { ChevronDown } from "lucide-react";

const Dashboard = () => {
  const [selectedCase, setSelectedCase] = useState({
    id: "NCDC-2025-003",
    disease: "Cholera",
    location: "Abuja",
    severity: "Critical",
    status: "Active",
  });

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="md:ml-64">
        <header className="bg-card border-b border-border px-6 py-4 flex justify-between items-center sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
              </div>
            </button>
          </div>
          
          <button className="flex items-center gap-2 hover:bg-muted px-3 py-2 rounded-lg transition-colors">
            <span className="text-sm font-medium">Tunde Ayodele</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </header>

        <main className="p-6">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <MetricCard value={247} change={12} />
              <MetricCard value={89} change={5} />
              <MetricCard value={23} change={3} />
              <MetricCard value={158} change={7} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CaseTable onSelectCase={setSelectedCase} />
              </div>
              
              <div className="lg:col-span-1">
                <CaseDetailsPanel caseData={selectedCase} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
