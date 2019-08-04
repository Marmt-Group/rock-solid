const mailgun = require("mailgun-js")
const apiKey = process.env.MAILGUN_API_KEY
const domain = process.env.DOMAIN
const mg = new mailgun({ apiKey, domain })

const generateResponse = (body, statusCode) => {
    return {
        headers: {
            "access-control-allow-methods": "POST",
            "access-control-allow-origin": "*",
        },
        statusCode: statusCode,
        body: `{\"result\": ${body.message}}`
    };
};

const createEmail = data => {
    const { name, company, email, message } = data

    const emailData = {
        from: 'davidjamesdavis.djd@gmail.com',
        subject: 'New Marmt Inquiry from ' + company,
        text: message,
        html: '<p>Message from: ' + name + ': ' + message + '</p>',
        to: 'theedoubled@gmail.com',
        'h:Reply-To': email
    }

    return emailData
}

exports.handler = async (event) => {
    const { body } = event;
    const data = JSON.parse(body);

    const result = createEmail(data)

    try {
        await mg.messages()
            .send(result, (error, body) => {
                if (error) {
                    generateResponse(error, 500)
                }
                generateResponse(result, 200)
            })
    } catch (error) {
        console.log(error)
    }
}