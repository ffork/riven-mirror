/** 同伴信息 */
export interface CompanionData {
  id: string;
  className?: string;
  tags: string[];
  health: number;
  shield: number;
  armor: number;
  polarities?: string;
}
