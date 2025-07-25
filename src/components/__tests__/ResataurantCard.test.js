import {render, screen} from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom'

test('Shold load retaurant card with res data',()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>);

    const resName = screen.getByText("Subway");

    expect(resName).toBeInTheDocument();
})