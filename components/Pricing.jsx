import SectionTitle from './infracomponents/SectionTitle';
import PriceItem from './infracomponents/PriceItem';

import Image from 'next/image';

import styles from './Pricing.module.css';

import priceContainerGraphic from '../public/priceContainerGraphic.svg';
import paragraphContainerGraphic from '../public/paragraphContainerGraphic.svg';

import pricingDetailTitleBackground from '../public/pricingDetailTitleBackground.svg';

import detailCustomGraphic from '../public/detailCustomGraphic.svg';
import detailProfessionalGraphic from '../public/detailProfessionalGraphic.svg';
import detailHostingGraphic from '../public/detailHostingGraphic.svg';
import detailMaintenanceGraphic from '../public/detailMaintenanceGraphic.svg';

export default function Pricing() {
  const detailsContentArray = [
    {
      id: 'customWebDesign',
      title: 'Custom Web Design',
      graphic: detailCustomGraphic,
      graphicAlt: 'A paintbursh symbolizing web design.',
      bulletPoints: [
        {
          id: 'customWebDesign1',
          content: 'Professionally designed according to your specifications.',
        },
        {
          id: 'customWebDesign2',
          content: 'Custom color schemes, typography, and images.',
        },
        {
          id: 'customWebDesign3',
          content:
            'Designs for every screen size (mobile, tablet, laptop, and computer.)',
        },
        {
          id: 'customWebDesign4',
          content:
            'User friendly designs (readable text, accessibility standards, screen reader compatibility.)',
        },
      ],
    },
    {
      id: 'professionalCoding',
      title: 'Professional Coding',
      graphic: detailProfessionalGraphic,
      graphicAlt: 'HTML brackets that symbolize code.',
      bulletPoints: [
        {
          id: 'professionalCoding1',
          content: 'Coded using modern techniques and technologies.',
        },
        {
          id: 'professionalCoding2',
          content: 'High quality code to avoid slowness and bugs.',
        },
        {
          id: 'professionalCoding3',
          content: 'Responsive code, so layout is always looking beautiful.',
        },
        {
          id: 'professionalCoding4',
          content: 'Hashed API keys and user information for maximum security.',
        },
      ],
    },
    {
      id: 'webHosting',
      title: 'Web Hosting',
      graphic: detailHostingGraphic,
      graphicAlt: 'A modem that symbolizes web hosting.',
      bulletPoints: [
        {
          id: 'webHosting1',
          content:
            'Hosted on high traffic capacity servers for fastest loading times.',
        },
        {
          id: 'webHosting2',
          content:
            'Utilization of SSL/TLS (HTTPS) for encryption of sensitive data as well as regular site authentication.',
        },
        {
          id: 'webHosting3',
          content: 'Individualized database setups.',
        },
      ],
    },
    {
      id: 'siteMaintenance',
      title: 'Site Maintenance',
      graphic: detailMaintenanceGraphic,
      graphicAlt: 'A modem that symbolizes web hosting.',
      bulletPoints: [
        {
          id: 'siteMaintenance1',
          content:
            'Hosted on high traffic capacity servers for fastest loading times.',
        },
        {
          id: 'siteMaintenance2',
          content:
            'Utilization of SSL/TLS (HTTPS) for encryption of sensitive data as well as regular site authentication.',
        },
        {
          id: 'siteMaintenance3',
          content: 'Individualized database setups.',
        },
        {
          id: 'siteMaintenance4',
          content: 'Hashed API keys and user information for maximum security.',
        },
      ],
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.prefaceContainer}>
          <div className={styles.sectionTitleContainer}>
            <SectionTitle content='Pricing'></SectionTitle>
          </div>
          <div className={styles.subscriptionContainer}>
            <div className={styles.priceContainer}>
              <Image
                src={priceContainerGraphic}
                alt='Shiny background placed behind the price.'
                fill={true}
              ></Image>
              <h2>$200 Per Month</h2>
            </div>
            <h1>It's that easy.</h1>
            <div className={styles.prefaceParagraphContainer}>
              <div className={styles.prefaceParagraphGraphicContainer}>
                <Image
                  src={paragraphContainerGraphic}
                  alt='Shiny background behind paragraph explaining subscription tier.'
                  fill={true}
                ></Image>
              </div>
              <p>
                This is our only subscription tier, and it includes everything
                that a website needs to be competitive. See below for all
                included services.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.detailsOuterContainer}>
          <div className={styles.detailsInnerContainer}>
            {detailsContentArray.map((item) => (
              <PriceItem
                backgroundGraphic={pricingDetailTitleBackground}
                key={item.id}
                graphicAlt={item.graphicAlt}
                graphic={item.graphic}
                title={item.title}
                bulletPoints={item.bulletPoints}
              ></PriceItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
