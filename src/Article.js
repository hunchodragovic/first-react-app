export default function ({ name,email,age,content="no content",children}) {

    
    return (
        <>
        <div style={{background: "white",
            boxShadow: "0px 10px 10px gray",
            margin: "10px"
        }}>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{age}</h3>
            <hr></hr>
            <p>{children}</p>
        </div>
        </>
    )
}