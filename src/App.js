import React , {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter , Outlet , RouterProvider } from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import Guest from "./components/Guest.js";


// chunking , code splitting , dynamic bundeling , lazy loading , on demand loading;

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        //make an API call and send usename and password 
        const data = {
            name : "Akriti",
        };
        setUserName(data.name);
    }, []) 

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser : userName , setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <AppLayout/>,
      children: [
        
        {
            path: "/",
            element: < Body />,
        },
        {
            path: "/about",
            element : < About />,
        },
        {
            path: "/contact",
            element: < Contact />,
        },
        {
            path: "/Guest",
            element: < Guest />,
        },

        {
            path: "/grocery",
            element: <Suspense fallback = "Loading..."><Grocery /></Suspense> ,
        },
        {
            path: "/resturants/:resId",
            element: < RestaurantMenu />,
        },
        {
            path: "/cart",
            element: <Cart/>
        }
       ],
      errorElement: <Error/>,
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);