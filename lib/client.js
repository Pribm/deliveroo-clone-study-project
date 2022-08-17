
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'ug2483lk',
    dataset: 'production',
    token: process.env.REACT_PUBLIC_SANITY_TOKEN,
    apiVersion: '2022-08-15',
    useCdn: true,
    useProjectHostname: true
})

export const builder = imageUrlBuilder(client)

const urlFor = src => builder.image(src)

export { urlFor, client}