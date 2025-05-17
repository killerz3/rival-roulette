"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Challenge, 
  challenges, 
  getRandomChallenge, 
  getChallengesByCategory, 
  getChallengesByDifficulty 
} from "../data/challenges";

export default function Challenges() {
  const [randomChallenge, setRandomChallenge] = useState<Challenge | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Challenge['category'] | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Challenge['difficulty'] | 'all'>('all');
  const [displayedChallenges, setDisplayedChallenges] = useState<Challenge[]>(challenges);

  const categories: Array<{ value: Challenge['category'] | 'all', label: string }> = [
    { value: 'all', label: 'All Categories' },
    { value: 'damage', label: 'Damage' },
    { value: 'healing', label: 'Healing' },
    { value: 'elimination', label: 'Elimination' },
    { value: 'support', label: 'Support' },
    { value: 'ability', label: 'Ability Usage' },
    { value: 'general', label: 'General' }
  ];

  const difficulties: Array<{ value: Challenge['difficulty'] | 'all', label: string }> = [
    { value: 'all', label: 'All Difficulties' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
    { value: 'extreme', label: 'Extreme' },
    { value: 'impossible', label: 'Impossible' }
  ];

  const handleGetRandomChallenge = () => {
    const challenge = getRandomChallenge(selectedCategory, selectedDifficulty);
    setRandomChallenge(challenge);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as Challenge['category'] | 'all';
    setSelectedCategory(category);
    
    // Update displayed challenges
    if (selectedDifficulty === 'all') {
      setDisplayedChallenges(getChallengesByCategory(category));
    } else {
      const filteredByDifficulty = getChallengesByDifficulty(selectedDifficulty);
      setDisplayedChallenges(
        category === 'all' 
          ? filteredByDifficulty 
          : filteredByDifficulty.filter(c => c.category === category)
      );
    }
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const difficulty = e.target.value as Challenge['difficulty'] | 'all';
    setSelectedDifficulty(difficulty);
    
    // Update displayed challenges
    if (selectedCategory === 'all') {
      setDisplayedChallenges(getChallengesByDifficulty(difficulty));
    } else {
      const filteredByCategory = getChallengesByCategory(selectedCategory);
      setDisplayedChallenges(
        difficulty === 'all' 
          ? filteredByCategory 
          : filteredByCategory.filter(c => c.difficulty === difficulty)
      );
    }
  };

  // Helper function to get difficulty badge color
  const getDifficultyColor = (difficulty: Challenge['difficulty']): string => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      case 'extreme': return 'bg-purple-700';
      case 'impossible': return 'bg-black border border-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1033] to-[#080a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-2 text-gradient">
            Marvel Rivals Challenges
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Get a random challenge to complete in your next match!
          </p>
        </header>

        <div className="mb-6 text-center">
          <Link 
            href="/" 
            className="inline-block px-4 py-2 mb-8 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Character Roulette
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full px-3 py-2 bg-[rgba(255,255,255,0.1)] rounded-md text-white border border-[rgba(255,255,255,0.1)]"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300 mb-1">
                Difficulty
              </label>
              <select
                id="difficulty"
                value={selectedDifficulty}
                onChange={handleDifficultyChange}
                className="w-full px-3 py-2 bg-[rgba(255,255,255,0.1)] rounded-md text-white border border-[rgba(255,255,255,0.1)]"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleGetRandomChallenge}
            className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
          >
            Get Random Challenge
          </button>

          {randomChallenge && (
            <div className="mt-8 p-6 bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-lg shadow-xl max-w-2xl border border-[rgba(255,255,255,0.1)]">
              <h2 className="text-2xl font-bold text-center mb-2">Your Challenge:</h2>
              <p className="text-xl text-center">{randomChallenge.text}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <span className="px-2 py-1 text-xs bg-blue-500 rounded-full">
                  {categories.find(c => c.value === randomChallenge.category)?.label}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(randomChallenge.difficulty)}`}>
                  {randomChallenge.difficulty.charAt(0).toUpperCase() + randomChallenge.difficulty.slice(1)}
                </span>
              </div>
            </div>
          )}

          <div className="mt-12 w-full">
            <h3 className="text-xl font-bold mb-4">Available Challenges ({displayedChallenges.length}):</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {displayedChallenges.map((challenge, index) => (
                <li key={index} className="p-3 bg-[rgba(255,255,255,0.05)] rounded-md flex flex-col">
                  <span>{challenge.text}</span>
                  <div className="flex mt-2 space-x-2">
                    <span className="px-2 py-1 text-xs bg-blue-500 rounded-full">
                      {categories.find(c => c.value === challenge.category)?.label}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 