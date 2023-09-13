import Navbar from './components/navbar/navbar';
import '../app/components/about/about.module.css';
import '../app/components/contact/contact.module.css';
import '../app/components/projects/projects.module.css';

export default function RootLayout({ children }) {
  return (
    <>
      <header><Navbar /></header>
      <main>{children}</main>
    </>
  )
}
