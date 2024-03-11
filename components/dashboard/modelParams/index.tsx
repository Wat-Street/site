"use client"

import { Card } from "@/components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type ModelParamsResponse = {
  name: string
  fields: {
    id: string
    label: string
    type: "dateRange" | "number"
  }[]
}

const modelParamsFromApi: ModelParamsResponse = {
  name: "Mean Reversion",
  fields: [
    {
      id: "trainRange",
      label: "Training Range",
      type: "dateRange",
    },
    {
      id: "testRange",
      label: "Test Range",
      type: "dateRange",
    },
    {
      id: "holdTime",
      label: "Hold Time (Days)",
      type: "number",
    },
  ],
}

const mapTypeToZod = (type: "dateRange" | "number") => {
  if (type === "dateRange") {
    return z.array(z.date()).length(2)
  } else {
    return z.number().int().positive()
  }
}

const getDefaultValue = (type: "dateRange" | "number") => {
  if (type === "dateRange") {
    return [new Date(), new Date()]
  } else {
    return 0
  }
}

const formSchema = z.object(
  Object.fromEntries(
    modelParamsFromApi.fields.map((field) => [
      field.id,
      mapTypeToZod(field.type),
    ])
  )
)

export default function ModelParamsCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // autogenerate default values
    defaultValues: Object.fromEntries(
      modelParamsFromApi.fields.map((field) => [
        field.id,
        getDefaultValue(field.type),
      ])
    ),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Card className="row-span-1 col-span-1 w-full h-full p-4">
      <div className="text-xl font-semibold">Mean Reversion</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  {/* <Input placeholder="shadcn" {...field} /> */}
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  )
}
