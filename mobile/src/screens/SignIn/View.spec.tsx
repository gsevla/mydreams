import React from "react";
import { Light } from "@providers/Theme/constants";
import { withProviders } from "@test/utils/withProviders";
import { render } from "@testing-library/react-native";
import { SignInScreenView, SignInScreenViewProps } from "./View";

const createProps = (props: Partial<SignInScreenViewProps> = {}) =>
  ({
    authenticate: jest.fn(),
    navigateToSignUpScreen: jest.fn(),
    setEmail: jest.fn(),
    setPassword: jest.fn(),
    theme: Light,
    ...props,
  } as SignInScreenViewProps);

describe("SignInScreenView Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(
      withProviders(<SignInScreenView {...createProps()} />)
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
