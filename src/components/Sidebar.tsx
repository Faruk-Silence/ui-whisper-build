import { LayoutDashboard, FileText, Activity, BarChart3, Layers, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dash board", path: "/" },
  { icon: FileText, label: "Case management", path: "/case-management" },
  { icon: Activity, label: "Resource lens", path: "/resource-lens" },
  { icon: BarChart3, label: "Analytics & Reports", path: "/analytics" },
  { icon: Layers, label: "Valence layer", path: "/valence-layer" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-card rounded-lg shadow-md"
      >
        <Menu className="h-5 w-5" />
      </button>
      
      <aside
        className={cn(
          "fixed left-0 top-0 h-full bg-card border-r border-border transition-transform duration-300 z-40",
          "w-64 flex flex-col",
          !isOpen && "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">ATOM</h1>
              <p className="text-xs text-muted-foreground">NCDC dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors text-foreground hover:bg-muted"
                  activeClassName="bg-primary text-primary-foreground hover:bg-primary"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm hover:bg-muted transition-colors">
            <Activity className="h-4 w-4" />
            <span>Notifications</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm hover:bg-muted transition-colors">
            <Activity className="h-4 w-4" />
            <span>Help</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm hover:bg-muted transition-colors">
            <Activity className="h-4 w-4" />
            <span>Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
}
