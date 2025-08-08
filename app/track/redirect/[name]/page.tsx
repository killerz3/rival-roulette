'use client';

import { useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

export default function TrackRedirect() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const name = params.name as string;
    const url = searchParams.get('url');
    
    if (!url) {
      console.error('No URL provided for redirect');
      return;
    }
    
    // Log the redirect for debugging (optional)
    console.log('External redirect:', {
      name: name,
      destination: url,
      timestamp: new Date().toISOString(),
    });
    
    // Redirect to the actual destination
    window.location.href = url;
  }, [params.name, searchParams]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
} 