import React from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Globe, 
  Figma, 
  Monitor,
  Layers
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Design',
      icon: Palette,
      color: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-400',
      skills: ['UI/UX Design', 'Graphic Design', 'Branding', 'Typography', 'Color Theory']
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-400',
      skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'JavaScript']
    },
    {
      title: 'Tools & Software',
      icon: Monitor,
      color: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400',
      skills: ['Figma', 'Adobe Creative Suite', 'VS Code', 'Git', 'Vite']
    },
    {
      title: 'Technical Skills',
      icon: Database,
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-400',
      skills: ['Responsive Design', 'Version Control', 'API Integration', 'Performance Optimization']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set that spans both creative design and technical development,
            enabling me to deliver complete digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;