import { useState } from "react";
import Input from "./components/Input";
import Modal from "./components/Modal";
import {useFirebase} from './hooks/useFirebase.js'
const items = require("./db/db.json").items;

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [open, setOpen] = useState(false);
  const { addData} = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(name, birth, email.toLocaleLowerCase(), country, agree);
    setOpen(true)

  }

  return (
    <>
      <div className="upper-banner">
        <h1> Complete el siguiente formulario:</h1> 
      </div>

      <main className="main-form">

        <form id="form" onSubmit={handleSubmit}>
          {
            items.map(it => (
              <div className="div-inputs" key={it.label}>

                <Input
                 type={it.type}
                 label={it.label}
                 name={it.name}
                 required={it.required}
                 options={it.options}
                 states={{ setName, setBirth, setEmail, setCountry, setAgree, agree}}/>
                
              </div>
 
            ))
          }
        </form>

      </main>
        
          <Modal open={open} setOpen={setOpen}>
            <h3>¡Formulario Enviado!</h3>
          </Modal>
    </>
  );
}

export default App;
