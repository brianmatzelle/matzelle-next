import Image from "next/image";

const socialLinks = [
  {
    href: "https://github.com/brianmatzelle",
    icon: "/logos/github-mark-white.svg",
    alt: "github icon",
    label: "Github"
  },
  {
    href: "https://huggingface.co/brianmatzelle",
    icon: "/logos/hf-logo-pirate.svg",
    alt: "huggingface icon",
    label: "Hugging Face"
  },
  {
    href: "https://ollama.com/brianmatzelle",
    icon: "/logos/ollama-logo.svg",
    alt: "ollama icon",
    label: "Ollama"
  },
  {
    href: "https://www.linkedin.com/in/brianmatzelle/",
    icon: "/logos/linkedin-white.svg",
    alt: "linkedin icon",
    label: "LinkedIn"
  }
];

export function SocialLinks() {
  return (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={link.icon}
            alt={link.alt}
            width={16}
            height={16}
          />
          {link.label}
        </a>
      ))}
    </>
  );
}
