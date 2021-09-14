import { shallow } from "enzyme";
import { App } from "../App";

test("Link changes the class when hovered", () => {
  const wrapper = shallow(<App />);
  const message = wrapper.text();
  expect(message).toBe("Hello, World!");
});
