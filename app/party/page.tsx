"use client";

import { useState, useEffect } from "react";
import { processHeroData, type Character } from "@/lib/process-data";
import { PartyWheel } from "@/components/PartyWheel";
import { CharacterCard } from "@/components/CharacterCard";
import Link from "next/link";

export default function PartyPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const processedData = processHeroData();
      setCharacters(processedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error processing hero data:", error);
      setIsLoading(false);
    }
  }, []);

  const handleSpinComplete = (chosenCharacters: Character[]) => {
    setSelectedCharacters(chosenCharacters);
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

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Wheels */}
              <div className="lg:col-span-2 space-y-6">
                <PartyWheel
                  characters={characters}
                  numberOfWheels={numberOfPlayers}
                  onSpinComplete={handleSpinComplete}
                />
              </div>

              {/* Right Side - Chosen Characters */}
              <div className="lg:col-span-1 space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
                  Chosen Characters
                </h2>
                <div className="space-y-4">
                  {selectedCharacters.length === 0 ? (
                    <div className="w-full rounded-xl bg-black/20 backdrop-blur-md border border-white/10 p-8 flex items-center justify-center min-h-[200px]">
                      <p className="text-lg text-white/70 text-center">
                        Spin the wheels to see chosen characters
                      </p>
                    </div>
                  ) : (
                    selectedCharacters.map((character, index) => (
                      <div
                        key={character.id}
                        className="w-full rounded-xl bg-black/20 backdrop-blur-md border border-white/10 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 border-yellow-400">
                              <img
                                src={character.image}
                                alt={character.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-semibold text-white mb-1">
                                {index === 0
                                  ? "First Character"
                                  : index === 1
                                  ? "Second Character"
                                  : index === 2
                                  ? "Third Character"
                                  : index === 3
                                  ? "Fourth Character"
                                  : index === 4
                                  ? "Fifth Character"
                                  : "Sixth Character"}
                              </h3>
                              <p className="text-xl font-bold text-yellow-400">
                                {character.name}
                              </p>
                              <p className="text-sm text-white/70">
                                {character.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

