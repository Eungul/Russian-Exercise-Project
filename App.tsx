
import React, { useState, useCallback } from 'react';
import { EXERCISES } from './data';
import { AudioState } from './types';
import { playRussianTTS } from './geminiService';
import ExerciseSection from './components/ExerciseSection';

const App: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [audioState, setAudioState] = useState<AudioState>(AudioState.IDLE);

  const handlePlayAudio = useCallback(async (id: string, text: string) => {
    // Prevent overlapping playback
    if (audioState === AudioState.LOADING || audioState === AudioState.PLAYING) return;

    setPlayingId(id);
    setAudioState(AudioState.LOADING);

    try {
      await playRussianTTS(text);
      setAudioState(AudioState.PLAYING);
      // Since playRussianTTS returns when the audio ends, we can reset state here
      setAudioState(AudioState.IDLE);
      setPlayingId(null);
    } catch (error) {
      console.error(error);
      setAudioState(AudioState.ERROR);
      setTimeout(() => {
        setAudioState(AudioState.IDLE);
        setPlayingId(null);
      }, 3000);
    }
  }, [audioState]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-indigo-200 shadow-lg">
              RU
            </div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Phrase Master</h1>
          </div>
          <div className="hidden sm:flex items-center text-xs font-medium text-gray-400 gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Russian Native Pronunciation Powered by Gemini
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Master Your Russian Sentences</h2>
          <p className="text-indigo-100 text-lg">
            Complete Russian phrases with native pronunciation guides. 
            Click the play button to hear how each sentence sounds in native Russian.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {EXERCISES.map((exercise) => (
          <ExerciseSection
            key={exercise.id}
            exercise={exercise}
            playingId={playingId}
            onPlay={handlePlayAudio}
            audioState={audioState}
          />
        ))}

        {/* Pronunciation Tip */}
        <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Pronunciation Tip</h3>
              <p className="text-amber-700 leading-relaxed text-sm">
                In Russian, the letter <strong>"о"</strong> is pronounced like "o" when stressed, 
                but more like a short <strong>"a"</strong> when unstressed (this is why 
                <em> хорошо</em> sounds like "ha-ra-shó"). This is a standard rule of Russian 
                phonetics that makes your speech sound more authentic!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <div className="max-w-4xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Russian Phrase Master. All phrases curated for language learners.</p>
          <div className="mt-4 flex justify-center gap-6">
            <span className="hover:text-indigo-500 cursor-default transition-colors">Cyrillic Mastery</span>
            <span className="hover:text-indigo-500 cursor-default transition-colors">Native Audio</span>
            <span className="hover:text-indigo-500 cursor-default transition-colors">Phonetic Guides</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
