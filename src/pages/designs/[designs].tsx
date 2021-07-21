import { useRouter } from 'next/router';
import DesignNotFound from 'components/designs/DesignNotFound';
import AllDesigns from 'data/AllDesigns';
import UppercaseFirstLatter from 'utils/UppercaseFirstLatter';

export default function DesignsComponents() {
  const router = useRouter();
  const pageName: string | any = router.query?.designs;
 
  const CurrentDesign = AllDesigns[`Show${UppercaseFirstLatter(pageName)}`];

  if (!CurrentDesign) {
    return <DesignNotFound />;
  }
  return <CurrentDesign />;
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
