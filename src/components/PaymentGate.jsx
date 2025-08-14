import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { markUserAsPaid, checkAndStoreIP } from '../utils/paymentStorage';

const PaymentGate = ({ onPaymentComplete }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Check and store IP on component mount
    checkAndStoreIP();
  }, []);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      markUserAsPaid();
      setIsProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Access Required
          </CardTitle>
          <div className="h-1 w-20 bg-accent mx-auto mt-2"></div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              This is a premium Bangladesh Navy application. 
              Please complete payment to access all features.
            </p>
            
            <div className="bg-secondary p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Features Include:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Fire Fighting Procedures</li>
                <li>• Damage Control Guidelines</li>
                <li>• NBCD Training Materials</li>
                <li>• First Aid Instructions</li>
                <li>• Navy Blog & Updates</li>
              </ul>
            </div>
          </div>
          
          <Button 
            onClick={handlePayment} 
            disabled={isProcessing}
            className="w-full h-12 text-lg"
            variant="default"
          >
            {isProcessing ? 'Processing Payment...' : 'Pay Now - ৳500'}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Secure payment • One-time purchase • Lifetime access
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentGate;