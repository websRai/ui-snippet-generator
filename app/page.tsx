import { Suspense } from 'react';
import CodeGenerator from '@/components/CodeGenerator';
import Preview from '@/components/Preview';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Code Capsule: AI-Powered UI Snippet Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Suspense fallback={<div>Loading code generator...</div>}>
          <CodeGenerator />
        </Suspense>
        <Suspense fallback={<div>Loading preview...</div>}>
          <Preview />
        </Suspense>
      </div>
    </div>
  );
}