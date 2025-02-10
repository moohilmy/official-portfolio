"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import InputField from "./InputField";
import { toast } from "react-toastify";

const validationSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(10).max(500),
});

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IContactForm>({
    defaultValues: { name: "", email: "", message: "" },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IContactForm> = async (data) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast.error(error?.message || "An unexpected error occurred");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      viewport={{ once: true }}
      className="md:w-[45%]  w-full py-4 px-8 backdrop-blur-md backdrop-saturate-200 bg-white/40 rounded-xl border border-gray-300/30"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        name="name"
        label="Your Name:"
        error={errors?.name?.message}
        register={register}
        placeholderField="What's your name?"
      />
      <InputField
        name="email"
        label="Your Email:"
        error={errors?.email?.message}
        register={register}
        placeholderField="What's your email?"
      />
      <div>
        <div className="flex mb-2 capitalize justify-between">
          <label htmlFor="message">Your Message:</label>
          <span className="text-red-600 text-xs">
            {errors?.message?.message}
          </span>
        </div>
        <textarea
          rows={6}
          {...register("message")}
          placeholder="What's your message?"
          id="message"
          className="resize-none w-full px-4 py-2 rounded outline-secondaryColor"
        />
      </div>
      <button
        type="submit"
        className="w-full mt-3 py-3 text-white bg-primaryColor font-bold rounded-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Send Message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
