export const delay = (timeMs: number) => new Promise((res) => setTimeout(res, timeMs));

export const decorateNumberOfListeners = (data: string) => {
  if (!data) return "";
  if (data.length > 6) return `${data.slice(0, -6)} млн.`;
  if (data.length > 3) return `${data.slice(0, -3)} тис.`;
  return data;
};

export const getTime = (duration: string) => {
  const mls = 60000;
  return `${Math.round(+duration / mls)}:${(+duration % mls).toString().slice(0, 2)}`;
};
