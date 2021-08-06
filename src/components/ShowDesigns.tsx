import ShowDesignsProps from 'src/types/ShowDesignProps';
import ShowDesign from './ShowDesign';

export default function ShowDesigns({ title, components }: ShowDesignsProps) {
  return (
    <div className="max-w-full">
      <h1 className="mb-8 border-b-2 inline-block text-2xl text-yellow-400">
        {title}
      </h1>

      {components.map(({ Component, ...props }, i) => (
        <ShowDesign key={i} index={i} {...props}>
          <Component />
        </ShowDesign>
      ))}
    </div>
  );
}
