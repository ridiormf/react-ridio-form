import { renderHook } from "@testing-library/react";
import { useForm } from "../src/index";

interface ProfileValues extends Record<string, unknown> {
  readonly name: string;
}

describe("useForm", () => {
  it("returns the provided initial values", () => {
    const initialValues: ProfileValues = { name: "Ada" };

    const { result } = renderHook(() =>
      useForm<ProfileValues>({ initialValues }),
    );

    expect(result.current.values).toEqual({ name: "Ada" });
  });
});
