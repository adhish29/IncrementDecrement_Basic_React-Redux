export const incNumber = (num) => {
  return {
    type: "INCREMENT", //type keyword is mandetory
    payload: num, //this payload keyword - you can provide anything as keyword
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
