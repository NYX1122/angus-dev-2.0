import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import PricingButton from './PricingButton';

import Image from 'next/image';

import styles from './PriceItem.module.css';

export default function PriceItem({
  lightMode,
  id,
  title,
  graphic,
  graphicLight,
  graphicAlt,
  bulletPoints,
}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.outerContainer} onClick={() => setOpen(!isOpen)}>
      <PricingButton content={title} lightMode={lightMode}></PricingButton>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={
              lightMode
                ? `${styles['bulletsContainer']} ${styles['light']}`
                : styles.bulletsContainer
            }
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            layout
          >
            <motion.div
              className={styles[id]}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ delay: 0.05 }}
            >
              <Image
                src={lightMode ? graphicLight : graphic}
                alt={graphicAlt}
                fill={true}
              ></Image>
            </motion.div>
            {bulletPoints.map((item) => (
              <motion.p
                key={item.id}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ delay: 0.1 }}
              >
                {item.content}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
