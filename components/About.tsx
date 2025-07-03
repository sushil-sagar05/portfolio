'use client';
export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-background text-foreground"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-muted-foreground">
          I’m <span className="font-semibold text-primary">Sushil Sagar</span>, a
          Computer Science undergraduate passionate about building intelligent,
          scalable web systems. I specialize in crafting end-to-end applications
          integrating full-stack engineering with machine learning — from AI-driven
          platforms like <em>NyayNetra</em> for legal document analysis to{' '}
          <em>MovieMeter</em>, a real-time personalized movie recommender.
        </p>

        <p className="text-lg leading-relaxed text-muted-foreground">
          I enjoy solving real-world problems with clean code, smart architecture,
          and purposeful design. I actively contribute to open source, learn advanced
          AI tools like Hugging Face Transformers, and continuously improve my DevOps
          and backend skills. Whether deploying microservices or optimizing ML
          workflows, I love building impactful solutions.
        </p>

        <p className="text-lg leading-relaxed text-muted-foreground font-medium">
          Let’s build something meaningful together.
        </p>
      </div>
    </section>
  );
}
