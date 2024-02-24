import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test case",() => {

   /*
    beforeAll(() => {
        console.log("before all")
    })
    beforeEach(() => {
        console.log("before Each")
    })
    afterAll(() => {
        console.log("before all")
    })

    */

    it("should load contact us component", ()=> {  // u can write (test) or (it) both are valid.
        render(<Contact />);
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();      //Assertion;
       
    });
    
    test("should load button in contact us component" , () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("should load input name in contact us component" , () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();     
    });
    
    test("should load two input boxes on the contact us page!", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        //console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);
    });
    
})
