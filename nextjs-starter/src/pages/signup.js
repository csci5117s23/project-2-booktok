import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
    return<>
        <h1>Sign Up</h1>
        <SignUp path="/sign-up" routing="path" signInUrl="/" redirectUrl='home'/>
    </>
}