import slugify from '@utils/slugify';

// Types definition.
interface SkillProps {
  text: string;
}

// Component.
const Skill = ({ text }: SkillProps) => {
  return (
    <div
      key={slugify(text)}
      className="inline-block rounded-3xl bg-han-purple-100 py-2 px-4 font-semibold text-han-purple-600">
      {text}
    </div>
  );
};

export default Skill;
