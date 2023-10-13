export function getTimeCodeFromNum(num: any) {
  let seconds: any = parseInt(num);
  let minutes: any = parseInt(`${seconds / 60}`);
  seconds -= minutes * 60;
  const hours = parseInt(`${minutes / 60}`);
  minutes -= hours * 60;

  if (hours === 0) {
    return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
  }
  // return `${String(hours).padStart(2, '0')}:${minutes}:${String(seconds % 60).padStart(2, '0')}`;
}