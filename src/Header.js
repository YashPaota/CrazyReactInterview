import { useState } from "react";

const Header = ({city}) => {
    const [name , setName] = useState("Yash Paota");
    const name1 = "Tony Stark";
    const handleChange = () => {
        setName("Mohit Goel");
    }
    return(
        <div className="text-center">
            <h1 className="text-4xl text-red-700" >Hi {name}, {city}</h1>
            <button className="font-bold bg-red-400 p-2 rounded-md m-4 hover:bg-red-500 hover:text-black text-white" onClick={handleChange}>Change Name</button>
        </div>
    )
}

export default Header;