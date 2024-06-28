import {
  Button,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import React from "react";

export default function ShippingForm() {
  return (
    <form className="w-full max-w-lg px-4">
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white">
          Shipping details
        </Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Street address
          </Label>
          <Input
            placeholder="Street address"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white placeholder:text-white/10",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Country</Label>
          <Description className="text-sm/6 text-white/50">
            We currently only ship to Nairobi
          </Description>
          <div className="relative">
            <Select
              className={clsx(
                "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                // Make the text of each option black on windows
                "*:text-black"
              )}
            >
              <option value="nairobi">Nairobi</option>
              <option value="nairobi">Nakuru</option>
              <option value="nairobi">Eldoret</option>
            </Select>
            <ChevronDownIcon
              aria-hidden="true"
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            />
          </div>
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Delivery notes
          </Label>
          <Description className="text-sm/6 text-white/50">
            If you have a trigger, we&apos;d like to know about it.
          </Description>
          <Textarea
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={3}
          />
        </Field>
        <Button className="bg-white/5 text-white py-1.5 px-3 text-sm/6 rounded-lg border-none data-[hover]:bg-white/20 data-[active]:bg-white/30">
          Submit details
        </Button>
      </Fieldset>
    </form>
  );
}
