/**
 * @type {import('vite').UserConfig}
 */
 const config = {
   root: './src',

   build: {
    outDir: '../dist', // relative to index.html

    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        
        assetFileNames: (data) => {
          const { name } = data;
          console.log('assetFileNames >>> ', data);
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/images/[name]-[hash][extname]';
          }
          
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';   
          }
 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  },
}

export default config