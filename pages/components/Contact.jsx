import React, {useState, useEffect} from 'react'
import emailLogo from ".//../../public/email.jpg"
import linkedin from ".//../../public/linkedin.jpg"
import whats from ".//../../public/whats.jpg"
import Image from "next/image"
import Swal from 'sweetalert2'

function Contact() {
  const [noteData, setNoteData] = useState({
        name:"",
        email:"",
        body: "",
  })
  const handleChange=(e)=>{
     setNoteData({
          ...noteData,
          [e.target.name]: e.target.value
      })
  }

  const send = async (e)=>{
    e.preventDefault(e)
    Swal.fire({
      title: noteData.name + ', confirme que a messagem está correta.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sim',
      denyButtonText: `Quero alterar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://165.227.181.97:8000/api/notes/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteData)
        })
        setNoteData({
          name:noteData.name,
          email:noteData.email,
          body: "",
         })
        Swal.fire('enviado', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Seu contato é muito importante. Faca a alteracao necessária e envie.', '', 'info')
      }
    })


  }
  return (
    <section className="flex flex-col h-screen h-full m-1 justify-center">
      <form onSubmit={send} onChange={handleChange} className="flex flex-col sm:flex-row flex-wrap m-10 w-5/6 h-5/6 justify-items-start">
        <label for="name" className="w-2/3 h-5">Nome:</label>
        <input id="name" type='text' name='name' placeholder='Nome' value={noteData.name} className="m-1 border-2 border-headerColor w-full h-5" required/>
        <label for="email" className="w-2/3 h-5">E-mail:</label>
        <input id="email" type='email' name='email' placeholder='email@domain.com' value={noteData.email} className="m-1 border-2 border-headerColor sm:w-full h-5" required/>
        <textarea name='body' placeholder='Messagem' value={noteData.body} className="m-1 border-2 border-headerColor h-2/3 w-full" required></textarea>
        <input type="submit" value="Confirmar" className="m-1 w-full border-2 border-headerColor"/>
      </form>
      <div className="w-full h-1/6 flex flex-row justify-around">
        <a href="mailto: marialuisascharlau@gmail.com">
          <Image
            src={emailLogo}
            width={150}
            height={150}
          />
        </a>

        <a href="https://www.linkedin.com/in/maria-luisa-scharlau-da-silva/">
          <Image
            src={linkedin}
            width={150}
            height={150}
          />
        </a>
        <a href="https://wa.me/351915190069">
          <Image
            src={whats}
            width={150}
            height={150}
          />
        </a>
      </div>
    </section>
  )
}

export default Contact
