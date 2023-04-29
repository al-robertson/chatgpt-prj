const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-45RfObFrTImEAcWt6V9IgX5d",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

//create a simple API which calls the function above

 const app = express()
 app.use(bodyParser.json())
 app.use(cors())
 const port = 3080

 app.post('/', async (req, res) => {
    const {message, currentModel} = req.body;
    console.log(message)
    const response = await openai.createCompletion({
         model: `${currentModel}`,//"text-davinci-003",
         prompt: `${message}`,S
         max_tokens: 100,
         temperature: 0.5,
       });
       res.json({
         message: response.data.choices[0].text,
       })
 });

 app.get('/models', async (req, res) => {
    const response = await openai.listEngines();
    console.log(response.data.data)
    res.json({
      models: response.data.data
    })
});
 

 app.listen(port, () => {
     console.log(`App is listening at http://localhost:${port}`)
 });

