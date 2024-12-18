// In your schema.js or corresponding schema file

export default {
  name: 'problemstatement',
  type: 'document',
  title: 'Problem Statement',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'deadline',
      type: 'datetime',
      title: 'Deadline',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Low Prep', value: 'low_prep' },
          { title: 'Mid Prep', value: 'mid_prep' },
          { title: 'High Prep', value: 'high_prep' },
          { title: 'No Prep', value: 'no_prep' },
        ],
      },
    },
    {
      name: 'postedBy',
      type: 'string',
      title: 'Posted By (Club)',
    },
    {
      name: 'pdfFile',
      type: 'file',
      title: 'Upload PDF',
      options: {
        accept: '.pdf',
      },
    },
    {
      name: 'readyToSubmit',
      type: 'boolean',
      title: 'Ready to Submit',
      description: 'Indicates whether the problem statement is ready to be submitted or not',
      initialValue: false, // Optional: Defaults to false
    },
    {
      name: 'submittingLink',
      type: 'url', // Define the type as URL for the submitting link
      title: 'Submitting Link',
      description: 'The link where the submissions for this problem statement can be made',
    },
  ],
};
