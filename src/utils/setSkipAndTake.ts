const setSkipAndTake = (skip: number, take: number) => {
    return {
        skip: skip + take,
        take: skip - take < 0 ? 0 : skip - take,
    };
};

export default setSkipAndTake;
