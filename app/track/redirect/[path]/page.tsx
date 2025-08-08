'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function TrackRedirect() {
  const params = useParams();
  
  useEffect(() => {
    const path = params.path as string;
    
    // Log the redirect for debugging (optional)
    console.log('External redirect:', {
      destination: path,
      timestamp: new Date().toISOString(),
    });
    
    // Redirect to the actual destination
    const redirectUrl = decodeURIComponent(path);
    window.location.href = redirectUrl;
  }, [params.path]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
} 