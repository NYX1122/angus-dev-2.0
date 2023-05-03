import SectionTitle from './infracomponents/SectionTitle';
import AboutTitle from './infracomponents/AboutTitle';
import AboutItem from './infracomponents/AboutItem';

import Image from 'next/image';

import styles from './About.module.css';

import developerGraphic from '../public/developerGraphic.svg?url';
import developerGraphicLight from '../public/developerGraphicLight.svg?url';

import designGraphic from '../public/designGraphic.svg?url';
import designGraphicLight from '../public/designGraphicLight.svg?url';
import deviceGraphic from '../public/deviceGraphic.svg?url';
import deviceGraphicLight from '../public/deviceGraphicLight.svg?url';
import seoGraphic from '../public/seoGraphic.svg?url';
import seoGraphicLight from '../public/seoGraphicLight.svg?url';
import performanceGraphic from '../public/performanceGraphic.svg?url';
import performanceGraphicLight from '../public/performanceGraphicLight.svg?url';
import changeGraphic from '../public/changeGraphic.svg?url';
import changeGraphicLight from '../public/changeGraphicLight.svg?url';
import moneyGraphic from '../public/moneyGraphic.svg?url';
import moneyGraphicLight from '../public/moneyGraphicLight.svg?url';

export default function About({ lightMode }) {
  const aboutItemArrayOne = [
    {
      id: 'designGraphic',
      image: designGraphic,
      imageLight: designGraphicLight,
      imageAlt: 'Graphic depicting design principles.',
      title: 'Design Beautiful, User Friendly Layouts',
      content:
        'Design is one of the most important qualities of a website, ensuring that a site is not only functional, but also user friendly as well. These qualities are integral for maintaining a given customer’s attention and are the essential goals that our designers follow in creating new website layouts.',
    },
    {
      id: 'deviceGraphic',
      image: deviceGraphic,
      imageLight: deviceGraphicLight,
      imageAlt: 'Graphic depicting device layout principles.',
      title: 'Write Fast, Reliable, and Responsive Code',
      content:
        'Exposure and customer interest are reliant upon how fast a website can load content, as well as a website’s ability to perform and adjust correctly while being viewed on multiple devices. That’s why quick load times and mobile responsive layouts are considered standard procedure for websites that are coded by our developers.',
    },
    {
      id: 'seoGraphic',
      image: seoGraphic,
      imageLight: seoGraphicLight,
      imageAlt: 'Graphic depicting search engine optimization principles.',
      title: 'Apply Advantageous SEO Strategies',
      content:
        'Search engine optimization strategies, also known as SEO strategies, are used by our developers to ensure that any website we code always appears as high as it can possibly be in the millions of results that appear from google searches, giving your business a competitive edge over the rest.',
    },
  ];

  const aboutItemArrayTwo = [
    {
      id: 'performanceGraphic',
      image: performanceGraphic,
      imageLight: performanceGraphicLight,
      imageAlt: 'Graphic depicting site performance monitoring.',
      title: 'Constant Site Performance monitoring',
      content:
        'Due to the ever evolving nature of the internet, our developers check the sites we create daily to ensure that they maintain functionality, speed, SEO best standards and responsive design. Any site developed and deployed by us is regularly maintained to ensure that customer experience is always exceptional.',
    },
    {
      id: 'changeGraphic',
      image: changeGraphic,
      imageLight: changeGraphicLight,
      imageAlt: 'Graphic depicting the edit of a site design.',
      title: 'Changes to Site Layout at Anytime',
      content:
        'We always design websites based on exactly your own specifications, but should you ever want changes made to your website after deployment we have you covered! Any changes to site design or function may be requested at any time, and we will implement them for free!',
    },
    {
      id: 'moneyGraphic',
      image: moneyGraphic,
      imageLight: moneyGraphicLight,
      imageAlt: 'Graphic depicting a hand holding a wallet.',
      title: 'Affordable Payment Options',
      content:
        'We are a small business that creates high quality websites for other small businesses. We understand that running a small business amidst a sea of corporations is difficult. Because of this we offer many different payment options in order to best serve the individual needs of your business.',
    },
  ];
  return (
    <div className={styles.outerContainer}>
      <div
        className={
          lightMode
            ? `${styles['prefaceContainer']} ${styles['light']}`
            : styles.prefaceContainer
        }
        id='About'
      >
        <SectionTitle content='About Us' lightMode={lightMode}></SectionTitle>
        <div className={styles.developerGraphicContainer}>
          <Image
            src={lightMode ? developerGraphicLight : developerGraphic}
            alt='Graphic depicting a web developer'
            className={styles.developerGraphic}
          ></Image>
        </div>
        <div
          className={
            lightMode
              ? `${styles['descriptionContainer']} ${styles['light']}`
              : styles.descriptionContainer
          }
        >
          <p>
            We are a small business empowering other small businesses with high
            quality websites and beautiful designs. It is our goal to give your
            customers access to fast, responsive, and user friendly websites
            that are easy to find with a quick google search. Scroll down to
            learn more about us, what we do, and the services we offer. Together
            we can give your business the competitive online visibility that it
            needs to succeed.
          </p>
        </div>
      </div>
      {/* wow, wish I didn't need this outer outer container LOL */}
      <div
        className={
          lightMode
            ? `${styles['outerOuterItemsContainer']} ${styles['light']}`
            : styles.outerOuterItemsContainer
        }
      >
        <div
          className={
            lightMode
              ? `${styles['innerOuterItemsContainer']} ${styles['light']}`
              : styles.innerOuterItemsContainer
          }
        >
          <div
            className={
              lightMode
                ? `${styles['outerItemsContainer']} ${styles['light']}`
                : styles.outerItemsContainer
            }
          >
            <AboutTitle content='What We Do' lightMode={lightMode}></AboutTitle>
            <div className={styles.itemsContainer}>
              {aboutItemArrayOne.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.id === 'seoGraphic'
                      ? styles.bigGridItem
                      : item.id === 'designGraphic'
                      ? styles.normalGridItemOne
                      : styles.normalGridItemTwo
                  }
                >
                  <AboutItem
                    image={item.image}
                    imageLight={item.imageLight}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    content={item.content}
                    lightMode={lightMode}
                  ></AboutItem>
                </div>
              ))}
            </div>
          </div>
          <div
            className={
              lightMode
                ? `${styles['outerItemsContainer']} ${styles['light']}`
                : styles.outerItemsContainer
            }
          >
            <AboutTitle
              content='What We Offer'
              lightMode={lightMode}
            ></AboutTitle>
            <div className={styles.itemsContainer}>
              {aboutItemArrayTwo.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.id === 'moneyGraphic'
                      ? styles.bigGridItem
                      : item.id === 'performanceGraphic'
                      ? styles.normalGridItemOne
                      : styles.normalGridItemTwo
                  }
                >
                  <AboutItem
                    key={item.id}
                    image={item.image}
                    imageLight={item.imageLight}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    content={item.content}
                    lightMode={lightMode}
                  ></AboutItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
