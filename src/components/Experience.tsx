import React from 'react';

const experiences = [
  {
    title: 'Data Operation Intern',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFpdwevUGhzbQ/company-logo_200_200/company-logo_200_200/0/1733296869317/arnifiofficial_logo?e=2147483647&v=beta&t=LKSeNuABnsJa8eo9Y5mERsG49l9lYq67sQJF7lG3I3k',
    company: 'Arnifi',
    period: 'Jan 2025 - Present',
    description: [
      'Updating User Dashboard on Strapi',
      'Compliance Task and Email',
      'Notion Data management',
      'Figma Flow Charts',
      'Product Catalogue Management on Strapi',
    ]
  },
  {
    title: ' Data Analyst',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEnDna9cp5_jw/company-logo_100_100/company-logo_100_100/0/1722507705272/softadroit_logo?e=2147483647&v=beta&t=FfoxX26eg0K-rNKdF7x434jiTe0fQ0IFFGx_hoZ84fE',
    company: 'SoftAdroit System Solutions',
    period: 'July 2024 - Dec 2024',
    description: [
      ' Collect, clean, and analyze large Datasets, Design and implement dashboards, reports, and visualizations using tools like Tableau, Power BI, or Python libraries.',
      'Actively participated in 10+ scrum sprints, contributing to task discussions, sprint planning, and progress updates in an agile environment.',
      'Managed client relationships and project timelines'
    ]
  },
  {
    title: 'Software Developer Intern',
    logo: 'https://media.designrush.com/agencies/63605/conversions/XenonStack-logo-profile.jpg',
    company: 'XenonStack',
    period: 'Jan 2024 - June 2024',
    description: [
      'Developed a responsive web application using React.js , TailwndCSS and GoLang ensuring seamless data flow between frontend and backend.',
      'Implemented data processing workflows using Apache Spark, enabling efficient handling of large-scale data.',
      'Implemented REST APIs and integrated third-party services',
      'Participated in code reviews, improving code quality and development efficiency. ',
      
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
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mr-2 mt-2">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
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
