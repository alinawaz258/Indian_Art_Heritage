export interface StudentPlaceholder {
  id: string;
  name: string;
  rollNumber: string;
  role: string;
  contribution: string;
}

export interface StoryboardDialogue {
  speaker: string;
  text: string;
}

export interface StoryboardPanel {
  panelNumber: number;
  title: string;
  sanskritTitle: string;
  setting: string;
  narration: string;
  dialogue: StoryboardDialogue[];
  iconographicNotes: string;
  ethicalTheme: string;
  reconstructionImage: string;
  authenticReferenceId: string;
}

export interface MonumentHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

export interface Monument {
  id: string;
  name: string;
  tamilName?: string;
  period: string;
  patron: string;
  architectureType: string;
  summary: string;
  image: string;
  caption: string;
  iconography: string[];
  architecturalFeatures: string[];
  thematicAnalysis: string;
  hotspots?: MonumentHotspot[];
  conservationNotes?: string;
}

export interface RegionalFloorArt {
  region: string;
  name: string;
  vernacularScript: string;
  medium: string;
  ritualContext: string;
  keyMotifs: string;
  geometricLogic: string;
}

export interface ProvenanceItem {
  id: string;
  title: string;
  category: 'ajanta' | 'mahabalipuram' | 'kolam_rangoli' | 'illustration' | 'diagram';
  filename: string;
  creator: string;
  sourceUrl: string;
  license: string;
  intendedPlacement: string;
  dateAccessed: string;
}
