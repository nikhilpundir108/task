import type { Metadata } from 'next';
import EmailForm from './email-form';
import {
  Code2,
  Globe,
  Layers,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Star,
  Briefcase,
  Clock,
  TrendingUp,
  ChevronRight,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Remote Full Stack Developer Jobs — MERN, MEAN, Next.js, Rails & More',
  description:
    'Find remote full stack engineer jobs matched to your stack. MERN developer jobs, MEAN stack jobs, Next.js developer jobs, full-stack contract roles, and remote freelance work. We match by stack, not by lowest bid.',
  keywords: [
    'remote full stack developer jobs',
    'full stack engineer remote',
    'MERN developer jobs',
    'MEAN stack jobs',
    'Next.js developer jobs',
    'full-stack contract roles',
    'remote full-stack freelance work',
    'remote software engineer jobs',
    'Rails developer jobs',
  ],
  openGraph: {
    title: 'Remote Full Stack Developer Jobs — MERN, MEAN, Next.js, Rails & More',
    description:
      'Get invited to remote full stack roles that fit your toolchain. MERN, MEAN, Next.js, Rails, and more. We match by stack, not by lowest bid.',
    type: 'website',
  },
};

const stacks = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Ruby on Rails', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Go', category: 'backend' },
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'AWS', category: 'cloud' },
  { name: 'GCP', category: 'cloud' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'GraphQL', category: 'api' },
  { name: 'REST APIs', category: 'api' },
  { name: 'tRPC', category: 'api' },
  { name: 'Prisma', category: 'database' },
  { name: 'Tailwind CSS', category: 'frontend' },
];

const categoryColors: Record<string, string> = {
  frontend: 'bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100',
  backend: 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100',
  database: 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100',
  cloud: 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100',
  devops: 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200',
  language: 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100',
  api: 'bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100',
};

const engagementTypes = [
  {
    icon: Zap,
    title: 'Short-Sprint MVPs',
    duration: '4–12 weeks',
    description:
      'Validate ideas fast. You join a focused team, own a slice of the stack end-to-end, and ship something real. Perfect for developers who thrive under tight feedback loops.',
    tags: ['Product validation', 'Startup pace', 'Full autonomy'],
    color: 'border-t-amber-400',
  },
  {
    icon: Users,
    title: 'Ongoing Product Teams',
    duration: '6–24 months',
    description:
      'Embed with a scaling product org. You own features, contribute to architecture decisions, and grow alongside the codebase. Treated as a core team member, not a vendor.',
    tags: ['Long-term stability', 'Career growth', 'Deep ownership'],
    color: 'border-t-sky-400',
  },
  {
    icon: Layers,
    title: 'Staff Augmentation',
    duration: 'Flexible',
    description:
      'Slot into an existing engineering team to unblock velocity. You bring your stack expertise and ramp quickly. Great for senior engineers who can hit the ground running.',
    tags: ['Immediate impact', 'Flexible hours', 'Senior-level work'],
    color: 'border-t-emerald-400',
  },
];

const featuredRoles = [
  {
    title: 'Senior Full Stack Engineer',
    company: 'Series B Fintech',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    rate: '$120–$150/hr',
    type: 'Contract',
    posted: '2 days ago',
  },
  {
    title: 'MERN Stack Developer',
    company: 'Remote-First SaaS',
    stack: ['MongoDB', 'Express.js', 'React'],
    rate: '$95–$120/hr',
    type: 'Full-time',
    posted: '1 day ago',
  },
  {
    title: 'Full Stack Engineer (Rails + React)',
    company: 'Marketplace Platform',
    stack: ['Ruby on Rails', 'React', 'Redis'],
    rate: '$100–$130/hr',
    type: 'Contract',
    posted: '3 days ago',
  },
  {
    title: 'Next.js Developer',
    company: 'E-commerce Scale-up',
    stack: ['Next.js', 'TypeScript', 'Prisma'],
    rate: '$90–$115/hr',
    type: 'Part-time',
    posted: 'Today',
  },
  {
    title: 'MEAN Stack Engineer',
    company: 'Enterprise SaaS',
    stack: ['MongoDB', 'Express.js', 'Angular'],
    rate: '$110–$140/hr',
    type: 'Full-time',
    posted: '4 days ago',
  },
  {
    title: 'Backend-Heavy Full Stack Dev',
    company: 'Data Infrastructure',
    stack: ['Node.js', 'GraphQL', 'AWS'],
    rate: '$130–$160/hr',
    type: 'Contract',
    posted: '2 days ago',
  },
];

