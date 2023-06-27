import getCurrentProgress from './getCurrentProgress';

export default function saveProgress(newLevel: number) {
  const progress: number[] = getCurrentProgress();

  progress?.push(newLevel);

  localStorage.setItem('prgrs_rs_css', JSON.stringify(progress));
}
