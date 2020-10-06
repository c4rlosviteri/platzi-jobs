import React, { useState } from 'react'
import { render as rtlRender } from '@testing-library/react'
import * as hooks from '../store'

export const results = [
  {
    id: '13778f0a-6052-49ec-93c4-0791a9f5d3c1',
    type: 'Full Time',
    url:
      'https://jobs.github.com/positions/13778f0a-6052-49ec-93c4-0791a9f5d3c1',
    created_at: 'Thu Oct 01 17:02:23 UTC 2020',
    company: 'Compute Software',
    company_url: 'https://www.computesoftware.com',
    location: 'USA',
    title: 'Senior Software Engineer (Clojure Required)',
    description:
      "<p><strong>About Us</strong></p>\n<p>With ever-growing workloads on the cloud, companies face significant challenges in managing productivity and spending, and maximizing impact to their businesses. Compute Software is addressing a huge market opportunity to help companies make good business decisions and run optimally on the public cloud. We're building a powerful platform to give customers the tools they need to gain transparency, optimize their usage, and execute change across their organizations.</p>\n<p>We're a small distributed team, currently spanning California to New Jersey, and we offer early stage market-rate compensation (including equity), health and dental insurance, and 401K benefits. You'll be joining a venture capital-backed, distributed team with ambitious goals, and you will have the ability to make a direct and lasting impact on the team and product.</p>\n<p><strong>Your Role</strong></p>\n<p>Be one of the earliest employees and join our early-stage engineering team as a Senior Software Engineer. You will be essential in shaping the features and functionality of our SaaS platform, culture and processes.</p>\n<p>Our backend is written in Clojure and driven by data in Datomic and InfluxDB. The frontend is written in ClojureScript using re-frame. The data is exposed to the frontend with Pathom. Everything is deployed to k8s running in AWS.</p>\n<p>For product development we follow Shape Up. We use Notion, Slack, and ClubHouse.</p>\n<p><strong>What will you do at Compute Software?</strong></p>\n<ul>\n<li>Write Clojure and ClojureScript.</li>\n<li>Design, build, and deploy features and bug fixes across the entire stack.</li>\n<li>Become an expert in all the nuances of the various cloud platforms like Amazon Web Services, Google Cloud, and Microsoft Azure.</li>\n<li>Provide product feedback and evaluate trade-offs to impact product direction.</li>\n<li>Debug production problems.</li>\n</ul>\n<p><strong>What We're Looking For</strong></p>\n<p>Passion - you are excited about the large, high-growth cloud computing market and figuring out how to help customers, who are using cloud computing solutions today. You are excited by being one of the earliest employees and getting to work with a small team.</p>\n<p>Engineering experience - you're a Clojure practitioner with 6+ years of professional experience. You know what it takes to create large-scale b2b software. You can create effective and simple solutions to problems quickly, and communicate your ideas clearly to your teammates.</p>\n<p>Product-minded - you love building products and you care about the details of creating a great user experience. You have an interest in how users will use our platform and the impact we will have on them. You can balance your consideration of the product and user requirements with technical complexity and implementation details to make appropriate decisions when things are unclear.</p>\n<p>Effective communication - you're great at communicating. If something is unclear you reach out and ask questions. You're comfortable owning, communicating and presenting information on specific projects or initiatives, both in writing and in person.</p>\n<p>Organizational and project management - you are highly organized and able to self-manage projects in a fast-moving company. You are able to take high level goals and break them down into achievable steps.</p>\n<p><strong>Please Send Us</strong></p>\n<ul>\n<li>Your resume / LinkedIn Profile</li>\n<li>Link to Github projects or other work samples</li>\n</ul>\n",
    how_to_apply:
      '<p>Email your information to <a href="mailto:jobs@computesoftware.com">jobs@computesoftware.com</a> with \'Senior Software Engineer\' in the subject line.</p>\n',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbTJMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e9564fc362e1f4368d4345f39c013db2f0613ebf/compute-software-sticker%20copy.png',
  },
  {
    id: '4675999f-d098-454e-8340-c2d42c36bc78',
    type: 'Full Time',
    url:
      'https://jobs.github.com/positions/4675999f-d098-454e-8340-c2d42c36bc78',
    created_at: 'Thu Oct 01 13:00:35 UTC 2020',
    company: 'Pixtunes GmbH',
    company_url: 'https://pixtunes.com/',
    location: 'Berlin',
    title: 'System Architect / Software Lead (m/w/d)',
    description:
      '<p>Pixtunes is a Berlin-based deep-tech startup with the goal of introducing a completely new entertainment technology to the world of consumer electronics that will change the way people perceive their own reality in everyday life.</p>\n<p>We are design-oriented visionaries who hope to create experiences that go far beyond what people have ever encountered before. Our vision for a new kind of music has led us to invent a revolution that we can proudly call our own — a technology that transforms existing music formats and entertainment systems to a whole new level.</p>\n<p>From the individual consumer to global markets, our goal is to provide everyone with their own unique soundtrack for their lives. An intense experience like in the cinema, only it is drawn from your own reality, accompanied by ground-breaking music and sound.</p>\n<p><strong>Tasks</strong></p>\n<ul>\n<li>Design, develop, and deploy client audio applications with a focus on software quality, performance, and reliability</li>\n<li>Develop and optimise the Pixtunes software architecture with a strong focus on the mobile APP (iOS/Android)</li>\n<li>Specification and definition of the overall system architecture incl. the relevant interfaces / SDKs</li>\n<li>Guide the team and collaborate closely with other engineers, product designers, and sound designers, becoming a core member of an autonomous, cross-functional team</li>\n<li>Take responsibility for the codebase owned by your team</li>\n<li>Mentorship, code review, and advisement on best practices for junior team members</li>\n<li>Work in an environment that supports your individual growth</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>7+ years experience with C++ programming and development of mobile APPs (iOS/(Android)</li>\n<li>Audio/DSP development &amp; programming desirable</li>\n<li>Experience developing and deploying client-based music software products</li>\n<li>Dedication to industry-standard development processes and long-term codebase quality</li>\n<li>Experience with JUCE framework</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>Fast-growing high tech company with a great network of investors and partners</li>\n<li>Ability to contribute directly to the future of music</li>\n<li>Flexible career development path within an international and diverse team</li>\n<li>An inspiring working environment with modern workspaces, flexible work time, short lines of communication, flat structures, positive leadership, and great team spirit. A fun startup working environment in the middle of Berlin, with team gatherings and company parties!</li>\n</ul>\n<p><strong>Does this sound like the perfect challenge for you? Please send your application!</strong></p>\n',
    how_to_apply:
      '<p><a href="https://pixtunes.join.com/jobs/1431044-system-architect-software-lead-m-w-d?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=system%2Barchitect%2Bsoftware%2Blead%2Bm%2Bw%2Bd">https://pixtunes.join.com/jobs/1431044-system-architect-software-lead-m-w-d?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=system%2Barchitect%2Bsoftware%2Blead%2Bm%2Bw%2Bd</a></p>\n',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbUtMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ef12a540c5baf683336efe45780fcffd4ef0016d/Download%20(5).png',
  },
]

export function mockStore(hookState) {
  return jest
    .spyOn(hooks, 'useStore')
    .mockImplementation((callback) => callback(hookState))
}

export * from '@testing-library/react'

export function render(ui, { initialState, ...options } = {}) {
  function Wrapper({ children }) {
    const [value, onChange] = useState(initialState)

    return React.cloneElement(children, {
      onChange,
      value,
    })
  }

  return rtlRender(
    ui,
    initialState !== undefined ? { wrapper: Wrapper, ...options } : options,
  )
}
