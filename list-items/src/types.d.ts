export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export interface ItemTypes {
  id: ItemId;
  timestamp?: number,
  text: string
}
