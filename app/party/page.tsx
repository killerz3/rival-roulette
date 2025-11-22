"use client";

import { useState, useEffect } from "react";
import { processHeroData, groupCharactersByRole, type Character } from "@/lib/process-data";
import { PartyWheel } from "@/components/PartyWheel";
import { CustomCharacterFilter } from "@/components/CustomCharacterFilter";
import Link from "next/link";

export default function PartyPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [selectedCharactersFilter, setSelectedCharactersFilter] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const processedData = processHeroData();
      setCharacters(processedData);
      
      // Extract unique roles
      const roleGroups = groupCharactersByRole(processedData);
      setRoles(Object.keys(roleGroups));
      
      // Initialize with all characters selected
      setSelectedCharactersFilter(new Set(processedData.map(char => char.id)));
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error processing hero data:", error);
      setIsLoading(false);
    }
  }, []);

  const handleSpinComplete = (chosenCharacters: Character[]) => {
    setSelectedCharacters(chosenCharacters);
  };

  const handleCharacterToggle = (characterId: string) => {
    setSelectedCharactersFilter(prev => {
      const newSet = new Set(prev);
      if (newSet.has(characterId)) {
        newSet.delete(characterId);
      } else {
        newSet.add(characterId);
      }
      return newSet;
    });
  };

  const handleRoleToggle = (role: string) => {
    const roleCharacters = characters.filter(char => char.role === role);
    const allSelected = roleCharacters.every(char => selectedCharactersFilter.has(char.id));
    
    if (allSelected) {
      // Deselect all characters in this role
      roleCharacters.forEach(char => {
        if (selectedCharactersFilter.has(char.id)) {
          handleCharacterToggle(char.id);
        }
      });
    } else {
      // Select all characters in this role
      roleCharacters.forEach(char => {
        if (!selectedCharactersFilter.has(char.id)) {
          handleCharacterToggle(char.id);
        }
      });
    }
  };

  const handleSelectAll = () => {
    setSelectedCharactersFilter(new Set(characters.map(char => char.id)));
  };

  const handleDeselectAll = () => {
    setSelectedCharactersFilter(new Set());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1033] to-[#080a1a] text-white pb-10 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-2 text-gradient">
            Party Randomizer
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Spin multiple wheels together and get unique characters for each player!
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-block px-4 py-2 text-md font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Number of Players Selector */}
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Number of Players
              </h2>
              <div className="flex gap-3 flex-wrap justify-center">
                {[2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setNumberOfPlayers(num);
                      setSelectedCharacters([]);
                    }}
                    className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all ${
                      numberOfPlayers === num
                        ? "bg-gradient-to-r from-red-500 to-purple-600 text-white scale-110 shadow-lg"
                        : "bg-[#2a273f]/50 text-[#e0def4] hover:bg-[#393552] border border-[#6e6a86]/20"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Character Filter */}
            <div className="mb-6">
              <CustomCharacterFilter
                characters={characters}
                selectedCharacters={selectedCharactersFilter}
                onCharacterToggle={handleCharacterToggle}
                onRoleToggle={handleRoleToggle}
                onSelectAll={handleSelectAll}
                onDeselectAll={handleDeselectAll}
              />
            </div>

            {/* Party Wheel Component */}
            <PartyWheel
              characters={characters}
              numberOfWheels={numberOfPlayers}
              onSpinComplete={handleSpinComplete}
              customFilter={selectedCharactersFilter.size > 0 ? selectedCharactersFilter : undefined}
            />
          </div>
        )}
      </div>
    </div>
  );
}

