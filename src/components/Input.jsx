const Input = ({type, label, name, required, options, states }) => {

 const chooseSet = (name, e) => {
    if (name === "full_name") {
        states.setName(e.target.value)
    } else if (name === "birth_date") {
        states.setBirth(e.target.value)
    } else if (name === "email") {
        states.setEmail(e.target.value)
    }else if (name === "terms_and_conditions"){
        states.setAgree(e.target.checked)
    }
 }

  return (

    <>
        {type === "submit" ? <input className="inputs" type={type} name={name} id={"hola"}></input> : 

        <label htmlFor={name} className={type}>
            {type !== "submit" ? label+":" : ""}
            {
                type !== "select" ?

                <input className='inputs' type={type} name={name} id={label} required={required} onChange={(e) => chooseSet(name, e)} 
            />
                : 
                <select className='inputs' type={type} name={name} id={name} required={required} onChange={(e) => {
                    states.setCountry(e.target.value)

                }}>
                    <option value={""}>-</option>

                    {options.map(opt =>(

                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            }
        </label>
    }
    </>
  )
}

export default Input