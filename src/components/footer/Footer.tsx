export default function Footer() {
  return (
    <footer className="w-full flex h-6 items-center justify-between bg-zinc-900 px-2 text-xs text-white border-t border-t-[rgba(255,255,255,0.1)]">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.677 11.3L12.7 1.323a1.56 1.56 0 0 0-2.205 0l-1.89 1.89 2.953 2.952a2.352 2.352 0 0 1 2.933.351 2.35 2.35 0 0 1 .35 2.933l2.946 2.946a2.352 2.352 0 1 1-.976.976l-2.858-2.857v6.28a2.352 2.352 0 1 1-1.406 0v-6.285a2.35 2.35 0 0 1-.976-3.62L8.468 3.814 1.323 10.96a1.56 1.56 0 0 0 0 2.205L11.3 22.677a1.56 1.56 0 0 0 2.205 0L22.677 13.5a1.56 1.56 0 0 0 0-2.2z" />
          </svg>
          <span>main</span>
        </div>

        <div className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 3c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            <path d="M3.515 3.515c-4.686 4.686-4.686 12.284 0 16.97s12.284 4.686 16.97 0 4.686-12.284 0-16.97-12.284-4.686-16.97 0zm2.122 2.122c3.905-3.905 10.236-3.905 14.142 0s3.905 10.236 0 14.142-10.236 3.905-14.142 0-3.905-10.236 0-14.142z" />
          </svg>
          <span>Live Share</span>
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
