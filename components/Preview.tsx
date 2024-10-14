'use client';

import { useState, useEffect } from 'react';

export default function Preview() {
  const [previewHtml, setPreviewHtml] = useState('');

  useEffect(() => {
    // Listen for messages from the CodeGenerator component
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'PREVIEW_UPDATE') {
        setPreviewHtml(event.data.code);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="border rounded-lg p-4 h-full">
      <h2 className="text-xl font-bold mb-4">Preview</h2>
      {previewHtml ? (
        <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
      ) : (
        <p className="text-gray-500">Generate code to see the preview here.</p>
      )}
    </div>
  );
}