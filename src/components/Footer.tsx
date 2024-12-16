import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faTiktok, faYoutube, faInstagram, faReddit, faCcVisa, faBitcoin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="bg-black text-gray-200 py-8 w-full text-left">
      <div className="container mx-auto flex flex-wrap justify-between flex-row">

        <div className='flex flex-col sm:flex-row items-center justify-between w-full m-4'>
          <div className="p-4 w-full">
            <div className="mb-4">
              <h3 className="text-lg font-bold">LOGO</h3>
              <p className="text-gray-400">Here goes a short description about the company</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-discord"><FontAwesomeIcon icon={faDiscord} /></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-tiktok"><FontAwesomeIcon icon={faTiktok} /></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"><FontAwesomeIcon icon={faYoutube} /></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-reddit"><FontAwesomeIcon icon={faReddit} /></i>
              </a>
            </div>
          </div>

          <div className='flex flex-row items-center justify-between w-full m-4'>
            <div className="m-4">
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Battles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Rewards</a></li>
              </ul>
            </div>
            <div className="m-4">
              <h3 className="text-lg font-bold mb-4">Other</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="m-4">
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between align-middle mt-8 flex-col-reverse m-4 sm:flex-row">

          <div className="text-gray-400 text-center">
            <p>&copy; Copyright {new Date().getFullYear()} </p>
          </div>

          <div className="flex justify-center flex-col sm:flex-row m-auto sm:m-0">
            <p className='m-1 text-center'>Payment options</p>
            <div className='justify-between'>
              <i className="fab fa-cc-visa text-2xl text-gray-400 hover:text-white m-1"><FontAwesomeIcon icon={faCcVisa} /></i>
              <i className="fab fa-bitcoin text-2xl text-gray-400 hover:text-white m-1"><FontAwesomeIcon icon={faBitcoin} /></i>
              <i className="fab fa-cc-visa text-2xl text-gray-400 hover:text-white m-1"><FontAwesomeIcon icon={faCcVisa} /></i>
              <i className="fab fa-bitcoin text-2xl text-gray-400 hover:text-white m-1"><FontAwesomeIcon icon={faBitcoin} /></i>
              <i className="fab fa-cc-visa text-2xl text-gray-400 hover:text-white m-1"><FontAwesomeIcon icon={faCcVisa} /></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}