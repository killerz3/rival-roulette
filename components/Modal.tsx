"use client";

import { useState, useEffect } from "react";
import { BannerData } from "./Banner";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRemindLater: () => void;
  dialogData?: BannerData;
}

export function Modal({ isOpen, onClose, onRemindLater, dialogData }: ModalProps) {
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

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
        onClick={handleBackdropClick}
      />
      
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
              <h2 className="text-xl font-bold">{dialogData?.title || "Dialog"}</h2>
              <p className="text-sm opacity-90">{dialogData?.message || ""}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6 leading-relaxed">
            {dialogData?.dialogConfig?.bodyMessage|| ""}
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            {/* Custom buttons from dialogConfig */}
            {dialogData?.dialogConfig?.customButtons?.map((button, index) => (
              <button
                key={index}
                onClick={() => {
                  if (button.action === "close") {
                    onClose();
                  } else if (button.action === "remind") {
                    onRemindLater();
                  } else if (button.action === "external" && button.url) {
                    window.open(button.url, "_blank");
                    onClose();
                  }
                }}
                className={`w-full font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                  button.className || "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {button.text}
              </button>
            ))}

            {/* Default buttons if no custom buttons */}
            {(!dialogData?.dialogConfig?.customButtons || dialogData.dialogConfig.customButtons.length === 0) && (
              <>
                {(dialogData?.dialogConfig?.showBuyMeACoffee !== false) && (
                  <button
                    onClick={() => {
                      window.open("https://www.buymeacoffee.com/killerz3", "_blank");
                      onClose();
                    }}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    ☕ Buy Me a Coffee
                  </button>
                )}
                
                {(dialogData?.dialogConfig?.showRemindLater !== false) && (
                  <button
                    onClick={onRemindLater}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    ⏰ Remind Me Later
                  </button>
                )}
                
                {(dialogData?.dialogConfig?.showCancel !== false) && (
                  <button
                    onClick={onClose}
                    className="w-full bg-transparent hover:bg-gray-50 text-gray-500 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Maybe Later
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 