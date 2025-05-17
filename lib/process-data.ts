import { heroData } from '../app/data';

export type Character = {
  id: string;
  name: string;
  real_name: string;
  slug: string;
  role: string;
  team: string[];
  difficulty: string;
  attack_type: string;
  image: string;
  description: string;
  abilities: Ability[];
};

export type Ability = {
  id: number;
  name: string;
  type: string;
  description: string;
  icon: string;
  additional_fields?: Record<string, string>;
};

export function processHeroData(): Character[] {
  const processedHeroes = heroData.map(hero => {
    // Get primary abilities from first transformation
    const abilities = hero.abilities?.filter(ability => 
      ability.transformation_id === 0 || 
      ability.transformation_id === 1
    ) || [];

    return {
      id: hero.id,
      name: hero.name,
      real_name: hero.real_name || hero.name,
      slug: hero.slug,
      role: hero.role,
      team: hero.team || [],
      difficulty: hero.difficulty || "1",
      attack_type: hero.attack_type || "Unknown",
      image: `https://static.dotgg.gg/rivals/characters/${hero.slug}-portrait.webp`,
      description: hero.description || "",
      abilities: abilities.map(ability => {
        // Ensure all values in additional_fields are strings
        const processedFields: Record<string, string> = {};
        if (ability.additional_fields) {
          Object.entries(ability.additional_fields).forEach(([key, value]) => {
            processedFields[key] = String(value ?? '');
          });
        }
        
        return {
          id: ability.id,
          name: ability.name || "Unknown Ability",
          type: ability.type,
          description: ability.description || "",
          icon: `https://static.dotgg.gg/rivals/${ability.icon}`,
          additional_fields: processedFields
        };
      })
    };
  });
  
  return processedHeroes;
}

export function groupCharactersByRole(characters: Character[]): Record<string, Character[]> {
  const roles: Record<string, Character[]> = {};
  
  characters.forEach(character => {
    if (!roles[character.role]) {
      roles[character.role] = [];
    }
    roles[character.role].push(character);
  });
  
  return roles;
} 