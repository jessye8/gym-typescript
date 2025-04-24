import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        desc: "Description of our state of the art facilities goes here.",

    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100s if Diverse Classes",
        desc: "Description of our state of the diverse classes goes here.",
        
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        desc: "Description of our state of the expert trainers goes here.",
        
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} >
            {/** HEADER */}
            <motion.div 
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }} >
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers, and classes.
                    We get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>

            {/** BENEFITS */}
            <motion.div 
              className="md:flex items-center justify-between gap-8 mt-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              variants={container} >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                      key={benefit.title}
                      icon={benefit.icon}
                      title={benefit.title}
                      desc={benefit.desc}
                      setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>

            {/** GRAPHICS AND DESCRIPTION SECTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/** GRAPHIC */}
                <img 
                  className="mx-auto"
                  alt="benefits-page-graphic"
                  src={BenefitsPageGraphic} />

                {/* DESCRIPTION SECTION */}
                <div>
                    {/** TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:inset-0 before:bg-abstractwaves before:bg-no-repeat" >
                        <motion.div
                            className=""
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0 }
                            }} >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING{' '}
                                <span className="text-primary-500">FIT</span>.
                            </HText>
                        </motion.div>
                        </div>
                    </div>

                    {/** DESCRIPTION */}
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                      }} >
                        <p className="my-5 text-sm">
                            Ac porta natoque enim sociis at sem per cursus, ad penatibus curabitur 
                            blandit ridiculus taciti semper, pellentesque ornare ante convallis mus 
                            felis luctus. Egestas etiam nec magna nascetur mus varius, sapien dapibus 
                            cras taciti dis morbi, fames congue primis fringilla ut. Nulla ante magna 
                            donec aptent odio tortor dignissim suspendisse cum himenaeos viverra sem, 
                            sed fringilla ornare ut cubilia convallis iaculis nostra velit praesent.
                        </p>
                        <p className="mb-5 text-sm">
                            In quam ligula fermentum laoreet dictumst pellentesque eros gravida lacinia 
                            et nec ultrices mollis hac, dis auctor condimentum cras molestie nibh mauris
                            dictum vehicula velit sociosqu quis. Euismod lacus vivamus ligula velit 
                            turpis duis tortor, elementum conubia at dictumst per ultricies erat arcu, 
                            bibendum penatibus blandit ornare magna ante.
                        </p>
                    </motion.div>

                   {/** BUTTON */}                       
                    <div className="relative mb-10">                    
                        <div className="before:absolute before:-bottom-30 before:left-40 before:z-[-1] before:inset-0 before:bg-sparkles before:bg-no-repeat">                            
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}
export default Benefits