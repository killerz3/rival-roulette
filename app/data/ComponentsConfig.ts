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
    id: "angela",
    title: "⚔️ Angela added to Roulette!",
    message: "The Asgardian warrior is now available! Check out Angela's powerful abilities in the Character Gallery or try your luck in the roulette!",
    type: "info",
    order: 2,
    repeatAfterVisits: 3 // Repeat after 3 visits
  },
  {
    id: "feedback",
    title: "💬 We'd Love Your Feedback",
    message: "Help us improve by sharing your experience or suggesting new features.",
    type: "info",
    order: 3,
    repeatAfterVisits: 5 // Repeat after 5 visits
  },
  {
    id: "updates",
    title: "🆕 Regular Updates",
    message: "We regularly add new characters and features. Check back often for the latest content!",
    type: "warning",
    order: 4,
    repeatAfterVisits: 2 // Repeat every visit
  },
  {
    id: "welcome-dialog",
    title: "Welcome to Rival Roulette!",
    message: "",
    type: "dialog",
    order: 5,
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
    order: 6,
    repeatAfterVisits: 4, // Show every 4 days
    dialogConfig: {
      showBuyMeACoffee: true,
      showRemindLater: false,
      showCancel: true,
      bodyMessage: "We love creating this tool for the Marvel Rivals community! If you find it helpful, consider supporting us to help cover hosting costs and keep the site running smoothly."
    }
  },
  {
    id: "custom-filter-feature",
    title: "🎯 New: Custom Character Filter!",
    message: "Take control of your character selection!",
    type: "dialog",
    order: 7,
    repeatAfterVisits: -1, // Show only once
    dialogConfig: {
      showBuyMeACoffee: false,
      showRemindLater: false,
      showCancel: false,
      bodyMessage: "🎉 We've added a powerful new Custom Character Filter! Now you can: ✨ Select specific characters you want to play\n✨ Deselect characters you don't want to see\n✨ Filter by entire character types (Assault, Support, Tank)\n✨ Search for characters by name\n✨ Use 'Select All' or 'Deselect All' for quick changes\n\nSwitch to 'Custom Filter' mode using the toggle above the character wheel to try it out!",
      customButtons: [
        {
          text: "🚀 Try Custom Filter",
          action: "close",
          className: "w-full bg-gradient-to-r from-[#3e8fb0] to-[#9ccfd8] hover:from-[#3e8fb0]/80 hover:to-[#9ccfd8]/80 text-[#e0def4] font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
        }
      ]
    }
  }
]; 