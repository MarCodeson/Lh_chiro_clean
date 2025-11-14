const focusItems = [
  'Pain resolution or relief',
  'Improved range of motion',
  'Trauma and sports injuries',
  'Optimal performance for athletes',
]

export function ClinicalFocus() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 text-center text-[rgba(95,105,109,1)]">
      <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-[1.8rem]">
        {focusItems.map(item => (
          <h3 key={item} className="font-heading">
            {item}
          </h3>
        ))}
      </div>
    </section>
  )
}
