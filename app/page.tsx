import { DashboardLayout } from "@/components/dashboard-layout";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
            <h3 className="text-lg font-semibold">Analytics Overview</h3>
          </div>
          <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
          </div>
          <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
          </div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Select an item from the sidebar to navigate to different sections
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
