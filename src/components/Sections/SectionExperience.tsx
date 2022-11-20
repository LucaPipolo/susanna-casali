// Internal dependencies.
import slugify from '@utils/slugify';

import Skill from '@components/Skill';
import Tool from '@components/Tool';

// Data.
import skills from '@data/skills';
import tools from '@data/tools';
import jobs from '@data/jobs';
import education from '@data/education';

// Component.
const SectionExperience = () => {
  return (
    <section className="my-24 px-4" id="experience">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="w-full md:w-3/5">
          <h2 className="mb-12 font-serif text-6xl text-cyan-700">
            Experience
          </h2>
          <ol className="border-l-2 border-han-purple-600">
            {jobs.map((job) => (
              <li key={slugify(job.title)} className="relative mb-12 ml-4">
                <div className="dark:border-gray-900 dark:bg-gray-700 absolute top-1.5 -left-[1.4rem] top-9 h-3 w-3 rounded-full border border-white bg-han-purple-600"></div>
                <time className="mb-0.5 font-semibold text-battleship-gray-600">
                  {job.date}
                </time>
                <h3 className="mb-1 font-serif text-2xl font-bold text-cyan-700">
                  {job.title}
                </h3>
                <p className="max-w-prose">{job.description}</p>
              </li>
            ))}
          </ol>
          <div>
            <h2 className="mb-12 font-serif text-6xl text-cyan-700">
              Education
            </h2>
            <ol className="border-l-2 border-han-purple-600">
              {education.map((educationItem) => (
                <li
                  key={slugify(educationItem.title)}
                  className="relative mb-12 ml-4">
                  <div className="dark:border-gray-900 dark:bg-gray-700 absolute top-1.5 -left-[1.4rem] top-9 h-3 w-3 rounded-full border border-white bg-han-purple-600"></div>
                  <time className="mb-0.5 font-semibold text-battleship-gray-600">
                    {educationItem.date}
                  </time>
                  <h3 className="mb-1 font-serif text-2xl font-bold text-cyan-700">
                    {educationItem.title}
                  </h3>
                  <p className="max-w-prose">{educationItem.location}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex w-full flex-col gap-16 md:w-2/5 md:pl-20">
          <div>
            <h2 className="mb-12 font-serif text-6xl text-cyan-700">Tools</h2>
            <div className="flex flex-wrap gap-8">
              {tools.map((tool) => (
                <Tool key={slugify(tool.alt)} src={tool.src} alt={tool.alt} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-12 font-serif text-6xl text-cyan-700">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Skill key={slugify(skill)} text={skill} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-12 font-serif text-6xl text-cyan-700">
              Languages
            </h2>
            <p>Italian, English, Spanish, Catalan</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionExperience;
