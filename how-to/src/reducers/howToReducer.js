const dummydata = {
  howTos: [
    {
      id: "1",
      category: "example category",
      title: "example 1",
      description: "this explains something",
      steps: [
        { id: "1", stepName: "step 1", stepDescription: "describes this step" },
        { id: "2", stepName: "step 2", stepDescription: "describes this step" },
        { id: "3", stepName: "step 3", stepDescription: "describes this step" },
      ],
    },
    {
      id: "2",
      category: "example category",
      title: "example 2",
      description: "this explains something about the second example",
      steps: [
        { id: "1", stepName: "step 1", stepDescription: "describes this step" },
        { id: "2", stepName: "step 2", stepDescription: "describes this step" },
        { id: "3", stepName: "step 3", stepDescription: "describes this step" },
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
