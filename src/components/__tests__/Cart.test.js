import {fireEvent, render, screen} from "@testing-library/react";
import RestaurantDetails from "../RestaurantDetails";
import MOCK_RES_INFO from '../mocks/res-info-menu.json';
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import '@testing-library/jest-dom'

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_RES_INFO)
    })
})

it("Should load res menu", async()=>{
    await act (async ()=> render(
        <Provider store={appStore}>
            <RestaurantDetails/>
        </Provider>
    ));

    const accordianHeader = screen.getByText('Recommended (9)');

    fireEvent.click(accordianHeader);

    const menuItems = screen.getAllByTestId('menu-item');

    expect(menuItems.length).toBe(12);

})