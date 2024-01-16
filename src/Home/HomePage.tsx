import React , {useEffect} from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Body from './component/Body'
import './Home.scss'
import { UserPlayer } from './interface/interfacer'
const HomePage:React.FC = () => {
  
  const [listPlayer,setListPlayer] = React.useState<UserPlayer[]>([])
  useEffect(()=>{
    const itemPlayer = JSON.parse(localStorage.getItem('listPlayer') || '[]')
    if(itemPlayer.length == 0){
      alert('Bạn chưa có người chơi nào')
    }
  },[listPlayer])
  return (

    <div className='homePage'>
     
            <div className="childHome">
                <Header listPlayer={listPlayer}/>
                <Body listPlayer={listPlayer} setListPlayer={setListPlayer}/>
                <Footer setListPlayer={setListPlayer} listPlayer={listPlayer}/>
            </div>
    </div>
  )
}

export default HomePage