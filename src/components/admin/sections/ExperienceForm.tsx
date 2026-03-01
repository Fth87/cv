import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2, X } from 'lucide-react';
import type { CvData, Experience } from '@/static/data';

type Props = { data: CvData; onSave: (data: CvData) => void };

const emptyExperience: Experience = { company: '', role: '', location: '', period: '', description: [''] };

export default function ExperienceForm({ data, onSave }: Props) {
  const [items, setItems] = useState(data.experience);
  const [saved, setSaved] = useState(false);

  const updateItem = (index: number, field: keyof Experience, value: string | string[]) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
    setSaved(false);
  };

  const addItem = () => {
    setItems([...items, { ...emptyExperience, description: [''] }]);
    setSaved(false);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setSaved(false);
  };

  const addDesc = (index: number) => {
    const updated = [...items];
    updated[index] = { ...updated[index], description: [...updated[index].description, ''] };
    setItems(updated);
  };

  const updateDesc = (itemIndex: number, descIndex: number, value: string) => {
    const updated = [...items];
    const desc = [...updated[itemIndex].description];
    desc[descIndex] = value;
    updated[itemIndex] = { ...updated[itemIndex], description: desc };
    setItems(updated);
    setSaved(false);
  };

  const removeDesc = (itemIndex: number, descIndex: number) => {
    const updated = [...items];
    updated[itemIndex] = { ...updated[itemIndex], description: updated[itemIndex].description.filter((_, i) => i !== descIndex) };
    setItems(updated);
    setSaved(false);
  };

  const handleSave = () => {
    onSave({ ...data, experience: items });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-base">Experience #{index + 1}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => removeItem(index)}>
              <Trash2 className="size-4 text-destructive" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Company</Label>
                <Input value={item.company} onChange={(e) => updateItem(index, 'company', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Input value={item.role} onChange={(e) => updateItem(index, 'role', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input value={item.location} onChange={(e) => updateItem(index, 'location', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Period</Label>
                <Input value={item.period} onChange={(e) => updateItem(index, 'period', e.target.value)} />
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Description Points</Label>
              {item.description.map((desc, di) => (
                <div key={di} className="flex gap-2">
                  <Input value={desc} onChange={(e) => updateDesc(index, di, e.target.value)} placeholder={`Point ${di + 1}`} />
                  <Button variant="ghost" size="icon" onClick={() => removeDesc(index, di)}>
                    <X className="size-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={() => addDesc(index)}>
                <Plus className="size-4 mr-1" /> Add Point
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={addItem}>
          <Plus className="size-4 mr-1" /> Add Experience
        </Button>
        <Button onClick={handleSave}>Save All</Button>
        {saved && <span className="text-sm text-emerald-600">Saved!</span>}
      </div>
    </div>
  );
}
