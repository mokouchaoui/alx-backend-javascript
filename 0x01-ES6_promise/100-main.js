import asyncUploadUser from "./100-promise-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
