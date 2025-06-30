import { duration } from '@mui/material/styles'
import FeatureText from '../components/common/FeatureText'
import Typography from '@mui/material/Typography'

export const experience = [
  {
    role: 'SENIOR PRODUCT ENGINEER',
    org: 'LTIMINDTREE - PUNE, INDIA',
    year: 'MAR 2023 - PRESENT',
    color: 'primary',
    duration: '2+ Years',
  },
  {
    role: 'SYSTEMS ENGINEER',
    org: 'TATA CONSULTANCY SERVICES - PUNE, INDIA',
    year: 'JUN 2021 - FEB 2023',
    color: 'success',
    duration: '1.6 Years',
  },
  {
    role: 'ASSISTANT SYSTEM ENGINEER',
    org: 'TATA CONSULTANCY SERVICES - PUNE, INDIA',
    year: 'Jun 2020 - May 2021',
    color: 'success',
    duration: '1 Year',
  },
  {
    role: 'ASSISTANT SYSTEM ENGINEER - TRAINEE',
    org: 'TATA CONSULTANCY SERVICES - PUNE, INDIA',
    year: 'Jun 2019 - May 2020',
    color: 'success',
    duration: '1 Year',
  },
]

export const experienceDetails = [
  {
    role: 'SENIOR PRODUCT ENGINEER',
    org: 'LTIMINDTREE - PUNE, INDIA',
    year: 'MAR 2023 - PRESENT',
    content: [
      <FeatureText.Description>
        <strong>RESPONSIBILITIES:</strong>
        <ul style={{ listStyleType: 'circle', paddingLeft: '10px' }}>
          <li>
            Designed, developed, and maintained{' '}
            <strong>reusable and optimized React components</strong> as part of
            the core platform foundation team.
          </li>
          <li>
            Collaborated closely with{' '}
            <strong>product owners and design teams</strong> to gather and
            analyse requirements, ensuring technical feasibility and alignment
            with business goals.
          </li>
          <li>
            Led the development of core{' '}
            <strong>React component libraries</strong>, focusing on performance,
            reusability, and extensibility from a library architecture
            perspective.
          </li>
          <li>
            Managed <strong>release processes</strong>, including versioning and
            publishing to a <strong>private JFrog repository</strong>.
          </li>
          <li>
            Spearheaded <strong>CI/CD implementation</strong> using{' '}
            <strong>GitHub Actions</strong> and{' '}
            <strong>Tekton (Google Cloud Platform)</strong> to streamline
            deployment workflows.
          </li>
          <li>
            Automated component library testing using the{' '}
            <strong>Playwright framework</strong>, reducing manual testing
            efforts by approximately 75% and achieving significant cost savings.
          </li>
          <li>
            Provided <strong>support and troubleshooting</strong> for production
            issues and user queries related to the component library.
          </li>
        </ul>
      </FeatureText.Description>,
    ],
  },
  {
    role: 'SYSTEM ENGINEER',
    org: 'TATA CONSULTANCY SERVICES - PUNE, INDIA',
    year: 'Feb 2023 - May 2019',
    content: [
      <Typography variant='subtitle2'>
        <p>
          <strong>SYSTEMS ENGINEER</strong>
          <br />
          JUN 2021 – FEB 2023
        </p>
        <p>
          <strong>ASSISTANT SYSTEM ENGINEER</strong>
          <br />
          Jun 2020 - May 2021
        </p>
        <p>
          <strong>ASSISTANT SYSTEM ENGINEER - TRAINEE</strong>
          <br />
          Jun 2019 - May 2020
        </p>
      </Typography>,
      <FeatureText.Description>
        <strong>RESPONSIBILITIES:</strong>
        <ul style={{ listStyleType: 'circle', paddingLeft: '10px' }}>
          <li>
            Developed and maintained{' '}
            <strong>internal and public-facing websites</strong> using{' '}
            <strong>ReactJS, NodeJS, and PHP</strong>.
          </li>
          <li>
            Contributed to an <strong>IoT-based project</strong>, handling
            communication between the application and IoT devices, and managing
            data processing and dashboard development on <strong>AWS</strong>.
          </li>
          <li>
            Designed and implemented{' '}
            <strong>UI mock-ups and user interfaces</strong> based on
            client-provided prototypes, ensuring responsive and intuitive user
            experiences.
          </li>
          <li>
            Diagnosed and resolved issues in existing codebases, implementing
            performance enhancements that{' '}
            <strong>
              significantly improved website functionality and speed
            </strong>
            .
          </li>
          <li>
            Proficient in various <strong>AWS services</strong> such as{' '}
            <strong>Elastic Beanstalk, IAM, S3, EC2</strong>, and managed
            infrastructure setups including{' '}
            <strong>load balancer configurations</strong> and{' '}
            <strong>automated backups</strong>.
          </li>
          <li>
            Implemented <strong>CI/CD pipelines</strong> using{' '}
            <strong>AWS CodePipeline</strong> with GitHub for version control
            and deployed React applications as static sites on S3 using{' '}
            <strong>GitHub Workflows</strong>.
          </li>
          <li>
            Responsible for{' '}
            <strong>routine maintenance and security updates</strong>, ensuring
            high availability and protection of all managed websites.
          </li>
        </ul>
      </FeatureText.Description>,
    ],
  },
]
