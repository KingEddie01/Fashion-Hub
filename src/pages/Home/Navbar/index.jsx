import logo from '../../../assets/images/mimi.png'
import style from './index.module.css'


export const Navbar =() => {
  return (
    <div className={style.navBar}>
      <div className={style.pic}>
        <img src={logo} alt='logo' className={style.img}/>
       
      </div>

      <div className={style.list}>
        <p>Home</p>
        <p>About us</p>
        <p>Project</p>
        <p>Services</p>
        <p className={style.contact}>Contact us</p>
      </div>

    </div>
  )
}
