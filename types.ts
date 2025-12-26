
export interface Sentence {
  id: string;
  russian: string;
  phonetic: string;
  meaning: string;
  grammarNote: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  sentences: Sentence[];
}

export enum AudioState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  ERROR = 'ERROR'
}
