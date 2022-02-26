import React, {useState} from 'react'

export default function Form() {
    const [values, setValues] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    })

    let name, value;
    const handleform = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setValues({...values, [name]:value})
    }
    return (
        <div>
            <h1>form</h1>
            <h1>form</h1>
            <h1>form</h1>
            <h1>form</h1>
            <form action="">
                <input type="text" name="name" id="" value={values.name} onChange={handleform}/>
                <input type="text" name="email" id=""  value={values.email} onChange={handleform}/>
                <input type="text" name="phone" id="" value={values.phone} onChange={handleform} />
                <input type="text" name="message" id="" value={values.message} onChange={handleform} />
            </form>
        </div>
    )
}
