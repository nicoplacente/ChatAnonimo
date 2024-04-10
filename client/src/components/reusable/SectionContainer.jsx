export default function SectionContainer({ children, classname }) {
  return (
    <section
      className={`flex flex-col max-w-3xl w-full my-12 gap-12 items-center px-4 ${classname}`}
    >
      {children}
    </section>
  );
}
