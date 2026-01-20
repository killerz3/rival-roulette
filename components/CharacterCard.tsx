import React from 'react';
import { Character } from '@/lib/process-data';
import { motion } from 'framer-motion';

type CharacterCardProps = {
  character: Character | null;
};

export function CharacterCard({ character }: CharacterCardProps) {
  if (!character) {
    return (
      <div className="w-full h-[500px] rounded-xl bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center">
        <p className="text-2xl text-white/70">Select a character</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-xl bg-black/20 backdrop-blur-md border border-white/10 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto">
          <img 
            src={character.image} 
            alt={character.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
            <h2 className="text-4xl font-bold text-white">{character.name}</h2>
            <p className="text-lg text-white/70">{character.real_name}</p>
          </div>
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-medium">
              {character.role}
            </span>
            {character.team.map((team) => (
              <span key={team} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                {team}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">
              Difficulty: {character.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">
              {character.attack_type}
            </span>
          </div>
          
          <p className="text-white/80 mb-6">{character.description}</p>
          
          <h3 className="text-xl font-medium text-white mb-4">Abilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {character.abilities.slice(0, 4).map((ability) => (
              <div key={ability.id} className="flex gap-3 bg-white/5 p-3 rounded-lg">
                {ability.icon && (
                  <div className="w-10 h-10 flex-shrink-0 rounded overflow-hidden">
                    <img 
                      src={ability.icon} 
                      alt={ability.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-white">{ability.name}</h4>
                  <p className="text-xs text-white/70">{ability.type}</p>
                  <p className="text-sm text-white/80 mt-1">{ability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 