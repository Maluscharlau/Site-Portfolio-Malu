import {useRouter} from "next/router"
import {getFetch} from "../../firebase/projectList.js"
import {useEffect, useState} from 'react'
import Navbar from "../components/Navbar"
import Image from "next/image"


function Projeto() {

  const router = useRouter()
  const detailName = router.query.name
  const [projectList, setProjectList] = useState([])
  const [detail, setDetail] = useState([])
  const [ready, setReady] = useState(false)



  function thisIsReady(){
    setReady(true)
  }

	useEffect(()=>{
		getFetch.then((datos)=>setProjectList(datos))
	})
  useEffect(() => {
		setDetail(projectList.find((prod) => prod.name === detailName))
		setTimeout(thisIsReady,3000)
	},[projectList])

  return (
    <div className="bg-bodyColor">
      <Navbar/>
      {ready===(true)?
        <div className="w-full flex flex-col min-h-screen justify-around p-28">
          <h2 className="text-center w-full text-5xl">
            {detail.name}
          </h2>
          <div className="w-full text-center">
            <p className="text-2xl">Detalhes:</p>
            <p className="w-full text-center text-base">{detail.description}</p>
          </div>
          <Image
            src={detail.image} alt={detail.name} className="group-hover:scale-125 ease-in duration-200 h-auto w-1/3 rounded-lg" width={600}
            height={450}
            quality="90"
            loading="eager"
            layout="fixed"

          />
        </div>
        :
        <div className='flex justify-evenly h-screen'>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce200'></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full animate-bounce400' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce600' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce800'></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full animate-bounce400' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce600' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full animate-bounce400' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce200'></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce' ></div>
        </div>

      }


    </div>
  )
}

export default Projeto
