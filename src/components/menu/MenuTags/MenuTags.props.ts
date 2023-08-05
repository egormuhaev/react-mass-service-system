export type Theme = 'dark' | 'light';

interface Tags {
  id: string;
  tag: string;
}

export interface MenuTagsProps {
  tags: Tags[];
  newTags: string[];
  theme: Theme;
  setNewTags: (tags: string[]) => void;
  saveTagsQuery: (tags: string[]) => void;
  deleteQuery: (tagId: string) => void;
}
