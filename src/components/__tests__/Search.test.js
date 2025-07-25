import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        jest: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it ("Should render the body with search",()=>{
    render(<Body/>)
})