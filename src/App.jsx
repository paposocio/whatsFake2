import './App.css'
import SideBar from './components/sideBar/SideBar'
import Contacts from './components/contacts/Contacts'
import Chat from './components/chat/Chat'
function App() {
  return (
    <>
      <main className='contactMainInfo'>
        <SideBar />
        <Contacts />
        <Chat />
      </main>
    </>
  )
}

export default App
