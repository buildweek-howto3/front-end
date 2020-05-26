 const dummydata = {
  howTos: [
    {
      category: "example category",
      title: "example 1",
      description: "this explains something",
      steps: ["step1", "step2"]
    },
    {
        category: "example category",
        title: "example 2",
        description: "this explains something about the second example",
        steps: ["step1", "step2"]
    },
  ],
};

export const howToReducer = (state = dummydata, action) => {
  switch (action.type) {
    default: 
    return state
  }
}