"use client"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ModelParamsResponse } from "@/lib/modelParams"
import { UseFormReturn } from "react-hook-form"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { format } from "date-fns"
import { DateRange } from "react-day-picker"

export default function AutoFormField({
  form,
  data,
}: {
  form: UseFormReturn<
    {
      [x: string]: (
        | string
        | {
            from: Date
            to: Date
          }
      ) &
        (
          | string
          | {
              from: Date
              to: Date
            }
          | undefined
        )
    },
    any,
    undefined
  >
  data: ModelParamsResponse["fields"][number]
}) {
  return (
    <FormField
      control={form.control}
      name={data.id}
      render={({ field }) => {
        if (data.type === "dateRange") {
          const val = field.value as { from: Date; to: Date } | undefined

          return (
            <FormItem>
              <FormLabel>{data.label}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full flex pl-3 text-left justify-start font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {val?.from ? (
                        val.to ? (
                          <>
                            {format(val.from, "LLL dd, y")} -{" "}
                            {format(val.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(val.from, "LLL dd, y")
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
                    defaultMonth={val?.from}
                    selected={val}
                    onSelect={field.onChange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              {data.desc ? (
                <FormDescription>{data.desc}</FormDescription>
              ) : null}
              <FormMessage />
            </FormItem>
          )
        } else {
          return (
            <FormItem>
              <FormLabel>{data.label}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter value..."
                  {...field}
                  value={field.value as string}
                />
              </FormControl>
              {data.desc ? (
                <FormDescription>{data.desc}</FormDescription>
              ) : null}
              <FormMessage />
            </FormItem>
          )
        }
      }}
    />
  )
}
