import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  address: z.object({
    flatNumber: z.string(),
    buildingNumber: z.string(),
    landmark: z.string(),
    city: z.string(),
  }),
  contactNumber: z.string().min(10).max(10),
  bookingTime: z.string(),
});
export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const { success } = schema.safeParse(body);

    if (!success) {
      throw new Error("Bad request");
    }

    const { name, address, bookingTime, contactNumber } = body;

    const { flatNumber, buildingNumber, landmark, city } = address;

    const transporter = createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: "rishisingh122002@gmail.com",
        pass: process.env.BREVO_KEY,
      },
    });

    const formatedDate = formatBookingTime(new Date(bookingTime));

    const mailOptions = {
      from: "rishisingh122002@gmail.com",
      to: "guptaayush617@gmail.com",//"rs3949427@gmail.com",
      subject: `A Booking created`,
      text: `<div style="background: linear-gradient(to bottom right, #e0f7fa, #b2ebf2); padding: 20px; max-width: 600px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border: 1px solid #b2dfdb; margin: 20px auto; background-color: #ffffff; padding-bottom: 40px;">
      <div style="display:flex;flex-direction:row-reverse; justify-content:space-between; align-items:center;border-bottom: 2px solid #00796b; padding-bottom: 10px; margin-bottom: 20px;">
        <img src="https://via.placeholder.com/100" alt="Logo" style="width: 50px; height: 50px;">
        <h2 style="font-family: Georgia, serif; color: #00796b; ">Booking Confirmed!</h2>
        </div>
        <div>
            <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
                <i class="fas fa-user" style="color: #00796b; margin-right: 5px;"></i>
                <strong style="font-weight: bold;">Name:</strong> <span>${name}</span>
            </p>
            <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
                <i class="fas fa-phone" style="color: #00796b; margin-right: 5px;"></i>
                <strong style="font-weight: bold;">Contact Number:</strong> <span>${contactNumber}</span>
            </p>
            <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
                <i class="fas fa-clock" style="color: #00796b; margin-right: 5px;"></i>
                <strong style="font-weight: bold;">Booking Time:</strong> <span>${formatedDate}</span>
            </p>
        </div>
        <h3 style="font-family: Georgia, serif; color: #00897b; border-bottom: 2px solid #00897b; padding-bottom: 10px; margin-bottom: 20px;">Your Booking Details</h3>
        <div>
            <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
                <i class="fas fa-map-marker-alt" style="color: #00897b; margin-right: 5px;"></i>
                <strong style="font-weight: bold;">Flat Number:</strong> <span>${flatNumber}</span>
            </p>
            <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
                <i class="fas fa-building" style="color: #00897b; margin-right: 5px;"></i>
                <strong style="font-weight: bold;">Building Number:</strong> <span>${buildingNumber}</span>
            </p>
            <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
                <i class="fas fa-landmark" style="color: #00897b; margin-right: 5px;"></i>
                <strong style="font-weight: bold;">Landmark:</strong> <span>${landmark}</span>
            </p>
            <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
                <i class="fas fa-city" style="color: #00897b; margin-right: 5px;"></i>
                <strong style="font-weight: bold;">City:</strong> <span>${city}</span>
            </p>
        </div>
    </div>
    `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error",
      error: error,
    });
  }
}

function formatBookingTime(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
