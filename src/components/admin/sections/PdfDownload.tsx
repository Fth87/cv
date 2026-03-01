import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown } from 'lucide-react';
import type { CvData } from '@/static/data';

type Props = { data: CvData };

export default function PdfDownload({ data }: Props) {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const content = printRef.current;
    if (!content) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${data.personalInfo.name} - CV</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; line-height: 1.4; color: #000; padding: 0.5in 0.6in; }
          h1 { font-size: 18pt; font-weight: bold; margin-bottom: 2pt; }
          h2 { font-size: 12pt; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 2pt; margin: 12pt 0 6pt; }
          h3 { font-size: 11pt; font-weight: bold; margin-bottom: 1pt; }
          .contact { font-size: 10pt; color: #333; margin-bottom: 4pt; }
          .contact a { color: #333; text-decoration: none; }
          .summary { margin-bottom: 8pt; }
          .entry { margin-bottom: 8pt; }
          .entry-header { display: flex; justify-content: space-between; align-items: baseline; }
          .entry-header span { font-size: 10pt; color: #444; }
          .entry-sub { font-size: 10pt; color: #444; margin-bottom: 2pt; }
          ul { margin-left: 18pt; margin-top: 2pt; }
          li { margin-bottom: 2pt; }
          .skills-row { margin-bottom: 4pt; }
          .skills-row strong { display: inline; }
          .awards-entry { margin-bottom: 4pt; }
          .awards-entry span { font-size: 10pt; color: #444; }
          @media print {
            body { padding: 0; }
            @page { margin: 0.5in 0.6in; size: A4; }
          }
        </style>
      </head>
      <body>${content.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 300);
  };

  const { personalInfo: p, experience, education, skills, achievements } = data;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileDown className="size-5" />
            Download ATS-Friendly CV
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Preview your CV below. Click "Download PDF" to open the print dialog — save as PDF for an ATS-compliant format.</p>
          <Button onClick={handleDownload}>
            <FileDown className="size-4 mr-2" /> Download PDF
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div ref={printRef} className="bg-white text-black p-8 text-sm leading-relaxed max-w-[800px] mx-auto" style={{ fontFamily: "'Calibri', 'Arial', sans-serif" }}>
            <h1 style={{ fontSize: '18pt', fontWeight: 'bold', marginBottom: '2pt' }}>{p.name}</h1>
            <div className="contact" style={{ fontSize: '10pt', color: '#333', marginBottom: '4pt' }}>
              {p.location} | {p.email} | <a href={p.linkedin}>LinkedIn</a> | <a href={p.github}>GitHub</a>
            </div>

            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '2pt', margin: '12pt 0 6pt' }}>Summary</h2>
            <p className="summary" style={{ marginBottom: '8pt' }}>
              {p.summary}
            </p>

            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '2pt', margin: '12pt 0 6pt' }}>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} className="entry" style={{ marginBottom: '8pt' }}>
                <div className="entry-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '11pt', fontWeight: 'bold' }}>{exp.role}</h3>
                  <span style={{ fontSize: '10pt', color: '#444' }}>{exp.period}</span>
                </div>
                <div className="entry-sub" style={{ fontSize: '10pt', color: '#444', marginBottom: '2pt' }}>
                  {exp.company} — {exp.location}
                </div>
                <ul style={{ marginLeft: '18pt', marginTop: '2pt' }}>
                  {exp.description.map((d, j) => (
                    <li key={j} style={{ marginBottom: '2pt' }}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '2pt', margin: '12pt 0 6pt' }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="entry" style={{ marginBottom: '8pt' }}>
                <div className="entry-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '11pt', fontWeight: 'bold' }}>{edu.school}</h3>
                  <span style={{ fontSize: '10pt', color: '#444' }}>{edu.period}</span>
                </div>
                <div className="entry-sub" style={{ fontSize: '10pt', color: '#444', marginBottom: '2pt' }}>
                  {edu.degree}
                </div>
                <ul style={{ marginLeft: '18pt', marginTop: '2pt' }}>
                  {edu.details.map((d, j) => (
                    <li key={j} style={{ marginBottom: '2pt' }}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '2pt', margin: '12pt 0 6pt' }}>Skills</h2>
            <div style={{ marginBottom: '4pt' }}>
              <strong>Programming & Tools:</strong> {skills.programming.join(', ')}
            </div>
            <div style={{ marginBottom: '4pt' }}>
              <strong>Machine Learning:</strong> {skills.machineLearning.join(', ')}
            </div>
            <div style={{ marginBottom: '4pt' }}>
              <strong>Web Development:</strong> {skills.webDev.join(', ')}
            </div>

            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '2pt', margin: '12pt 0 6pt' }}>Achievements</h2>
            {achievements.map((a, i) => (
              <div key={i} style={{ marginBottom: '4pt' }}>
                <strong>{a.title}</strong> —{' '}
                <span style={{ fontSize: '10pt', color: '#444' }}>
                  {a.organization} ({a.year})
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
