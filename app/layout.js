import Navbar from './components/navbar/navbar';

export default function RootLayout({ children }) {
  return (
    <>
      <header><Navbar /></header>
      <main>{children}</main>
    </>
  )
}
