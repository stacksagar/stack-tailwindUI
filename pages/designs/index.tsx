export default function Main() {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col space-y-5 p-9">
        <h1 className="text-4xl text-gray-400 italic">
          React + TailwindCSS = Beautiful Components
        </h1>
        <p className="text-2xl mx-auto text-gray-300">
          React components for faster and easier web development. Build your own
          design system.
        </p>
      </div>

      <h1 className="text-2xl mt-12 mb-5 pl-9">
        First you have to setup TailwindCSS!
      </h1>
      <div className="flexjcic px-9">
        <a
          target="_blank"
          href="https://tailwindcss.com/docs/guides/create-react-app"
          className="text-2xl text-blue-400 underline"
        >
          Setup TailwindCSS in your react.js project
        </a>
        <a
          target="_blank"
          href="https://tailwindcss.com/docs/guides/nextjs"
          className="text-2xl text-blue-400 underline"
        >
          Setup TailwindCSS in your next.js project
        </a>
      </div>
    </section>
  );
}
