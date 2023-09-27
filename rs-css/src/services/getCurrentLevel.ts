export default function getCurrentLevel(): number {
  const currentLevelId: string = localStorage.getItem('cur_lvl_rs_css')
    ? (localStorage.getItem('cur_lvl_rs_css') as string)
    : '1';

  return Number(currentLevelId);
}
