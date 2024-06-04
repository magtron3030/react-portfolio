import { useState, useEffect } from "react";
import '../../components/pages/ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sucessMessage, setSuccessMessage] = useState("");

  const [errorMesssage, setErrorMessage] = useState("");
  


function handleInputChange(event){
   // setMessage("")
   setFormData({
     ...formData,
     [event.target.name]: event.target.value
   })
}

return (

  <div>

   <div className="container mt-5">
   <h1>Get in touch!</h1>
   </div>

    <form className = 'card p-3 mt-5 bg-light'>

    <label className="m-1">Name</label>
      <input
        className="m-2 form-control"
        type="text"
        name="name"
        placeholder="type name here"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label className="m-1">Email</label>
      <input
        className="m-2 form-control"
        type="email"
        name="email"
        placeholder="type email here"
        value={formData.email}
        onChange={handleInputChange}
        required
      />


      <label className="m-1">Message</label>
      <input
        className="m-2 form-control"
        type="message"
        name="message"
        placeholder="type messsage here"
        value={formData.message}
        onChange={handleInputChange}
        required
      />
    <button className="p-1 m-4 col-1" type="submit">Submit</button>
    </form>
</div>
)
}
