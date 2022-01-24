// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module JSX {
  type Element = string
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [elemName: string]: any
  }
}
