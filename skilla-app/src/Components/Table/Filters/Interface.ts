import {IActiveSorts} from "../Interface";

export interface IFilters {
  setActiveSorts: (value: IActiveSorts)=> void;
  activeSorts: IActiveSorts;
  activeFilter: boolean;
  filter: (field?: string, value?: string | number) => void;
}