import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../src/components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockDataRestaurantCard.json";

describe("Test cases of Restaurant Card ", () => {
  it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Andhra Gunpowder");

    expect(name).toBeInTheDocument();
  });

  it("Should render RestaurantCard component with Off label ", () => {
    const RestaurantCardOffLabel = withPromotedLabel(RestaurantCard);

    render(<RestaurantCardOffLabel resData={MOCK_DATA} />);

    const offLabel = screen.getByText("₹120 OFF");

    expect(offLabel).toBeInTheDocument();
  });
});
