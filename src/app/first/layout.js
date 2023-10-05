export const metadata = {
  title: '첫번째페이지',
  description: 'ㅁㄴㅇㄹ',
}

export default function FirstLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
