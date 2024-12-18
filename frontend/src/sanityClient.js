import { createClient } from '@sanity/client';
export const client = createClient({
  projectId: 'bfkthwsi', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, 
   apiVersion: '2022-03-07',
  token:'skbcNpCWEPK0eah4R0eBjISANO23dZROJ4HKk9dWvNVkUxb8oLmnA705YQc0aECvzRlmR9G4DlSFLqNnSvxqH8FJ1gsv0Ei1RYVuQukRIUJxoWZon7JmiqEGTh9mcod6vynuyevYgSnaGc2XO0ML9EA24LypCgGclB9TJ6lSaFXuRE5gjWJb'         // `true` for faster, cache-based responses
});
