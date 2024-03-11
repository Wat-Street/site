"use client"

import { Card } from "@/components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"
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
import {
  formSchema,
  getDefaultValue,
  modelParamsFromApi,
} from "@/lib/modelParams"
import { DatePickerWithRange } from "@/components/ui/dateRange"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

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
    console.log(values)
  }

  return (
    <Card className="row-span-1 col-span-1 w-full h-full p-4">
      <div className="text-xl font-semibold mb-4">Mean Reversion</div>
      {JSON.stringify({
        defaultValues: Object.fromEntries(
          modelParamsFromApi.fields.map((field) => [
            field.id,
            getDefaultValue(field.type),
          ])
        ),
      })}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {modelParamsFromApi.fields.map((data) => (
            <FormField
              control={form.control}
              name={data.id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{JSON.stringify(field)}</FormLabel>
                  {data.type === "dateRange" ? (
                    // <DatePickerWithRange />
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[300px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value?.from ? (
                              field.value.to ? (
                                <>
                                  {format(field.value.from, "LLL dd, y")} -{" "}
                                  {format(field.value.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(field.value.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={field?.value?.from}
                          selected={field.value}
                          onSelect={field.onChange}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  ) : data.type === "number" ? (
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                  ) : null}
                  {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  )
}
