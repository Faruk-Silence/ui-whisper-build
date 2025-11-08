import { Sidebar } from "@/components/Sidebar";
import { ChevronDown, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Map Section */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>USSD Community Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-96 bg-muted/20 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Nigeria Disease Outbreak Map</p>
                      <p className="text-xs mt-2">Interactive map showing disease hotspots across regions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Health Worker Reports */}
              <Card>
                <CardHeader>
                  <CardTitle>Health Worker Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-sm">Lagos General Hospital</p>
                        <p className="text-xs text-muted-foreground">Dr. Adeyemi - 2 hours ago</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <p className="text-sm">Diphtheria - <span className="font-semibold">12 cases</span></p>
                  </div>

                  <div className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-sm">Abuja clinic</p>
                        <p className="text-xs text-muted-foreground">Dr. Okonkwo - 1 hour ago</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <p className="text-sm">Cholera - <span className="font-semibold">8 cases</span></p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Environmental Sensors and Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Environmental Sensors */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Environmental Sensors (IoT)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium mb-3 text-sm">Water Quality</h4>
                      <div className="space-y-2">
                        {[
                          { city: "Lagos", value: 85, color: "bg-warning" },
                          { city: "Kano", value: 40, color: "bg-critical" },
                          { city: "Abuja", value: 75, color: "bg-critical" },
                          { city: "Rivers", value: 92, color: "bg-success" },
                        ].map((item) => (
                          <div key={item.city}>
                            <div className="flex justify-between text-xs mb-1">
                              <span>{item.city}</span>
                              <span>{item.value}%</span>
                            </div>
                            <Progress value={item.value} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium mb-3 text-sm">Air Quality</h4>
                      <div className="space-y-2">
                        {[
                          { city: "Lagos", value: 156, label: "PM2.5 unhealthy" },
                          { city: "Kano", value: 132, label: "PM10 sensitive" },
                          { city: "Abuja", value: 98, label: "PM0.3 moderate" },
                        ].map((item) => (
                          <div key={item.city} className="text-xs">
                            <p className="font-medium">{item.city}</p>
                            <p className="text-muted-foreground">{item.value} - {item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium mb-3 text-sm">Rodent Activity</h4>
                      <div className="space-y-2">
                        {[
                          { city: "Lagos", value: 78, alerts: 5 },
                          { city: "Kano", value: 45, alerts: 5 },
                          { city: "Abuja", value: 62, alerts: 8 },
                        ].map((item) => (
                          <div key={item.city} className="text-xs">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{item.city}</span>
                              <span>{item.value}%</span>
                            </div>
                            <p className="text-muted-foreground">{item.alerts} alerts - moderate</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resource Status and EOC Units */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Resource status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Lagos</span>
                          <Badge variant="destructive" className="text-xs">Critical</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <p className="text-muted-foreground">Vaccines</p>
                            <p className="font-medium">2500</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">PPE Kits</p>
                            <p className="font-medium">1200</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Beds</p>
                            <p className="font-medium">45</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Kano</span>
                          <Badge variant="outline" className="text-xs">Low</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <p className="text-muted-foreground">Vaccines</p>
                            <p className="font-medium">1800</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">PPE Kits</p>
                            <p className="font-medium">800</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Beds</p>
                            <p className="font-medium">32</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">EOC Units</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Lagos</span>
                          <Badge className="bg-success text-success-foreground text-xs">Active</Badge>
                        </div>
                        <div className="text-xs space-y-1">
                          <p>Yaba, Lagos - <span className="font-medium">12 active</span></p>
                          <p className="text-muted-foreground">24 personnel</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Kano</span>
                          <Badge className="bg-success text-success-foreground text-xs">Active</Badge>
                        </div>
                        <div className="text-xs space-y-1">
                          <p>Kano, Kano - <span className="font-medium">5 active</span></p>
                          <p className="text-muted-foreground">18 personnel</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
