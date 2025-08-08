/**
 * Redirect tracking utility functions
 */

export interface RedirectTrackingOptions {
  destination: string;
}

/**
 * Generate a tracking URL for external redirects
 * This creates a redirect path that will show up in Vercel Analytics as a page view
 */
export function createTrackingUrl(options: RedirectTrackingOptions): string {
  const { destination } = options;
  
  const encodedDestination = encodeURIComponent(destination);
  return `/track/redirect/${encodedDestination}`;
} 