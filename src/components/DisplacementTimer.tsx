import React from 'react';
import { professions } from '../data/professions';
import { Clock, Percent, Brain, Lightbulb, ArrowLeft, Skull, Rocket } from 'lucide-react';

interface DisplacementTimerProps {
  profession: string;
  onBack: () => void;
}

export function DisplacementTimer({ profession, onBack }: DisplacementTimerProps) {
  const professionData = professions[profession];
  const targetDate = new Date(professionData.displacementDate);
  const [timeLeft, setTimeLeft] = React.useState<number>(0);

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      setTimeLeft(Math.max(0, difference));
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [profession, targetDate]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const years = Math.floor(seconds / 31536000);
    const days = Math.floor((seconds % 31536000) / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${years}y ${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Search Again</span>
      </button>

      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white mb-2">
          {professionData.title}
        </h2>
        <div className="text-xl text-red-400 font-semibold">
          {professionData.memePhrase}
        </div>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-xl shadow-2xl border-2 border-red-500">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Skull className="h-8 w-8 text-red-500 animate-pulse" />
          <h3 className="text-2xl font-bold">COUNTDOWN TO OBSOLESCENCE</h3>
          <Skull className="h-8 w-8 text-red-500 animate-pulse" />
        </div>
        <div className="text-5xl font-mono text-center text-red-500 font-bold animate-pulse">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-red-500/20">
          <div className="flex items-center space-x-4 mb-4">
            <Percent className="h-8 w-8 text-red-400" />
            <h3 className="text-xl font-semibold text-white">Displacement Likelihood</h3>
          </div>
          <div className="text-4xl font-bold text-red-400 mb-2 animate-pulse">
            {(professionData.likelihood * 100).toFixed(0)}%
          </div>
          <p className="text-gray-300">
            Probability of significant role changes
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-purple-500/20">
          <div className="flex items-center space-x-4 mb-4">
            <Brain className="h-8 w-8 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Skills to Survive</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {professionData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-blue-500/20">
        <div className="flex items-center space-x-4 mb-4">
          <Rocket className="h-8 w-8 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">Your Future Careers</h3>
        </div>
        <div className="space-y-4">
          {professionData.futureCareers.map((career, index) => (
            <div
              key={index}
              className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/20 hover:transform hover:scale-105 transition-transform"
            >
              <p className="text-lg font-semibold text-blue-200">{career}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-yellow-500/20">
        <div className="flex items-center space-x-4 mb-4">
          <Lightbulb className="h-8 w-8 text-yellow-400" />
          <h3 className="text-xl font-semibold text-white">AI Impact Analysis</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
          {professionData.aiImpact}
        </p>
      </div>
    </div>
  );
}