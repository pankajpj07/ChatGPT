// services/subscription.js
import instance from "../config/instance";

export const subscriptionService = {
    createCheckoutSession: async (planType, priceId) => {
        try {
            const response = await instance.post('/api/subscription/create-checkout-session', {
                planType,
                priceId
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    getSubscriptionStatus: async () => {
        try {
            const response = await instance.get('/api/subscription/status');
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },
    cancelSubscription: async () => {
        try {
            const response = await instance.post('/api/subscription/cancel');
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
};