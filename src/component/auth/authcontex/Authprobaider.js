import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  sendEmailVerification,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import App from '../../../firebase/firebase.init';
import toast from 'react-hot-toast';


export const Authcontex=createContext()
const auth=getAuth(App)

const Authprobaider = ({children}) => {
    const [user,setuser]=useState('')


    const googlesignin=(provaider)=>{
       return signInWithPopup(auth,provaider)
    }


    const emailpassreg=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const emailpasslogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updtprofil=profile=>{
        return updateProfile(auth.currentUser,profile)
    }
    const varyfyemail=()=>{
        return sendEmailVerification(auth.currentUser)
    }




    const logout=()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscriber=onAuthStateChanged(auth,currentUser=>{
            if(currentUser.emailVerified ||currentUser===null){
                setuser(currentUser)
            }
            else{
                toast.error('Your email mast be varify, User login')
            }
            //console.log(carrentuser);
        })
        return ()=>{
            unsubscriber()
        }
    },[])


    const authinfo={user,googlesignin,logout,emailpassreg,varyfyemail,emailpasslogin,updtprofil}
    return (
        <Authcontex.Provider value={authinfo}>
            {children}
        </Authcontex.Provider>
    );
};

export default Authprobaider;