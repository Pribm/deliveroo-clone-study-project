export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name of Dish',
      validation: Rule => Rule.required()
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: Rule => Rule.max(200)
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the dish'
    }
  ]
}
