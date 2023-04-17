// import { ClerkProvider } from '@clerk/nextjs'
// import { SignUp } from "@clerk/nextjs";
// import { useAuth } from "@clerk/nextjs";


// export default function Login({ Component, pageProps }) {
//     const { isLoaded, userId, sessionId, getToken } = useAuth();
// return <>
//     {/* <ClerkProvider {...pageProps} >
     
//     </ClerkProvider> */}
    
// Login

// </>

//   }
  


// // const SignUpPage = () => (
// //   <SignUp path="/login" routing="path" signInUrl="/login" 
// //    redirectUrl="/_app.js"/>
// //   );

// // export default SignUpPage;


import { UserButton } from "@clerk/clerk-react";


export default function ToDos() {
  return <>
    <h1>Login Page</h1>
    <UserButton afterSignOutUrl="/"/>
  </>
}