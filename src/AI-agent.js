import ConfigKeys from "./config.js";


// console.log(ConfigKeys.OPENAI_KEY)



const userCityInput = document.querySelector('#user_city');
userCityInput.addEventListener('input', (e) => {
    const userInputValue = e.target.value;


    AI_Agent(userInputValue)

    async function AI_Agent(city) {
        try {
            document.getElementById('search-q').addEventListener('click', async (e) => {
                // 1️⃣ Get live weather
                const weatherRes = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ConfigKeys.OPENWEATHER_KEY}&units=metric`
                );
                const weatherData = await weatherRes.json();

                // 2️⃣ Ask ChatGPT to summarize
                const prompt = `Current weather in ${city}: ${JSON.stringify(weatherData)}.
Write a friendly 2-line summary with clothing advice.`;

                const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${ConfigKeys.OPENAI_KEY}`
                    },
                    body: JSON.stringify({
                        model: "gpt-4o",
                        messages: [{ role: "user", content: prompt }]
                    })
                });

                const aiData = await aiRes.json();

                // Add a check to ensure aiData and aiData.choices exist and are not empty
                if (aiData && aiData.choices && aiData.choices.length > 0) {
                    const message = aiData.choices[0].message.content;

                    console.log(message)

                    // 3️⃣ Show result
                    // document.getElementById('output').textContent = message;
                } else {
                    // Handle the case where choices is undefined or empty
                    console.error("Unexpected AI response structure:", aiData);
                    // document.getElementById('output').textContent = "Error: Could not get a valid response from the AI.";
                }

            });
        } catch (err) {
            console.log(err)
        }
    }

});



