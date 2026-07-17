const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We map your current workflows, identify bottlenecks, and agree on the highest-ROI automation targets.',
  },
  {
    number: '02',
    title: 'Custom Design',
    description:
      'I design the full architecture — tools, data flows, triggers, and fallback paths — before a single node is built.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Pipelines are built iteratively in your sandbox environment. You see progress at every checkpoint.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Edge cases, error handling, and load scenarios are tested thoroughly before anything touches production.',
  },
  {
    number: '05',
    title: 'Document',
    description:
      'Every workflow gets a plain-English runbook so your team can maintain, extend, or hand off the automation.',
  },
  {
    number: '06',
    title: 'Launch & Improve',
    description:
      'We go live, monitor the first runs together, and iterate based on real data. Ongoing support available.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-5 md:px-8" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label mb-3">Process</p>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
          >
            From Business Problem to<br className="hidden sm:block" />
            Working Automation.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card p-6 group relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, transparent, #f97316, transparent)', opacity: 0 }}
              />
              <div className="step-number mb-4">{step.number}</div>
              <h3
                className="font-display font-semibold mb-2"
                style={{ fontSize: '1rem', color: '#f0f0f0' }}
              >
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: '#666', lineHeight: '1.65' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
