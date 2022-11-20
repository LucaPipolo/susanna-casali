import Image from 'next/image';

import logo from '@images/susanna-casali.jpg';

const SectionAbout = () => {
  return (
    <section id="about-me" className="mt-32 px-4 md:mt-48">
      <div className="grid grid-cols-1 gap-12 md:gap-36 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
        <div className="lg:order-first lg:row-span-2">
          <div>
            <p className="text-2xl font-light md:text-4xl">
              Hello, I&apos;m Susanna
            </p>
            <h1 className="font-serif text-4xl text-cyan-700 md:text-7xl">
              UX/UI Concept & Product Designer
            </h1>
            <div className="mt-10 flex flex-col gap-y-8">
              <p>
                I work at <strong>Cupra/SEAT</strong> as a{' '}
                <strong>Concept UX/UI Designer</strong>. <br />
                With more than <strong>12 years of experience</strong> as a
                Product Designer, I collaborate daily with e-commerce and
                marketing teams.
              </p>
              <p>
                I apply my proven research and analysis skills to create
                user-centred experiences. I use different research methods, such
                as interviews and surveys, to deeply understand users&apos;
                needs and market specificities. The aim is to design valuable
                interactions with the product, does not matter if physical or
                digital.
              </p>
              <p>
                I define myself as empathetic, creative, active and observant.
                I&apos;m a good team player and prefer working in organised and
                productive Agile environments. I&apos;m currently studying to
                get certified as <strong>SCRUM Master</strong> and{' '}
                <strong>SCRUM Product Owner</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 px-2.5 md:max-w-xs lg:max-w-none">
          <div className="relative py-3 sm:mx-auto sm:max-w-xl">
            <div className="flex flex-col items-center justify-center py-2">
              <div className="absolute inset-0 -rotate-45 rotate-6 transform rounded-3xl bg-gradient-to-r from-han-purple-200 to-han-purple-600 shadow-lg"></div>
              <Image
                className="min-w-auto relative min-w-full rounded-3xl object-cover object-top shadow-lg md:max-h-[540px] md:max-w-[540px]"
                src={logo}
                height={540}
                width={540}
                alt="A picture of me, Susanna Casali"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
