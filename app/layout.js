import Navbar from './components/navbar/navbar';

export default function RootLayout({ children }) {
  return (
    <div>
      <header><Navbar /></header>
      <main>{children}</main>
    </div>
  )
}
