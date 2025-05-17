import { render, screen, fireEvent } from "@testing-library/react";
import MainContent from "./MainContent";

describe("MainContent Component", () => {
  test("renders main content with correct structure", () => {
    render(<MainContent />);

    // Verifica se o container principal existe
    const mainContent = screen.getByTestId("main-content");
    expect(mainContent).toBeInTheDocument();

    // Verifica se os cards são renderizados
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBeGreaterThan(0);
  });

  test("cards have hover effect", () => {
    render(<MainContent />);
    const card = screen.getAllByTestId("card")[0];

    // Simula hover
    fireEvent.mouseEnter(card);
    expect(card).toHaveStyle("transform: translateY(-5px)");

    // Simula saída do hover
    fireEvent.mouseLeave(card);
    expect(card).not.toHaveStyle("transform: translateY(-5px)");
  });

  test("responsive layout changes", () => {
    render(<MainContent />);

    // Simula viewport mobile
    window.innerWidth = 500;
    fireEvent(window, new Event("resize"));

    const cards = screen.getAllByTestId("card");
    expect(cards[0]).toHaveStyle("padding: 1.5rem");
  });
});
