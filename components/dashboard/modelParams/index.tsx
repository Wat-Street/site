"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import {
  formSchema,
  getDefaultValue,
  modelParamsFromApi,
} from "@/lib/modelParams"
import AutoFormField from "./autoField"

export default function ModelParamsCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: Object.fromEntries(
      modelParamsFromApi.fields.map((field) => [
        field.id,
        getDefaultValue(field.type),
      ])
    ),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className="row-span-1 col-span-1 w-full h-full p-4 overflow-y-auto">
      <div className="text-xl font-semibold mb-4">Mean Reversion</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {modelParamsFromApi.fields.map((data) => (
            <AutoFormField key={data.id} form={form} data={data} />
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  )
}
