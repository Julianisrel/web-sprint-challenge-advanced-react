import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const wrapper = render(<CheckoutForm />)
  // console.log("wrapper: ", wrapper.getByText('Checkout Form'));
  expect(wrapper.getByText('Checkout Form')).toHaveTextContent('Checkout Form')
});

test("form shows success message on submit with form details", () => {
  const wrapper = render(<CheckoutForm />)
  fireEvent.submit(wrapper.getByTestId('form'))
  expect(wrapper.getByText('You have ordered some plants! Woo-hoo!')).toHaveTextContent('You have ordered some plants! Woo-hoo!')
});
