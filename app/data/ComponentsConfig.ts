import { BannerData } from "@/components/Banner";

export const components: BannerData[] = [
  {
    id: "welcome",
    title: "🎉 Welcome to Marvel Rivals Roulette!",
    message: "Discover new characters and improve your gameplay with our random character selector.",
    type: "info",
    order: 1,
    repeatAfterVisits: -1 // Never repeat
  },
  {
    id: "phoenix",
    title: "🔥 Phoenix added to Roulette!",
    message: "The cosmic force of nature is now available! Check out Phoenix's powerful abilities in the Character Gallery or try your luck in the roulette!",
    type: "info",
    order: 2,
    repeatAfterVisits: 3 // Repeat after 3 visits
  },
  {
    id:"blade",
    title: "🔪 Blade added to Roulette!",
    message: "The vampire hunter is now available! Check out Blade's powerful abilities in the Character Gallery or try your luck in the roulette!",
    type: "info",
    order: 3,
    repeatAfterVisits: 3 // Repeat after 3 visits
  },
  {
    id: "feedback",
    title: "💬 We'd Love Your Feedback",
    message: "Help us improve by sharing your experience or suggesting new features.",
    type: "info",
    order: 4,
    repeatAfterVisits: 5 // Repeat after 5 visits
  },
  {
    id: "updates",
    title: "🆕 Regular Updates",
    message: "We regularly add new characters and features. Check back often for the latest content!",
    type: "warning",
    order: 5,
    repeatAfterVisits: 2 // Repeat every visit
  },
  {
    id: "welcome-dialog",
    title: "Welcome to Rival Roulette!",
    message: "",
    type: "dialog",
    order: 6,
    repeatAfterVisits: -1, 
    dialogConfig: {
      showBuyMeACoffee: false,
      showRemindLater: false,
      showCancel: false,
      bodyMessage: "Discover new characters and improve your gameplay with our random character selector."
    }
  },
  {
    id: "support-dialog",
    title: "💝 Support Rival Roulette",
    message: "Help us keep the site running!",
    type: "dialog",
    order: 7,
    repeatAfterVisits: 4, // Show every 4 days
    dialogConfig: {
      showBuyMeACoffee: true,
      showRemindLater: false,
      showCancel: true,
      bodyMessage: "We love creating this tool for the Marvel Rivals community! If you find it helpful, consider supporting us to help cover hosting costs and keep the site running smoothly."
    }
  }
]; 