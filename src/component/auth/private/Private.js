
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontex } from '../authcontex/Authprobaider';

const Private = ({children}) => {
    const {user}=useContext(Authcontex)
    const navegat=useNavigate()
    if(user.uid){
        return children
    }
    navegat('/login')
  

    
};

export default Private;