import { IShowRecord } from '../../Components/Table/Row/Interface';

export interface IRecorPalye {
  record: string;
  partnership_id: string;
  setShowRecord: (value: IShowRecord)=> void
}