"use client";

import { useState, useEffect } from "react";
import { processHeroData, groupCharactersByRole, type Character } from "@/lib/process-data";
import { CharacterWheel } from "@/components/CharacterWheel";
import { CharacterCard } from "@/components/CharacterCard";
import { RoleSelector } from "@/components/RoleSelector";

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
    </div>
  );
}
