import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import PaymentGate from "./components/PaymentGate";
import NotFound from "./pages/NotFound";
import { hasUserPaid } from "./utils/paymentStorage";

const queryClient = new QueryClient();

const App = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check payment status on app load
    const checkPayment = async () => {
      const paid = hasUserPaid();
      setIsPaid(paid);
      setIsLoading(false);
    };
    checkPayment();
  }, []);

  const handlePaymentComplete = () => {
    setIsPaid(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-semibold text-primary">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isPaid) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <PaymentGate onPaymentComplete={handlePaymentComplete} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fire-fighting" element={<ContentPage />} />
            <Route path="/damage-control" element={<ContentPage />} />
            <Route path="/nbcd" element={<ContentPage />} />
            <Route path="/first-aid" element={<ContentPage />} />
            <Route path="/about" element={<ContentPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
