import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Graphic Design Student',
      company: 'University of Design Arts',
      location: 'New York, NY',
      period: '2023 - Present',
      description: 'Studying fundamental and advanced design principles, typography, color theory, and brand identity development. Working on various design projects and collaborating with fellow students.',
      type: 'education'
    },
    {
      title: 'Software Engineering Student',
      company: 'Tech Institute',
      location: 'New York, NY',
      period: '2022 - Present',
      description: 'Learning programming fundamentals, web development, data structures, and software architecture. Building practical projects using modern technologies and frameworks.',
      type: 'education'
    },
    {
      title: 'Freelance Designer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Creating visual identity designs, logos, and marketing materials for small businesses and startups. Managing client relationships and delivering projects on time and within budget.',
      type: 'work'
    },
    {
      title: 'Web Development Intern',
      company: 'Local Design Agency',
      location: 'New York, NY',
      period: 'Summer 2023',
      description: 'Assisted in developing responsive websites and web applications. Gained experience with modern frameworks and collaborated with senior developers and designers.',
      type: 'work'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in design and development, combining formal education with practical
            experience to build a strong foundation in both creative and technical fields.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12">
              <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                exp.type === 'education' 
                  ? 'bg-green-100 dark:bg-green-900' 
                  : 'bg-blue-100 dark:bg-blue-900'
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  exp.type === 'education'
                    ? 'bg-green-500'
                    : 'bg-blue-500'
                }`}></div>
              </div>
              
              <div className="ml-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <span className="font-medium mr-2">{exp.company}</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{exp.location}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;