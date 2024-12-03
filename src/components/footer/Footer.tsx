
export default function Footer() {
  return (
    <footer className="w-full flex h-6 items-center justify-between bg-zinc-900 px-2 text-xs text-white border-t border-t-[rgba(255,255,255,0.1)]">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" />
            <path d="M8 4.5a.5.5 0 0 1 .5.5v3.5H12a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5z" />
          </svg>
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
          </svg>
          <span>Go Live</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span>UTF-8</span>
        <span>TypeScript React</span>
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
      </div>
    </footer>
  );
}
