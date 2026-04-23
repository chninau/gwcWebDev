import { useState } from 'react'; 
//useState allows for each field, tracking submission status

export default function ContactUs(){
    const [fullName, setFullName] = useState(""); 
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState(""); 
    const [message, setMessage] = useState(""); 
    const [status, setStatus] = useState(""); 

    const handleSubmit = async (e)  => {
        e.preventDefault(); 

        try{ 
            const response = await fetch ("http://localhost:3001/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({fullName, email, subject, message}),
            });

            const data = await response.json(); 

            if(data.success){
                setStatus("success!"); 
                setFullName(""); 
                setEmail(""); 
                setSubject(""); 
                setMessage(""); 
            } else{
                setStatus("error");
            }
        }catch (err){
            console.error(err); 
            setStatus("error :("); 
        }
    }; 

    return(
        <div>
            <h1>CONTACT US!</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>FULL NAME</label>
                    <input
                        type="text"
                        placeholder="Type your name here..."
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>EMAIL</label>
                    <input
                        type="text"
                        placeholder="youremail@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>SUBJECT</label>
                    <input
                        type="text"
                        placeholder="Subject Title..."
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>MESSAGE</label>
                    <input
                        type="text"
                        placeholder="Message Details..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">SEND MESSAGE</button>
            </form>

            {status === "success" && <p> Message sent successfully!</p>}
            {status === "error" && <p> Something went wrong. Please try again.</p>}
        </div>
                    
    );
}