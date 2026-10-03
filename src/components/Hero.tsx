export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>Helmer Bergström</h1>
      <p className="lead">
        Fullstack web developer from Sweden. I build web apps and APIs with TypeScript, React, Vue, NestJS and C#/.NET.
      </p>
      <div className="actions">
        <a className="button" href="#projects">
          See my projects
        </a>
        <a className="button secondary" href="https://github.com/HelmerBergstrom" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}
