export default function getCurrentProgress(): number[] {
  const progress: number[] = localStorage.getItem('prgrs_rs_css')
    ? JSON.parse(localStorage.getItem('prgrs_rs_css') || '[]')
    : [];

  return progress;
}
