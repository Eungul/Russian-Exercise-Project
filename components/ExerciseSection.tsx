
import React from 'react';
import { Exercise, AudioState } from '../types';
import SentenceRow from './SentenceRow';

interface ExerciseSectionProps {
  exercise: Exercise;
  playingId: string | null;
  onPlay: (sentenceId: string, text: string) => void;
  audioState: AudioState;
}

const ExerciseSection: React.FC<ExerciseSectionProps> = ({ exercise, playingId, onPlay, audioState }) => {
  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-indigo-500 pl-4">
          {exercise.title}
        </h2>
        <p className="mt-1 text-sm text-gray-500 pl-5 italic">
          {exercise.description}
        </p>
      </div>
      
      <div className="space-y-4">
        {exercise.sentences.map((sentence) => (
          <SentenceRow
            key={sentence.id}
            sentence={sentence}
            isCurrentlyPlaying={playingId === sentence.id}
            audioState={playingId === sentence.id ? audioState : AudioState.IDLE}
            onPlay={onPlay}
          />
        ))}
      </div>
    </section>
  );
};

export default ExerciseSection;
