const skills = ['TypeScript', 'JavaScript', 'TypeScript', 'C#', 'React', 'Vue', 'Angular', 'NestJS', 'ASP.NET Core', 'MongoDB', 'SQLite', 'MySQL']

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About me</h2>
      <p>
        I studied web development at Mid Sweden University (Mittuniversitetet). I enjoy building full applications, from
        the database and REST API to a finished frontend. My thesis explored how generative AI can be used to grade submissions
        and give automatic feedback.
      </p>
      <ul className="tags">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
