'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Download } from 'lucide-react';

const MarkdownConverter = () => {
  const [markdown, setMarkdown] = useState('');

  const convertToDocx = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Markdown to DOCX Converter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your Markdown here..."
            className="min-h-[400px] font-mono"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          <Button 
            onClick={convertToDocx}
            className="w-full flex items-center justify-center gap-2"
            disabled={!markdown}
          >
            <Download className="h-4 w-4" />
            Convert to DOCX
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkdownConverter;
