// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     organization: "org-45RfObFrTImEAcWt6V9IgX5d",
//     apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// //callApi()

// //create a simple API which calls the function above

// const express = require('express')
// const app = express()
// const port = 3080

// app.post('/', async (req, res) => {
//     const { message }  = req.body;
//     console.log(message, "message")
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Say this is a test",
//         max_tokens: 7,
//         temperature: 0,
//       });
//       console.log(response.data.choices[0].text)
//       res.json({
//         data: response.data
//       })
// });
// app.listen(port, () => {
//     console.log(`App is listening at http://localhost:${port}`)
// });

