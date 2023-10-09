import IntroductionStyleGuide from './introduction';
import DesignStyleguide from './design';
import PageTitle from '@module/PageTitle/PageTitle';
import ComponentsStyleGuide from './components';
import Devider from '@element/Devider';


export default function Home() {
  return (
    <>
      <PageTitle title='Styleguide test'/>
      
      <IntroductionStyleGuide />

      <DesignStyleguide />

      <ComponentsStyleGuide />
    </>
  )
}
