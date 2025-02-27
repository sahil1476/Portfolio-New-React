import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: ' Data Operation Intern',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFpdwevUGhzbQ/company-logo_200_200/company-logo_200_200/0/1733296869317/arnifiofficial_logo?e=2147483647&v=beta&t=LKSeNuABnsJa8eo9Y5mERsG49l9lYq67sQJF7lG3I3k',
    company: 'Arnfi',
    period: 'Jan 2025 - Present',
    description: [
      ' Client Data Management: Maintained and updated client data on Strapi, ensuring accuracy, consistency, and accessibility for the team.',
      'Product Listing: Responsible for listing new products on the website, ensuring timely updates and optimization for better visibility.',
      'Collaboration with IFZA: Worked closely with IFZA for company setup, handling all necessary documentation and compliance requirements for business establishment.',
      'Live Client Dashboard: Managed and maintained live client dashboards, ensuring real-time data accuracy and smooth user experience for clients.'
    ]
  },
  {
    title: ' Data Analyst',
    logo: 'data:image/jpeg;base64,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',
    company: 'SoftAdroit System Solutions',
    period: 'July 2024 - Nov 2024',
    description: [
      ' Collect, clean, and analyze large Datasets, Design and implement dashboards, reports, and visualizations using tools like Tableau, Power BI, or Python libraries.',
      'Actively participated in 10+ scrum sprints, contributing to task discussions, sprint planning, and progress updates in an agile environment.',
      'Managed client relationships and project timelines'
    ]
  },
  {
    title: 'Software Developer Intern',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEh7Fk_fI9qeg/company-logo_200_200/company-logo_200_200/0/1721884724356/xenonstack_logo?e=2147483647&v=beta&t=raNCVOfYjB9hnMXgWkRuBMUbI8qa7T5hVr8JzVzQCl4',
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
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-white glow-text">Work Experience</h2> */}
        <div className=" flex items-center justify-center bg-[#0d1117]">
      <h2 className="image-text text-6xl text-center md:text-9xl font-bold mb-6" style={{
        backgroundImage: 'url(https://www.icegif.com/wp-content/uploads/2022/06/icegif-505.gif)',
        backgroundSize: 'contain',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        Work Experience
      </h2>
      </div>
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
