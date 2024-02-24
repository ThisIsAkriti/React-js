import { fireEvent, render , screen} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import {act} from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json"
import Cart from "../Cart";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    } 
));

it("Should render Restaurant menu on UI" , async() => {
    await act(async() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                
                <Header/>
                <RestaurantMenu/>
                <Cart/>
                
            </Provider>   
       </BrowserRouter> 
        ));
    const accordingHeader = screen.getByText("Chaats (17)");
    fireEvent.click(accordingHeader); 

    expect(screen.getAllByTestId("foodItems").length).toBe(17);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();// it will have 0 items


    const addBtn = screen.getAllByRole("button" , {name: "Add +"});
    fireEvent.click(addBtn[0]);
    
   expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument(); // it added 1tems
   expect(screen.getAllByTestId("foodItems").length).toBe(18); // 1+17

   fireEvent.click(screen.getByRole("button" , {name: "Clear Cart"}));
   expect(screen.getAllByTestId("foodItems").length).toBe(17);
   expect(screen.getByText("Cart is Empty! Add Items to Cart")).toBeInTheDocument();

})