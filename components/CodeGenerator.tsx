'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export default function CodeGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const { toast } = useToast();

  const generateCode = async () => {
    if (!prompt.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a prompt.',
      });
      return;
    }

    // TODO: Implement actual AI code generation
    // For now, we'll use a placeholder
    const placeholderCode = `
      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Generated Component</h2>
        <p className="text-gray-700">${prompt}</p>
      </div>
    `;

    setGeneratedCode(placeholderCode);
    toast({
      title: 'Success',
      description: 'Code generated successfully!',
    });
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter your UI component description..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
      />
      <Button onClick={generateCode}>Generate Code</Button>
      {generatedCode && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Generated Code:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{generatedCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
}