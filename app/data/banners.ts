import { BannerData } from "@/components/Banner";

export const banners: BannerData[] = [
  {
    id: "welcome",
    title: "🎉 Welcome to Marvel Rivals Roulette!",
    message: "Discover new characters and improve your gameplay with our random character selector.",
    type: "info",
    order: 1,
    repeatAfterVisits: -1 // Never repeat
  },
  {
    id: "features",
    title: "✨ Ultron added to Roulette!",
    message: "Checkout Character Gallery to see Ultron's stats and abilities. Or roll the dice to see if you get him!",
    type: "info",
    order: 2,
    repeatAfterVisits: 3 // Repeat after 3 visits
  },
  {
    id: "phoenix",
    title: "🔥 Phoenix added to Roulette!",
    message: "The cosmic force of nature is now available! Check out Phoenix's powerful abilities in the Character Gallery or try your luck in the roulette!",
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
  }
]; 