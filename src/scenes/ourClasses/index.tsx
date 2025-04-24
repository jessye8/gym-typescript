import { SelectedPage,  ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Class",
        desc: "Ullamcorper fames aliquet aliquam habitant purus vitae dui dapibus, commodo odio parturient ad fusce netus elementum, faucibus gravida sociis facilisis lacus dictumst posuere.",
        image: image1
    },
    {
        name: "Yoga Class",
        image: image2
    }, 
    {
        name: "Ab Core Class",
        desc: "Ullamcorper fames aliquet aliquam habitant purus vitae dui dapibus, commodo odio parturient ad fusce netus elementum, faucibus gravida sociis facilisis lacus dictumst posuere.",
        image: image3
    }, 
    {
        name: "Adventure Class",
        desc: "Ullamcorper fames aliquet aliquam habitant purus vitae dui dapibus, commodo odio parturient ad fusce netus elementum, faucibus gravida sociis facilisis lacus dictumst posuere.",
        image: image4
    }, 
    {
        name: "Fitness Class",
        desc: "Ullamcorper fames aliquet aliquam habitant purus vitae dui dapibus, commodo odio parturient ad fusce netus elementum, faucibus gravida sociis facilisis lacus dictumst posuere.",
        image: image5
    }, 
    {
        name: "Training Class",
        desc: "Ullamcorper fames aliquet aliquam habitant purus vitae dui dapibus, commodo odio parturient ad fusce netus elementum, faucibus gravida sociis facilisis lacus dictumst posuere.",
        image: image6
    },


]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section 
      id="ourclasses"
      className="w-full bg-primary-100 py-10 " >
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
              className="mx-auto w-5/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }} >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                    Ullamcorper fames aliquet aliquam habitant purus vitae dui dapibus, commodo odio parturient 
                    ad fusce netus elementum, faucibus gravida sociis facilisis lacus dictumst posuere.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
              <ul className="w-[2800px] whit-space-nowrap">
                {classes.map((item: ClassType, index) => (
                    <Class 
                      key={`${item.name}-${index}`}
                      name={item.name}
                      desc={item.desc}
                      image={item.image} />
                ))}
              </ul>
            </div>
        </motion.div>
    </section>
  )
}
export default OurClasses