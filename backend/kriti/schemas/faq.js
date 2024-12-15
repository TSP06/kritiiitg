export default {
    name: 'faq',
    type: 'document',
    title: 'FAQ',
    fields: [
        {
            name: 'id',
            type: 'number',
            title: 'ID'
          },
        {
            name: 'question',
            type: 'string',
            title: 'Question'
        },
        {
            name: 'answer',
            type: 'string',
            title: 'Answer'
        }
       
    ]
}