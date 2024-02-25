import { render } from "react-dom";
import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockPromotedLIst.json";
import "@testing-library/jest-dom";

it("should render cards with promoted label" , () => {
    const PromotedLabelData = withPromotedLabel(RestaurantCard);

    render(
        <PromotedLabelData resData = {MOCK_DATA}/>
    );
    const promotedLabel = screen.getByRole('label' , {name: 'Promoted'});
    expect(promotedLabel).toBeInTheDocument();
})