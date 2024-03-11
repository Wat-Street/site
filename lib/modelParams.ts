import { addDays } from "date-fns"
import { z } from "zod"

type Field = {
  id: string
  label: string
  desc?: string
  type: "dateRange" | "number"
}

export type ModelParamsResponse = {
  name: string
  fields: Field[]
}

// ---------
// TEST DATA
// note: desc is optional

export const modelParamsFromApi: ModelParamsResponse = {
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
// ----------

// this function maps the type from the API to the zod schema
const mapTypeToZod = (type: "dateRange" | "number") => {
  if (type === "dateRange") {
    return z.object({
      from: z.date(),
      to: z.date(),
    })
  } else {
    return z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: "Expected number, received a string",
    })
  }
}

// this function returns the default value for a given type
export const getDefaultValue = (type: "dateRange" | "number") => {
  if (type === "dateRange") {
    return {
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    }
  } else {
    return "10"
  }
}

// this is the zod schema for the form
export const formSchema = z.object(
  Object.fromEntries(
    modelParamsFromApi.fields.map((field) => [
      field.id,
      mapTypeToZod(field.type),
    ])
  )
)
