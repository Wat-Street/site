import { addDays } from "date-fns"
import { z } from "zod"

export type ModelParamsResponse = {
  name: string
  fields: {
    id: string
    label: string
    type: "dateRange" | "number"
  }[]
}

// ---------
// TEST DATA

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

const mapTypeToZod = (type: "dateRange" | "number") => {
  if (type === "dateRange") {
    return z.object({
      from: z.date(),
      to: z.date(),
    })
  } else {
    return z.number().int().positive()
  }
}

export const getDefaultValue = (type: "dateRange" | "number") => {
  if (type === "dateRange") {
    return {
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    }
  } else {
    return 0
  }
}

export const formSchema = z.object(
  Object.fromEntries(
    modelParamsFromApi.fields.map((field) => [
      field.id,
      mapTypeToZod(field.type),
    ])
  )
)