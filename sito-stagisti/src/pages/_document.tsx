import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const pages = ["windows", "setup", "errori", "hardware", "curiosita", "altro"]

  const [showSidebar, setShowSidebar] = useState(false);

  //GESTIONE HAMBURGER BUTTON
  const showAndMove = () => {
    setShowSidebar(!showSidebar)
    const button = document.getElementById("hamburgerButton")
    button?.classList.toggle("translate-x-36")
  }

  const closeSidebar = () => {
    showSidebar && showAndMove() 
  }

  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex items-start min-h-screen w-full">
          {/*Bottone hamburger*/}
          <button
            onClick={() => showAndMove()}
            className="sm:hidden p-4 bg-gray-800 text-white rounded-lg fixed z-10 duration-200"
            id="hamburgerButton"
          >
            <FaBars size={24} color={"white"} />
          </button>
          <div id="sidebar" className={`w-64 flex-col bg-gray-800 text-white font-bold font-sans sticky top-0 min-h-screen flex-shrink ${showSidebar ? "fixed h-full" : "sm:flex hidden"}`}>
            <div className="flex items-center justify-center h-14 border-b border-gray-700">
              <Link to={url} className="px-4 py-2 hover:bg-gray-700 text-3xl inline-flex items-center">
                <img src={S} className="max-h-9 invert" /><div className='-tracking-tight'>tagisti</div>
              </Link>
            </div>
            <nav className="flex-grow">
              <ul className="flex flex-col py-4">
                {pages.map(page => (
                  <SidebarLink name={page} closeSidebar={closeSidebar} />
                ))}

              </ul>
            </nav>
          </div>
          <main className="flex flex-col flex-grow bg-gray-100 justify-center">
            <ScrollToTop smooth top={500} className='sm:px-[6px] sm:block hidden' />
            <NextScript />
          </main>
        </div>
      </body>
    </Html>
  )
}
