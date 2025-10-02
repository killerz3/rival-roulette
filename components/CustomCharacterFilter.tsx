import React, { useState, useEffect } from 'react';
import { Character } from '@/lib/process-data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

type CustomCharacterFilterProps = {
  characters: Character[];
  selectedCharacters: Set<string>;
  onCharacterToggle: (characterId: string) => void;
  onRoleToggle: (role: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
};

export function CustomCharacterFilter({
  characters,
  selectedCharacters,
  onCharacterToggle,
  onRoleToggle,
  onSelectAll,
  onDeselectAll
}: CustomCharacterFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Group characters by role
  const charactersByRole = characters.reduce((acc, character) => {
    if (!acc[character.role]) {
      acc[character.role] = [];
    }
    acc[character.role].push(character);
    return acc;
  }, {} as Record<string, Character[]>);

  // Filter characters based on search term
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.real_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check if all characters in a role are selected
  const isRoleFullySelected = (role: string) => {
    const roleCharacters = charactersByRole[role] || [];
    return roleCharacters.length > 0 && roleCharacters.every(char => selectedCharacters.has(char.id));
  };

  // Check if some characters in a role are selected
  const isRolePartiallySelected = (role: string) => {
    const roleCharacters = charactersByRole[role] || [];
    return roleCharacters.some(char => selectedCharacters.has(char.id));
  };

  const handleRoleToggle = (role: string) => {
    const roleCharacters = charactersByRole[role] || [];
    const allSelected = isRoleFullySelected(role);
    
    if (allSelected) {
      // Deselect all characters in this role
      roleCharacters.forEach(char => {
        if (selectedCharacters.has(char.id)) {
          onCharacterToggle(char.id);
        }
      });
    } else {
      // Select all characters in this role
      roleCharacters.forEach(char => {
        if (!selectedCharacters.has(char.id)) {
          onCharacterToggle(char.id);
        }
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center space-y-4">
        {/* Main Filter Toggle Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`rounded-full text-sm px-6 py-2 min-w-[200px] transition-all duration-200 mb-5 ${
            isExpanded
              ? 'bg-[#e0def4] text-[#232136] font-medium'
              : 'bg-[#2a273f] text-[#e0def4] hover:bg-[#393552] font-medium border border-[#6e6a86]/20'
          }`}
        >
          {isExpanded ? 'Hide Custom Filter' : 'Custom Character Filter'}
        </Button>

        {/* Quick Actions */}
        {isExpanded && (
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              onClick={onSelectAll}
              className="rounded-full text-xs px-4 py-1.5 bg-[#3e8fb0] hover:bg-[#3e8fb0]/80 text-[#e0def4]"
            >
              Select All
            </Button>
            <Button
              onClick={onDeselectAll}
              className="rounded-full text-xs px-4 py-1.5 bg-[#eb6f92] hover:bg-[#eb6f92]/80 text-[#e0def4]"
            >
              Deselect All
            </Button>
          </div>
        )}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-[#2a273f]/50 backdrop-blur-sm rounded-lg border border-[#6e6a86]/20 p-4"
            >
              {/* Search Bar */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search characters..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-[#232136] border border-[#6e6a86]/30 rounded-lg text-[#e0def4] placeholder-[#6e6a86] focus:outline-none focus:border-[#c4a7e7]/50"
                />
              </div>

              {/* Character Selection by Role */}
              <div className="space-y-4">
                {Object.entries(charactersByRole).map(([role, roleCharacters]) => {
                  const filteredRoleCharacters = roleCharacters.filter(char =>
                    char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    char.real_name.toLowerCase().includes(searchTerm.toLowerCase())
                  );

                  if (filteredRoleCharacters.length === 0) return null;

                  return (
                    <div key={role} className="space-y-2">
                      {/* Role Header */}
                      <div className="flex items-center justify-between">
                        <Button
                          onClick={() => handleRoleToggle(role)}
                          className={`rounded-full text-sm px-4 py-1.5 min-w-[120px] ${
                            isRoleFullySelected(role)
                              ? 'bg-[#e0def4] text-[#232136] font-medium'
                              : isRolePartiallySelected(role)
                              ? 'bg-[#f6c177] text-[#232136] font-medium'
                              : 'bg-[#2a273f] text-[#e0def4] hover:bg-[#393552] font-medium border border-[#6e6a86]/20'
                          }`}
                        >
                          {role} ({filteredRoleCharacters.length})
                        </Button>
                      </div>

                      {/* Individual Characters */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-4">
                        {filteredRoleCharacters.map((character) => (
                          <Button
                            key={character.id}
                            onClick={() => onCharacterToggle(character.id)}
                            className={`rounded-lg text-xs px-3 py-2 text-left justify-start ${
                              selectedCharacters.has(character.id)
                                ? 'bg-[#e0def4] text-[#232136] font-medium'
                                : 'bg-[#2a273f] text-[#e0def4] hover:bg-[#393552] font-medium border border-[#6e6a86]/20'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <img
                                src={character.image}
                                alt={character.name}
                                className="w-6 h-6 rounded-full object-cover"
                              />
                              <span className="truncate">{character.name}</span>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selection Summary */}
              <div className="mt-4 pt-4 border-t border-[#6e6a86]/20 text-center text-sm text-[#6e6a86]">
                {selectedCharacters.size} of {characters.length} characters selected
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
