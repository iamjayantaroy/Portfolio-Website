import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-warp items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVarients(0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarients(0.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <IoLogoJavascript className="text-5xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVarients(0.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <FaJava className="text-5xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVarients(0.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiSpringboot className="text-5xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVarients(0.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <FaDatabase className="text-5xl text-yellow-200" />
        </motion.div>
        <motion.div
          variants={iconVarients(1.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <RiTailwindCssFill className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarients(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <RxGithubLogo className="text-5xl text-slate-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
