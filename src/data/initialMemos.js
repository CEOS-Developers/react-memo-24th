const getToday = () => {
  const today = new Date()

  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}.${month}.${day}`
}

const initialMemos = [
  {
    id: 1,
    title: '이것은 제목입니다',
    content:
      '이것은 본문입니다 이것은 본문입니다 이것은 본문입니다 이것은 본문입니다',
    category: 'Daily',
    date: getToday(),
    isPinned: false,
  },
  {
    id: 2,
    title: '이것은 제목입니다',
    content:
      '이것은 본문입니다 이것은 본문입니다 이것은 본문입니다 이것은 본문입니다',
    category: 'Work',
    date: getToday(),
    isPinned: false,
  },
  {
    id: 3,
    title: '이것은 제목입니다',
    content:
      '이것은 본문입니다 이것은 본문입니다 이것은 본문입니다 이것은 본문입니다',
    category: 'Others',
    date: getToday(),
    isPinned: false,
  },
  {
    id: 4,
    title: '이것은 제목입니다',
    content:
      '이것은 본문입니다 이것은 본문입니다 이것은 본문입니다 이것은 본문입니다',
    category: 'Daily',
    date: getToday(),
    isPinned: false,
  },
  {
    id: 5,
    title: '이것은 제목입니다',
    content:
      '이것은 본문입니다 이것은 본문입니다 이것은 본문입니다 이것은 본문입니다',
    category: 'Work',
    date: getToday(),
    isPinned: false,
  },
  {
    id: 6,
    title: '이것은 제목입니다',
    content:
      '이것은 본문입니다 이것은 본문입니다 이것은 본문입니다 이것은 본문입니다',
    category: 'Others',
    date: getToday(),
    isPinned: false,
  },
]

export default initialMemos