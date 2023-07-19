import React from "react";
import { render,screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from 'react-router-dom';
import App from "../src/App";

//Snapshot
test("renders App component correctly", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});


//Unit test
describe('App', () => {
  test('renders navbar correctly', () => {
    render(<App />, { wrapper: MemoryRouter });
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });

  test('adds item to favorites correctly', () => {
    render(
      <MemoryRouter initialEntries={['/Search']}>
        <Route path="/Search">
          <App />
        </Route>
      </MemoryRouter>
    );
    
    fireEvent.click(screen.getByText('Add to Favorites'));
    
    expect(screen.getByText('Item added to favorites!')).toBeInTheDocument();
  });

  test('deletes item from favorites correctly', () => {
    render(
      <MemoryRouter initialEntries={['/Favorites']}>
        <Route path="/Favorites">
          <App />
        </Route>
      </MemoryRouter>
    );
    
    fireEvent.click(screen.getByText('Delete'));
    
    expect(screen.queryByText('Item deleted!')).not.toBeInTheDocument();
  });
});
