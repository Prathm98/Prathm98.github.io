export const techStack = [
  {
    title: 'Frontend',
    items: ['ReactJS', 'Redux', 'HTML5', 'CSS3', 'JavaScript'],
    summary:
      'Experienced in building dynamic and responsive user interfaces using ReactJS and Redux for state management. Strong foundation in core web technologies like HTML5, CSS3, and JavaScript to create interactive, accessible, and cross-browser-compatible applications.',
  },
  {
    title: 'Backend',
    items: ['NodeJS', 'PHP', 'Core Java'],
    summary:
      'Skilled in developing scalable server-side applications using NodeJS, with additional experience in PHP and Core Java. Comfortable designing RESTful APIs and integrating backend logic with frontend interfaces.',
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    summary:
      'Proficient in relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, have basic knowledge schema design and data modeling for scalable applications.',
  },
  {
    title: 'Cloud / DevOps',
    items: [
      'AWS (S3, EC2, IAM, Elastic Beanstalk)',
      'GitHub Actions',
      'Tekton',
      'CodePipeline',
    ],
    summary:
      'Hands-on experience with AWS cloud services for hosting, scaling, and securing applications. Familiar with CI/CD tools like GitHub Actions, Tekton, and AWS CodePipeline to automate build, test, and deployment workflows.',
  },
  {
    title: 'Tools',
    items: ['Git', 'Figma', 'Jira', 'ServiceNow', 'Photoshop'],
    summary:
      'Proficient with development and collaboration tools such as Git for version control, Figma for UI/UX design, IntelliJ for coding, and ServiceNow for ITSM. Also adept at basic graphic design and editing using Photoshop.',
  },
]

export const techCategories = techStack.map((item) => item.title)
