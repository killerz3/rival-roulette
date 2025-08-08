This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Features

### Banner & Dialog System
The app includes a configurable banner and dialog system that allows you to easily add new notifications and modals.

#### Dialog System
The app includes a configurable dialog system that can be used for various purposes. The system includes:
- **Generic Modal Component** - Fully configurable modal with custom buttons
- **Custom Button Support** - Add any buttons with custom actions
- **Click outside to close** - Dialogs can be dismissed by clicking outside
- **Config-driven** - All content and behavior controlled through configuration

#### Adding New Dialogs
You can easily add new dialogs by adding them to the `app/data/ComponentsConfig.ts` file:

```typescript
{
  id: "your-dialog-id",
  title: "Your Dialog Title",
  message: "Your dialog subtitle (shown in header)",
  type: "dialog",
  order: 7, // Higher number = shown later
  repeatAfterVisits: 5, // Show every 5 visits
  dialogConfig: {
    // Use default buttons
    showBuyMeACoffee: true, // Show default Buy Me a Coffee button
    showRemindLater: true,  // Show default Remind Later button
    showCancel: true,       // Show default Cancel button
    bodyMessage: "Optional separate message for body content", // Optional
    
    // Or use custom buttons for complete control
    customButtons: [
      {
        text: "Visit Website",
        action: "external",
        url: "https://example.com",
        className: "bg-blue-500 hover:bg-blue-600 text-white"
      },
      {
        text: "Close",
        action: "close"
      },
      {
        text: "Remind Later",
        action: "remind"
      }
    ]
  }
}
```

The system uses localStorage to track when dialogs were last shown and automatically manages their appearance based on the configuration.
