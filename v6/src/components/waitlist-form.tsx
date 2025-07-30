"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Removed Card import as we're using custom styling
import { submitWaitlistEmail, validateEmail } from "@/lib/api";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  role: z.string().optional(),
  painPoint: z.string().optional(),
  updates: z.boolean().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true);
    try {
      const result = await submitWaitlistEmail(data);
      
      if (result.success) {
        setIsSubmitted(true);
        toast.success("Welcome to the waitlist!", {
          description: result.message,
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: result.message,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
          <svg
            className="w-10 h-10 text-slate-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-4">
          You're in! Welcome to the future of BIM.
        </h3>
        <p className="text-slate-300 mb-6">
          We'll notify you as soon as BIMSpark is ready to make your workflow amazing.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          Add another email
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-300 font-medium">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@company.com"
          {...register("email")}
          className={`bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 ${
            errors.email ? "border-red-500 focus:border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>



      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          disabled={isLoading}
        >
        {isLoading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Joining the Waitlist...
          </div>
        ) : (
          "Join the Waitlist →"
        )}
        </Button>
      </motion.div>

      <p className="text-xs text-slate-400 text-center">
        Expected launch: Q1 2025 • No spam, unsubscribe anytime
      </p>
    </motion.form>
  );
}