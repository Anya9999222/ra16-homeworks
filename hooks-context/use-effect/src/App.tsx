import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import List from './components/List/List'
import ListItem from './components/ListItem/ListItem';
import ButtonOpen from './components/ButtonOpen/ButtonOpen';
import Details from './components/Details/Details';

function App() {
  const [notes, setNotes] = useState<any[]>([]);
  const [listOpen, setListOpen] = useState(false);
  const [infoOpen, setInfo] = useState();
  const [openedPer, setOpenedPer] = useState();
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setListOpen(true);

  const showInfo = (info) => {
    setInfo(info.id);
  }

useEffect(() =>{
  if(infoOpen){
    setLoading(true);
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${infoOpen}.json`)
    .then((res) => res.json())
    .then((result) => {
      setOpenedPer(result)
      setLoading(false)
    })
  }
 
}, [infoOpen])
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then((res) => res.json())
    .then((result) => setNotes(result))
  }, []);
  
  return (
    <div className='container'>
      <List >
        {notes.map(i => {
                if(i.id > 3 && !listOpen){
                    return
                } else {
                    return <ListItem key={i.id} item={i} onClick={showInfo} active={infoOpen === i.id ? true :  false}/>
                } 
            })}
          {listOpen ? '' : <ButtonOpen onClick={handleOpen}/>}
      </List>
      {loading && <div className='loader'></div>}
      {!loading && openedPer ? <Details info={openedPer}/> : ''}
    </div>
  )
}

export default App
