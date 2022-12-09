export const normaliseData = (value: Record<string, unknown>[], identifierKey: string) => {
    try {
      return value.reduce((acc, val) => {
        const identifier = val[identifierKey]?.toString();

        if (identifier) {
          acc[identifier] = val;
        }

        return acc;
      }, {});
    } catch(e) {
      console.error(e);
      return {};
    }
  };