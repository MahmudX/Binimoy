if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let d={};const n=e=>i(e,o),p={module:{uri:o},exports:d,require:n};a[o]=Promise.all(s.map((e=>p[e]||n(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b3f8ee23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"AppImages/android/android-launchericon-144-144.png",revision:"af724db21f1088ddf2774bbd3cae5b52"},{url:"AppImages/android/android-launchericon-192-192.png",revision:"3e79d6efd40e2c503bd4d3cc11188dae"},{url:"AppImages/android/android-launchericon-48-48.png",revision:"7027372b5a9039cb0852cc9ac00a29f9"},{url:"AppImages/android/android-launchericon-512-512.png",revision:"3d641174142e1ce6f892f72a42dd0d6b"},{url:"AppImages/android/android-launchericon-72-72.png",revision:"d8ce8d563c2c7505a4abebe327d89444"},{url:"AppImages/android/android-launchericon-96-96.png",revision:"514759f0b0d10a10e24da2856a807e9e"},{url:"AppImages/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"AppImages/ios/100.png",revision:"09ac0c72b019a0c288dda42fe5f3a95e"},{url:"AppImages/ios/1024.png",revision:"29830553d21821666e0f5012765f8a11"},{url:"AppImages/ios/114.png",revision:"b0700bb4a5998003f1ea55f7568370d8"},{url:"AppImages/ios/120.png",revision:"e7098723abe2253ac99da25cf06c94b4"},{url:"AppImages/ios/128.png",revision:"763d98f889655cfab1ac0765c6cd53f6"},{url:"AppImages/ios/144.png",revision:"af724db21f1088ddf2774bbd3cae5b52"},{url:"AppImages/ios/152.png",revision:"9cd1003cfa3d86e932733efd7140e535"},{url:"AppImages/ios/16.png",revision:"82a4018e5b1b5a5af870f118d283ecea"},{url:"AppImages/ios/167.png",revision:"9beaa626c2210bebaaf12d0c66b666be"},{url:"AppImages/ios/180.png",revision:"113298dc88392e3e94f1cb7a1f6e15f9"},{url:"AppImages/ios/192.png",revision:"3e79d6efd40e2c503bd4d3cc11188dae"},{url:"AppImages/ios/20.png",revision:"4f04eaab9b401071801bbcc6b1cda4c7"},{url:"AppImages/ios/256.png",revision:"0c89b28dc86acc7b9c84ffaf4517ca05"},{url:"AppImages/ios/29.png",revision:"57f06a4ec35ed0bd2e547f79962688ba"},{url:"AppImages/ios/32.png",revision:"99c1c609e8df24660a3110b72dc87c8e"},{url:"AppImages/ios/40.png",revision:"37a621143229a3ec5e1d653599141330"},{url:"AppImages/ios/50.png",revision:"6f300818f773a30811b385b134c86d92"},{url:"AppImages/ios/512.png",revision:"3d641174142e1ce6f892f72a42dd0d6b"},{url:"AppImages/ios/57.png",revision:"0177b06803cbb7977f9d61c439aeb665"},{url:"AppImages/ios/58.png",revision:"a3651935f4a428ab61ea1757ba4d9ce6"},{url:"AppImages/ios/60.png",revision:"55e14f98b4a5d186959bc3d39287dc6a"},{url:"AppImages/ios/64.png",revision:"af60d5ba102076ab836cf61893e45658"},{url:"AppImages/ios/72.png",revision:"d8ce8d563c2c7505a4abebe327d89444"},{url:"AppImages/ios/76.png",revision:"015247a0e83afcb89f3416fb98fbc3f6"},{url:"AppImages/ios/80.png",revision:"47d6aee2851d74522fb53524c720ca12"},{url:"AppImages/ios/87.png",revision:"a865807cd9d58e2f27e27e938b9cc720"},{url:"AppImages/windows11/LargeTile.scale-100.png",revision:"c59526695c9965cc2cdcf3e53db2a530"},{url:"AppImages/windows11/LargeTile.scale-125.png",revision:"37da81704e5c23bb008ea5cadcc475e5"},{url:"AppImages/windows11/LargeTile.scale-150.png",revision:"8c04afe1bdd69691c0d70b34d1f07a1f"},{url:"AppImages/windows11/LargeTile.scale-200.png",revision:"8b82fe2382f463b31cffe1d2363940be"},{url:"AppImages/windows11/LargeTile.scale-400.png",revision:"3fd29596ae4ee73ea9a85e7e495e67bf"},{url:"AppImages/windows11/SmallTile.scale-100.png",revision:"3b3d2efe8f9df5112b6b6f870696bd26"},{url:"AppImages/windows11/SmallTile.scale-125.png",revision:"681b87b96a3403265cb45d5e079a76eb"},{url:"AppImages/windows11/SmallTile.scale-150.png",revision:"188110bf9730851b76c299784d55baec"},{url:"AppImages/windows11/SmallTile.scale-200.png",revision:"ee3fb02c391004a0cb44279e2c326990"},{url:"AppImages/windows11/SmallTile.scale-400.png",revision:"9612f3ab71c9340abd73d348e162491e"},{url:"AppImages/windows11/SplashScreen.scale-100.png",revision:"f0a3447aceba3161147819144a7d620a"},{url:"AppImages/windows11/SplashScreen.scale-125.png",revision:"8f0a3f4d34dd82ab5ff913164b0c928c"},{url:"AppImages/windows11/SplashScreen.scale-150.png",revision:"8946277684ed0deccdc96e6a4ee3a1fd"},{url:"AppImages/windows11/SplashScreen.scale-200.png",revision:"03f86922c1a9c93e2d1a46d1bb1ac522"},{url:"AppImages/windows11/SplashScreen.scale-400.png",revision:"5e2e56212e064bdd8e5166bc2c6d3e57"},{url:"AppImages/windows11/Square150x150Logo.scale-100.png",revision:"dba6dfece454a4f875146b89b3fb91b4"},{url:"AppImages/windows11/Square150x150Logo.scale-125.png",revision:"aae1cd402f430bccf39c178fdfff5dcb"},{url:"AppImages/windows11/Square150x150Logo.scale-150.png",revision:"67fb0a7bcc98b6a6d8cd1558a4c395dd"},{url:"AppImages/windows11/Square150x150Logo.scale-200.png",revision:"48323a28ea1b8c5e702ede7a5d19ba83"},{url:"AppImages/windows11/Square150x150Logo.scale-400.png",revision:"1410e328f4a9fffe4f32aefa87fb0701"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"dc4cd6bb3a7a2c19f89251febfc9ae43"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"ee356fc1f15dc9f1cc5f212d31635931"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"4b33cd678d17e44133713a1a09fd9c5c"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"3a288a8ecd61d65ce5648985a21cf871"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"256e837049f497a3897fa7b1dc2a0f5e"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"18806015681e125d9d086172d8877401"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"e61b6da9ec9165fdb378540a3f5e6b85"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"0b9142f3a418d1b83739080be7b47a43"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"8e6b25f98e9d54593c47b6b66df226ac"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"13b28db927a5b328ba0b9ed4a4f51986"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"56c743528d8d948c913bfb099bd94100"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"7faee8e70dbcc4500d9ea6f421b20dc1"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"533b256bebd2184152ebfc8fb84cec67"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"2afbd3cf7c3b789a4c1ede5fa0a57e89"},{url:"AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"1e4bfcdc37fb4830dea5ad81375d9e14"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"dc4cd6bb3a7a2c19f89251febfc9ae43"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"ee356fc1f15dc9f1cc5f212d31635931"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"4b33cd678d17e44133713a1a09fd9c5c"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"3a288a8ecd61d65ce5648985a21cf871"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"256e837049f497a3897fa7b1dc2a0f5e"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"18806015681e125d9d086172d8877401"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"e61b6da9ec9165fdb378540a3f5e6b85"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"0b9142f3a418d1b83739080be7b47a43"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"8e6b25f98e9d54593c47b6b66df226ac"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"13b28db927a5b328ba0b9ed4a4f51986"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"56c743528d8d948c913bfb099bd94100"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"7faee8e70dbcc4500d9ea6f421b20dc1"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"533b256bebd2184152ebfc8fb84cec67"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"2afbd3cf7c3b789a4c1ede5fa0a57e89"},{url:"AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"1e4bfcdc37fb4830dea5ad81375d9e14"},{url:"AppImages/windows11/Square44x44Logo.scale-100.png",revision:"8e6b25f98e9d54593c47b6b66df226ac"},{url:"AppImages/windows11/Square44x44Logo.scale-125.png",revision:"be59ca8f475c6ea1a14958e312f9355e"},{url:"AppImages/windows11/Square44x44Logo.scale-150.png",revision:"3dddf4a6d6c669e032b2f1cda8f85cff"},{url:"AppImages/windows11/Square44x44Logo.scale-200.png",revision:"4e41504ffb1784103bd8df899fc201c1"},{url:"AppImages/windows11/Square44x44Logo.scale-400.png",revision:"8f414817bd2b664e0cd8782034fea011"},{url:"AppImages/windows11/Square44x44Logo.targetsize-16.png",revision:"dc4cd6bb3a7a2c19f89251febfc9ae43"},{url:"AppImages/windows11/Square44x44Logo.targetsize-20.png",revision:"ee356fc1f15dc9f1cc5f212d31635931"},{url:"AppImages/windows11/Square44x44Logo.targetsize-24.png",revision:"4b33cd678d17e44133713a1a09fd9c5c"},{url:"AppImages/windows11/Square44x44Logo.targetsize-256.png",revision:"3a288a8ecd61d65ce5648985a21cf871"},{url:"AppImages/windows11/Square44x44Logo.targetsize-30.png",revision:"256e837049f497a3897fa7b1dc2a0f5e"},{url:"AppImages/windows11/Square44x44Logo.targetsize-32.png",revision:"18806015681e125d9d086172d8877401"},{url:"AppImages/windows11/Square44x44Logo.targetsize-36.png",revision:"e61b6da9ec9165fdb378540a3f5e6b85"},{url:"AppImages/windows11/Square44x44Logo.targetsize-40.png",revision:"0b9142f3a418d1b83739080be7b47a43"},{url:"AppImages/windows11/Square44x44Logo.targetsize-44.png",revision:"8e6b25f98e9d54593c47b6b66df226ac"},{url:"AppImages/windows11/Square44x44Logo.targetsize-48.png",revision:"13b28db927a5b328ba0b9ed4a4f51986"},{url:"AppImages/windows11/Square44x44Logo.targetsize-60.png",revision:"56c743528d8d948c913bfb099bd94100"},{url:"AppImages/windows11/Square44x44Logo.targetsize-64.png",revision:"7faee8e70dbcc4500d9ea6f421b20dc1"},{url:"AppImages/windows11/Square44x44Logo.targetsize-72.png",revision:"533b256bebd2184152ebfc8fb84cec67"},{url:"AppImages/windows11/Square44x44Logo.targetsize-80.png",revision:"2afbd3cf7c3b789a4c1ede5fa0a57e89"},{url:"AppImages/windows11/Square44x44Logo.targetsize-96.png",revision:"1e4bfcdc37fb4830dea5ad81375d9e14"},{url:"AppImages/windows11/StoreLogo.scale-100.png",revision:"6f300818f773a30811b385b134c86d92"},{url:"AppImages/windows11/StoreLogo.scale-125.png",revision:"fd56d723386d78410cba55cafc9c4fb2"},{url:"AppImages/windows11/StoreLogo.scale-150.png",revision:"621ce05164b38e70238ba5ee71256ee3"},{url:"AppImages/windows11/StoreLogo.scale-200.png",revision:"09ac0c72b019a0c288dda42fe5f3a95e"},{url:"AppImages/windows11/StoreLogo.scale-400.png",revision:"3f713fad8fb9fc89e269fc02f806c5c6"},{url:"AppImages/windows11/Wide310x150Logo.scale-100.png",revision:"510f8f08a1e3711ebf20ab8c3d5cf38d"},{url:"AppImages/windows11/Wide310x150Logo.scale-125.png",revision:"f6876e84153f6395a2f2f84cfc9331ea"},{url:"AppImages/windows11/Wide310x150Logo.scale-150.png",revision:"7d7c60fc213201c148c11b2655054128"},{url:"AppImages/windows11/Wide310x150Logo.scale-200.png",revision:"f0a3447aceba3161147819144a7d620a"},{url:"AppImages/windows11/Wide310x150Logo.scale-400.png",revision:"03f86922c1a9c93e2d1a46d1bb1ac522"},{url:"css/style.css",revision:"279a8f56f39675789adb9da63a770b70"},{url:"css/style2.css",revision:"7ab95c7d2cc1178e440a38918c7538f2"},{url:"html/create.html",revision:"26f9ce21b896c37eaec3b68ed884d727"},{url:"html/login.html",revision:"e391ffcc6b329a29dc5dfa6ac5974f69"},{url:"html/post.html",revision:"b4878e6655cc2db66fd5087097fb415a"},{url:"html/privacy.html",revision:"ca4e21b614f00e449343ff70ccaa51f1"},{url:"html/search.html",revision:"4178378f42d383222a1a9aca3b2725a2"},{url:"html/settings.html",revision:"850f9c43db7a27c450c1ca514e28a825"},{url:"html/terms.html",revision:"97586afa8c026d3a11592a8836ee2231"},{url:"html/up.html",revision:"c8cf4d96fd7a38d045ebde8a237b7026"},{url:"index.html",revision:"f5b2b24ed8174419b1465ef699295667"},{url:"manifest.json",revision:"eadb097cb3754e97b4f0b90cffbb6419"},{url:"picture/binimoy.png",revision:"23359583e23ab786224eda3c1362196d"},{url:"picture/car_1.jpg",revision:"add0bd6c662b9835f1fb2cc223ed8a32"},{url:"picture/carousel_1.jpg",revision:"811fdc5131a96901d6ee3c0938c18851"},{url:"picture/carousel_2.jpg",revision:"811fdc5131a96901d6ee3c0938c18851"},{url:"picture/carousel_3.jpg",revision:"811fdc5131a96901d6ee3c0938c18851"},{url:"picture/laptop_1.jpg",revision:"3d50b2b3883542e87b76b4dfdff0399c"},{url:"picture/motorbike_1.jpg",revision:"5f0382f1164f511c8bf349e8ac5b82d8"},{url:"picture/offer_banner.jpg",revision:"5c4d328817f7039a7e50145de92452e7"},{url:"picture/phone_1.jpg",revision:"e0ee1da239d4473a08b019870b032d0a"},{url:"picture/phone_2.jpg",revision:"ccbbf5df8dc81fd251f11a1dcb0b98ed"},{url:"picture/Screenshot_2.png",revision:"73136a4a08331e49b9e3c5112614b914"},{url:"picture/user.jpg",revision:"1e03d10debb439868779d0e598dd28cc"},{url:"readme.txt",revision:"2ba679840f3dd3ea00376a763065c5b1"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
