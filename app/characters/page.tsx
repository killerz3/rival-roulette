import Link from "next/link";
import { processHeroData } from "@/lib/process-data";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Gallery | Marvel Rivals Roulette",
  description: "Explore all Marvel Rivals characters in our comprehensive gallery.",
  openGraph: {
    title: "Marvel Rivals Character Gallery",
    description: "Browse all Marvel Rivals characters and learn about their abilities and stats.",
  },
};

export default function CharactersGallery() {
  const characters = processHeroData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1033] to-[#080a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-2 text-gradient">
            Character Gallery
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Explore all Marvel Rivals characters
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
            >
              ← Back to Roulette
            </Link>
          </div>
        </header>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {characters.map((character) => (
            <Link 
              key={character.id} 
              href={`/character/${character.slug}`}
              className="group transform transition-transform hover:scale-105"
            >
              <div className="bg-gray-800 bg-opacity-60 rounded-lg overflow-hidden shadow-lg border border-gray-700">
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-center group-hover:text-purple-400 transition-colors">
                    {character.name}
                  </h3>
                  <p className="text-xs text-gray-400 text-center">
                    {character.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 