/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default async function Home() {
  const data = await getJSONData();
  const skillGroups: [string, string[]][] = Object.entries(data.skills);

  return (
    <main>
      {/* Banner Section */}
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-1/2 mx-auto lg:w-1/3">
            <Image
              src="/assets/profile.jpg"
              width={280}
              height={280}
              alt="Developer"
              className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Hey 👋, I&apos;m AJ
              </h1>
              <p className="text-xl text-primary">{data.personalInfo.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Based in {data.personalInfo.location}
              </p>
            </div>
            <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            <div className="space-x-4">
              <Link
                href={data.contactInfo.github}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={`mailto:${data.contactInfo.email}`}>
                <Button variant="secondary" size="icon">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <a
              href={`tel:${data.contactInfo.phone}`}
              className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
            >
              {data.contactInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-6">About Me</h2>
        <p className="max-w-3xl text-gray-500 dark:text-gray-400 lg:text-lg">
          {data.personalInfo.about}
        </p>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map(([category, skills]) => (
            <div key={category}>
              <h3 className="mb-3 text-xl font-medium capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <Card key={service.title} className="p-6">
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="mt-3">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Career Goal Section */}
      <section className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
        <h2 className="font-bold text-3xl md:text-5xl mb-6">Career Goal</h2>
        <p className="max-w-3xl text-gray-500 dark:text-gray-400 lg:text-lg">
          {data.personalInfo.careerGoal}
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {data.projects.map((project) => (
            <Card key={project.title}>
              <div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <Link
                      href={project.code_repo_url}
                      prefetch={false}
                    >
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
