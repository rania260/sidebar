"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  User, // Pour la gestion des utilisateurs
  Map, // Pour la gestion des destinations
  Landmark, // Pour la gestion des monuments
  PieChart, // Pour la gestion des circuits
  BookOpen, // Pour la gestion des contenus
  Package, // Pour la gestion des packs
  Users, // Pour la gestion des partenaires
  CalendarCheck, // Pour la gestion des réservations
  Bell, // Pour la gestion des abonnements
  Calendar,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Dourbia",
    email: "Dourbia@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Dourbia",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Dourbia",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Dourbia",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Gestion utilisateurs",
      url: "#",
      icon: User,
      isActive: true,
      items: [

      ],
    },
    {
      title: "Gestion destinations",
      url: "#",
      icon: Map,
      items: [
      ],
    },
    {
      title: "Gestion monuments",
      url: "#",
      icon: Landmark,
      items: [
      ],
    },
    {
      title: "Gestion circuits",
      url: "#",
      icon: PieChart,
      items: [
      ],
    },
    {
      title: "Gestion contenus",
      url: "#",
      icon: BookOpen,
      items: [
      ],
    },
    {
      title: "Gestion packs",
      url: "#",
      icon: Package,
      items: [
      ],
    },
    {
      title: "Gestion partenaires",
      url: "#",
      icon: Users,
      items: [
      ],
    },
    {
      title: "Gestion réservations",
      url: "#",
      icon: CalendarCheck,
      items: [
      ],
    },
    {
      title: "Gestion abonnements",
      icon: Bell,
      items: [
      ],
    },
    {
      title: "Gestion évenements",
      icon: Calendar,
      items: [
      ],
    },
  ],

};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
