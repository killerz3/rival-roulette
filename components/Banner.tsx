"use client";

import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export interface BannerData {
  id: string;
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error" | "dialog";
  order: number;
  repeatAfterVisits?: number; // -1 means never repeat, 0 means every visit, >0 means after X visits
  dialogConfig?: {
    showBuyMeACoffee?: boolean;
    showRemindLater?: boolean;
    showCancel?: boolean;
    bodyMessage?: string; // Optional separate message for body content
    customButtons?: Array<{
      text: string;
      action: "close" | "remind" | "external";
      url?: string;
      className?: string;
    }>;
  };
}

interface BannerProps {
  banners: BannerData[];
}

export function Banner({ banners }: BannerProps) {
  const [currentBanner, setCurrentBanner] = useState<BannerData | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [currentDialog, setCurrentDialog] = useState<BannerData | null>(null);

  useEffect(() => {
    // Get dismissed banners and visit counts from localStorage
    const dismissedBanners = JSON.parse(localStorage.getItem("dismissed-banners") || "[]");
    const bannerVisitCounts = JSON.parse(localStorage.getItem("banner-visit-counts") || "{}");
    const lastVisitDate = localStorage.getItem("last-visit-date");
    
    // Increment visit count for today
    const today = new Date().toDateString();
    if (lastVisitDate !== today) {
      // New day visit
      Object.keys(bannerVisitCounts).forEach(bannerId => {
        bannerVisitCounts[bannerId]++;
      });
      localStorage.setItem("last-visit-date", today);
    }
    
    // Find the first banner that should be shown
    const sortedBanners = [...banners].sort((a, b) => a.order - b.order);
    const nextBanner = sortedBanners.find(banner => {
      const visitCount = bannerVisitCounts[banner.id] || 0;
      
      // If banner is in dismissed list, check if it should repeat
      if (dismissedBanners.includes(banner.id)) {
        const repeatAfter = banner.repeatAfterVisits ?? -1; // Default to -1 (never repeat)
        if (repeatAfter === -1) {
          // Never repeat
          return false;
        } else if (repeatAfter === 0) {
          // Repeat every visit
          return true;
        } else if (repeatAfter > 0) {
          // Repeat after X visits
          return visitCount >= repeatAfter;
        }
        // Default: never repeat (old behavior)
        return false;
      }
      
      // Banner hasn't been dismissed yet
      return true;
    });
    
    // Check if we should show a dialog instead
    const nextDialog = sortedBanners.find(banner => {
      if (banner.type !== "dialog") return false;
      
      const visitCount = bannerVisitCounts[banner.id] || 0;
      
      // If dialog is in dismissed list, check if it should repeat
      if (dismissedBanners.includes(banner.id)) {
        const repeatAfter = banner.repeatAfterVisits ?? -1;
        if (repeatAfter === -1) {
          return false;
        } else if (repeatAfter === 0) {
          return true;
        } else if (repeatAfter > 0) {
          return visitCount >= repeatAfter;
        }
        return false;
      }
      
      return true;
    });
    
    // Prioritize dialogs over banners
    if (nextDialog) {
      setCurrentDialog(nextDialog);
      setShowDialog(true);
      setCurrentBanner(null);
      // Initialize visit count for this dialog if not exists
      if (!bannerVisitCounts[nextDialog.id]) {
        bannerVisitCounts[nextDialog.id] = 0;
      }
    } else if (nextBanner) {
      setCurrentBanner(nextBanner);
      setShowDialog(false);
      setCurrentDialog(null);
      // Initialize visit count for this banner if not exists
      if (!bannerVisitCounts[nextBanner.id]) {
        bannerVisitCounts[nextBanner.id] = 0;
      }
    } else {
      setCurrentBanner(null);
      setShowDialog(false);
      setCurrentDialog(null);
    }
    
    localStorage.setItem("banner-visit-counts", JSON.stringify(bannerVisitCounts));
    setCurrentBanner(nextBanner || null);
  }, [banners]);

  const handleDismiss = () => {
    if (!currentBanner) return;

    // Add current banner to dismissed list
    const dismissedBanners = JSON.parse(localStorage.getItem("dismissed-banners") || "[]");
    if (!dismissedBanners.includes(currentBanner.id)) {
      const updatedDismissed = [...dismissedBanners, currentBanner.id];
      localStorage.setItem("dismissed-banners", JSON.stringify(updatedDismissed));
    }

    // Reset visit count for this banner if it's repeatable
    const bannerVisitCounts = JSON.parse(localStorage.getItem("banner-visit-counts") || "{}");
    if (currentBanner.repeatAfterVisits !== undefined && currentBanner.repeatAfterVisits !== -1) {
      bannerVisitCounts[currentBanner.id] = 0;
      localStorage.setItem("banner-visit-counts", JSON.stringify(bannerVisitCounts));
    }

    // Simply hide the current banner - next one will show on next page load
    setCurrentBanner(null);
  };

  const handleDialogClose = () => {
    if (!currentDialog) return;

    // Add current dialog to dismissed list
    const dismissedBanners = JSON.parse(localStorage.getItem("dismissed-banners") || "[]");
    if (!dismissedBanners.includes(currentDialog.id)) {
      const updatedDismissed = [...dismissedBanners, currentDialog.id];
      localStorage.setItem("dismissed-banners", JSON.stringify(updatedDismissed));
    }

    // Reset visit count for this dialog if it's repeatable
    const bannerVisitCounts = JSON.parse(localStorage.getItem("banner-visit-counts") || "{}");
    if (currentDialog.repeatAfterVisits !== undefined && currentDialog.repeatAfterVisits !== -1) {
      bannerVisitCounts[currentDialog.id] = 0;
      localStorage.setItem("banner-visit-counts", JSON.stringify(bannerVisitCounts));
    }

    setShowDialog(false);
    setCurrentDialog(null);
  };

  const handleDialogRemindLater = () => {
    if (!currentDialog) return;

    // Reset visit count to show again in the specified number of visits
    const bannerVisitCounts = JSON.parse(localStorage.getItem("banner-visit-counts") || "{}");
    bannerVisitCounts[currentDialog.id] = 0;
    localStorage.setItem("banner-visit-counts", JSON.stringify(bannerVisitCounts));

    setShowDialog(false);
    setCurrentDialog(null);
  };

  // Render banner if it should be shown
  if (!currentBanner && !showDialog) return null;

  const getBannerStyles = (type: string = "info") => {
    switch (type) {
      case "success":
        return "bg-gradient-to-r from-green-600 to-emerald-600";
      case "warning":
        return "bg-gradient-to-r from-yellow-600 to-orange-600";
      case "error":
        return "bg-gradient-to-r from-red-600 to-pink-600";
      default:
        return "bg-gradient-to-r from-purple-600 to-blue-600";
    }
  };

  const getIcon = (type: string = "info") => {
    switch (type) {
      case "success":
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case "warning":
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case "error":
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <>
      {/* Render banner if it should be shown */}
      {currentBanner && (
        <div className={`${getBannerStyles(currentBanner.type)} text-white px-4 py-3 fixed top-0 left-0 right-0 z-50`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {getIcon(currentBanner.type)}
              </div>
              <div>
                <p className="text-sm font-medium">
                  {currentBanner.title}
                </p>
                <p className="text-xs opacity-90">
                  {currentBanner.message}
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Render dialog if it should be shown */}
      {showDialog && currentDialog && (
        <Modal
          isOpen={showDialog}
          onClose={handleDialogClose}
          onRemindLater={handleDialogRemindLater}
          dialogData={currentDialog}
        />
      )}
    </>
  );
} 