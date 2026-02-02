import { createApiClient } from '@/vendor/clientFactory';

// Create a client with authentication required
export const apiClient = createApiClient({
  appId: "6964be348d248c0ae74b34b0", 
  requiresAuth: true // Ensure authentication is required for all operations
});
