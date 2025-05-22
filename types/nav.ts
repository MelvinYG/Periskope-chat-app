import { ReactNode } from 'react';

export type LinkItem = 
  | { id: string; icon: ReactNode; divider?: false }
  | { divider: true; id?: never; icon?: never };