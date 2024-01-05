//function that extract style props in Vanilla-Extract Sprinkle Style Array

export const extractSprinkleProps = <T extends Object>(
    props: T,
    keys: (keyof T)[],
) => {
    const result: any = {};

    keys.forEach((key) => {
      if (props?.[key]) {
        result[key] = props[key];
      }
    });

    return result;
};