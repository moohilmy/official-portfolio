import HeaderSection from "@/app/elemants/HeaderSection";
import SocialIcon from "@/app/elemants/SocialIcon";
import iconsIteams from ".";
import Link from "next/link";
import ContactForm from "@/app/elemants/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="my-8">
      <HeaderSection title="contact" />
      <div className="flex flex-row justify-around my-6">
        {iconsIteams.map((icon, index) => (
          <SocialIcon index={index} key={index}>
            <Link href={icon.link} aria-label="social-link" target="_blank">
              <icon.icon />
            </Link>
          </SocialIcon>
        ))}
      </div>
      <div className="flex justify-around max-sm:flex-col max-sm:space-y-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
