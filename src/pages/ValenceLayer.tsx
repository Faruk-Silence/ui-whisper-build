import { Sidebar } from "@/components/Sidebar";
import { ChevronDown, Search, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ValenceLayer = () => {
  const metrics = [
    { label: "Total Reports", value: "342", subtitle: "This month" },
    { label: "Validated", value: "289", subtitle: "84.5% accuracy" },
    { label: "Pending Review", value: "28", subtitle: "8.2%" },
    { label: "Flagged", value: "25", subtitle: "7.3%" },
  ];

  const lgaData = [
    { name: "Yaba LGA", location: "Lagos", trustIndex: 87, validation: "92%", status: 45, sentiment: "Positive", color: "text-success" },
    { name: "Ikeja LGA", location: "Lagos", trustIndex: 82, validation: "88%", status: 38, sentiment: "Positive", color: "text-success" },
    { name: "Nasarawa LGA", location: "Kano", trustIndex: 68, validation: "71%", status: 34, sentiment: "Cautious", color: "text-warning" },
    { name: "Garki LGA", location: "Abuja", trustIndex: 91, validation: "95%", status: 52, sentiment: "Positive", color: "text-success" },
    { name: "Eti-Osa LGA", location: "Lagos", trustIndex: 75, validation: "78%", status: 29, sentiment: "Neutral", color: "text-muted-foreground" },
    { name: "Obio-Akpor LGA", location: "Rivers", trustIndex: 79, validation: "82%", status: 31, sentiment: "Positive", color: "text-success" },
  ];

  const topNodes = [
    {
      name: "Mrs Adebayo Folake",
      badge: "high",
      role: "Community health volunteer",
      location: "Yaba, Lagos",
      reports: 23,
      accuracy: "96%",
    },
    {
      name: "Malam Ibrahim Yusuf",
      badge: "high",
      role: "Traditional leader",
      location: "Nasawarra, Kano",
      reports: 19,
      accuracy: "89%",
    },
    {
      name: "Alhaji Mohammed Bello",
      badge: "medium",
      role: "Market Leader",
      location: "Kaduna South",
      reports: 12,
      accuracy: "65%",
    },
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
            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metrics.map((metric) => (
                <Card key={metric.label}>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold mb-1">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LGA Table */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search inventory"
                        className="pl-9"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>LGA</TableHead>
                        <TableHead>Trust index</TableHead>
                        <TableHead>Validation</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Sentiment</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lgaData.map((lga) => (
                        <TableRow key={lga.name}>
                          <TableCell>
                            <div>
                              <p className="font-medium text-sm">{lga.name}</p>
                              <p className="text-xs text-muted-foreground">{lga.location}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${lga.trustIndex >= 85 ? 'bg-success' : lga.trustIndex >= 70 ? 'bg-warning' : 'bg-muted'}`} />
                              <span className="font-medium">{lga.trustIndex}</span>
                            </div>
                          </TableCell>
                          <TableCell>{lga.validation}</TableCell>
                          <TableCell>{lga.status}</TableCell>
                          <TableCell>
                            <span className={lga.color}>{lga.sentiment}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Top Valence Nodes */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Valence nodes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topNodes.map((node) => (
                    <div key={node.name} className="p-3 border border-border rounded-lg space-y-2">
                      <div className="flex items-start justify-between">
                        <p className="font-medium text-sm">{node.name}</p>
                        <Badge
                          variant={node.badge === "high" ? "default" : "secondary"}
                          className={node.badge === "high" ? "bg-success text-success-foreground" : ""}
                        >
                          {node.badge}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{node.role}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{node.location}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                        <div>
                          <p className="text-muted-foreground">Reports</p>
                          <p className="font-medium">{node.reports}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Accuracy</p>
                          <p className="font-medium">{node.accuracy}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ValenceLayer;
