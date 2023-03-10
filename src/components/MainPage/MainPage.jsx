import { React, useRef, useState} from 'react'
import logo from '../../assets/image/apple.png'
import './MainPage.css'
import person from '../../assets/image/person-fill.svg'
import eye from '../../assets/image/eye-fill.svg'
import lock from '../../assets/image/lock-fill.svg'
import eyeSlash from '../../assets/image/eye-slash-fill.svg'

const MainPage = () => {

  const [showPass, setShowPass] = useState(false)

  const elPersonInput = useRef(null)
  const elPassInput = useRef(null)

  const togglePassShow = () => {
    setShowPass(!showPass);
  }

  const replaceWindows = () => {

    const personVal = elPersonInput.value
    const passVal = elPassInput.value

      if (personVal == personVal && passVal == passVal) {
        window.location.replace('https://render-user-app.vercel.app/')
        console.log('salom');
      }else {
        alert("Xatolik!!! Qayta urunib ko'ring!")
      }

  }

  return (
    <>
      <div className='conteiner content pt-3 mt-4 pb-5'>
        <img src={logo} alt="rasm" width={250} className="mb-5 d-block m-auto" />
        <div className='contentcha1 '>
            <img src={person} alt="person" width={30} />
            <input type="text" required ref={elPersonInput}/>
        </div> <br />
        <div className='contentcha '>
            <img src={lock} alt="lock" />
            <input type={showPass ? "text" : "password"} required ref={elPassInput} />
            <button id='btn' onClick={togglePassShow}>
              {showPass ? <img src={eye} alt="eye" width={30} /> : <img src={eyeSlash} alt="eye" width={30} />}
            </button>
        </div>
        <button onClick={() => replaceWindows()} className='btn btn-primary container-fluid w-25 m-auto d-block mt-5'>Submit</button>
      </div>
    </>
  )
}

export default MainPage
