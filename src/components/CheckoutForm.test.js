import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    console.log('rendered')
});

test("form shows success message on submit with form details", () => {


    render(<CheckoutForm/>)

    const fname = screen.getByLabelText('First Name:')
    const lname = screen.getByLabelText('Last Name:')
    const address = screen.getByLabelText('Address:')
    const city = screen.getByLabelText('City:')
    const state = screen.getByLabelText('State:')
    const zip = screen.getByLabelText('Zip:')
    const button = screen.getByRole('button')

    userEvent.type(fname, 'Eddie')
    userEvent.type(lname, 'Lollies')
    userEvent.type(address, '1234 W LanternWaste rd')
    userEvent.type(city,'SnowyWoods')
    userEvent.type(state, 'Narnia')
    userEvent.type(zip,'44441')
    userEvent.click(button)

  
    const message = screen.getByTestId('successMessage')
    expect(message).toBeVisible();
    




    
});
