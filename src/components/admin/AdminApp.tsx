import { useState } from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { getCvData, saveCvData, type CvData } from '@/static/data';
import AdminSidebar from './AdminSidebar';
import LoginPage from './LoginPage';
import PersonalInfoForm from './sections/PersonalInfoForm';
import ExperienceForm from './sections/ExperienceForm';
import EducationForm from './sections/EducationForm';
import SkillsForm from './sections/SkillsForm';
import AchievementsForm from './sections/AchievementsForm';
import PdfDownload from './sections/PdfDownload';

const AUTH_KEY = 'cv-admin-auth';

export default function AdminApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(AUTH_KEY) === 'true';
  });
  const [activeSection, setActiveSection] = useState('personal');
  const [data, setData] = useState<CvData>(getCvData);

  const handleSave = (updated: CvData) => {
    setData(updated);
    saveCvData(updated);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <LoginPage
        onLogin={() => {
          localStorage.setItem(AUTH_KEY, 'true');
          setIsLoggedIn(true);
        }}
      />
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoForm data={data} onSave={handleSave} />;
      case 'experience':
        return <ExperienceForm data={data} onSave={handleSave} />;
      case 'education':
        return <EducationForm data={data} onSave={handleSave} />;
      case 'skills':
        return <SkillsForm data={data} onSave={handleSave} />;
      case 'achievements':
        return <AchievementsForm data={data} onSave={handleSave} />;
      case 'pdf':
        return <PdfDownload data={data} />;
      default:
        return null;
    }
  };

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} onLogout={handleLogout} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-lg font-semibold capitalize">{activeSection === 'pdf' ? 'Download PDF' : activeSection}</h1>
          </header>
          <main className="flex-1 p-6">{renderSection()}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
