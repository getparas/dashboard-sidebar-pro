"use client";

import type * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Chart2,
  Command,
  Folder,
  Home,
  Profile2User,
  Setting3,
} from "iconsax-reactjs";

// Navigation items configuration
const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    description: "Overview and main dashboard",
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: Chart2,
    description: "View detailed analytics and reports",
  },
  {
    title: "Users",
    url: "/users",
    icon: Profile2User,
    description: "Manage users and permissions",
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
    description: "View and manage projects",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Setting3,
    description: "Application settings and preferences",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <motion.div
                  className="grid flex-1 text-left text-sm leading-tight"
                  initial={false}
                  animate={{
                    opacity: isCollapsed ? 0 : 1,
                    x: isCollapsed ? -10 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="truncate font-semibold">Dashboard Pro</span>
                  <span className="truncate text-xs">Test Edition</span>
                </motion.div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={isCollapsed ? item.title : undefined}
                    >
                      <Link href={item.url} className="relative">
                        <motion.div
                          className="flex items-center w-full"
                          whileHover={{ x: isCollapsed ? 0 : 2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                        >
                          {/* Icon - keep consistent small size */}
                          <item.icon
                            size="16"
                            variant="Bulk"
                            className="shrink-0"
                          />

                          {/* Text content with animation */}
                          <motion.span
                            className="ml-2"
                            initial={false}
                            animate={{
                              opacity: isCollapsed ? 0 : 1,
                              x: isCollapsed ? -10 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.title}
                          </motion.span>

                          {/* Active chevron */}
                          {isActive && !isCollapsed && (
                            <motion.div
                              className="ml-auto"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="size-4" />
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-full"
                            layoutId="activeIndicator"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                          />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-center p-2">
              <ThemeToggle />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
