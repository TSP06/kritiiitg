export default {
    name: 'problemstatement',
    type: 'document',
    title: 'Problem Statement',
    fields: [
      {
        name: 'id',
        type: 'number',
        title: 'ID'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'deadline',
        type: 'datetime',
        title: 'Deadline'
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
            { title: 'No Prep', value: 'no_prep' }
          ],
        },
      },
      {
        name: 'postedBy',
        type: 'string',
        title: 'Posted By (Club)'
      },
      {
        name: 'pdfFile',
        type: 'file',
        title: 'Upload PDF',
        options: {
          accept: '.pdf',
        },
      },
    ]
  }
  