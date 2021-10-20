import {Route, Redirect} from 'react-router-dom';

const Protect = ({component: Component, ...restProps}) => {
  const isAuth = localStorage.getItem('token');
  return ( 
    <Route {...restProps} render={(props)=>{
      return isAuth ? <Component {...props} /> : <Redirect to='/login' />
    }} />
   );
}
 
export default Protect;