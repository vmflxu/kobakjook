import { userEvent } from "@testing-library/user-event";
import HomeNav from "./HomeNav";
import { getByRole, getByText, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom";
import { RouteInform, routes } from "@/values/routes";

const user = userEvent.setup();

test("하위메뉴가 있는 메뉴를 Hover시, 하위메뉴가 드러나는가", async () => {
  render(<HomeNav />);
  // 하위 메뉴가 있는 항목을 찾습니다.
  const menuWithSubMenu = screen.getByText("Posts");

  // 하위 메뉴를 마우스 호버
  userEvent.hover(menuWithSubMenu);

  // 하위 메뉴 컨테이너 요소를 직접 찾습니다.
  const subMenuContainer = screen.getByText("React/Next").parentElement?.parentElement as HTMLElement;

  // 초기에 하위 메뉴 높이가 0이어야 합니다.
  expect(subMenuContainer).toBeInTheDocument();
  // expect(subMenuContainer).toHaveStyle('overflow: hidden;');

  // 하위 메뉴 컨테이너 요소가 실제로 렌더링된 후에 높이를 가져옵니다.
  await waitFor(() => {
    const computedStyles = window.getComputedStyle(subMenuContainer as HTMLElement);
    const subMenuHeight = parseFloat(computedStyles.height);
    expect(subMenuContainer).toHaveStyle({
      height: 'fit-content'
    })
    // expect(subMenuHeight).toBeGreaterThan(0);
  });
})