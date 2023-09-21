import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Drag from './Components/Drag';
import { useState, useEffect } from 'react';
import { auth } from '../src/Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import UnDrag from './Components/UnDrag';
// Images
import one from './Assets/img1.webp'
import two from './Assets/img2.webp'
import three from './Assets/img3.webp'
import four from './Assets/img4.webp'
import five from './Assets/img5.webp'
import six from './Assets/img6.webp'
import seven from './Assets/img7.webp'
import eight from './Assets/img8.webp'
import nine from './Assets/img9.webp'
import ten from './Assets/img10.webp'
import Homepage from './Components/Homepage';

function App() {

  const items = [
    {
      id: 1,
      url: one,
      tag: 'Image One'
    },
    {
      id: 2,
      url: two,
      tag: 'Image Two'
    },
    {
      id: 3,
      url: three,
      tag: 'Image Three'
    },
    {
      id: 4,
      url: four,
      tag: 'Image Four'
    },
    {
      id: 5,
      url: five,
      tag: 'Image Five'
    },
    {
      id: 6,
      url: six,
      tag: 'Image Six'
    },
    {
      id: 7,
      url: seven,
      tag: 'Image Seven'
    },
    {
      id: 8,
      url: eight,
      tag: 'Image Eight'
    },
    {
      id: 9,
      url: nine,
      tag: 'Image Nine'
    },
    {
      id: 10,
      url: ten,
      tag: 'Image Ten'
    }
  ];

  // States

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(items);
  const [modal, setModal] = useState(true)
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Search Logic

  const filterSearch = (e)=>{
      e.preventDefault();
      const newFilter = e.target.value;
      setSearch(newFilter)

      const filteredItems = items.filter((item)=>(
        item.tag.toLowerCase().includes(newFilter.toLowerCase())
      ))
      console.log(filteredItems)
      setFilter(filteredItems)
  };
  
  useEffect(()=>{
    const check = onAuthStateChanged(auth, (user) =>{
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
    return ()=>{
      check();
      setLoading(false)
    }
  }, [])

  // Sign Out

  const userSignOut = ()=>{
    signOut(auth).then(()=>{
      console.log('Signed Out!')
    }).catch((error) => {
      console.log(error)
    })
  }

  // Popup Modal

  const toggleModal = () => {
    setModal(!modal)
    console.log('Log Page')
  };

  return (
    <>
    {
      loading ? 
        <div className="loading">
          <h5>Relax, just a sec &#128526;</h5>
          <div id="loading"></div>
        </div> : 
    <Routes>
        <Route path='/' element={<Homepage
            userSignOut={userSignOut} 
            authUser={authUser} 
            search={search} 
            filter={filter} 
            toggleModal={toggleModal}
            modal={modal}
            setModal={setModal}
            filterSearch={filterSearch}
            UnDrag={UnDrag}
            Drag={Drag} />} />
        <Route path='auth' element={<SignIn />} />
    </Routes>
        }
    {/* {
      !authUser ? <SignIn /> : ''
    } */}
    {/* {
      modal && (<SignIn     modal={modal}
        setModal={setModal} />)
    } */}
    {/* <SignIn toggleModal={toggleModal} /> */}
    </>
  );
}

export default App;
