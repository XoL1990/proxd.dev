const isDefined = <T>(argument: T | undefined): argument is T => !!argument;

export default isDefined;