const stats = [
  { value: '2,400+', label: 'Active remote roles' },
  { value: '94%', label: 'Stack-match rate' },
  { value: '48 hrs', label: 'Avg. time to first interview' },
  { value: '$118K', label: 'Avg. annual equivalent' },
];

const steps = [
  {
    step: '01',
    title: 'Share your stack',
    description: 'Tell us what you build with. Frameworks, databases, cloud — every layer matters.',
  },
  {
    step: '02',
    title: 'We curate matches',
    description:
      'Our team reviews open roles and surfaces only those where your exact toolchain is a fit — not just keyword matches.',
  },
  {
    step: '03',
    title: 'Get invited to interviews',
    description:
      'No cold applying. You receive direct invitations from companies who already want your stack.',
  },
  {
    step: '04',
    title: 'Choose and start',
    description:
      'Pick the engagement that fits your goals. We handle contracts, onboarding logistics, and payment.',
  },
];

const testimonials = [
  {
    quote:
      "Finally, a platform that doesn't send me PHP jobs when I'm a Next.js engineer. Every intro has been relevant.",
    name: 'Marcus T.',
    role: 'Full Stack Engineer',
    stack: 'Next.js · Node.js · PostgreSQL',
    rating: 5,
  },
  {
    quote:
      "I landed a 6-month MERN contract within a week. The stack filtering is genuinely impressive — they knew my profile.",
    name: 'Priya K.',
    role: 'Senior MERN Developer',
    stack: 'MongoDB · Express · React',
    rating: 5,
  },
  {
    quote:
      "As a Rails developer, I thought remote work would mean settling. I found a role that uses my exact stack and pays better than on-site.",
    name: 'James O.',
    role: 'Full Stack Rails Dev',
    stack: 'Rails · React · AWS',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'What types of full stack roles do you list?',
    a: 'We cover full-time remote employment, long-term contracts, short-sprint project work, and freelance engagements across all major full stack combinations including MERN, MEAN, Next.js, Rails, Django, and more.',
  },
  {
    q: 'How does stack-matching actually work?',
    a: 'When you apply, you specify your primary and secondary technologies. Our team manually reviews each role\'s requirements and only presents your profile to companies whose stack aligns — no algorithmic keyword guessing.',
  },
  {
    q: 'Do I need to be exclusively full stack?',
    a: 'Not necessarily. Many of our roles suit engineers who are strong on one side but comfortable across the stack. If you lean frontend or backend, we note that and filter accordingly.',
  },
  {
    q: 'What experience level do most roles target?',
    a: 'The majority of roles are mid-to-senior level (3–10 years), though we do have junior-friendly positions for developers with strong portfolio projects. Senior and staff-level roles are most abundant.',
  },
  {
    q: 'Are these roles truly remote, or hybrid?',
    a: 'All roles listed are 100% remote. Companies on our platform have committed to async-first, globally distributed teams. No surprise "you must come in twice a week" requirements.',
  },
];

export default function RemoteFullStackDeveloperJobsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-slate-900 text-lg">StackMatch</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="#stacks" className="hover:text-slate-900 transition-colors">Stacks</a>
            <a href="#roles" className="hover:text-slate-900 transition-colors">Open roles</a>
            <a href="#engagements" className="hover:text-slate-900 transition-colors">Engagements</a>
          </div>
          <a
            href="#apply"
            className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Apply now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/30 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0tNiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-medium tracking-wide uppercase">100% Remote · Global</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Remote Full Stack Developer Jobs —{' '}
            <span className="text-sky-400">MERN, MEAN, Next.js, Rails</span> &amp; More
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            We match by stack, not by lowest bid — you get invited to roles that fit your toolchain.
            Join 12,000+ full stack engineers who found remote work matched to their exact tech.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5 text-base"
            >
              Find stack-matched roles
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#roles"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20 text-base"
            >
              Browse open roles
            </a>
          </div>

          {/* LSI keywords as chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              'Full stack engineer remote',
              'MERN developer jobs',
              'MEAN stack jobs',
              'Next.js developer jobs',
              'Full-stack contract roles',
              'Remote full-stack freelance',
            ].map((kw) => (
              <span
                key={kw}
                className="text-xs bg-white/8 border border-white/10 text-slate-400 px-3 py-1.5 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{value}</div>
                <div className="text-sm text-slate-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stacks we hire for */}
      <section id="stacks" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Tech coverage</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Stacks we hire for</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-lg">
              Every technology in our network is actively requested by hiring teams right now. If your stack is here, we have a role for you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {stacks.map(({ name, category }) => (
              <span
                key={name}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-150 ${categoryColors[category]}`}
              >
                {name}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-slate-500">
            {Object.entries(categoryColors).map(([cat, cls]) => (
              <div key={cat} className="flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded-full inline-block ${cls.split(' ')[0].replace('bg-', 'bg-')}`} />
                <span className="capitalize">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Roles */}
      <section id="roles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Now hiring</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Open remote roles</h2>
              <p className="mt-3 text-slate-600 text-lg">
                A sample of active full stack engineer remote positions.
              </p>
            </div>
            <a
              href="#apply"
              className="inline-flex items-center gap-1.5 text-sky-600 font-semibold hover:text-sky-700 transition-colors shrink-0"
            >
              View all roles <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRoles.map((role) => (
              <div
                key={role.title}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-50 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                    <Briefcase className="w-5 h-5 text-slate-500 group-hover:text-sky-600 transition-colors" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      role.type === 'Contract'
                        ? 'bg-amber-50 text-amber-700'
                        : role.type === 'Full-time'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-sky-50 text-sky-700'
                    }`}
                  >
                    {role.type}
                  </span>
                </div>

                <h3 className="font-semibold text-slate-900 text-base leading-snug group-hover:text-sky-700 transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{role.company}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <span key={tech} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{role.rate}</span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {role.posted}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section id="engagements" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest">Engagement models</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Typical full-stack engagements
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
              Whether you want to sprint through an MVP or embed long-term, we have the right engagement structure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementTypes.map(({ icon: Icon, title, duration, description, tags, color }) => (
              <div
                key={title}
                className={`bg-slate-900 rounded-2xl p-8 border-t-4 ${color} border-x border-b border-slate-800 hover:bg-slate-800/80 transition-colors duration-200`}
              >
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-slate-200" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-white text-xl">{title}</h3>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">{duration}</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Banner */}
      <section className="py-16 bg-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-sky-100 mx-auto mb-4" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            "We match by stack, not by lowest bid — you get invited to roles that fit your toolchain."
          </blockquote>
          <p className="mt-5 text-sky-100 text-lg">
            No spray-and-pray job boards. No underbidding races. Just relevant work.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Process</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">How it works</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-lg">
              From profile to first interview in under 48 hours on average.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="relative">
                <div className="text-5xl font-black text-slate-100 leading-none mb-4">{step}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-slate-50 rounded-2xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, label: 'Stack-first matching', desc: 'Your tech is the filter, not an afterthought' },
                { icon: Globe, label: 'Truly global remote', desc: 'Roles across all time zones and locations' },
                { icon: CheckCircle2, label: 'Pre-vetted companies', desc: 'Every company is screened before listing' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{label}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Developer stories</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Developers hired by stack</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, name, role, stack, rating }) => (
              <div key={name} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-sm italic">"{quote}"</p>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="font-semibold text-slate-900">{name}</div>
                  <div className="text-sm text-slate-500">{role}</div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {stack.split(' · ').map((t) => (
                      <span key={t} className="text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Apply */}
      <section id="apply" className="py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Join 12,000+ developers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to work in your stack?
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto">
            Create your profile in 5 minutes. List your stack, your preferred engagement, and your rate. We'll handle the rest.
          </p>

          <EmailForm />

          <p className="mt-4 text-xs text-slate-500">
            No spam. No cold calls. Just relevant role invitations matching your stack.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
            {[
              ['100% remote', 'Work from anywhere'],
              ['Stack-matched', 'Not keyword-guessed'],
              ['No placement fees', 'For developers'],
            ].map(([title, sub]) => (
              <div key={title} className="text-center">
                <CheckCircle2 className="w-5 h-5 text-sky-400 mx-auto mb-2" />
                <div className="font-semibold text-sm text-white">{title}</div>
                <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Questions</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Frequently asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-slate-50 rounded-xl border border-slate-200 open:border-sky-200 transition-colors"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-slate-900 text-sm list-none select-none">
                  {q}
                  <ChevronRight className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-sky-400" />
              </div>
              <span className="font-semibold text-slate-200">StackMatch</span>
            </div>
            <div className="text-xs text-center">
              Remote Full Stack Developer Jobs · MERN Developer Jobs · MEAN Stack Jobs · Next.js Developer Jobs · Full-Stack Contract Roles
            </div>
            <p className="text-xs">&copy; {new Date().getFullYear()} StackMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
