import DesignPreview from 'components/designs/DesignPreview';
import ShowDesignsProps from 'types/ShowDesignProps';

export default function ShowDesigns({ title, components }: ShowDesignsProps) {
  return (
    <>
      <h1 className="mb-8 border-b-2 inline-block text-2xl">{title}</h1>
      {components.map(({ title, Component, parentLight }, i) => (
        <DesignPreview lightTheme={parentLight} key={i} title={title}>
          <Component />
        </DesignPreview>
      ))}
    </>
  );
}