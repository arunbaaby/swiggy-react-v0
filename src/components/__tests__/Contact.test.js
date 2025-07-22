import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

// group all the testcases with describe

describe('Contact us page test cases', () => {
    test('should load contact page', () => {
        render(<Contact />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    test('should load button for submit', () => {
        render(<Contact />);

        const button = screen.getByText('Submit');

        expect(button).toBeInTheDocument();
    })


    test(' should load button for submit', () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole('textbox');

        expect(inputBoxes.length).toBe(2);
    })
})

