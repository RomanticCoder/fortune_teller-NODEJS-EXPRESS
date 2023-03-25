const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function apiCall() {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are the best fortune teller in the world.",
      },
      {
        role: "user",
        content: "You are the best fortune teller in the world.",
      },
      {
        role: "assistant",
        content:
          "Thank you for your kind words! As an AI language model, I don't have the ability to predict the future, but I can provide responses based on data and analysis. If you have a specific question or concern, I would be happy to offer some guidance or insight based on available information.",
      },
    ],
  });
  console.log(completion.data.choices[0].message["content"]);

  return completion;
}

apiCall();
