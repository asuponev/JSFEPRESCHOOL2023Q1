export const getData = async () => {
  let res = await fetch('./assets/data/pets.json');
  return await res.json();
}