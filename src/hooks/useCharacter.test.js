import { act, renderHook } from "@testing-library/react-hooks";
import { useCharacter } from "./useCharacter";

const getControlledPromise = () => {
  let deffered;
  const promise = new Promise((resolve, reject) => {
    deffered = { resolve, reject };
  });
  return { deffered, promise };
};

describe("useCharacter", () => {
  it("fetches a character by the url", async () => {
    global.fetch = jest.fn();

    await act(async () => renderHook(() => useCharacter("Walter+White")));

    expect(global.fetch).toBeCalledWith(
      `https://www.breakingbadapi.com/api/characters?name=Walter+White`
    );
  });

  it("handles loading state while fetching data", async () => {
    const { deffered, promise } = getControlledPromise();
    global.fetch = jest.fn(() => promise);
    const { result, waitForNextUpdate } = renderHook(useCharacter);

    expect(result.current.isLoading).toBe(true);
    deffered.resolve();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });

  it("handles the state correctly after data is correctly fetched", async () => {
    const { deffered, promise } = getControlledPromise();
    global.fetch = jest.fn(() => promise);

    const { result, waitForNextUpdate } = renderHook(useCharacter);

    deffered.resolve({ json: () => ({ character: "Walter+White" }) });

    await waitForNextUpdate();

    expect(result.current.character).toStrictEqual({
      character: "Walter+White"
    });
  });

  it("handles handles error state correctly", async () => {
    global.fetch = jest.fn(() => {
      return new Promise(() => {
        throw "Fetch Error";
      });
    });

    const { result, waitForNextUpdate } = renderHook(useCharacter);
    await act(async () => waitForNextUpdate);

    expect(result.current.error).toStrictEqual("Fetch Error");
  });
});
