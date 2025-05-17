export type Challenge = {
  text: string;
  category: 'damage' | 'healing' | 'elimination' | 'support' | 'ability' | 'general';
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme' | 'impossible';
};

export const challenges: Challenge[] = [
  // Easy challenges
  {
    text: "Score the final blow (KO) on 5 enemies",
    category: "elimination",
    difficulty: "easy"
  },
  {
    text: "Destroy 10 deployables (e.g. turrets, traps)",
    category: "general",
    difficulty: "easy"
  },
  {
    text: "Win a match with any character",
    category: "general",
    difficulty: "easy"
  },
  {
    text: "Deal 5,000 damage in a single game",
    category: "damage",
    difficulty: "easy"
  },
  {
    text: "Use each of your abilities at least once in a match",
    category: "ability",
    difficulty: "easy"
  },
  {
    text: "Get 5 assists in one match",
    category: "support",
    difficulty: "easy"
  },
  {
    text: "Heal a teammate for 1,000 health points",
    category: "healing",
    difficulty: "easy"
  },
  {
    text: "Capture an objective or control point",
    category: "general",
    difficulty: "easy"
  },
  {
    text: "Get a 5 elimination streak",
    category: "elimination",
    difficulty: "easy"
  },
  
  // Medium challenges
  {
    text: "Earn 10 assists in one match",
    category: "support",
    difficulty: "medium"
  },
  {
    text: "10 elimination streak",
    category: "elimination",
    difficulty: "medium"
  },
  {
    text: "Heal 5,000 health points",
    category: "healing",
    difficulty: "medium"
  },
  {
    text: "Block 8,000 damage",
    category: "support",
    difficulty: "medium"
  },
  {
    text: "Use your ultimate ability 4 times in a game",
    category: "ability",
    difficulty: "medium"
  },
  {
    text: "Land a headshot elimination 5 times",
    category: "elimination",
    difficulty: "medium"
  },
  {
    text: "Deal 3,000 ability damage with Human Torch",
    category: "damage",
    difficulty: "medium"
  },
  {
    text: "Immobilize 5 enemies with Squirrel Blockade",
    category: "ability",
    difficulty: "medium"
  },
  {
    text: "Knockback 10 enemies using The Thing's charge",
    category: "ability",
    difficulty: "medium"
  },
  
  // Hard challenges
  {
    text: "Deal 12,500 damage in a single game",
    category: "damage",
    difficulty: "hard"
  },
  {
    text: "Win 3 matches in a row",
    category: "general",
    difficulty: "hard"
  },
  {
    text: "15 elimination streak",
    category: "elimination",
    difficulty: "hard"
  },
  {
    text: "20 elimination streak",
    category: "elimination",
    difficulty: "hard"
  },
  {
    text: "Complete a match without dying more than twice",
    category: "general",
    difficulty: "hard"
  },
  
  // Extreme challenges
  {
    text: "Win a match with every character in the roster",
    category: "general",
    difficulty: "extreme"
  },
  {
    text: "Get a 30 elimination streak in a single match",
    category: "elimination",
    difficulty: "extreme"
  },
  {
    text: "Deal 20,000 damage in a single match",
    category: "damage",
    difficulty: "extreme"
  },
  {
    text: "Score a Pentakill (eliminate all 5 enemy players)",
    category: "elimination",
    difficulty: "extreme"
  },
  {
    text: "Complete a match using only your primary fire (no abilities)",
    category: "general",
    difficulty: "extreme"
  },
  {
    text: "Heal 10,000 health points in a single match",
    category: "healing",
    difficulty: "extreme"
  },
  {
    text: "Get 20 assists in a single match",
    category: "support",
    difficulty: "extreme"
  },
  {
    text: "Use your ultimate ability 6 times in one match",
    category: "ability",
    difficulty: "extreme"
  },
  
  // Impossible challenges
  {
    text: "Win 5 consecutive matches without dying once",
    category: "general",
    difficulty: "impossible"
  },
  {
    text: "Win a match with all team members below 10% health at the end",
    category: "general",
    difficulty: "impossible"
  },
  {
    text: "Get a 50 elimination streak without using any abilities",
    category: "elimination",
    difficulty: "impossible"
  },
  {
    text: "Deal 30,000 damage in a single match",
    category: "damage",
    difficulty: "impossible"
  },
  {
    text: "Win 10 consecutive matches",
    category: "general",
    difficulty: "impossible"
  },
  {
    text: "Eliminate the entire enemy team three times in one match",
    category: "elimination",
    difficulty: "impossible"
  },
  {
    text: "Complete a match without taking any damage",
    category: "general",
    difficulty: "impossible"
  },
  {
    text: "Heal 15,000 health points while taking no damage yourself",
    category: "healing",
    difficulty: "impossible"
  },
  {
    text: "Get 30 assists without dying once",
    category: "support",
    difficulty: "impossible"
  }
];

export const getChallengesByCategory = (category: Challenge['category'] | 'all'): Challenge[] => {
  if (category === 'all') return challenges;
  return challenges.filter(challenge => challenge.category === category);
};

export const getChallengesByDifficulty = (difficulty: Challenge['difficulty'] | 'all'): Challenge[] => {
  if (difficulty === 'all') return challenges;
  return challenges.filter(challenge => challenge.difficulty === difficulty);
};

export const getRandomChallenge = (
  category: Challenge['category'] | 'all' = 'all', 
  difficulty: Challenge['difficulty'] | 'all' = 'all'
): Challenge => {
  const filteredChallenges = challenges.filter(challenge => {
    const categoryMatch = category === 'all' || challenge.category === category;
    const difficultyMatch = difficulty === 'all' || challenge.difficulty === difficulty;
    return categoryMatch && difficultyMatch;
  });

  const randomIndex = Math.floor(Math.random() * filteredChallenges.length);
  return filteredChallenges[randomIndex] || challenges[0];
}; 