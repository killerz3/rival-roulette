import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Character } from '@/lib/process-data';
import { Button } from '@/components/ui/button';

type PartyWheelProps = {
  characters: Character[];
  numberOfWheels: number;
  onSpinComplete: (chosenCharacters: Character[]) => void;
};

export function PartyWheel({ characters, numberOfWheels, onSpinComplete }: PartyWheelProps) {
  const [spinning, setSpinning] = useState(false);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [displayedCharacters, setDisplayedCharacters] = useState<Character[][]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize displayed characters for each wheel
  useEffect(() => {
    const initialDisplays: Character[][] = [];
    for (let i = 0; i < numberOfWheels; i++) {
      const shuffled = [...characters].sort(() => 0.5 - Math.random());
      initialDisplays.push(shuffled.slice(0, Math.min(10, shuffled.length)));
    }
    setDisplayedCharacters(initialDisplays);
    setSelectedCharacters([]);
  }, [numberOfWheels, characters]);

  const spinWheels = () => {
    if (spinning) return;
    
    setSpinning(true);
    setSelectedCharacters([]);
    
    // Generate random characters during spin for all wheels
    const spinIntervals: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < numberOfWheels; i++) {
      const interval = setInterval(() => {
        setDisplayedCharacters(prev => {
          const newDisplays = [...prev];
          const shuffled = [...characters].sort(() => 0.5 - Math.random());
          newDisplays[i] = shuffled.slice(0, Math.min(10, shuffled.length));
          return newDisplays;
        });
      }, 100);
      spinIntervals.push(interval);
    }
    
    // Stop spinning after random time (2-4 seconds)
    const spinDuration = 2000 + Math.random() * 2000;
    setTimeout(() => {
      // Clear all intervals
      spinIntervals.forEach(interval => clearInterval(interval));
      
      // Select unique characters for each wheel
      const availableCharacters = [...characters];
      const chosen: Character[] = [];
      
      // First, select all unique characters
      for (let i = 0; i < numberOfWheels; i++) {
        if (availableCharacters.length === 0) break;
        
        // Select a random character from available ones
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        const selected = availableCharacters[randomIndex];
        chosen.push(selected);
        
        // Remove selected character from available pool
        availableCharacters.splice(randomIndex, 1);
      }
      
      // Then update displays for all wheels at once
      setDisplayedCharacters(prev => {
        const newDisplays = [...prev];
        
        for (let i = 0; i < numberOfWheels; i++) {
          if (i >= chosen.length) break;
          
          const selected = chosen[i];
          const middleIndex = 4;
          
          // Use all characters except the chosen ones for display
          const displayPool = characters.filter(
            char => !chosen.some(chosenChar => chosenChar.id === char.id)
          );
          
          // Shuffle the display pool
          const shuffled = [...displayPool].sort(() => 0.5 - Math.random());
          const totalToDisplay = Math.min(10, shuffled.length + 1); // +1 for the selected character
          
          const displaySet: Character[] = [];
          
          // Fill positions before middle
          for (let j = 0; j < middleIndex && j < shuffled.length; j++) {
            displaySet.push(shuffled[j]);
          }
          
          // Add selected character in the middle
          displaySet.push(selected);
          
          // Fill positions after middle
          for (let j = middleIndex; j < totalToDisplay - 1 && (j - middleIndex) < shuffled.length; j++) {
            displaySet.push(shuffled[j - middleIndex]);
          }
          
          newDisplays[i] = displaySet;
        }
        
        return newDisplays;
      });
      
      setSelectedCharacters(chosen);
      onSpinComplete(chosen);
      
      // Reset for next spin
      setTimeout(() => {
        setSpinning(false);
      }, 1000);
    }, spinDuration);
  };

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      {/* Wheels Container */}
      <div className="w-full space-y-6">
        {Array.from({ length: numberOfWheels }).map((_, wheelIndex) => (
          <div key={wheelIndex} className="flex flex-col items-center w-full">
            <div 
              ref={(el) => {
                containerRefs.current[wheelIndex] = el;
              }}
              className="w-full mb-4 relative overflow-hidden h-28 rounded-xl border border-white/10"
            >
              {/* Vertical yellow indicator line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-500 z-30 transform -translate-x-1/2"></div>
              
              {/* Gradient overlay for the center line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent w-6 left-1/2 transform -translate-x-1/2 z-20"></div>
              
              {/* Left and right fading edges */}
              <div className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-[#0a1033] to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-l from-[#0a1033] to-transparent"></div>
              
              {/* Dark background for the carousel */}
              <div className="absolute inset-0 bg-[#0c122d]/90 z-10"></div>
              
              <motion.div 
                className="flex items-center justify-center h-full px-4 gap-4 relative z-10"
                animate={{ 
                  x: spinning ? [-1000, 0] : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5
                }}
              >
                <AnimatePresence>
                  {displayedCharacters[wheelIndex]?.map((character, index) => {
                    const isSelected = selectedCharacters[wheelIndex]?.id === character.id;
                    return (
                      <motion.div
                        key={`${character.id}-${wheelIndex}-${index}`}
                        className={`h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                          isSelected
                            ? 'border-yellow-400 scale-110 shadow-lg shadow-yellow-500/30'
                            : 'border-white/20'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: isSelected ? 1.1 : 1,
                          rotateY: spinning ? [0, 360] : 0
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={character.image} 
                          alt={character.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Spin Button */}
      <Button 
        onClick={spinWheels} 
        disabled={spinning || characters.length < numberOfWheels}
        className="px-8 py-2 font-semibold text-white text-lg rounded-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 transition-all duration-300 min-w-[200px]"
      >
        {spinning ? "Spinning..." : "Spin The Wheel!"}
      </Button>
      
      {characters.length < numberOfWheels && (
        <p className="text-sm text-yellow-400 text-center">
          Not enough characters available. Need at least {numberOfWheels} characters.
        </p>
      )}
    </div>
  );
}

