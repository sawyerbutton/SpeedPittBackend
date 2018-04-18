import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class SpeedTestMiddleware implements  NestMiddleware{
  public resolve(): ExpressMiddleware {
    return (req, res, next) => {
      console.log('Request...');
      const speedTest = require('speedtest-net');
      let speedData:any ={};
      var observe = require('observe');
      var observer = observe(speedData);
      observer.on('change',function(change){
        if(change.data !== speedData){
          console.log("data already passed");
          next();
        }
      })
      speedTest({maxTime: 5000})
        .on('data',function(data) {
          // const id = null;
          const {download,upload} = data.speeds;
          const {ip, lat, lon, isp} = data.client;
          speedData = {download, upload,ip,lat,lon,isp};
          console.log(speedData);
          observer.set(speedData);
          req.data = speedData;
        })
    };
  }
}