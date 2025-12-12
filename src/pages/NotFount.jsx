
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: 'var(--color-bgcolor-100)' }}>
      <div
        className="w-full max-w-2xl rounded-2xl p-8 shadow-lg"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(248,250,252,0.9))',
          border: '1px solid var(--color-bordercolor-100)'
        }}
      >
        <div className="flex flex-col items-center text-center">
          <div
            className="flex items-center justify-center w-20 h-20 rounded-full"
            style={{ backgroundColor: 'var(--color-primary-light)' }}
            aria-hidden
          >
            {/* simple magnifying glass / warning icon */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M11 4a7 7 0 100 14 7 7 0 000-14z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="mt-6 text-5xl font-extrabold" style={{ color: 'var(--color-primary-dark)' }}>
            404
          </h1>

          <p className="mt-2 text-lg text-gray-600">Page not found — this area is still under development.</p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => (window.location.href = '/')}
              className="px-4 py-2 rounded-md font-medium"
              style={{ backgroundColor: 'var(--color-secondary-orange)', color: 'var(--color-textcolor-300)' }}
            >
              Go home
            </button>

            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-md border"
              style={{ borderColor: 'var(--color-bordercolor-200)' }}
            >
              Reload
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-500">Development mode — content coming soon</div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
