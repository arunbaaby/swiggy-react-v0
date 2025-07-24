import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from '../Navbar'
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test('Should load header', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    );
    const loginLink = screen.getByRole('link', { name: /login/i });

    // fireevent
    fireEvent.click(loginLink);

    const logoutLink = screen.getByRole('link',{name:/logout/i});

    expect(logoutLink).toBeInTheDocument();
    
})