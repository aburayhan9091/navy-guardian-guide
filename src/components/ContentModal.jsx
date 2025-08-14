import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ContentModal = ({ isOpen, onClose, title, content }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto max-h-[80vh] overflow-hidden">
        <DialogHeader className="flex flex-row items-center justify-between pr-6">
          <DialogTitle className="text-lg font-semibold text-primary">
            {title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-6 w-6 shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[60vh] pr-2">
          <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;