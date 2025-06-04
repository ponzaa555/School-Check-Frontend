"use client"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import React, { JSX, ReactNode, useState } from "react";

type MyDialogProps = {
  trigger: ReactNode,
//   description?: string
  children?: ReactNode | ((onClose: () => void) => ReactNode);
  halfScreen?: boolean
};

export default function MyDialog({ trigger  ,children ,halfScreen  }: MyDialogProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild >
        {trigger}
      </DialogTrigger>
      <DialogContent className={`${ halfScreen ? "!w-1/2 !max-w-[50vw]" : ""}`}>
        <DialogHeader hidden>
          <DialogTitle></DialogTitle>
          <DialogDescription className="h-0"></DialogDescription>
        </DialogHeader>
          {typeof children === "function" ? children(handleClose) : children}
      </DialogContent>
    </Dialog>
  );
}
