import { Sidebar } from "@/components/Sidebar";
import { ChevronDown, AlertCircle, MapPin, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResourceLens = () => {
  const resourceData = [
    {
      location: "Lagos",
      status: "Critical Alert",
      resources: [
        { name: "Vaccines", count: 2500, capacity: 50, status: "critical" },
        { name: "PPE Kits", count: 1200, capacity: 40, status: "critical" },
        { name: "Beds", count: 45, capacity: 35, status: "warning" },
        { name: "Medications", count: 3200, capacity: 43, status: "warning" },
        { name: "Test kits", count: 850, capacity: 53, status: "moderate" },
      ],
    },
    {
      location: "Kano",
      status: "Critical Alert",
      resources: [
        { name: "Vaccines", count: 1800, capacity: 42, status: "critical" },
        { name: "PPE Kits", count: 800, capacity: 32, status: "critical" },
        { name: "Beds", count: 32, capacity: 40, status: "warning" },
        { name: "Medications", count: 1500, capacity: 38, status: "warning" },
        { name: "Test kits", count: 1450, capacity: 60, status: "moderate" },
      ],
    },
  ];

  const deliveries = [
    { id: "DEL-001", location: "Lagos", status: "In Transit", items: "Vaccines (1500), PPE Kits(800)", eta: "2 days" },
    { id: "DEL-002", location: "Kano", status: "In Transit", items: "Vaccines (1500), PPE Kits(800)", eta: "2 days" },
    { id: "DEL-003", location: "Oyo", status: "Pending", items: "Vaccines (1500), PPE Kits(800)", eta: "2 days" },
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
            {/* Critical Resources Alert */}
            <div className="mb-6 p-4 bg-critical/10 border border-critical/20 rounded-lg flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-critical" />
              <div className="flex-1">
                <h3 className="font-semibold text-critical">Critical Resources Alerts</h3>
                <Tabs defaultValue="oyo" className="mt-2">
                  <TabsList className="h-8">
                    <TabsTrigger value="oyo" className="text-xs">Oyo - All resources</TabsTrigger>
                    <TabsTrigger value="lagos" className="text-xs">Lagos - PPE kits</TabsTrigger>
                    <TabsTrigger value="kano" className="text-xs">Kano - Test kits</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Resource Locations */}
              <div className="lg:col-span-2 space-y-4">
                {resourceData.map((location) => (
                  <Card key={location.location}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <CardTitle className="text-lg">{location.location}</CardTitle>
                        </div>
                        <Badge variant="destructive">{location.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {location.resources.map((resource) => (
                          <div key={resource.name} className="space-y-2">
                            <p className="text-sm font-medium">{resource.name}</p>
                            <p className="text-2xl font-bold">{resource.count}</p>
                            <Progress 
                              value={resource.capacity} 
                              className={`h-2 ${
                                resource.status === "critical" ? "[&>div]:bg-critical" :
                                resource.status === "warning" ? "[&>div]:bg-warning" :
                                "[&>div]:bg-success"
                              }`}
                            />
                            <p className="text-xs text-muted-foreground">
                              {resource.capacity}% capacity
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pending Deliveries */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <CardTitle>Pending Deliveries</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {deliveries.map((delivery) => (
                    <div key={delivery.id} className="p-3 border border-border rounded-lg space-y-2">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-sm">{delivery.id}</p>
                        <Badge 
                          className={
                            delivery.status === "In Transit" 
                              ? "bg-success text-success-foreground" 
                              : "bg-warning text-warning-foreground"
                          }
                        >
                          {delivery.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{delivery.location}</span>
                      </div>
                      <p className="text-xs">{delivery.items}</p>
                      <p className="text-xs text-muted-foreground">ETA: {delivery.eta}</p>
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

export default ResourceLens;
