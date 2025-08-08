"use client";

import { useState, useEffect } from "react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRemindLater: () => void;
}

export function SupportModal({ isOpen, onClose, onRemindLater }: SupportModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Add a small delay before hiding to allow for smooth animation
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBuyMeACoffee = () => {
    window.open("https://www.buymeacoffee.com/killerz3", "_blank");
    onClose();
  };

  const handleRemindLater = () => {
    onRemindLater();
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-200 ${
        isOpen ? "scale-100" : "scale-95"
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Support Rival Roulette</h2>
              <p className="text-sm opacity-90">Help us keep the site running!</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6 leading-relaxed">
            We love creating this tool for the Marvel Rivals community! If you find it helpful, 
            consider supporting us to help cover hosting costs and keep the site running smoothly.
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleBuyMeACoffee}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              ☕ Buy Me a Coffee
            </button>
            
            <button
              onClick={handleRemindLater}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              ⏰ Remind Me Later
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-transparent hover:bg-gray-50 text-gray-500 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 