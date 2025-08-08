# Redirect Tracking Documentation

This project uses a simple redirect tracking system that works with the free tier of Vercel Analytics to track external link clicks.

## Overview

The redirect tracking system:
- **Creates redirect paths** that show up as page views in Vercel Analytics
- **Automatically redirects** users to the actual destination
- **Works with free Vercel Analytics** (no Pro features required)
- **Preserves destination URL query parameters** (no conflicts)

## Files Structure

```
lib/tracking.ts              # Redirect URL generation utility
app/track/redirect/[path]/    # Redirect tracking route
components/BuyMeACoffee.tsx   # Example tracked component
```

## How It Works

1. **User clicks external link** → Goes to `/track/redirect/[encoded-url]`
2. **Vercel Analytics records** → Page view for the redirect path
3. **Automatic redirect** → User lands on actual destination
4. **Analytics data** → Available in Vercel Analytics dashboard

## Usage Examples

### 1. Tracking External Links

Use the `createTrackingUrl` function to create tracked redirect URLs:

```typescript
import { createTrackingUrl } from '@/lib/tracking';

const trackingUrl = createTrackingUrl({
  destination: 'https://example.com'
});
```

### 2. Creating Tracked Components

```typescript
'use client';

import { createTrackingUrl } from '@/lib/tracking';

export function TrackedLink({ 
  href, 
  children, 
  ...props 
}) {
  const trackingUrl = createTrackingUrl({
    destination: href
  });

  return (
    <a href={trackingUrl} {...props}>
      {children}
    </a>
  );
}
```

### 3. Example Usage

```typescript
// Social media links
const twitterLink = createTrackingUrl({
  destination: 'https://twitter.com/yourhandle'
});

// External resources with query params
const docsLink = createTrackingUrl({
  destination: 'https://docs.example.com?ref=marvel_rivals&utm_source=website'
});

// Affiliate links
const affiliateLink = createTrackingUrl({
  destination: 'https://partner.com/product?ref=123&campaign=summer'
});
```

## Analytics Dashboard

In your Vercel Analytics dashboard, you'll see:

### Page Views
- **Path**: `/track/redirect/[encoded-url]`
- **Example**: `/track/redirect/https%3A%2F%2Fwww.buymeacoffee.com%2Fkillerz3`

The destination URL (including any query parameters) is encoded in the path, so you can see exactly where users are going.

## Best Practices

1. **Keep it Simple**: The system is designed to be minimal and conflict-free
2. **Test Redirects**: Verify that redirects work correctly with complex URLs
3. **Monitor Analytics**: Check your Vercel Analytics dashboard for redirect paths
4. **Use Descriptive URLs**: The destination URL itself provides context

## Example Analytics Data

When someone clicks your Buy Me A Coffee button, you'll see in Vercel Analytics:

**Page View**:
- Path: `/track/redirect/https%3A%2F%2Fwww.buymeacoffee.com%2Fkillerz3`

This tells you:
- Someone clicked a link that redirects to your Buy Me A Coffee page
- The exact destination URL is preserved in the path

## Benefits

- ✅ **No Query Parameter Conflicts**: Destination URLs with their own query params work perfectly
- ✅ **Simple Implementation**: Minimal code, easy to maintain
- ✅ **Free Analytics**: Works with Vercel Analytics free tier
- ✅ **Preserves Context**: The destination URL provides all the context you need

## Future Enhancements

Potential additions to the tracking framework:
- A/B testing support
- Conversion funnel tracking
- Performance metrics tracking
- Custom dashboard components 