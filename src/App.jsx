import './App.css'
import SideBar from './components/sideBar/SideBar'
import Contacts from './components/contacts/Contacts'

function App() {
  return (
    <>
      <main className='contactMainInfo'>
        <SideBar/>
        <Contacts/>
        <div className="chat">a</div>
      </main>
    </>
  )
}

export default App
