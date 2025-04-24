import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContacUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: { preventDefault: () => void; }) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pt-24 pb-32" >
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/** HEADER */}
            <motion.div
              className="md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }} >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5">
                    Feugiat ante nec torquent proin volutpat facilisi mi pharetra litora phasellus, ut donec 
                    leo etiam fringilla justo lectus lacus metus. Bibendum velit gravida cursus felis tempus 
                    convallis, et integer malesuada imperdiet ultrices, egestas justo est per sociosqu. Netus 
                    feugiat morbi aenean odio quam fusce sodales, pretium vestibulum imperdiet gravida luctus 
                    fringilla magnis, mi sociis turpis dictum rutrum condimentum.
                </p>
            </motion.div>

            {/** FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
              <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }} >
                  {/** replace with number in place of email */}
                    <form 
                      target="_blank" 
                      onSubmit={onSubmit}
                      action="https://formsubmit.co/02e2e7f732d069ea82f4eeec41acfd74"                      
                      method="POST" >
                        <input 
                          className={inputStyles}
                          type="text"
                          placeholder="NAME"
                          {...register("name", {
                            required: true,
                            maxLength: 100,
                          })} 
                        />
                        {errors.name && (
                          <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "The max lenght is 100 characters."}
                          </p>
                        )}

                        <input 
                          className={inputStyles}
                          type="text"
                          placeholder="EMAIL"
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })} 
                        />
                        {errors.email && (
                          <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "The email address is invalid."}
                          </p>
                        )}

                        <textarea 
                          className={inputStyles}
                          placeholder="MESSAGE"
                          rows={4}
                          cols={50}
                          {...register("message", {
                            required: true,
                            maxLength: 2000,
                          })} 
                        />
                        {errors.message && (
                          <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "The max lenght is 2000 characters."}
                            </p>
                        )}

                        <button
                          type="submit"
                          className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >
                          Submit
                        </button>
                    </form>
              </motion.div>
              {/** IMAGE */}
              <motion.div
                className="relative mt-16 basis-2/5 md:mt-0 h-120"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }} >
                  <div className="md:before:bg-evolvetext w-full before:absolute before:top-90 before:inset-0 before:-right-500 before:z-[-1] before:bg-no-repeat">
                    <img className="w-full max-h-120 max-w-100" alt="contact-us-page-graphic" src={ContacUsPageGraphic}/>
                  </div>
              </motion.div>             
            </div>
        </motion.div>
    </section>
  )
}
export default ContactUs