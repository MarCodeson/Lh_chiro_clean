import { Section } from '@/components/ui/Section'

export function ProcessSteps() {
  return (
    <Section>
      <div className="card p-6">
        <h2 className="text-2xl font-semibold">What to expect</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          <li className="rounded-xl border border-neutral-200 p-4"><span className="text-sm font-semibold">1) Book</span><p className="mt-1 text-sm text-neutral-700">Send your details with your preferred location.</p></li>
          <li className="rounded-xl border border-neutral-200 p-4"><span className="text-sm font-semibold">2) Assess</span><p className="mt-1 text-sm text-neutral-700">We assess your joints, muscles and movement.</p></li>
          <li className="rounded-xl border border-neutral-200 p-4"><span className="text-sm font-semibold">3) Plan</span><p className="mt-1 text-sm text-neutral-700">We agree next steps together. No pressure.</p></li>
        </ol>
      </div>
    </Section>
  )
}
