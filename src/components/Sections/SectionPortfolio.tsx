// External dependencies.
import Image from 'next/image';

// Internal dependencies.
import slugify from '@utils/slugify';

// Data.
import portfolio from '@data/portfolio';

// Component.
const SectionPortfolio = () => {
  return (
    <section className="my-24 mx-4 px-4" id="portfolio">
      <h2 className="mb-20 font-serif text-6xl text-cyan-700">Portfolio</h2>
      <div className="grid auto-rows-max gap-20 md:grid-cols-3">
        {portfolio.map((portfolioItem) => (
          <article key={slugify(portfolioItem.title)}>
            <div className="relative py-3 sm:mx-auto sm:max-w-xl">
              <div className="flex h-[360px] flex-col items-center justify-center py-2">
                <div
                  className={`absolute inset-0 -rotate-45 rotate-6 transform rounded-3xl bg-gradient-to-r shadow-lg from-${portfolioItem.color}-200 to-${portfolioItem.color}-600`}></div>
                <a href={portfolioItem.link} target="_blank" rel="noopener">
                  <Image
                    className="relative h-[320px] w-full rounded-3xl bg-white object-scale-down shadow-lg md:h-[360px]"
                    alt={portfolioItem.title}
                    src={`/images/portfolio/${portfolioItem.src}.png`}
                    width={360}
                    height={360}
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionPortfolio;
