const rule = /([@|@][^\s]+)/g;

export const parse = (value, renderer, action) => {
    return value.split(rule).map((chunk) => {

        if (chunk.match(rule)) {
            return renderer(chunk, action);
        }

        return chunk;
    });
};
