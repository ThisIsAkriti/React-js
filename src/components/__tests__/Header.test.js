import { fireEvent, render , screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with a login Button" , () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
              <Header/>
            </Provider>
        </BrowserRouter>
   
    );

    const loginButton = screen.getByText("LogIn");
    //const loginButton = screen.getByRole("button" , {name: "Login"});
    expect(loginButton).toBeInTheDocument();

});

it("should render cart item" , () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
});

it("should change login button to logOut on click" , ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const logInButton = screen.getByText("LogIn");

    fireEvent.click(logInButton);
    const logOutButton = screen.getByText("LogOut")

    expect(logOutButton).toBeInTheDocument();
}) ;