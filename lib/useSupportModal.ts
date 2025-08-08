import { useState, useEffect } from "react";

export function useSupportModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if we should show the support modal
    const supportModalData = JSON.parse(localStorage.getItem("support-modal-data") || "{}");
    const lastShown = supportModalData.lastShown;
    const daysSinceLastShown = supportModalData.daysSinceLastShown || 0;
    const today = new Date().toDateString();

    // If never shown before, show it
    if (!lastShown) {
      setIsOpen(true);
      return;
    }

    // If it's a new day, increment the counter
    if (lastShown !== today) {
      const newDaysSinceLastShown = daysSinceLastShown + 1;
      
      // Show modal every 4 days
      if (newDaysSinceLastShown >= 4) {
        setIsOpen(true);
        // Reset the counter
        localStorage.setItem("support-modal-data", JSON.stringify({
          lastShown: today,
          daysSinceLastShown: 0
        }));
      } else {
        // Update the counter
        localStorage.setItem("support-modal-data", JSON.stringify({
          lastShown: today,
          daysSinceLastShown: newDaysSinceLastShown
        }));
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRemindLater = () => {
    // Reset the counter to show again in 4 days
    const today = new Date().toDateString();
    localStorage.setItem("support-modal-data", JSON.stringify({
      lastShown: today,
      daysSinceLastShown: 0
    }));
  };

  return {
    isOpen,
    onClose: handleClose,
    onRemindLater: handleRemindLater
  };
} 