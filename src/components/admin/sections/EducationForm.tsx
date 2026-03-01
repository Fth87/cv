import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, X } from 'lucide-react';
import type { CvData, Education } from '@/static/data';

type Props = { data: CvData; onSave: (data: CvData) => void };

const emptyEducation: Education = { school: '', degree: '', period: '', details: [''] };

export default function EducationForm({ data, onSave }: Props) {
  const [items, setItems] = useState(data.education);
  const [saved, setSaved] = useState(false);

  const updateItem = (index: number, field: keyof Education, value: string | string[]) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
    setSaved(false);
  };

  const addItem = () => {
    setItems([...items, { ...emptyEducation, details: [''] }]);
    setSaved(false);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setSaved(false);
  };

  const addDetail = (index: number) => {
    const updated = [...items];
    updated[index] = { ...updated[index], details: [...updated[index].details, ''] };
    setItems(updated);
  };

  const updateDetail = (itemIndex: number, detailIndex: number, value: string) => {
    const updated = [...items];
    const details = [...updated[itemIndex].details];
    details[detailIndex] = value;
    updated[itemIndex] = { ...updated[itemIndex], details };
    setItems(updated);
    setSaved(false);
  };

  const removeDetail = (itemIndex: number, detailIndex: number) => {
    const updated = [...items];
    updated[itemIndex] = { ...updated[itemIndex], details: updated[itemIndex].details.filter((_, i) => i !== detailIndex) };
    setItems(updated);
    setSaved(false);
  };

  const handleSave = () => {
    onSave({ ...data, education: items });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-base">Education #{index + 1}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => removeItem(index)}>
              <Trash2 className="size-4 text-destructive" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>School / University</Label>
                <Input value={item.school} onChange={(e) => updateItem(index, 'school', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Degree</Label>
                <Input value={item.degree} onChange={(e) => updateItem(index, 'degree', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Period</Label>
                <Input value={item.period} onChange={(e) => updateItem(index, 'period', e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Details</Label>
              {item.details.map((detail, di) => (
                <div key={di} className="flex gap-2">
                  <Input value={detail} onChange={(e) => updateDetail(index, di, e.target.value)} placeholder={`Detail ${di + 1}`} />
                  <Button variant="ghost" size="icon" onClick={() => removeDetail(index, di)}>
                    <X className="size-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={() => addDetail(index)}>
                <Plus className="size-4 mr-1" /> Add Detail
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={addItem}>
          <Plus className="size-4 mr-1" /> Add Education
        </Button>
        <Button onClick={handleSave}>Save All</Button>
        {saved && <span className="text-sm text-emerald-600">Saved!</span>}
      </div>
    </div>
  );
}
