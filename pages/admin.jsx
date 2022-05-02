import {useEffect, useState} from 'react'
import app from "../firebase/firebase.js"
import { collection, getFirestore, setDoc, doc, ref } from "firebase/firestore";

function Admin() {
  const [pass, setPass] = useState("")
  const [login, setLogin] = useState(false)
  const password = "umasenhaqualquer"
  const [formData, setFormData] = useState({
        name:'',
        description:'',
        category: '',
        image:"",
    })
  const [photosExtra, setPhotosExtras] = useState("")
  const [photoList, setPhotosList] = useState([])
  const db = getFirestore(app)
  const newProject = doc(collection(db, "projects"))


  const handleChange=(e)=>{
       setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
  const plus=()=>{
      setPhotosList([
              ...photoList,
              photosExtra
          ])
      alert("Foto Agregada")
      setPhotosExtras("")

    }

  const send =()=>{
    //creacion de una orden en firebase con id
    let orden = {}
    orden = formData
    orden.photos = photosExtra
    console.log(orden)
    setDoc(newProject, orden);
    alert("Tu id de compra es:  en 7 dias entraremos en contacto")
    console.log()
    alert("Tu id de compra es:  en 7 dias entraremos en contacto")
    newProject.push(orden)
    alert("Tu id de compra es:  en 7 dias entraremos en contacto")
  }

  function isAdmin (){
    if (pass === password) {
      setLogin(true)
    }else{
      return alert("Senha Errada")
    }
  }


  return (
    <div className="bg-bodyColor flex flex-col justify-center w-full">
      {
        login ?
        <div className="min-h-screen flex flex-col justify-center w-full ">
						<p>Novo projeto</p>
						<form onSubmit={send} onChange={handleChange} className="flex flex-col sm:flex-row flex-wrap">
							<input type='text' name='name' placeholder='Nome' value={formData.name} className="m-1 border-2 border-headerColor sm:w-1/3" required/>
							<input type='text' name='image' placeholder='imagem adress' value={formData.image} className="m-1 border-2 border-headerColor sm:w-1/2" required/>
              <div className="m-1 border-2 border-headerColor flex flex-col w-1/5">
                <p className="w-full text-center border-b border-headerColor">Categoria</p>
                <div className="flex flex-row flex-wrap mt-1.5 pb-1.5">
                  <input type="radio" name="category" value="arq" className="w-1/5" checked></input> <label className="w-3/4">ARQUITETONICO</label>
                  <input type="radio" name="category" value="urb" className="w-1/5" ></input> <label className="w-3/4">URBANISMO</label>
                  <input type="radio" name="category" value="pai" className="w-1/5" ></input> <label className="w-3/4">PAISAGISMO</label>
                </div>
              </div>
              <input type='text' name='description'placeholder='descricao' value={formData.description} className="m-1 border-2 border-headerColor sm:w-3/4" required/>
							<input type="submit" value="Confirmar" className="m-1 border-2 border-headerColor"/>
						</form>
            <div className="m-10 flex flex-col">
              <label onClick={plus} className="border-2 border-textColor bg-headerColor text-center" >Adicionar foto na descricao</label>
              <input type="text" value={photosExtra} onChange={(e) => setPhotosExtras(e.target.value)} placeholder='imagem adress'/>
            </div>
					</div>



        :
        <form onSubmit={isAdmin} className="flex flex-row justify-evenly w-full p-10">
          <label className="w-1/3 h-full ">
            Senha de Administrador
          </label>
          <input className="w-1/2 border-2" type="password" value={pass} onChange={(e) => setPass(e.target.value)} ></input>
        </form>
      }
    </div>
  )
}

export default Admin
