import {
    auth,
    signInWithGooglePopup, createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";



const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>This is sign In page</h1>
            <button onClick={logGoogleUser}>SignIn with Google</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;