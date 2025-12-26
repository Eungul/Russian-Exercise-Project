
import React from 'react';
import { Sentence, AudioState } from '../types';

interface SentenceRowProps {
  sentence: Sentence;
  isCurrentlyPlaying: boolean;
  audioState: AudioState;
  onPlay: (sentenceId: string, text: string) => void;
}

const SentenceRow: React.FC<SentenceRowProps> = ({ sentence, isCurrentlyPlaying, audioState, onPlay }) => {
  const isLoading = isCurrentlyPlaying && audioState === AudioState.LOADING;
  const isPlaying = isCurrentlyPlaying && audioState === AudioState.PLAYING;
  const isError = isCurrentlyPlaying && audioState === AudioState.ERROR;

  return (
    <div className={`group flex flex-col p-6 rounded-2xl transition-all duration-300 border ${
      isCurrentlyPlaying ? 'bg-indigo-50 border-indigo-300 shadow-lg scale-[1.01]' : 'bg-white border-gray-100 hover:border-indigo-100 hover:shadow-md'
    }`}>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          {/* Russian Text */}
          <div className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            {sentence.russian}
          </div>
          
          {/* Meaning / Translation */}
          <div className="text-lg text-indigo-700 font-medium mb-2">
            {sentence.meaning}
          </div>

          {/* Phonetic Guide */}
          <div className="text-sm font-mono-guide text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md inline-block mb-4 border border-slate-100">
            {sentence.phonetic}
          </div>
        </div>

        {/* Play Button */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => onPlay(sentence.id, sentence.russian)}
            disabled={isLoading || isPlaying}
            className={`relative flex items-center justify-center w-14 h-14 rounded-full transition-all active:scale-90 ${
              isLoading || isPlaying 
                ? 'bg-indigo-600 text-white shadow-xl ring-4 ring-indigo-100' 
                : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:scale-110'
            }`}
            aria-label="Play audio"
          >
            {isLoading ? (
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : isPlaying ? (
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          {isError && (
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider animate-pulse">
              Error
            </span>
          )}
        </div>
      </div>

      {/* Grammar Note Footer */}
      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </span>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            <span className="font-semibold text-slate-700 not-italic mr-1">Grammar Insight:</span> 
            {sentence.grammarNote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SentenceRow;
