
function ProfileForm({name,lastName,phone,password,setPassword,setName,setLastName,setPhone,submitHandler}) {
    return (
        <>
        <div className="profile-form__input">
            <div>
                <label htmlFor="name">Name :</label>
                <input id="name" type="text" value={name} placeholder="name" onChange={e=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="last-name">LastName :</label>
                <input id="last-Name" type="text" value={lastName} placeholder="last-name" onChange={e=>setLastName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="phone">Phone :</label>
                <input id="phone" type="text" value={phone} placeholder="phone" onChange={e=>setPhone(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <input id="password" type="text" value={password} placeholder="password" onChange={e=>setPassword(e.target.value)} />
            </div>
        </div>
        <button onClick={submitHandler}>Submit</button>
        </>
    );
}

export default ProfileForm;