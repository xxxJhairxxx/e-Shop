
export default {
  content: [
    "./src/**/*.{html,ts}", // Asegura que Tailwind procese los archivos Angular
  ],
  theme: {
    extend: { colors: {
      primary: '#eb5204',
      secondary: '#FFC107',
    }},
    fontFamily: {
      primary: ['var(--font-primary)'],
    },
    screens: {
      phone: '414px',
      tablet: '768px',
      tabletlg: '960px',
      tabletxl: '1024px',
      laptop: '1200px',
      laptoplg: '1400px',
      desktop: '1700px',
    },
  },
  plugins: [],
};
