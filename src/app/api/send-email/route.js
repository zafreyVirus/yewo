import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;



export async function POST(request) {
  try {
   
    const { name, email, subject, message } = await request.json(); 


    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // {console.log(process.env.EMAIL,process.env.PASSWORD )}

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, 
        secure: false, 
        auth: {
          user, 
          pass, 
        },
      });
      

    // Mail options
    const mailOptions = {
      from: `"Rayen Webpage" <${user}>`,
      to: "lyndon@rayenlimited.com", //lyndon@rayenlimited.com
      subject: `${subject}`, 
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
      <p>Dear Rayen ltd,</>
      <br/>
      <p>I hope this email finds you well. Below are the details</p>
      <br/>
      <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>
             <br/>
             <p>Regards,</p>
             <p>${email}</p>
             `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Success response
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Error response
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
