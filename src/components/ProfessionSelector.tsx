import React from 'react';
import { professions } from '../data/professions';
import { Search } from 'lucide-react';

interface ProfessionSelectorProps {
  onSelect: (profession: string) => void;
}

export function ProfessionSelector({ onSelect }: ProfessionSelectorProps) {
  const [search, setSearch] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const filteredProfessions = Object.entries(professions)
    .filter(([_, data]) => 
      data.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Search your profession..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>
        
        {isOpen && (
          <div className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 max-h-60 overflow-y-auto">
            {filteredProfessions.length > 0 ? (
              filteredProfessions.map(([key, data]) => (
                <button
                  key={key}
                  className="w-full text-left px-4 py-3 text-gray-200 hover:bg-gray-700 transition-colors"
                  onClick={() => {
                    onSelect(key);
                    setIsOpen(false);
                    setSearch('');
                  }}
                >
                  {data.title}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-gray-400">
                No professions found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}