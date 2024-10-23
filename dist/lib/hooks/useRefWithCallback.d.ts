export default function useRefWithCallback<T>(cb: (node: T) => void): (node: T | null) => void;
