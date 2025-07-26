import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json';
import { BrowserRouter } from 'react-router-dom';
// jest only renders the app not in a real browser so it can not fetch the data
// so we have to define a mock fetch or
// error= fetch is not defined (fetch is provided by real browser)

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the body with search", async () => {
    await act(async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>))
})