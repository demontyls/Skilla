export const getTimeFromDateString = (dateString:string) => {
  const dateTime = new Date(dateString);
  return dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

export const getCorrectFormat = (seconds: number) : string | null => {
  if(Boolean(seconds)) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  } else {
    return null
  }
}

export const getFormatPhoneNumber = (phoneNumber:string) : string | null => {
  if (Number(phoneNumber)) {
    const countryCode = '+7';
    const areaCode = phoneNumber.substring(1, 4);
    const firstPart = phoneNumber.substring(4, 7);
    const secondPart = phoneNumber.substring(7, 9);
    const thirdPart = phoneNumber.substring(9, 11);
    return `${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
  } else {
    return phoneNumber
  }
}

