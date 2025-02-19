import {useState} from "react"

function Btn() {

    const [signedIn, setSignedIn] = useState(false)

    return(
        <button onClick={() => setSignedIn(!signedIn) }>
            {signedIn ? "Sign Out" : "Sign In"}
        </button>
    )
}

export default Btn