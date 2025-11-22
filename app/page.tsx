"use client";

import { useState, useEffect } from "react";
import { processHeroData, groupCharactersByRole, type Character } from "@/lib/process-data";
import { CharacterWheel } from "@/components/CharacterWheel";
import { CharacterCard } from "@/components/CharacterCard";
import { RoleSelector } from "@/components/RoleSelector";
import { CustomCharacterFilter } from "@/components/CustomCharacterFilter";
import Link from "next/link";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("ALL");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCharacters, setSelectedCharacters] = useState<Set<string>>(new Set());
  const [useCustomFilter, setUseCustomFilter] = useState(false);

  useEffect(() => {
    try {
      // Process hero data
      const processedData = processHeroData();
      setCharacters(processedData);
      
      // Extract unique roles
      const roleGroups = groupCharactersByRole(processedData);
      setRoles(Object.keys(roleGroups));
      
      // Initialize with all characters selected
      setSelectedCharacters(new Set(processedData.map(char => char.id)));
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error processing hero data:", error);
      setIsLoading(false);
    }
  }, []);

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCharacterToggle = (characterId: string) => {
    setSelectedCharacters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(characterId)) {
        newSet.delete(characterId);
      } else {
        newSet.add(characterId);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    setSelectedCharacters(new Set(characters.map(char => char.id)));
  };

  const handleDeselectAll = () => {
    setSelectedCharacters(new Set());
  };

  const handleRoleToggle = (role: string) => {
    const roleCharacters = characters.filter(char => char.role === role);
    const allSelected = roleCharacters.every(char => selectedCharacters.has(char.id));
    
    if (allSelected) {
      // Deselect all characters in this role
      roleCharacters.forEach(char => {
        if (selectedCharacters.has(char.id)) {
          handleCharacterToggle(char.id);
        }
      });
    } else {
      // Select all characters in this role
      roleCharacters.forEach(char => {
        if (!selectedCharacters.has(char.id)) {
          handleCharacterToggle(char.id);
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1033] to-[#080a1a] text-white pb-10 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-2 text-gradient">
            Marvel Rivals Roulette
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Randomly select your next Marvel Rivals character!
          </p>
          <div className="mt-4 flex justify-center space-x-4 flex-wrap gap-2">
            <Link
              href="/challenges"
              className="inline-block px-4 py-2 text-md font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Try Challenges
            </Link>
            <Link
              href="/characters"
              className="inline-block px-4 py-2 text-md font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Character Gallery
            </Link>
            <Link
              href="/party"
              className="inline-block px-4 py-2 text-md font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Party Randomizer
            </Link>
          </div>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            {/* Filter Mode Toggle */}
            <div className="flex justify-center mb-6">
              <div className="flex bg-[#2a273f]/50 rounded-full p-1 border border-[#6e6a86]/20">
                <button
                  onClick={() => setUseCustomFilter(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !useCustomFilter
                      ? 'bg-[#e0def4] text-[#232136]'
                      : 'text-[#e0def4] hover:bg-[#393552]/50'
                  }`}
                >
                  Role Filter
                </button>
                <button
                  onClick={() => setUseCustomFilter(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    useCustomFilter
                      ? 'bg-[#e0def4] text-[#232136]'
                      : 'text-[#e0def4] hover:bg-[#393552]/50'
                  }`}
                >
                  Custom Filter
                </button>
              </div>
            </div>

            {!useCustomFilter ? (
              <RoleSelector 
                roles={roles} 
                selectedRole={selectedRole} 
                onRoleChange={setSelectedRole} 
              />
            ) : (
              <CustomCharacterFilter
                characters={characters}
                selectedCharacters={selectedCharacters}
                onCharacterToggle={handleCharacterToggle}
                onRoleToggle={handleRoleToggle}
                onSelectAll={handleSelectAll}
                onDeselectAll={handleDeselectAll}
              />
            )}
            
            <div className="mb-8">
              <CharacterWheel 
                characters={characters} 
                onSelect={handleCharacterSelect} 
                filterRole={useCustomFilter ? undefined : selectedRole}
                customFilter={useCustomFilter ? selectedCharacters : undefined}
              />
            </div>
            
            <CharacterCard character={selectedCharacter} />
          </>
        )}
      </div>

      <footer className="border-t border-gray-800 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Marvel Rivals Roulette Tool</h2>
              <p className="text-gray-400 text-sm">
                The ultimate character selection tool for Marvel Rivals players. Randomly select characters across all roles 
                including Assault, Support, and Tank. Find your next main character with our advanced Marvel Rivals random picker 
                and improve your gameplay with strategic character selection.
              </p>
            </div>
            <div className="text-center self-end md:text-right">
              <p className="text-gray-400 text-sm">
                Created by Shubhveer Singh Chaudhary
              </p>
              <a 
                href="https://github.com/killerz3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center mt-1"
              >
                @killerz3 on GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
