export type ExperienceMode = 'fashion' | 'beauty' | 'hairstyle' | 'complete';
export type GenStage = 'idle' | 'preparing' | 'generating' | 'done';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  color: string;
  style?: string;
  image?: string;
}

export interface BeautyOption {
  id: string;
  name: string;
  colorHex?: string;
}
