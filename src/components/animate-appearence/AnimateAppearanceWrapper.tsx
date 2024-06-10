import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, type FC } from "react";
import styled from "styled-components";

const StyledMotion = styled(motion.div)``;

export const AnimateAppearanceWrapper: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <AnimatePresence>
      <StyledMotion
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        {children}
      </StyledMotion>
    </AnimatePresence>
  );
};
