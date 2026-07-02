import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 pt-16 sm:pt-24 pb-10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something
            <span className="block text-zinc-400">
              meaningful together
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-8 text-zinc-400">
            I’m currently open to full-stack engineering roles, product
            collaborations, and building AI-native digital experiences.
            If you have an idea or opportunity in mind, I’d love to hear about it.
          </p>

          {/* CTA button */}
          <a
            href="mailto:shekharchaudhary870950@gmail.com"
            className="
              group
              mt-8 sm:mt-10
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              px-7 py-4
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/[0.06]
              hover:-translate-y-1
            "
          >
            Say Hello
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* bottom */}
        <div
          className="
            mt-16 sm:mt-24
            flex
            flex-col-reverse
            items-center
            justify-between
            gap-6 sm:gap-8
            border-t border-white/10
            pt-8
            md:flex-row
          "
        >
          {/* copyright */}
          <p className="text-center text-sm text-zinc-500 md:text-left">
            © {new Date().getFullYear()} Shekhar Anand Chaudhary. All rights reserved.
          </p>

          {/* socials */}
          <div className="flex items-center gap-4">
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Social ${profile.id}`}
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.05]
                "
              >
                <Image
                  src={profile.img}
                  alt="social icon"
                  width={20}
                  height={20}
                  className="opacity-70 transition-opacity group-hover:opacity-100 brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;