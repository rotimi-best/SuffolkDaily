const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})





// const sitemap = require('nextjs-sitemap-generator');  


// module.exports = sitemap({  

//   baseUrl: 'https://www.suffolkdaiily.co.uk/',  
//   ignoredPaths: ['admin'],  
//   pagesDirectory: __dirname + "\\pages",  
//   targetDirectory : 'public/',
//   nextConfigPath: __dirname + "\\next.config.js",
//   ignoredExtensions: [
//         'png',
//         'jpg'
//   ],
//   pagesConfig: {
//     '/login': {
//       priority: '0.5',
//       changefreq: 'daily'
//     }
//   }
// });