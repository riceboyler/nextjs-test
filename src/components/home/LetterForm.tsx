"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "../ui/checkbox";
import { DatePicker } from "../ui/date-picker";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  send: z.boolean(),
  date: z.date(),
  comments: z.string(),
});

const LetterForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap gap-4 py-5"
      >
        <div className="flex basis-full flex-col justify-between gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="send"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Send a Letter</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DatePicker
                      className="w-full rounded-md border p-2"
                      value={field.value ? new Date(field.value) : undefined}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem className="basis-full">
              <div className="flex flex-col gap-2 md:flex-row">
                <FormLabel className="leading-8">Comments</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full rounded-md border p-2"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 md:flex-row md:pl-20">
          <Button type="submit" className="px-10">
            Submit
          </Button>
          <Button className="px-10" variant="link">
            Reset Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LetterForm;
