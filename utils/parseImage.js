import imageUrlBuilder from '@sanity/image-url'

export default function parseImage(client, source) {
    const builder = imageUrlBuilder(client)
    const src = builder.image(source)
    return src
}

