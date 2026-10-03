const skills = ['TypeScript', 'JavaScript', 'C#', 'React', 'Vue', 'Blazor', 'Node.js', 'NestJS', 'ASP.NET Core', 'Prisma', 'MongoDB', 'SQLite']

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About me</h2>
      <p>
        I studied web development at Mid Sweden University (Mittuniversitetet). I enjoy building full applications, from
        the database and REST API to a finished frontend. My thesis explored how generative AI can give students
        automatic feedback in higher education.
      </p>
      <p>Outside of code I like football, space and a good workout at the gym.</p>
      <ul className="tags">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
