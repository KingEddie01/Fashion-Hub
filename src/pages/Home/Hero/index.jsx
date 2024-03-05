import style from './index.module.css'
import imaging from '../../../assets/images/fashion.jpg'


function HeroSection(){
  return(
    <div className={style.mainHero}>
      <div className={style.hero}>
        <img src={imaging} alt='' className='girl'/>
        <h2>
          Lifestyle is fashion<br></br>Fashion is comfort<br></br> Comfort is key...
        </h2>
    </div>

    </div>
    
    
  )
}
export default HeroSection