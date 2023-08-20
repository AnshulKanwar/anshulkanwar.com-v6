import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Hero = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div>
        <div className="max-w-[13rem] mx-auto">
          <Image src={logo} alt="logo" />
        </div>
        <h1 className="text-rose text-3xl sm:text-5xl font-bold my-10 text-center">Anshul Kanwar</h1>
        <div className="text-center">Student. Developer. Hacker.</div>

        <div className="w-full flex justify-evenly mt-24">
          <a
            href="https://github.com/AnshulKanwar"
            className="transition hover:text-rose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub />
          </a>
          <a
            href="mailto:me@anshulkanwar.com"
            className="transition hover:text-rose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMail />
          </a>
          <a
            href="https://www.linkedin.com/in/anshul-kanwar/"
            className="transition hover:text-rose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://resume.anshulkanwar.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-2 px-2 py-1 rounded-md font-semibold transition hover:bg-violet hover:text-night hover:border-violet">
              Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
