import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import type { CvData, Achievement } from '@/static/data';

type Props = { data: CvData; onSave: (data: CvData) => void };

const emptyAchievement: Achievement = { title: '', organization: '', year: '' };

export default function AchievementsForm({ data, onSave }: Props) {
  const [items, setItems] = useState(data.achievements);
  const [saved, setSaved] = useState(false);

  const updateItem = (index: number, field: keyof Achievement, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
    setSaved(false);
  };

  const addItem = () => {
    setItems([...items, { ...emptyAchievement }]);
    setSaved(false);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setSaved(false);
  };

  const handleSave = () => {
    onSave({ ...data, achievements: items });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-base">Achievement #{index + 1}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => removeItem(index)}>
              <Trash2 className="size-4 text-destructive" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label>Title</Label>
                <Input value={item.title} onChange={(e) => updateItem(index, 'title', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Year</Label>
                <Input value={item.year} onChange={(e) => updateItem(index, 'year', e.target.value)} />
              </div>
              <div className="space-y-2 md:col-span-3">
                <Label>Organization</Label>
                <Input value={item.organization} onChange={(e) => updateItem(index, 'organization', e.target.value)} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={addItem}>
          <Plus className="size-4 mr-1" /> Add Achievement
        </Button>
        <Button onClick={handleSave}>Save All</Button>
        {saved && <span className="text-sm text-emerald-600">Saved!</span>}
      </div>
    </div>
  );
}
