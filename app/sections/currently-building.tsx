export function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="section-y container-page">
      {/* TODO (chunk 4): plain tags + one-line why, no progress bars. See v2 §7, §8. */}
      <p className="font-mono-label text-xs text-accent-brass">
        [ currently building — build pending ]
      </p>
    </section>
  );
}
