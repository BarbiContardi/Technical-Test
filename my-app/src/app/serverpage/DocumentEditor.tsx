import { useState, useCallback } from 'react';
import useSocket from '../hooks/useSocket';

const DocumentEditor: React.FC = () => {
  const [document, setDocument] = useState('');

  const handleDocumentChange = useCallback((newDocument: string) => {
    setDocument(newDocument);
  }, []);

  const socket = useSocket('http://localhost:3000', {
    documentChange: handleDocumentChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDocument = event.target.value;
    setDocument(newDocument);
    socket?.emit('documentChange', newDocument);
  };

  return (
    <textarea className='text-black' value={document} onChange={handleChange} />
  );
};

export default DocumentEditor;
