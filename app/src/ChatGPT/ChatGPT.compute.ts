export let computeTotalImpactFromPrompt = (patreonObject, promptType) => {
  let impact = 0;

  if (promptType === "patreon") {
    impact =
      patreonObject?.prompts["inspire"]?.impact +
      patreonObject?.prompts["patreon"]?.impact +
      patreonObject?.prompts["demonstrate"]?.impact;
  } else if (promptType === "guide") {
    impact =
      patreonObject?.prompts["define"]?.impact +
      patreonObject?.prompts["summarize"]?.impact +
      patreonObject?.prompts["ask"]?.impact +
      patreonObject?.prompts["guide"]?.impact +
      patreonObject?.prompts["quiz"]?.impact;
  } else if (promptType === "shop") {
    impact = patreonObject?.prompts["shop"]?.impact;
  } else if (promptType === "practice") {
    impact = patreonObject?.prompts["practice"]?.impact;
  }

  return impact;
};

export let computeResponseList = (patreonObject, promptType) => {
  let list = [];

  if (promptType === "patreon") {
    list = [
      {
        response: patreonObject?.prompts["patreon"]?.response,
        type: "patreon",
        icon: "►",
      },
      {
        response: patreonObject?.prompts["inspire"]?.response,
        type: "inspire",
        icon: "⚡",
      },
      {
        response: patreonObject?.prompts["demonstrate"]?.response,
        type: "demonstrate",
        icon: "🎨",
      },
    ];
  } else if (promptType === "guide") {
    list = [
      {
        response: patreonObject?.prompts["define"]?.response,
        type: "define",
        icon: "🧿",
      },
      {
        response: patreonObject?.prompts["quiz"]?.response,
        type: "quiz",
        icon: "🧪",
      },
      {
        response: patreonObject?.prompts["guide"]?.response,
        type: "study guide",
        icon: "🗓️",
      },
      {
        response: patreonObject?.prompts["summarize"]?.response,
        type: "summarize",
        icon: "📚",
      },
      {
        response: patreonObject?.prompts["ask"]?.response,
        type: "ask",
        icon: "🔮",
      },

      ...(patreonObject?.prompts?.["furtherReading"]?.response
        ? [
            {
              response: patreonObject?.prompts?.["furtherReading"]?.response,
              type: "further reading",
              icon: "🦉",
            },
          ]
        : []),
    ];
  } else if (promptType === "practice") {
    list = [
      {
        response: patreonObject?.prompts["practice"]?.response,
        type: "practice",
        icon: "🥋",
      },
    ];
  } else if (promptType === "shop") {
    list = [
      {
        response: patreonObject?.prompts["shop"]?.response,
        type: "shop",
        icon: "🛍️",
      },
    ];
  }

  return list;
};
