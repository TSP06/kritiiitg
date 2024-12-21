import { createClient } from '@sanity/client';
export const client = createClient({
  projectId: 'bfkthwsi', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, 
   apiVersion: '2022-03-07',
 
});
