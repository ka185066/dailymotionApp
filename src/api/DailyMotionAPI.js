import settings from '../settings';
import request from 'superagent';

export function getAccessToken(auth_code){
  return new Promise((resolve, reject)=>{
    request
      .post(settings.host +'/getAccessToken')
      .send({auth_code})
      .end((err, res)=>{
        if(!err){
          resolve(JSON.parse(res.text));
        }else{
          reject(err);
        }
      });
  });
}
