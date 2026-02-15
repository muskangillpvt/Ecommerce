import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;

//understanding useEffect - useEffect is a react hook that lets you run side effects in components. a side effect is something that updates the dom, calls an api, sets a timer, listens to events, and manually changes soemthing outside the react
//the basic structure of useeffect-
// useEffect(()=>{
//  code to run 
// }, [dependencies]);
// it always have a function and a dependancy array - now lets talk about dependency array - this part controls when the effect runs. 
// if we have empty array then - run only once when the page loads but when we fill it with some variable then it runs first when render and then every time that variable changes not only when the page loads but two times. and if we have no array at all it runs on every render - usually not recommended. 
// here pathname come from react router so it change whenever route changes, so it means whenever url changes scroll to top. 