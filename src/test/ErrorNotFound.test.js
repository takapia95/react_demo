import { render, screen } from '@testing-library/react';
import ErrorNotFound from '../components/ErrorNotFound';

jest.mock('react-router-dom', () => ({
    useRouteError : jest.fn(() => ({statusTest: null, message: "Sorry, an unexpected error has occurred."}))
}))

test('renders ErrorNotFound components', () => {
    const increment = jest.fn()
    render( <ErrorNotFound count={25} increment={increment}/>);
    
    const linkElement = screen.getByText(/Sorry, an unexpected error has occurred./i);
    expect(linkElement).toBeInTheDocument();
});

