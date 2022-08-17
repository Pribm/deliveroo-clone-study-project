export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.required().min(3)
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required().max(200)
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of Restaurant",

    },
    {
      name: "long",
      type: "string",
      title: "Longitude of Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Rule) => Rule.required()
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from 1 to 5",
      validation: (Rule) => Rule.min(1).max(5).error('Please enter a Value between 1 and 5')
    },
    {
      name: "type",
      type: "Category",
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: "category"}],
    },
    {
      name: "dishes",
      type: "array",
      title: "dishes",
      of: [{type: "reference", to: [{type: "dish"}]}]
    }
  
  ],
}
