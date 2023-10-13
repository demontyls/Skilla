
export interface IRowField {
  person_avatar: string;
  sourse: string;
  from_site: number;
  time: number;
  date: string
  partner_data: IPartnerData;
  in_out: number;
  record: string;
  partnership_id: string;

}
export interface IShowRecord {
  show: boolean,
  isClose: Boolean,
}
export interface IRow {
  gradeValue: any;
  data: any
}

interface IPartnerData {
  id: string;
  name: string
  phone: string
}
