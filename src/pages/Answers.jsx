import { useState } from 'react'
import { useFirebase } from '../hooks/useFirebase';

const Answers = () => {
    const [email, setEmail] = useState();

    const {data, loading, getData, error} = useFirebase();

    const handleSubmit = (e) => {
        e.preventDefault()
        getData(email.toLowerCase());

    }
    return (
    <>
        <h1 className='answers-title'>Respuestas</h1>

        <form className='answers-form' onSubmit={handleSubmit}>
            <input placeholder={"Ingrese su email"} required type="email" onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">{loading ?

                <div className="loader-btn">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
              : 
              "Consultar"
            }
            </button>
        </form>
        {
          error ? <div>
            <h1 style={{width: "100%", margin: "0 auto", textAlign: "center"}}>{error}</h1>
          </div> : ""
        }

        {

          data && data.map(dt => (
            <div className='answers-main' key={dt.email}>
                <h1 >{dt.fullName}</h1>
                <h2> EMAIL: {dt.email}</h2>
                <h2> FECHA DE NACIMIENTO (AAAA/MM/DD): {dt.birthdate}</h2>
                <h2> PAÍS DE ORIGEN: {dt.country}</h2>
                <h2> ACUERDO CON LOS TyC: {dt.agree ? "De Acuerdo" : ""}</h2>
            </div>
          ))}
    </>
  )
}

export default Answers

//Mejorar el css de Answers, hacer bien las rutas, manejar los errores de firebase, hacer que cuando se envia el formulario, me redirija a /answers, agregar loading a los botones