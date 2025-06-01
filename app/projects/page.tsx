import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { Calendar, Profile2User } from "iconsax-reactjs";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      status: "In Progress",
      dueDate: "2024-02-15",
      team: 5,
      progress: 75,
    },
    {
      id: 2,
      name: "Mobile App Redesign",
      description: "Complete UI/UX overhaul for mobile application",
      status: "Planning",
      dueDate: "2024-03-01",
      team: 3,
      progress: 25,
    },
    {
      id: 3,
      name: "API Integration",
      description: "Third-party API integration and documentation",
      status: "Completed",
      dueDate: "2024-01-20",
      team: 2,
      progress: 100,
    },
    {
      id: 4,
      name: "Dashboard Analytics",
      description: "Advanced analytics dashboard with real-time data",
      status: "In Progress",
      dueDate: "2024-02-28",
      team: 4,
      progress: 60,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "default"
                        : project.status === "In Progress"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      Due: {new Date(project.dueDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Profile2User className="mr-2 h-4 w-4 text-muted-foreground" />
                      {project.team} members
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
