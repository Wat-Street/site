import { Dispatch, SetStateAction, useEffect, useState } from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const [search, setSearch] = useState("")

  const [isStock, setIsStock] = useState(true)

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <div className="pt-3 px-3 space-x-2 flex">
        <button
          onClick={() => setIsStock(true)}
          className={`py-0.5 px-1 rounded-sm ${
            isStock
              ? "text-xs border border-brand bg-brand/20 text-brand ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              : "text-xs border border-border text-muted-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          }`}
        >
          Stock
        </button>
        <button
          onClick={() => setIsStock(false)}
          className={`py-0.5 px-1 rounded-sm ${
            !isStock
              ? "text-xs border border-brand bg-brand/20 text-brand ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              : "text-xs border border-border text-muted-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          }`}
        >
          Crypto
        </button>
      </div>
      <CommandInput
        value={search}
        onValueChange={setSearch}
        autoFocus
        placeholder={`Search for a ${isStock ? "stock" : "crypto"}...`}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup
        // heading="Suggestions"
        >
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
