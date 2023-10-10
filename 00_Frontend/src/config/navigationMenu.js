export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [{ name: 'Tops', id: 'top', href: `{women/clothing/tops}` }],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [{ name: 'Watches', id: 'watches' }],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [{ name: 'Mens Kurtas', id: 'mens_kurta' }],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [{ name: 'Watches', id: 'watches' }],
        },
      ],
    },
  ],
  pages: [],
};
