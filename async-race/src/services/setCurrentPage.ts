export default function setCurrentPage(page: string): void {
  localStorage.setItem('current_page_elsuppo', JSON.stringify(page));
}
