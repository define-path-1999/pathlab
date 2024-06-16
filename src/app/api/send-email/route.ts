import { NextRequest, NextResponse } from "next/server";
import { createTransport, Transporter, SendMailOptions } from "nodemailer";
import { z, ZodError } from "zod";

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

type RequestBody = z.infer<typeof schema>;

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();

    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Bad request", error: result.error.errors },
        { status: 400 }
      );
    }

    const { name, address, bookingTime, contactNumber } = body;
    const { flatNumber, buildingNumber, landmark, city } = address;

    const transporter: Transporter = createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: "rishisingh122002@gmail.com",
        pass: process.env.BREVO_KEY!,
      },
    });

    const formatedDate = formatBookingTime(new Date(bookingTime));

    const mailOptions: SendMailOptions = {
      from: "difinepathology@gmail.com", //"rishisingh122002@gmail.com",
      // to: "guptaayush617@gmail.com",
      to: process.env.EMAIL,
      subject: `A Booking created`,
      html: `<div style="background: white; padding: 20px; max-width: 600px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border: 1px solid #b2dfdb; margin: 20px auto; padding-bottom: 40px;">
  <div style="display: flex; justify-content: center; align-items: center; border-bottom: 2px solid #3f51b5; padding-bottom: 10px; margin-bottom: 20px;">
    <h2 style="font-family: Georgia, serif; color: #3f51b5;">Booking Confirmed!</h2>
  </div>
  <div>
    <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
      <strong style="font-weight: bold;">Name:</strong> <span>${name}</span>
    </p>
    <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
      <strong style="font-weight: bold;">Contact Number:</strong> <span>${contactNumber}</span>
    </p>
    <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
      <strong style="font-weight: bold;">Booking Time:</strong> <span>${formatedDate}</span>
    </p>
  </div>
  <h3 style="font-family: Georgia, serif; color: #3f51b5; border-bottom: 2px solid #3f51b5; padding-bottom: 10px; margin-bottom: 20px;">Your Booking Details</h3>
  <div>
    <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
      <strong style="font-weight: bold;">Flat Number:</strong> <span>${flatNumber}</span>
    </p>
    <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
      <strong style="font-weight: bold;">Building Number:</strong> <span>${buildingNumber}</span>
    </p>
    <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
      <strong style="font-weight: bold;">Landmark:</strong> <span>${landmark}</span>
    </p>
    <p style="margin: 10px 0; color: #004d40; font-size: 1.1em;">
      <strong style="font-weight: bold;">City:</strong> <span>${city}</span>
    </p>
  </div>
</div>
`,
    };

    await transporter.sendMail(mailOptions);

    const response = NextResponse.json({ message: "Email sent successfully" });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  } catch (error) {
    const response = NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }
}

function formatBookingTime(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
