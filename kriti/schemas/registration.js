// /schemas/registration.js
export default {
    name: 'registration',
    title: 'Registration',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'High Prep', value: 'highprep' },
            { title: 'Mid Prep', value: 'midprep' },
            { title: 'Low Prep', value: 'lowprep' },
            { title: 'No Prep', value: 'noprep' },
          ],
          layout: 'radio',
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'ps',
        title: 'Problem Statement Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'members',
        title: 'Members Details',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'member',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'phone',
                title: 'Phone Number',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'email',
                title: 'Email ID',
                type: 'string',
                validation: (Rule) => Rule.email().required(),
              },
              {
                name: 'department',
                title: 'Department',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'year',
                title: 'Year',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
        validation: (Rule) =>
          Rule.custom((members, context) => {
            const { category } = context.document;
            let maxMembers = 0;
  
            // Check max members based on the category
            switch (category) {
              case 'highprep':
                maxMembers = 8;
                break;
              case 'midprep':
                maxMembers = 6;
                break;
              case 'lowprep':
                maxMembers = 4;
                break;
              case 'noprep':
                maxMembers = 2;
                break;
              default:
                maxMembers = 0;
                break;
            }
  
            // Validation: Ensure the number of members fits the category
            if (members.length > maxMembers) {
              return `You can only have up to ${maxMembers} members for the selected category.`;
            }
  
            if (members.length < 1) {
              return 'At least one member is required.';
            }
  
            return true;
          }),
      },
    ],
  };
  