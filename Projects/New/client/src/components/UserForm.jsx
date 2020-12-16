import React, {useState} from 'react';
const UserForm = ({onSubmitProp, initialFirst, initialLast, initialEmail, initialPass, initialConfPass}) => {
    const [firstName, setFirstName] = useState(initialFirst);
    const [lastName, setLastName] = useState(initialLast);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState(initialPass);
    const [confPass, setConfPass] = useState(initialConfPass);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName, email, password, confPass});
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfPass("");
    }
    return (
        <>
            <form onSubmit={onSubmitHandler} style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" value={lastName} onChange= {e => setLastName(e.target.value)}/>
                
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={email} onChange= {e => setEmail(e.target.value)}/>

                <label htmlFor="password">Password: </label>
                <input type="text" name="password" value={password} onChange= {e => setPassword(e.target.value)}/>

                <label htmlFor="confPass">Confirm Password: </label>
                <input type="text" name="confPass" value={confPass} onChange= {e => setConfPass(e.target.value)}/>

                <input type="submit" value="submit"/>
            </form>
        </>
    );
}
export default UserForm;