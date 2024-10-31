const SUPPORTS_WITH_RESOLVERS =
  "withResolvers" in Promise
  && typeof Promise.withResolvers === "function";

const fallback = <T>(): PromiseWithResolvers<T> => {
  let
    resolve!: PromiseWithResolvers<T>["resolve"],
    reject!: PromiseWithResolvers<T>["reject"];

  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

export const makePromise = SUPPORTS_WITH_RESOLVERS
  ? Promise.withResolvers
  : fallback;
