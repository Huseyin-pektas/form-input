import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState({
        id:String(new Date().getTime()),
        Name: "",
        phone_number: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit( inputValue)
        setInputValue({
            id: String(new Date().getTime()),
            Name: "",
            phone_number: ""
          });
    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username' >Kullanıcı Giriniz: </label>

                <input onChange={(e) => setInputValue({...inputValue, Name:e.target.value })}
                    value={inputValue.Name}  id="username" name='Name'
                    placeholder="Adınızı giriniz" required />
                <br /><br />
                <label htmlFor='phone' >Kullanıcı Numara: </label>

                <input onChange={(e) => setInputValue({...inputValue, phone_number: e.target.value })}
                    value={inputValue.phone_number}  id="phone" name='phone_number'
                    placeholder="Tel No giriniz"  />

                <div style={{ marginTop: "10px" }}>
                    <button>Add</button>
                </div>

            </form>
        </div>
    )
}

export default Form
