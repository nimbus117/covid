export const get = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error({ url, error });
    return null;
  }
};
