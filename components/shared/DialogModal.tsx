"use client";
import {
  Button,
  Checkbox,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
} from "@headlessui/react";
import React, { useState } from "react";
export default function DialogModal() {
  const [isOpen, setIsOpen] = useState(false);
  let [isGift, setIsGift] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        transition
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="max-w-lg space-y-4 bg-white p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <DialogTitle className="font-bold">
                Deactivate account
              </DialogTitle>
              <Description>
                This will permanently deactivate your account
              </Description>
              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed.
              </p>

              <Field>
                <Checkbox autoFocus value={isGift} onChange={setIsGift} />
                <Label>This order is a gift</Label>
              </Field>
              <div className="flex gap-4">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
