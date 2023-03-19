import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '@/styles/styles';
import { staggerContainer } from '@/utils/motion';


type Props = {
    Component: React.FC<any>,
    idName: string
  };

const SectionWrapper = ({Component, idName}:Props) => {
    function HOC = () => (
        <motion.div>
          <Component />
        </motion.div>
      );
}

export default SectionWrapper