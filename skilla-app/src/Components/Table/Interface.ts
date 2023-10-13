import {IRowField} from "./Row/Interface";

export interface IActiveSorts {
  duration: boolean
  date: boolean
}

export interface IMainData {
  results: IRowField[]
}