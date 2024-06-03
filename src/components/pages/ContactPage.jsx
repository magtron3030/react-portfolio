import { useState, useEffect } from "react";
import '../../components/pages/ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sucessMessage, setSuccessMessage] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  


function handleInputChange(event){
   // setMessage("")
   setFormData({
     ...formData,
     [event.target.name]: event.target.value
   })
}

return (
  <div>
    <form className = 'card p-3 mt-5 bg-light'>

    <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="type name here"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="type email here"
        value={formData.email}
        onChange={handleInputChange}
      />


      <label>Message</label>
      <input
        type="message"
        name="message"
        placeholder="type messsage here"
        value={formData.message}
        onChange={handleInputChange}
      />

<button type="submit">Submit</button>

   </form>

 

  </div>
)
}
