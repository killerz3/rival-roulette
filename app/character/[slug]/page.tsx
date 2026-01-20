import { processHeroData, type Character, type Ability } from "@/lib/process-data";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

// Generate static pages for all characters
export async function generateStaticParams() {
  const characters = processHeroData();
  
  return characters.map((character) => ({
    slug: character.slug,
  }));
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const characters = processHeroData();
  const character = characters.find(char => char.slug === slug);
  
  if (!character) {
    return {
      title: "Character Not Found",
    };
  }

  return {
    title: `${character.name} | Marvel Rivals Character`,
    description: character.description,
    openGraph: {
      images: [character.image],
    },
  };
}

type Params = Promise<{ slug: string }>;
export default async function CharacterPage({ params }: { params: Params }) {
  const { slug } = await params;
  const characters = processHeroData();
  const character = characters.find(char => char.slug === slug);
  
  if (!character) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1033] to-[#080a1a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Character not found</h1>
          <Link 
            href="/characters" 
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1033] to-[#080a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/characters"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
          >
            ← Back to Gallery
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={character.image}
              alt={character.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              {character.name}
            </h1>
            {character.real_name !== character.name && (
              <p className="text-xl text-gray-400 mb-4">
                {character.real_name}
              </p>
            )}
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <span className="text-sm text-gray-400">Role</span>
                <p className="font-semibold">{character.role}</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <span className="text-sm text-gray-400">Attack Type</span>
                <p className="font-semibold">{character.attack_type}</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <span className="text-sm text-gray-400">Difficulty</span>
                <p className="font-semibold">{character.difficulty} / 5</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                <span className="text-sm text-gray-400">Team</span>
                <p className="font-semibold">
                  {character.team.length > 0 ? character.team.join(", ") : "None"}
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Description</h2>
              <p className="text-gray-300 leading-relaxed">{character.description}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Abilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {character.abilities.map((ability) => (
              <AbilityCard key={ability.id} ability={ability} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AbilityCard({ ability }: { ability: Ability }) {
  return (
    <div className="bg-gray-800 bg-opacity-60 rounded-lg overflow-hidden shadow-lg border border-gray-700 p-4">
      <div className="flex items-center mb-4">
        {ability.icon && (
          <div className="relative w-12 h-12 mr-4">
            <img
              src={ability.icon}
              alt={ability.name}
              className="object-cover rounded"
              sizes="48px"
            />
          </div>
        )}
        <div>
          <h3 className="font-bold text-lg">{ability.name}</h3>
          <span className="text-sm text-purple-400">{ability.type}</span>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{ability.description}</p>
      
      {ability.additional_fields && Object.keys(ability.additional_fields).length > 0 && (
        <div className="border-t border-gray-700 pt-3 mt-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(ability.additional_fields).map(([key, value]) => (
              <div key={key}>
                <span className="text-gray-400">{key}: </span>
                <span className="text-gray-300">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 