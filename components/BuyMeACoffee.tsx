'use client';

import { createTrackingUrl } from '@/lib/tracking';

interface BuyMeACoffeeProps {
  className?: string;
}

export function BuyMeACoffee({ className = "fixed bottom-10 left-5 z-50" }: BuyMeACoffeeProps) {
  const trackingUrl = createTrackingUrl({
    name: 'buy-me-a-coffee',
    destination: 'https://www.buymeacoffee.com/killerz3'
  });

  return (
    <a 
      href={trackingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img 
        src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" 
        alt="Buy Me A Coffee" 
        className="h-10"
      />
    </a>
  );
} 