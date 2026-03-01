import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/ui/sidebar';
import { User, Briefcase, GraduationCap, Code, Award, FileDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'pdf', label: 'Download PDF', icon: FileDown },
];

type Props = {
  activeSection: string;
  onSectionChange: (id: string) => void;
  onLogout: () => void;
};

export default function AdminSidebar({ activeSection, onSectionChange, onLogout }: Props) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/" target="_blank">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg text-sm font-bold">CV</div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">CV Admin</span>
                  <span className="truncate text-xs text-muted-foreground">Manage Content</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sections</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton isActive={activeSection === item.id} onClick={() => onSectionChange(item.id)} tooltip={item.label}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={onLogout}>
              <LogOut className="size-4" />
              <span>Logout</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
