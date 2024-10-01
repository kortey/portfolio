import Image from "next/image";
import Link from "next/link";
import { EnvelopeClosedIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white flex gap-10  items-center justify-center lg:flex-row lg:gap-20 ">
      <Image
        src="/phone.png"
        alt="contact imoji"
        width={200}
        height={200}
        className="w-[100px] h-[100px] md:[200px] lg:w-[500px] lg:h-[500px]"
      />
      <div className="">
        <Link href="mailto:richardkortey3@gmail.com">
          <h6 className="text-3xl md:text-4xl  lg:tex-5xl flex items-center gap-2">
            <EnvelopeClosedIcon fontSize={"large"} /> Send me an email
          </h6>
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=233500559040&text=Hello">
          <h6 className="text-2xl md:text-3xl  lg:tex-4xl flex items-center gap-2">
            <ChatBubbleIcon fontSize={"large"} /> Send me a message on WhatsApp
          </h6>
        </Link>
      </div>
    </section>
  );
}
