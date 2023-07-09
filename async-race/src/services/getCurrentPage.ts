export default function getCurrentPage(): string {
  const currentPage: string = localStorage.getItem('current_page_elsuppo')
    ? JSON.parse(localStorage.getItem('current_page_elsuppo') as string)
    : 'garage';

  return currentPage;
}
