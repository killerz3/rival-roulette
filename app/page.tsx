"use client";

import { useState, useEffect } from "react";
import { processHeroData, groupCharactersByRole, type Character } from "@/lib/process-data";
import { CharacterWheel } from "@/components/CharacterWheel";
import { CharacterCard } from "@/components/CharacterCard";
import { RoleSelector } from "@/components/RoleSelector";
import Link from "next/link";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("ALL");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Process hero data
      const processedData = processHeroData();
      setCharacters(processedData);
      
      // Extract unique roles
      const roleGroups = groupCharactersByRole(processedData);
      setRoles(Object.keys(roleGroups));
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error processing hero data:", error);
      setIsLoading(false);
    }
  }, []);

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1033] to-[#080a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-2 text-gradient">
            Marvel Rivals Roulette
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Randomly select your next Marvel Rivals character!
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              href="/challenges"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
            >
              Try Challenges →
            </Link>
            <Link
              href="/characters"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
            >
              Character Gallery →
            </Link>
          </div>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            <RoleSelector 
              roles={roles} 
              selectedRole={selectedRole} 
              onRoleChange={setSelectedRole} 
            />
            
            <div className="mb-8">
              <CharacterWheel 
                characters={characters} 
                onSelect={handleCharacterSelect} 
                filterRole={selectedRole}
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
            <div className="text-right self-end md:text-right text-center">
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
