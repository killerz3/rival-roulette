# Redirect Tracking Documentation

This project uses a simple redirect tracking system that works with the free tier of Vercel Analytics to track external link clicks.

## Overview

The redirect tracking system:
- **Creates named redirect paths** that show up as page views in Vercel Analytics
- **Automatically redirects** users to the actual destination
- **Works with free Vercel Analytics** (no Pro features required)
- **Uses descriptive names** for easy identification in analytics

## Files Structure

```
lib/tracking.ts              # Redirect URL generation utility
app/track/redirect/[name]/    # Redirect tracking route
components/BuyMeACoffee.tsx   # Example tracked component
```

## How It Works

1. **User clicks external link** → Goes to `/track/redirect/[name]?url=[encoded-destination]`
2. **Vercel Analytics records** → Page view for the redirect path
3. **Automatic redirect** → User lands on actual destination
4. **Analytics data** → Available in Vercel Analytics dashboard

## Usage Examples

### 1. Tracking External Links

Use the `createTrackingUrl` function to create tracked redirect URLs:

```typescript
import { createTrackingUrl } from '@/lib/tracking';

const trackingUrl = createTrackingUrl({
  name: 'twitter-link',
  destination: 'https://twitter.com/yourhandle'
});
```

### 2. Creating Tracked Components

```typescript
'use client';

import { createTrackingUrl } from '@/lib/tracking';

export function TrackedLink({ 
  href, 
  name,
  children, 
  ...props 
}) {
  const trackingUrl = createTrackingUrl({
    name: name,
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
  name: 'twitter-social',
  destination: 'https://twitter.com/yourhandle'
});

// External resources with query params
const docsLink = createTrackingUrl({
  name: 'documentation',
  destination: 'https://docs.example.com?ref=marvel_rivals&utm_source=website'
});

// Affiliate links
const affiliateLink = createTrackingUrl({
  name: 'partner-product',
  destination: 'https://partner.com/product?ref=123&campaign=summer'
});

// Buy Me A Coffee
const coffeeLink = createTrackingUrl({
  name: 'buy-me-a-coffee',
  destination: 'https://www.buymeacoffee.com/killerz3'
});
```

## Analytics Dashboard

In your Vercel Analytics dashboard, you'll see:

### Page Views
- **Path**: `/track/redirect/[name]`
- **Example**: `/track/redirect/buy-me-a-coffee`

The name provides a clear, readable identifier for what was clicked, and the destination URL is available in the query parameters.

## Best Practices

1. **Use Descriptive Names**: Choose clear, descriptive names for easy identification
   - ✅ Good: `buy-me-a-coffee`, `twitter-social`, `documentation-link`
   - ❌ Bad: `link1`, `redirect`, `external`

2. **Be Consistent**: Use consistent naming conventions across your app
3. **Test Redirects**: Verify that redirects work correctly with complex URLs
4. **Monitor Analytics**: Check your Vercel Analytics dashboard for redirect paths

## Example Analytics Data

When someone clicks your Buy Me A Coffee button, you'll see in Vercel Analytics:

**Page View**:
- Path: `/track/redirect/buy-me-a-coffee`
- Query: `?url=https%3A%2F%2Fwww.buymeacoffee.com%2Fkillerz3`

This tells you:
- Someone clicked the "buy-me-a-coffee" link
- The exact destination URL is preserved in the query parameter

## Benefits

- ✅ **Clear Identification**: Descriptive names make it easy to identify what was clicked
- ✅ **No Query Parameter Conflicts**: Destination URLs with their own query params work perfectly
- ✅ **Simple Implementation**: Minimal code, easy to maintain
- ✅ **Free Analytics**: Works with Vercel Analytics free tier
- ✅ **Readable URLs**: The tracking URLs are human-readable and meaningful

## Future Enhancements

Potential additions to the tracking framework:
- A/B testing support
- Conversion funnel tracking
- Performance metrics tracking
- Custom dashboard components 