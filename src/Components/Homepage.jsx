import React from 'react'
import Hero from './Hero'
import sc from '../Assets/sc.png'

const Homepage = ({
    Drag,
    filter,
    authUser,
    userSignOut,
    UnDrag,
    search,
    filterSearch,
    toggleModal,
    modal,
    setModal
}) => {
  return (
    <>
    <Hero 
        userSignOut={userSignOut} 
        authUser={authUser} 
        search={search} 
        filterSearch={filterSearch} 
        toggleModal={toggleModal}
        modal={modal}
        setModal={setModal}
    />
    <div className="top_home">
        <div className="heading">
            <h2>
                Search Image:
            </h2>
        </div>
        <div className="form_part">
            <form action="">
                <input 
                value={search}
                onChange={filterSearch}
                placeholder='Search by tag...' />
                <img src={sc} alt="" />
            </form>
            {
            authUser ? <><p>Hello, you're logged in and can use the Drag & Drop feature.</p></>  : <p>Please sign in to use the drag & drop feature!</p>
            }
        </div>
    </div>
    <div className="main_container">
    {
      authUser ? <><Drag filter={filter} /></>  : <UnDrag filter={filter} />
    }
    </div>
    </>
  )
}

export default Homepage