/**
 * Redirect tracking utility functions
 */

export interface RedirectTrackingOptions {
  name: string;
  destination: string;
}

/**
 * Generate a tracking URL for external redirects
 * This creates a redirect path that will show up in Vercel Analytics as a page view
 * Format: /track/redirect/[name]?url=[encoded-destination]
 */
export function createTrackingUrl(options: RedirectTrackingOptions): string {
  const { name, destination } = options;
  
  const encodedDestination = encodeURIComponent(destination);
  const searchParams = new URLSearchParams();
  searchParams.set('url', encodedDestination);
  
  return `/track/redirect/${name}?${searchParams.toString()}`;
} 