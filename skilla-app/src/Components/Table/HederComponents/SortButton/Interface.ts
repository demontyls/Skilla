import { IActiveSorts } from '../../Interface';

export interface ISortButton {
  fieldSort: string
  setData: (value: any) => void;
  setActiveSorts: (value: IActiveSorts)=> void;
  activeSorts: IActiveSorts;
  name: string;
}