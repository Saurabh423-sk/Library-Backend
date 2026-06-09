
import "../../config/env.js";
import sgMail from "@sendgrid/mail";
import "../../config/env.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (to, subject, html) => {
    try {
        const msg = {
            to,
            from: process.env.EMAIL, // must be verified
            subject,
            html,
        };

        const response = await sgMail.send(msg);

        console.log("Email sent:", response[0].statusCode);

        return response;

    } catch (error) {
        console.log("Email error:", error.response?.body || error.message);
        throw error;
    }
};

export default sendMail;