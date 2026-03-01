import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, X } from 'lucide-react';
import type { CvData } from '@/static/data';

type Props = { data: CvData; onSave: (data: CvData) => void };

type SkillCategory = 'programming' | 'machineLearning' | 'webDev';

const categoryLabels: Record<SkillCategory, string> = {
  programming: 'Programming & Tools',
  machineLearning: 'Machine Learning',
  webDev: 'Web Development',
};

export default function SkillsForm({ data, onSave }: Props) {
  const [skills, setSkills] = useState(data.skills);
  const [newSkill, setNewSkill] = useState<Record<SkillCategory, string>>({ programming: '', machineLearning: '', webDev: '' });
  const [saved, setSaved] = useState(false);

  const addSkill = (category: SkillCategory) => {
    const value = newSkill[category].trim();
    if (!value || skills[category].includes(value)) return;
    setSkills({ ...skills, [category]: [...skills[category], value] });
    setNewSkill({ ...newSkill, [category]: '' });
    setSaved(false);
  };

  const removeSkill = (category: SkillCategory, index: number) => {
    setSkills({ ...skills, [category]: skills[category].filter((_, i) => i !== index) });
    setSaved(false);
  };

  const handleSave = () => {
    onSave({ ...data, skills });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      {(Object.keys(categoryLabels) as SkillCategory[]).map((category) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="text-base">{categoryLabels[category]}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {skills[category].map((skill, i) => (
                <Badge key={i} variant="secondary" className="gap-1 pr-1">
                  {skill}
                  <button onClick={() => removeSkill(category, i)} className="ml-1 hover:text-destructive">
                    <X className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input value={newSkill[category]} onChange={(e) => setNewSkill({ ...newSkill, [category]: e.target.value })} placeholder="Add skill..." onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(category))} />
              <Button variant="outline" size="icon" onClick={() => addSkill(category)}>
                <Plus className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex items-center gap-3">
        <Button onClick={handleSave}>Save All</Button>
        {saved && <span className="text-sm text-emerald-600">Saved!</span>}
      </div>
    </div>
  );
}
