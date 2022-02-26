import React, {useState} from 'react'
import './style.scss'

export default function Todo() {

    const [save, setSave] = useState('');
    const [store, setStore] = useState([]);

    const saveTodo = () =>{
        setStore([...store, save]);
        setSave('');
    }
    return (
        <>
            <input type="text" name="tododata" id="" value={save} onChange={(e)=>setSave(e.target.value)} placeholder='write here'/>
            <input type="button" value="save" onClick={saveTodo} />
            
            {
                store.map((item, index) => (
                    <h1>{store}</h1>
                ))
            }

        </>
    )
}
