import Layout from "../components/Frontend/layout";
import Banner from "../components/Frontend/banner";
import Testimonial from "@/components/Frontend/testimonial";
import WorkFlow from "@/components/Frontend/workflow";


import { motion } from 'framer-motion'

const Home: React.FC = () => {
  return (
    <Layout>
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Banner />
    </motion.div>
    <Testimonial />
    <WorkFlow />
  </Layout>
  );
};
export default Home;
