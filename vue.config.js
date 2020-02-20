// module.exports = {
//   configureWebpack:{
//     resolve:{
//       alias:{
//         '@': 'src',
//         'assets':'@/assets',
//         'common':'@/common',
//         'components':'@/components',
//         'network':'@/network',
//         'views':'@/views',
//         // store和router可以不用配置，因为可以通过this.$store等方式全局使用
//       }
//     }
//   }
// }

module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views',
          }
      }
  }
}