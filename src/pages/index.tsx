// External dependencies.
import Head from 'next/head';

// Internal dependencies.
import SiteHeader from '@components/SiteHeader';
import SiteFooter from '@components/SiteFooter';

import SectionAbout from '@components/Sections/SectionAbout';
import SectionExperience from '@components/Sections/SectionExperience';
import SectionPortfolio from '@components/Sections/SectionPortfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Susanna Casali | UX/UI Concept Designer</title>
        <meta name="description" content="" />
      </Head>

      <SiteHeader />

      <main className="bg-gray-100 container mx-auto flex min-h-screen flex-col justify-center py-6 sm:py-12">
        <SectionAbout />
        <SectionExperience />
        <SectionPortfolio />
      </main>

      <SiteFooter />
    </>
  );
}
