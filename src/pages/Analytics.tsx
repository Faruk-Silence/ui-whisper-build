import { Sidebar } from "@/components/Sidebar";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const casesByState = [
    { state: "Lagos", cases: 87 },
    { state: "Kano", cases: 65 },
    { state: "Kaduna", cases: 54 },
    { state: "Oyo", cases: 32 },
    { state: "Abuja", cases: 28 },
    { state: "Rivers", cases: 25 },
  ];

  const ageDistribution = [
    { age: "11-20", cases: 10 },
    { age: "21-30", cases: 37 },
    { age: "31-40", cases: 63 },
    { age: "41-50", cases: 74 },
    { age: "51+", cases: 43 },
  ];

  const outbreakTrends = [
    { date: "Oct 1", Cholera: 45, Lassa: 32, Typhoid: 28, Meningitis: 15 },
    { date: "Oct 10", Cholera: 52, Lassa: 38, Typhoid: 35, Meningitis: 22 },
    { date: "Oct 16", Cholera: 78, Lassa: 45, Typhoid: 42, Meningitis: 28 },
    { date: "Oct 20", Cholera: 65, Lassa: 52, Typhoid: 48, Meningitis: 35 },
    { date: "Oct 25", Cholera: 82, Lassa: 58, Typhoid: 55, Meningitis: 42 },
    { date: "Oct 27", Cholera: 88, Lassa: 62, Typhoid: 60, Meningitis: 48 },
  ];

  const diseaseDistribution = [
    { name: "Cholera", value: 35, color: "#3b82f6" },
    { name: "Lassa Fever", value: 25, color: "#2563eb" },
    { name: "Typhoid", value: 20, color: "#60a5fa" },
    { name: "Meningitis", value: 15, color: "#93c5fd" },
    { name: "Others", value: 5, color: "#1e3a8a" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="md:ml-64">
        <header className="bg-card border-b border-border px-6 py-4 flex justify-between items-center sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <input
              type="search"
              placeholder="Search inventory"
              className="px-4 py-2 border border-border rounded-lg bg-background text-sm w-64"
            />
          </div>
          
          <button className="flex items-center gap-2 hover:bg-muted px-3 py-2 rounded-lg transition-colors">
            <span className="text-sm font-medium">Tunde Ayodele</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </header>

        <main className="p-6">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Cases by State */}
              <Card>
                <CardHeader>
                  <CardTitle>Cases by State</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={casesByState}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="state" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="cases" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Age Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ageDistribution} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="age" type="category" />
                      <Tooltip />
                      <Bar dataKey="cases" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Outbreak Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Outbreak Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={outbreakTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Cholera" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Lassa" stroke="#ef4444" strokeWidth={2} />
                      <Line type="monotone" dataKey="Typhoid" stroke="#f59e0b" strokeWidth={2} />
                      <Line type="monotone" dataKey="Meningitis" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Disease Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Disease Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={diseaseDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {diseaseDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
