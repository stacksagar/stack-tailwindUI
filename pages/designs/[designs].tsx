import { useRouter } from 'next/router'; 
import AllDesigns from 'src/data/others/AllDesigns'; 
import UppercaseFirstLatter from 'src/utils/UppercaseFirstLatter';

export default function DesignsComponents() {
  const router = useRouter();
  const pageName: string | any = router.query?.designs;

  const CurrentDesign = AllDesigns[`${UppercaseFirstLatter(pageName)}`];

  // If not found any design in [Allesigns] objects
  if (!CurrentDesign) {
    return (
      <div className="p-10 text-red-300 text-lg min-h-screen font-semibold">
        Not Found Any Design, Maybe you are in invalid url!
      </div>
    );
  }

  return <CurrentDesign />;
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
