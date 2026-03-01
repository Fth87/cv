import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { CvData } from '@/static/data';

type Props = { data: CvData; onSave: (data: CvData) => void };

export default function PersonalInfoForm({ data, onSave }: Props) {
  const [info, setInfo] = useState(data.personalInfo);
  const [saved, setSaved] = useState(false);

  const update = (key: keyof typeof info, value: string) => {
    setInfo({ ...info, [key]: value });
    setSaved(false);
  };

  const handleSave = () => {
    onSave({ ...data, personalInfo: info });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={info.name} onChange={(e) => update('name', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role / Title</Label>
            <Input id="role" value={info.role} onChange={(e) => update('role', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" value={info.location} onChange={(e) => update('location', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={info.email} onChange={(e) => update('email', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn URL</Label>
            <Input id="linkedin" value={info.linkedin} onChange={(e) => update('linkedin', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub URL</Label>
            <Input id="github" value={info.github} onChange={(e) => update('github', e.target.value)} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Summary</Label>
          <Textarea id="summary" rows={5} value={info.summary} onChange={(e) => update('summary', e.target.value)} />
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSave}>Save</Button>
          {saved && <span className="text-sm text-emerald-600">Saved!</span>}
        </div>
      </CardContent>
    </Card>
  );
}
