const dummydata = {
  howTos: [
    {
      id: "1",
      category: "example category",
      title: "example 1",
      description: "this explains something",
      steps: [
        { stepName: "step 1", stepDescription: "describes this step" },
        { stepName: "step 2", stepDescription: "describes this step" },
        { stepName: "step 3", stepDescription: "describes this step" },
      ],
    },
    {
      id: "2",
      category: "example category",
      title: "example 2",
      description: "this explains something about the second example",
      steps: [
        { stepName: "step 1", stepDescription: "describes this step" },
        { stepName: "step 2", stepDescription: "describes this step" },
        { stepName: "step 3", stepDescription: "describes this step" },
      ],
    },
  ],
};

export const howToReducer = (state = dummydata, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
