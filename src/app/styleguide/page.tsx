import IntroductionStyleGuide from './introduction';
import DesignStyleguide from './design';
import PageTitle from '@/components/modules/PageTitle';
import ComponentsStyleGuide from './components';
import Devider from '@element/Devider';


export default function Home() {
  return (
    <>
      <PageTitle title='Styleguide'/>
      
      <IntroductionStyleGuide />

      <DesignStyleguide />

      <ComponentsStyleGuide />
    </>
  )
}
