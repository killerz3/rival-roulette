import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Character } from '@/lib/process-data';
import { Button } from '@/components/ui/button';

type PartyWheelProps = {
  characters: Character[];
  numberOfWheels: number;
  onSpinComplete: (chosenCharacters: Character[]) => void;
  roleFilters?: string[]; // Array of role filters, one per wheel
  customFilter?: Set<string>; // Custom character filter
};

const ROLES = ['ANY', 'VANGUARD', 'DUELIST', 'STRATEGIST'];

export function PartyWheel({ 
  characters, 
  numberOfWheels, 
  onSpinComplete,
  roleFilters = [],
  customFilter
}: PartyWheelProps) {
  const [spinning, setSpinning] = useState(false);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [displayedCharacters, setDisplayedCharacters] = useState<Character[][]>([]);
  const [currentRoleFilters, setCurrentRoleFilters] = useState<string[]>(
    Array(numberOfWheels).fill('ANY')
  );
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update role filters when numberOfWheels changes
  useEffect(() => {
    setCurrentRoleFilters(prev => {
      const newFilters = [...prev];
      while (newFilters.length < numberOfWheels) {
        newFilters.push('ANY');
      }
      while (newFilters.length > numberOfWheels) {
        newFilters.pop();
      }
      return newFilters;
    });
  }, [numberOfWheels]);

  // Get filtered characters for a specific wheel based on role filter and custom filter
  const getFilteredCharacters = (wheelIndex: number): Character[] => {
    let filtered = [...characters];
    
    // Apply custom filter if provided
    if (customFilter && customFilter.size > 0) {
      filtered = filtered.filter(char => customFilter.has(char.id));
    }
    
    // Apply role filter
    const roleFilter = currentRoleFilters[wheelIndex] || 'ANY';
    if (roleFilter !== 'ANY') {
      filtered = filtered.filter(char => char.role === roleFilter);
    }
    
    return filtered;
  };

  // Initialize displayed characters for each wheel
  useEffect(() => {
    const initialDisplays: Character[][] = [];
    for (let i = 0; i < numberOfWheels; i++) {
      const filtered = getFilteredCharacters(i);
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      initialDisplays.push(shuffled.slice(0, Math.min(10, shuffled.length)));
    }
    setDisplayedCharacters(initialDisplays);
    setSelectedCharacters([]);
  }, [numberOfWheels, characters, customFilter, currentRoleFilters]);

  const handleRoleFilterChange = (wheelIndex: number, role: string) => {
    setCurrentRoleFilters(prev => {
      const newFilters = [...prev];
      newFilters[wheelIndex] = role;
      return newFilters;
    });
    setSelectedCharacters([]);
  };

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
          const filtered = getFilteredCharacters(i);
          const shuffled = [...filtered].sort(() => 0.5 - Math.random());
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
      const chosen: Character[] = [];
      const usedCharacterIds = new Set<string>();
      
      // First, select all unique characters
      for (let i = 0; i < numberOfWheels; i++) {
        const filtered = getFilteredCharacters(i);
        const available = filtered.filter(char => !usedCharacterIds.has(char.id));
        
        if (available.length === 0) {
          // Fallback: if no available characters, use any from the filtered set
          const fallback = filtered.filter(char => !chosen.some(c => c.id === char.id));
          if (fallback.length > 0) {
            const randomIndex = Math.floor(Math.random() * fallback.length);
            const selected = fallback[randomIndex];
            chosen.push(selected);
            usedCharacterIds.add(selected.id);
          }
          break;
        }
        
        const randomIndex = Math.floor(Math.random() * available.length);
        const selected = available[randomIndex];
        chosen.push(selected);
        usedCharacterIds.add(selected.id);
      }
      
      // Then update displays for all wheels at once
      setDisplayedCharacters(prev => {
        const newDisplays = [...prev];
        
        for (let i = 0; i < numberOfWheels; i++) {
          if (i >= chosen.length) break;
          
          const selected = chosen[i];
          const middleIndex = 4;
          
          // Use all characters except the chosen ones for display
          const filtered = getFilteredCharacters(i);
          const displayPool = filtered.filter(
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

  const getCharacterLabel = (index: number): string => {
    const labels = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
    return labels[index] || `${index + 1}th`;
  };

  const formatRoleName = (role: string): string => {
    if (role === 'ANY') return 'Any';
    return role.charAt(0) + role.slice(1).toLowerCase();
  };

  // Check if we have enough characters for all wheels
  const hasEnoughCharacters = () => {
    for (let i = 0; i < numberOfWheels; i++) {
      const filtered = getFilteredCharacters(i);
      if (filtered.length === 0) return false;
    }
    return true;
  };

  return (
    <div className="flex flex-col items-center w-full space-y-6">
      {/* Spin Button */}
      <Button 
        onClick={spinWheels} 
        disabled={spinning || !hasEnoughCharacters()}
        className="px-8 py-2 font-semibold text-white text-lg rounded-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 transition-all duration-300 min-w-[200px]"
      >
        {spinning ? "Spinning..." : "Spin The Wheel!"}
      </Button>
      
      {!hasEnoughCharacters() && (
        <p className="text-sm text-yellow-400 text-center">
          Not enough characters available for all players. Please adjust role filters or character selection.
        </p>
      )}

      {/* Wheels and Chosen Characters in Rows */}
      <div className="w-full space-y-6">
        {Array.from({ length: numberOfWheels }).map((_, wheelIndex) => {
          const selectedChar = selectedCharacters[wheelIndex];
          const filtered = getFilteredCharacters(wheelIndex);
          
          return (
            <div key={wheelIndex} className="w-full">
              {/* Role Filter for this wheel */}
              <div className="mb-3 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-400">
                  {getCharacterLabel(wheelIndex)} Player:
                </span>
                <div className="flex gap-2 flex-wrap">
                  {ROLES.map((role) => (
                    <button
                      key={role}
                      onClick={() => handleRoleFilterChange(wheelIndex, role)}
                      disabled={spinning}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        (currentRoleFilters[wheelIndex] || 'ANY') === role
                          ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white'
                          : 'bg-[#2a273f]/50 text-[#e0def4] hover:bg-[#393552] border border-[#6e6a86]/20'
                      } ${spinning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {formatRoleName(role)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row: Spinner (desktop) / Placeholder (mobile) + Chosen Character */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left: Spinner (desktop) or Placeholder (mobile) */}
                <div className="relative">
                  {/* Desktop: Show spinner */}
                  <div className="hidden md:block">
                    <div 
                      ref={(el) => {
                        containerRefs.current[wheelIndex] = el;
                      }}
                      className="w-full relative overflow-hidden h-28 rounded-xl border border-white/10"
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
                            const isSelected = selectedChar?.id === character.id;
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
                </div>

                {/* Right: Chosen Character Display */}
                <div className="w-full rounded-xl bg-black/20 backdrop-blur-md border border-white/10 overflow-hidden min-h-[112px] flex items-center">
                  {selectedChar ? (
                    <div className="p-4 w-full">
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 border-yellow-400">
                          <img
                            src={selectedChar.image}
                            alt={selectedChar.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {getCharacterLabel(wheelIndex)} Character
                          </h3>
                          <p className="text-xl font-bold text-yellow-400">
                            {selectedChar.name}
                          </p>
                          <p className="text-sm text-white/70">
                            {selectedChar.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 w-full flex items-center justify-center">
                      {spinning ? (
                        <div className="flex flex-col items-center gap-2">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-400"></div>
                          <p className="text-sm text-gray-400">Selecting...</p>
                        </div>
                      ) : (
                        <p className="text-sm text-white/70 text-center">
                          {getCharacterLabel(wheelIndex)} character will appear here
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
