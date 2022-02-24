import { Card } from './Card/Card';
import advantagesData from 'data/advantage/advantage';

export const Advantage = ({adData}) => {
  console.log(adData.ad6);
  let advantagesData=[
    {
      "icon": "icon-natural",
      "title": `${adData.ad1}`,
      "body": "Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim\n        velit adipisicing ea aliqua alluptate sit do do."
    },
    {
      "icon": "icon-quality",
      "title": `${adData.ad2}`,
      "body": "Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim\n        velit adipisicing ea aliqua alluptate sit do do."
    },
    {
      "icon": "icon-organic",
      "title":  `${adData.ad3}`,
      "body": "Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim\n        velit adipisicing ea aliqua alluptate sit do do."
    }
  ]
  
  const advantages = [...advantagesData];


  return (
    <>
      {/* <!-- BEGIN ADVANTAGES --> */}
      <div className='advantages'>
        <div className='wrapper'>
          <div className='advantages-items'>
            {advantages.map((advantage, index) => (
              <Card key={index} advantage={advantage} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- ADVANTAGES EOF   --> */}
    </>
  );
};
