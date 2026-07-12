import { writingTopics } from "@/app/content/writing";

export function Writing() {
  return (
    <section id="writing" className="section-y container-page">
      <div className="max-w-xl">
        <p className="font-mono-label text-xs text-accent-brass">Writing</p>
        <h2 className="mt-4 text-5xl leading-[1.05] text-text-primary sm:text-6xl">
          Not published yet — here&apos;s what&apos;s planned.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-text-muted">

          
          I&apos;d rather show you what I&apos;m going to write about than
          fake a blog with placeholder posts.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {writingTopics.map((topic) => (
          <div
            key={topic.id}
            className="rounded-[20px] border border-dashed border-border-hairline p-6"
          >
            <span className="font-mono-label text-xs text-text-disabled">
              planned
            </span>
            <h3 className="mt-3 text-lg text-text-primary">{topic.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {topic.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
