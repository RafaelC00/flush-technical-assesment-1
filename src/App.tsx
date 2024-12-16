import './App.css'
import HeadBanner from './components/HeadBanner'
import BoxesCatalogue from './components/BoxesCatalogue'
import Footer from './components/Footer'
import RecentDrops from './components/RecentDrops'

function App() {
   return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 sm:p-4 w-full">
        <HeadBanner />
      </section>
    </>
  )
}

export default App

/*


        <BoxesCatalogue />
        <RecentDrops />

      <footer className="flex flex-col items-center justify-center gap-4 p-4">
        <Footer />
      </footer>
*/
