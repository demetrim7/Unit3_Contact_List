import ContactList from './ContactList'
import ContactRow from './Contactrow';
import './App.css'
import { useState } from 'react'
import SelectedContact from './SelectedContact';


function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);

  return ( 
    <>
      {selectedContactId ? (
        <div><SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/></div>
      ) : (
      <ContactList  setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}

export default App
