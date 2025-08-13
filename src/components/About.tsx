import React from 'react';
import { Award, BookOpen, Palette } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm passionate about creating digital experiences that are both beautiful and functional.
            My unique background in both graphic design and software engineering allows me to bridge 
            the gap between creativity and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
              alt="Macrola"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Palette className="h-6 w-6 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Design Thinking
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I approach every project with a design-first mindset, ensuring user experience 
                  and visual appeal are at the forefront of development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-700 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Continuous Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Currently pursuing studies in graphic design and software engineering, 
                  I'm always exploring new technologies and design trends.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Award className="h-6 w-6 text-orange-700 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Quality Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I believe in delivering high-quality work that not only meets requirements 
                  but exceeds expectations in both form and function.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;