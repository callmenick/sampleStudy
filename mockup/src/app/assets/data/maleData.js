(function () {

  'use strict';

  angular
    .module('app')
    .factory('MaleData', maleData);

    function maleData() {
      var data = [
        {
          'id':1,
          'voice':16,
          'voicefil':'m16_power.wav',
          'plev':1,
          'pitch_smeanMD':1.070878948,
          'intense_smeanMD':2.883110379,
          'form_smeanMD':-32.18579315
        },
        {
          'id':2,
          'voice':77,
          'voicefil':'m77_power.wav',
          'plev':-1,
          'pitch_smeanMD':-22.60790468,
          'intense_smeanMD':-0.694575491,
          'form_smeanMD':-25.17862031
        },
        {
          'id':3,
          'voice':69,
          'voicefil':'m69_power.wav',
          'plev':1,
          'pitch_smeanMD':-24.68252622,
          'intense_smeanMD':0.777070788,
          'form_smeanMD':-33.81499526
        },
        {
          'id':4,
          'voice':53,
          'voicefil':'m53_power.wav',
          'plev':1,
          'pitch_smeanMD':-23.54477504,
          'intense_smeanMD':1.18463605,
          'form_smeanMD':-47.52740953
        },
        {
          'id':5,
          'voice':5,
          'voicefil':'m05_power.wav',
          'plev':1,
          'pitch_smeanMD':-33.43120241,
          'intense_smeanMD':1.29169084,
          'form_smeanMD':-51.79217249
        },
        {
          'id':6,
          'voice':75,
          'voicefil':'m75_power.wav',
          'plev':-1,
          'pitch_smeanMD':-13.86927377,
          'intense_smeanMD':-2.762196833,
          'form_smeanMD':-71.29410994
        },
        {
          'id':7,
          'voice':52,
          'voicefil':'m52_power.wav',
          'plev':-1,
          'pitch_smeanMD':-55.00307897,
          'intense_smeanMD':1.594488922,
          'form_smeanMD':-37.18509741
        },
        {
          'id':8,
          'voice':68,
          'voicefil':'m68_power.wav',
          'plev':1,
          'pitch_smeanMD':-45.54309603,
          'intense_smeanMD':-0.153930797,
          'form_smeanMD':-49.24369315
        },
        {
          'id':9,
          'voice':24,
          'voicefil':'m24_power.wav',
          'plev':-1,
          'pitch_smeanMD':-46.67851048,
          'intense_smeanMD':-1.339460118,
          'form_smeanMD':-47.30422358
        },
        {
          'id':10,
          'voice':37,
          'voicefil':'m37_power.wav',
          'plev':1,
          'pitch_smeanMD':-51.73112472,
          'intense_smeanMD':6.85368342,
          'form_smeanMD':-52.91175048
        },
        {
          'id':11,
          'voice':45,
          'voicefil':'m45_power.wav',
          'plev':-1,
          'pitch_smeanMD':-59.25449845,
          'intense_smeanMD':-7.214613373,
          'form_smeanMD':-48.63153825
        },
        {
          'id':12,
          'voice':40,
          'voicefil':'m40_power.wav',
          'plev':1,
          'pitch_smeanMD':-38.10005569,
          'intense_smeanMD':4.190558733,
          'form_smeanMD':-72.93700058
        },
        {
          'id':13,
          'voice':29,
          'voicefil':'m29_power.wav',
          'plev':-1,
          'pitch_smeanMD':-60.97079943,
          'intense_smeanMD':-10.54984768,
          'form_smeanMD':-49.68190061
        },
        {
          'id':14,
          'voice':48,
          'voicefil':'m48_power.wav',
          'plev':-1,
          'pitch_smeanMD':-24.08126192,
          'intense_smeanMD':-10.74284725,
          'form_smeanMD':-87.38800633
        },
        {
          'id':15,
          'voice':74,
          'voicefil':'m74_power.wav',
          'plev':-1,
          'pitch_smeanMD':-55.9149508,
          'intense_smeanMD':-1.246213837,
          'form_smeanMD':-65.21366067
        },
        {
          'id':16,
          'voice':66,
          'voicefil':'m66_power.wav',
          'plev':1,
          'pitch_smeanMD':-28.42126728,
          'intense_smeanMD':6.315673606,
          'form_smeanMD':-89.96945133
        },
        {
          'id':17,
          'voice':8,
          'voicefil':'m08_power.wav',
          'plev':-1,
          'pitch_smeanMD':-51.23349522,
          'intense_smeanMD':-1.522640638,
          'form_smeanMD':-72.26076404
        },
        {
          'id':18,
          'voice':57,
          'voicefil':'m57_power.wav',
          'plev':1,
          'pitch_smeanMD':-50.7140218,
          'intense_smeanMD':-1.994515665,
          'form_smeanMD':-74.09858586
        },
        {
          'id':19,
          'voice':41,
          'voicefil':'m41_power.wav',
          'plev':-1,
          'pitch_smeanMD':-35.55247482,
          'intense_smeanMD':1.151793187,
          'form_smeanMD':-102.3590167
        },
        {
          'id':20,
          'voice':81,
          'voicefil':'m81_power.wav',
          'plev':1,
          'pitch_smeanMD':-52.91861978,
          'intense_smeanMD':1.603788418,
          'form_smeanMD':87.7263841
        },
        {
          'id':21,
          'voice':14,
          'voicefil':'m14_power.wav',
          'plev':-1,
          'pitch_smeanMD':-53.91970532,
          'intense_smeanMD':-2.711320599,
          'form_smeanMD':-86.46027791
        },
        {
          'id':22,
          'voice':32,
          'voicefil':'m32_power.wav',
          'plev':1,
          'pitch_smeanMD':-49.30869254,
          'intense_smeanMD':7.050704364,
          'form_smeanMD':-87.57022024
        },
        {
          'id':23,
          'voice':71,
          'voicefil':'m71_power.wav',
          'plev':1,
          'pitch_smeanMD':-61.14116751,
          'intense_smeanMD':-0.838822813,
          'form_smeanMD':-84.38816064
        },
        {
          'id':24,
          'voice':47,
          'voicefil':'m47_power.wav',
          'plev':1,
          'pitch_smeanMD':-40.19516918,
          'intense_smeanMD':4.103040844,
          'form_smeanMD':-103.9698268
        },
        {
          'id':25,
          'voice':50,
          'voicefil':'m50_power.wav',
          'plev':-1,
          'pitch_smeanMD':-66.19555106,
          'intense_smeanMD':-4.323644849,
          'form_smeanMD':-79.60351156
        },
        {
          'id':26,
          'voice':55,
          'voicefil':'m55_power.wav',
          'plev':1,
          'pitch_smeanMD':-43.34882756,
          'intense_smeanMD':-3.576351805,
          'form_smeanMD':-110.717872
        },
        {
          'id':27,
          'voice':54,
          'voicefil':'m54_power.wav',
          'plev':-1,
          'pitch_smeanMD':-26.66974407,
          'intense_smeanMD':1.416978737,
          'form_smeanMD':144.5983159
        },
        {
          'id':28,
          'voice':61,
          'voicefil':'m61_power.wav',
          'plev':1,
          'pitch_smeanMD':-35.90787639,
          'intense_smeanMD':8.746527252,
          'form_smeanMD':150.0255111
        },
        {
          'id':29,
          'voice':26,
          'voicefil':'m26_power.wav',
          'plev':-1,
          'pitch_smeanMD':-44.26466596,
          'intense_smeanMD':-0.639935505,
          'form_smeanMD':167.9272014
        },
        {
          'id':30,
          'voice':15,
          'voicefil':'m15_power.wav',
          'plev':-1,
          'pitch_smeanMD':-50.01409381,
          'intense_smeanMD':-0.52755697,
          'form_smeanMD':164.2790612
        }
      ];

      return {
        data: _.map(data, function(e) {
          return {
            speakerId: e.voice,
            voicefil: e.voicefil,
            plev: e.plev,
            sex: -1
          };
        })
      };
    }

})();
