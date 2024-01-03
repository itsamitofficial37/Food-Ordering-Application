import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/components/Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search res list for KFC input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "KFC" } });

  fireEvent.click(searchBtn);

  const card = screen.getByTestId("resCard");

  expect(card).toBeInTheDocument();
});

it("Should filter top rated restaurant ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
  
    const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
  
  
    fireEvent.click(topRatedButton);
  
    const card = screen.getAllByTestId("resCard");
  
    expect(card.length).toBe(4);
  });
