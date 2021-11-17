'use strict';

/** MONGODB **/
const mongodbUrl = 'mongodb://localhost:27017/sdw-cli';
const mongodbDbName = 'sdw-cli';
const OSS_ACCESS_KEY = ''  //阿里云密钥
const OSS_ACCESS_SECRET_KEY = ''
const OSS_REGION = 'oss-cn-shenzhen'
const OSS_PROD_BUCKET = 'vue-template' //阿里云oss存储桶的名称，可以选择在这里配置，可以用命令行交互的方式
const OSS_DEV_BUCKET = 'vue-template'
const OSS_COMPONENT_BUCKET = 'vue-component' // 组件存储桶名字
const DO_MAIN = 'yoursite.com' //域名
module.exports = {
  mongodbUrl,
  mongodbDbName,
  OSS_ACCESS_KEY,
  OSS_ACCESS_SECRET_KEY,
  OSS_REGION,
  OSS_PROD_BUCKET,
  OSS_DEV_BUCKET,
  OSS_COMPONENT_BUCKET,
  DO_MAIN
};
