import React,{ useState } from 'react';
import './App.css';

const Form = (props) => {

  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[desc,setDesc]=useState('');
  const[password,setPassword]=useState('');
  const[emailerror,setEmailerror]=useState('');
  const[userError,setUsererror]=useState('');
  const[passerr,setPasserr]=useState('');
  const[descerr,setDescerr]=useState('');

  const handleChange=(e)=>{
        setUsername(e.target.value);
        if(username.length>4){
            setUsererror('');
        }else{
            setUsererror('not valid');
        }
  }

  const validata=(e)=>{
    setEmail(e.target.value);
    if( email.includes('@')  &&  email.includes('.') ){
        setEmailerror('');
   
    }else{
      setEmailerror('Please enter valid email address');
    }
  }

  const checkpass=(e)=>{
        setPassword(e.target.value);
      if(password.length<6){
        setPasserr('minimum 8 character')
      }else{
        setPasserr('')
      } 
  }

   const enterdesc=(e)=>{
        setDesc(e.target.value);
      if(desc.length<8){
        setDescerr('enter valid Description')
      }else{
        setDescerr('')
        console.log('good desc')
      } 
  }


  const handleClick=(e)=>{
    if(username.length>4 && password.length>8 && email.includes('@')){
      alert('submittted');
      console.log(username);
      console.log(password);
      console.log(email);  
    }else{
      alert('something wrong with the entered data please check it')
    }

    

  }  


  return (
    <div className="formmain">
        <div className="form">
        <h1>lets set up your account</h1>
        <h5>Already have an account ? <a href="#">Sign In</a></h5>
        <input type="text" placeholder="Your name"  value={username} onChange={handleChange}/>
        <p className="err">{userError}</p>
        <input type="text" placeholder="Email address"  value={email} onChange={validata}/>
        <p className="err">{emailerror}</p>
        <input type="text" placeholder="i would describe my user type as"  value={desc} onChange={enterdesc}/>
        <p className="err">{descerr}</p>
        <input type="password" placeholder="password"  value={password} onChange={checkpass}/>
        <p className="err">{passerr}</p>
        <button onClick={handleClick}>Next</button>
        <p className="privacy">By clicking the "Next" button, you agree to creating a free account, and to <a href="#">terms of services  </a>and    <a href="#">Privacy Policy</a>. </p> 
        </div>
        <div className="dummy" >
            <h2>Dummy Heading</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quas debitis hic quo libero autem tenetur, velit blanditiis quibusdam minima molestias rem ea rerum.</p>
        </div>
    </div>
  )
}

export default Form


;