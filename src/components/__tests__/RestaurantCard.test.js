import { render , screen} from "@testing-library/react";
import RestaurantCard , { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props Data" , () => {
    render(< RestaurantCard resData= {MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
/*
it("should render restaurand card with promoted level", () => {
  render(< withPromotedLabel RestaurantCard = {MOCK_DATA}/>)
  const label = screen.getByText("true");

// get the restaurant card element by its test id
const card = screen.getByTestId("promotedCard");

expect(label).toBeInTheDocument();
expect(card).toBeInTheDocument();

})
*/
