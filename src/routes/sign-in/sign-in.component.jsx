import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn=()=>{

    const logGoogleUser =async()=>{
        const {user}=await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>This is sign In page</h1>
            <button onClick={logGoogleUser}>SignIn with Google</button>
        </div>
    );
};

export default SignIn;