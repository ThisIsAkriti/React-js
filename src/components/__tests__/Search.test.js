import { render , screen , fireEvent} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
    return Promise.resolve({ 
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});
it("should search res List for pizza Hut!" , async() => { 
    await act(async () => render(
        <BrowserRouter>
           <Body/>
        </BrowserRouter>
    ));
    const cardBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardBeforeSearch.length).toBe(20)
    const searchBtn = screen.getByRole("button" , { name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput , {target : {value : 'Pizza Hut' }});
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);

})

it("should render top rated Restaurants" , async() => { 
    await act(async () => render(
        <BrowserRouter>
           <Body/>
        </BrowserRouter>
    ));
    const topRatedbtn = screen.getByRole("button" , {name: "Top Rated Restaurant"});
    fireEvent.click(topRatedbtn);
    const topRated = screen.getAllByTestId("resCard");
    expect(topRated.length).toBe(4);
});