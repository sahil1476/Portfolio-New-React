import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'XenonStack',
    period: 'Jun 2024 - June 2024',
    description: [
      'Developed a responsive web application using React.js , TailwndCSS and GoLang ensuring seamless data flow between frontend and backend.',
      'Implemented data processing workflows using Apache Spark, enabling efficient handling of large-scale data.',
      'Implemented REST APIs and integrated third-party services',
      'Participated in code reviews, improving code quality and development efficiency. ',
      
    ]
  },
  {
    title: ' Data Analyst',
    company: 'SoftAdroit System Solutions',
    period: 'July 2024 - Present',
    description: [
      ' Collect, clean, and analyze large Datasets, Design and implement dashboards, reports, and visualizations using tools like Tableau, Power BI, or Python libraries.',
      'Actively participated in 10+ scrum sprints, contributing to task discussions, sprint planning, and progress updates in an agile environment.',
      'Managed client relationships and project timelines'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white glow-text">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 bg-[#161b22] rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/20">
              <div className="flex items-start">
                <div className="p-2 bg-[#58a6ff]/10 rounded-lg mr-4">
                  <Briefcase className="text-[#58a6ff]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-[#58a6ff] mb-2">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside text-gray-400">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}