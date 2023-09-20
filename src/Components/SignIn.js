import React, { useState } from 'react'
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = ({toggleModal, modal, setModal}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((user)=>{
            console.log(user)
            navigate('/');
        }).catch((error)=>{
            console.log(error)
            alert(error)
        })
        console.log(`'This is your' ${email} and ${password}`)
    }

  return (
    <div className="cont_before">
    <div className='form_container'>
        <form action="">
            <h1>Login Form</h1>
            <span className="f_rl">
                <label htmlFor="">Email:</label>
                <input type="email"
            placeholder='Your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
             />
            </span>
            <span className="f_rl">
                <label htmlFor="">Password:</label>
                <input type="password" 
                placeholder='Enter password...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </span>
              <button onClick={login} type="submit">Login</button>
            <div id="notice">
                <h5>Login with below credentials:</h5>
                <p><span>Username: </span>user@example.com</p>
                <p><span>Password: </span>1password</p>
            </div>
            {/* <button onClick={toggleModal}>close</button> */}
        </form>
    </div>
    </div>
  )
}

export default SignIn