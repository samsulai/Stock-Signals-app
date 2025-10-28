import nodemailer from "nodemailer";
import {WELCOME_EMAIL_TEMPLATE} from "@/lib/template";


export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "process.env.NODEMAILER_EMAIL",
        pass: process.env.NODEMAILER_PASSWORD,
    },
});





export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro);

    try {
        const info = await transporter.sendMail({
            from: `"Signalist" <signalist@jsmastery.pro>`,
            to: email,
            subject: `Welcome to Signalist - your stock market toolkit is ready!`,
            text: 'Thanks for joining Signalist',
            html: htmlTemplate,

        });

        return info;
    } catch (e) {
throw e;
    }
};