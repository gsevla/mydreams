import { renderHook } from "@testing-library/react-native";
import { ReactNode } from "react";
import {
  useSignInScreenContainer,
  UseSignInScreenContainerInput,
} from "./useContainer";
import { withProviders } from "@test/utils/withProviders";
import usecases from "@services/usecases";

type UseSignInScreenContainerOutput = ReturnType<
  typeof useSignInScreenContainer
>;

const wrapper = ({ children }: { children: ReactNode }) =>
  withProviders(children);

test("useSignInScreenContainer hook", () => {
  const navigationStub = {
    navigate: jest.fn(),
  };
  const signInUCSpy = jest.spyOn(usecases.user.signIn, "execute");

  const { result } = renderHook(
    () =>
      useSignInScreenContainer({
        navigation: navigationStub,
      } as unknown as UseSignInScreenContainerInput),
    {
      wrapper,
    }
  );

  expect(result.current).toEqual(
    expect.objectContaining({
      authenticate: expect.any(Function),
      navigateToSignUpScreen: expect.any(Function),
      setEmail: expect.any(Function),
      setPassword: expect.any(Function),
      theme: expect.any(Object),
    } as UseSignInScreenContainerOutput)
  );

  result.current.navigateToSignUpScreen();
  expect(navigationStub.navigate).toHaveBeenCalledWith("SignUp");

  result.current.setEmail("gabriel@alves.com");
  result.current.setPassword("mypswd");
  result.current.authenticate();
  expect(signInUCSpy).toHaveBeenCalledWith({
    email: "gabriel@alves.com",
    password: "mypswd",
  });
});
