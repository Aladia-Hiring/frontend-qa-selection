import '../assets/css/main.css';

export const parameters = {
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },
    },
  },
};

// Add your decorator using the `decorators` array
export const decorators = [
  (story) => ({
    template: `<div style="background-color: #f5f5f5;">${story()}</div>`,
  }),
];
