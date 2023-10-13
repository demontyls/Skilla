export const getIcon = (name: string) => {
  switch(true) {
    case name === 'Итоги':
      return  'fa-chart-timeline-variant'
    case name === 'Заказы':
      return 'fa-orders'
    case name === 'Сообщения':
      return 'fa-mail-outline'
    case name === 'Звонки':
      return 'fa-Phone'
    case name === 'Контрагенты':
      return 'fa-people'
    case name === 'Документы':
      return 'fa-documents'
    case name === 'Исполнители':
      return 'fa-user'
    case name === 'Отчеты':
      return 'fa-briefcase-outline'
    case name === 'База знаний':
      return 'fa-local-library'
    case name === 'Настройки':
      return 'fa-settings'
    default:
      return  'fa-search'
  }
}