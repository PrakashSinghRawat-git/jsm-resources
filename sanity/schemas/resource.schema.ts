const schema = {
    name: "resource",
    title: "Resource",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            require,
            validation: (Rule: any) =>
                Rule.required()
                    .min(3)
                    .max(80)
                    .error("Title must be between 3 and 80 characters"),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
        },
        {
            name: "downloadLink",
            title: "Download Link",
            type: "url",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "views",
            title: "Views",
            type: "number",
            initialValue: 0,
        },
        {
            name: "poster",
            title: "Poster",
            type: "image",
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            }
        },
        {
          name: 'category',
          title: 'Category',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
          options: {
            list: ['frontend', 'backend', 'next 13', 'fullstack', 'other']
          }
        }
    ],
};

export default schema;