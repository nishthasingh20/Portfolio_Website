"use client"
import Image from 'next/image';

const ContactMe = () => {
  return (
    <div className="flex justify-center items-center gap-4 py-8">
      <p className="text-2xl font-semibold text-white">
        Reach out to me: {' '}
        <a 
          href="https://x.com/pikachiuiu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center hover:text-purple transition-colors"
        >
          <Image
            src="/X_icon.svg"
            alt="X"
            width={20}
            height={20}
            className="mx-2"
          />
        </a>
        or
        <a 
          href="mailto:singhnishtha206@gmail.com"
          className="ml-2 text-purple hover:text-purple/80 transition-colors"
        >
          singhnishtha206@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ContactMe;