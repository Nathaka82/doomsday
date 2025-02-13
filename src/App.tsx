import React from 'react';
import { ProfessionSelector } from './components/ProfessionSelector';
import { DisplacementTimer } from './components/DisplacementTimer';
import { Bot } from 'lucide-react';

function App() {
  const [selectedProfession, setSelectedProfession] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {!selectedProfession ? (
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <Bot className="h-20 w-20 text-red-500 animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Your Job's Doomsday Clock
            </h1>
            <p className="text-2xl text-gray-300">
              Find out when AI will make your career obsolete
            </p>
            <div className="flex justify-center">
              <ProfessionSelector onSelect={setSelectedProfession} />
            </div>
          </div>
        ) : (
          <DisplacementTimer 
            profession={selectedProfession} 
            onBack={() => setSelectedProfession(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;