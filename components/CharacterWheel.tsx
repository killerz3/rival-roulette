import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Character } from '@/lib/process-data';
import { Button } from '@/components/ui/button';

type CharacterWheelProps = {
  characters: Character[];
  onSelect: (character: Character) => void;
  filterRole?: string;
};

export function CharacterWheel({ characters, onSelect, filterRole }: CharacterWheelProps) {
  const [spinning, setSpinning] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>([]);
  const [displayedCharacters, setDisplayedCharacters] = useState<Character[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Filter characters by role if provided
  useEffect(() => {
    if (filterRole && filterRole !== 'ALL') {
      setVisibleCharacters(characters.filter(char => char.role === filterRole));
    } else {
      setVisibleCharacters(characters);
    }
  }, [characters, filterRole]);
  
  // Reset selected character if it's not in the visible characters after filtering
  useEffect(() => {
    if (selectedCharacter && !visibleCharacters.some(char => char.id === selectedCharacter.id)) {
      setSelectedCharacter(null);
    }
  }, [visibleCharacters, selectedCharacter]);
  
  // Create a display set of characters, ensuring selected character is included and centered
  useEffect(() => {
    if (visibleCharacters.length === 0 || spinning) return;

    // If we have a selected character, make sure it's included
    if (selectedCharacter) {
      const selectedInVisible = visibleCharacters.find(char => char.id === selectedCharacter.id);
      
      if (selectedInVisible) {
        // Create an array with the selected character in the middle position (index 4 of 0-9)
        const middleIndex = 4;
        const totalToDisplay = Math.min(10, visibleCharacters.length);
        
        let shuffled = [...visibleCharacters]
          .filter(char => char.id !== selectedCharacter.id)
          .sort(() => 0.5 - Math.random());
        
        // Create an array with proper number of slots
        const displaySet: Character[] = Array(totalToDisplay).fill(null);
        
        // Place selected character in the middle
        displaySet[middleIndex] = selectedInVisible;
        
        // Fill in the other positions
        let shuffleIndex = 0;
        for (let i = 0; i < totalToDisplay; i++) {
          if (i !== middleIndex) {
            displaySet[i] = shuffled[shuffleIndex++];
            if (shuffleIndex >= shuffled.length) shuffleIndex = 0;
          }
        }
        
        setDisplayedCharacters(displaySet.filter(Boolean));
      } else {
        // Selected character isn't in current filtered set, show random characters
        const shuffled = [...visibleCharacters].sort(() => 0.5 - Math.random());
        setDisplayedCharacters(shuffled.slice(0, Math.min(10, shuffled.length)));
      }
    } else {
      // No selected character, just display random ones
      const shuffled = [...visibleCharacters].sort(() => 0.5 - Math.random());
      setDisplayedCharacters(shuffled.slice(0, Math.min(10, shuffled.length)));
    }
  }, [visibleCharacters, selectedCharacter, spinning]);

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    
    // Generate random characters during spin
    const spinInterval = setInterval(() => {
      const shuffled = [...visibleCharacters].sort(() => 0.5 - Math.random());
      setDisplayedCharacters(shuffled.slice(0, Math.min(10, shuffled.length)));
    }, 100);
    
    // Stop spinning after random time (2-4 seconds)
    const spinDuration = 2000 + Math.random() * 2000;
    setTimeout(() => {
      clearInterval(spinInterval);
      
      // Select final character
      const randomIndex = Math.floor(Math.random() * visibleCharacters.length);
      const selected = visibleCharacters[randomIndex];
      
      // Set the selected character and notify parent
      setSelectedCharacter(selected);
      onSelect(selected);
      
      // Create the final display set with the selected character in the middle
      const middleIndex = 4;
      const totalToDisplay = Math.min(10, visibleCharacters.length);
      
      let shuffled = [...visibleCharacters]
        .filter(char => char.id !== selected.id)
        .sort(() => 0.5 - Math.random());
      
      // Create an array with proper number of slots
      const displaySet: Character[] = Array(totalToDisplay).fill(null);
      
      // Place selected character in the middle
      displaySet[middleIndex] = selected;
      
      // Fill in the other positions
      let shuffleIndex = 0;
      for (let i = 0; i < totalToDisplay; i++) {
        if (i !== middleIndex) {
          displaySet[i] = shuffled[shuffleIndex++];
          if (shuffleIndex >= shuffled.length) shuffleIndex = 0;
        }
      }
      
      setDisplayedCharacters(displaySet.filter(Boolean));
      
      // Reset for next spin
      setTimeout(() => {
        setSpinning(false);
      }, 1000);
    }, spinDuration);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div 
        ref={containerRef}
        className="w-full mb-6 relative overflow-hidden h-28 rounded-xl border border-white/10"
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
            {displayedCharacters.map((character, index) => (
              <motion.div
                key={`${character.id}-${index}`}
                className={`h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 ${selectedCharacter?.id === character.id ? 'border-yellow-400 scale-110 shadow-lg shadow-yellow-500/30' : 'border-white/20'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: selectedCharacter?.id === character.id ? 1.1 : 1,
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
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <Button 
        onClick={spinWheel} 
        disabled={spinning}
        className="px-8 py-2 font-semibold text-white text-lg rounded-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 transition-all duration-300 min-w-[200px]"
      >
        {spinning ? "Spinning..." : "Spin The Wheel!"}
      </Button>
    </div>
  );
} 