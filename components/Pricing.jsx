import { motion, LayoutGroup } from 'framer-motion';

import SectionTitle from './infracomponents/SectionTitle';
import PriceItem from './infracomponents/PriceItem';

import Image from 'next/image';

import styles from './Pricing.module.css';

import priceContainerGraphic from '../public/priceContainerGraphic.svg';
import paragraphContainerGraphic from '../public/paragraphContainerGraphic.svg';

import detailCustomGraphic from '../public/detailCustomGraphic.svg';
import detailProfessionalGraphic from '../public/detailProfessionalGraphic.svg';
import detailHostingGraphic from '../public/detailHostingGraphic.svg';
import detailMaintenanceGraphic from '../public/detailMaintenanceGraphic.svg';
import detailChangesGraphic from '../public/detailChangesGraphic.svg';
import detailStrategiesGraphic from '../public/detailStrategiesGraphic.svg';
import detailEcommerceGraphic from '../public/detailEcommerceGraphic.svg';
import detailAnalyticsGraphic from '../public/detailAnalyticsGraphic.svg';

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
          content: 'Regular testing to ensure functionality and usability.',
        },
        {
          id: 'siteMaintenance2',
          content:
            'Security monitoring and updates against any new vulnerabilities.',
        },
        {
          id: 'siteMaintenance3',
          content:
            'Performance monitoring to ensure fully optimized site speed.',
        },
        {
          id: 'siteMaintenance4',
          content:
            'Supervised updates to any software used in creation to maintain browser compatibility.',
        },
      ],
    },
    {
      id: 'unlimitedChanges',
      title: 'Unlimted Changes',
      graphic: detailChangesGraphic,
      graphicAlt: 'A pencil that symbolizes editing the design of a web page.',
      bulletPoints: [
        {
          id: 'unlimitedChanges1',
          content:
            'Design and deployment of any content changes that your business will ever need.',
        },
        {
          id: 'unlimitedChanges2',
          content:
            'Constant communication with our team for any questions or concerns.',
        },
      ],
    },
    {
      id: 'seoStrategies',
      title: 'SEO Strategies',
      graphic: detailStrategiesGraphic,
      graphicAlt: 'A search bar that symbolizes SEO strategies.',
      bulletPoints: [
        {
          id: 'seoStrategies1',
          content:
            'Optimized URLs that are keyword rich to satisfy search engine standards.',
        },
        {
          id: 'seoStrategies2',
          content:
            'Schema markup so that search engines can understand the layout of your site.',
        },
        {
          id: 'seoStrategies3',
          content:
            'Optimized for local search, enhancing competitive advantage in local markets.',
        },
        {
          id: 'seoStrategies4',
          content:
            'Descriptive titles and meta descriptions for search engine identification.',
        },
      ],
    },
    {
      id: 'ecommerceStores',
      title: 'E-commerce Stores',
      graphic: detailEcommerceGraphic,
      graphicAlt: 'A dollar bill that symbolizes E-commerce.',
      bulletPoints: [
        {
          id: 'ecommerceStores1',
          content: 'Fully integrated payment methods using Stripe API.',
        },
        {
          id: 'ecommerceStores2',
          content:
            'Sell products and/or services directly to customers that access your site.',
        },
        {
          id: 'ecommerceStores3',
          content: 'Accept donations or create fundraisers.',
        },
      ],
    },
    {
      id: 'websiteAnalytics',
      title: 'Website Analytics',
      graphic: detailAnalyticsGraphic,
      graphicAlt: 'A graph that symbolizes analytical data.',
      bulletPoints: [
        {
          id: 'websiteAnalytics1',
          content:
            'Receive regular reports on customer interactions with your site.',
        },
        {
          id: 'websiteAnalytics2',
          content:
            'Pageview metrics to show how often customers visit your website and how long they view it.',
        },
        {
          id: 'websiteAnalytics3',
          content:
            'Traffic sources reports that record how customers access your site.',
        },
        {
          id: 'websiteAnalytics4',
          content:
            'Customer demographic metrics that can provide unique and valuable insights into the types of customers that are interested in your business.',
        },
      ],
    },
  ];
  return (
    <>
      <div className={styles.container} id='Pricing'>
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
          <LayoutGroup>
            <motion.div
              className={styles.detailsInnerContainer}
              style={{ borderRadius: '40px' }}
              layout
            >
              <LayoutGroup>
                {detailsContentArray.map((item) => (
                  <motion.div layout='preserve-aspect' key={item.id}>
                    <PriceItem
                      id={item.id}
                      graphicAlt={item.graphicAlt}
                      graphic={item.graphic}
                      title={item.title}
                      bulletPoints={item.bulletPoints}
                    ></PriceItem>
                  </motion.div>
                ))}
              </LayoutGroup>
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </>
  );
}
