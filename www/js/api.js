


var authorizeUser = function(callback) {

  var client_id = "664215290683-thjone29b1n8md31t5n4aufbuansum0r.apps.googleusercontent.com";
  var redirect_uri = "http://localhost:3000/auth/google-client";
  var auth_url = "https://accounts.google.com/o/oauth2/auth";

  var login_url = auth_url + '?' + $.param({ client_id: client_id, redirect_uri: redirect_uri, scope: 'https://www.googleapis.com/auth/plus.login', response_type: 'code'});

  var loginWindow = window.open(login_url, '_blank', 'location=yes');

  setTimeout(function() {
    loginWindow.close();
  }, 2000)

  // loginWindow.addEventListener('loadstart', function(e) {
  //   console.log('loadstart event');
  //   alert('fuck me')
  // })

  // loginWindow.addEventListener('loadstop', function(e) {
  //   console.log('loadstop event');
  // })

  // $(loginWindow).on('loadstart', function(e) {
  //   console.log('Loadstart triggered')
  //   alert('load start triggered');
  //     var url = e.originalEvent.url;
  //     console.log('URL:', url);

  //     // if (code || error){
  //     //   loginWindow.close();

  //     // }
  // });

  // $(loginWindow).on('loadstop', function(e) {
  //   console.log('Loadstop triggered')
  //     var url = e.originalEvent.url;
  //     console.log('URL:', url);
  //   alert('fuck me')



  //     // if (code || error){
  //     //   loginWindow.close();

  //     // }
  // });

  // $(loginWindow).on('loaderror', function(e) {
  //   console.log('error');
  //   alert('fuck me')

  // });

  // $(loginWindow).on('exit', function(e) {
  //   console.log('exit');
  //   alert('fuck me')
    

  // });

};

var getRoutes = function(callback) {
    // $.ajax({
    //   type: 
    //   url: serverUrl + '/auth/google',
    // })
    //   .done(function(token) {
    //     console.log(token);
    //   })

    var data = {
    "data": {
        "results": [
            [
                {
                    "bounds": {
                        "northeast": {
                            "lat": 37.7857158,
                            "lng": -122.3996352
                        },
                        "southwest": {
                            "lat": 37.7104218,
                            "lng": -122.4559121
                        }
                    },
                    "copyrights": "Map data ©2015 Google",
                    "legs": [
                        {
                            "distance": {
                                "text": "7.9 mi",
                                "value": 12720
                            },
                            "duration": {
                                "text": "15 mins",
                                "value": 878
                            },
                            "end_address": "175-181 Rae Avenue, San Francisco, CA 94112, USA",
                            "end_location": {
                                "lat": 37.7108981,
                                "lng": -122.4497719
                            },
                            "start_address": "835-853 Market Street, San Francisco, CA 94103, USA",
                            "start_location": {
                                "lat": 37.7849348,
                                "lng": -122.4069135
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "407 ft",
                                        "value": 124
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 45
                                    },
                                    "end_location": {
                                        "lat": 37.7857158,
                                        "lng": -122.4059115
                                    },
                                    "html_instructions": "Head <b>northeast</b> on <b>Market St</b> toward <b>Stockton St</b>",
                                    "polyline": {
                                        "points": "yzreFdrbjVoAcBSYOSi@u@"
                                    },
                                    "start_location": {
                                        "lat": 37.7849348,
                                        "lng": -122.4069135
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.5 mi",
                                        "value": 778
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 213
                                    },
                                    "end_location": {
                                        "lat": 37.7808115,
                                        "lng": -122.3996352
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>4th St</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "w_seF|kbjV@M@G@GDGBEfAyAx@iAFKPSNSPU`@i@JKjA_Bj@w@HOJM~AsB`CiDZc@j@u@VYPWxAmBd@q@b@k@d@q@l@w@"
                                    },
                                    "start_location": {
                                        "lat": 37.7857158,
                                        "lng": -122.4059115
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 307
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 28
                                    },
                                    "end_location": {
                                        "lat": 37.7785432,
                                        "lng": -122.4014376
                                    },
                                    "html_instructions": "Turn <b>right</b> onto the ramp to <b>US-101 S/San Jose</b>",
                                    "polyline": {
                                        "points": "aareFvdajVn@?N@PBPDNHRJRLZTZZf@h@ZZdApAdAtADFHDFDHB"
                                    },
                                    "start_location": {
                                        "lat": 37.7808115,
                                        "lng": -122.3996352
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 mi",
                                        "value": 1102
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 55
                                    },
                                    "end_location": {
                                        "lat": 37.7705732,
                                        "lng": -122.4059525
                                    },
                                    "html_instructions": "Merge onto <b>I-80 W</b>",
                                    "maneuver": "merge",
                                    "polyline": {
                                        "points": "{rqeF~oajVJNh@t@h@t@f@v@f@x@d@v@f@z@b@z@`@|@BDt@xABF@@`@t@f@fAr@rAPT\\d@Zb@`@b@HHHDBBFDXP`@Tj@Vn@Vl@Pl@Lp@H`@@p@@n@Ar@Ef@EDAj@EHA@?NCTGJCLC\\I`@KnAi@b@Un@UNGNG`@M"
                                    },
                                    "start_location": {
                                        "lat": 37.7785432,
                                        "lng": -122.4014376
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 mi",
                                        "value": 460
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 21
                                    },
                                    "end_location": {
                                        "lat": 37.7664859,
                                        "lng": -122.4053233
                                    },
                                    "html_instructions": "Take exit <b>1A</b> on the <b>left</b> toward <b>San Jose/U.S. 101 S/Airport</b>",
                                    "maneuver": "ramp-left",
                                    "polyline": {
                                        "points": "aapeFdlbjV\\QPGXIjAUVE@?LALCJAJA@?B?D?XA^C|AIRA@?J?~AGZAB?@?@?zAIP?BA@?L?hAGN?d@C"
                                    },
                                    "start_location": {
                                        "lat": 37.7705732,
                                        "lng": -122.4059525
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.0 mi",
                                        "value": 3251
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 134
                                    },
                                    "end_location": {
                                        "lat": 37.7390601,
                                        "lng": -122.4081727
                                    },
                                    "html_instructions": "Merge onto <b>US-101 S</b>",
                                    "maneuver": "merge",
                                    "polyline": {
                                        "points": "qgoeFfhbjVR?PAhAC@?@?l@Cf@Ep@ElAGd@E@?LAT?\\A\\?Z?j@Db@DZD\\Hj@Pf@NVHb@Rp@^h@XXPXLv@\\D@l@TXHVF\\FXB`@@b@@n@A^Ep@Kf@Mf@Oh@Yt@g@TQPQd@g@fA{A\\k@t@iAf@s@hAkAd@[b@U@AXMl@QVIb@Ih@Ed@EjESr@CbGUf@Al@AtCJ`@DVBhBXtDv@DBlBd@JB@?b@J@?@?RFD@^H@?`AT@@b@HZH@?lAVpB^`ATjA\\bAR`Cf@xAXfAZ~An@NFnAr@HF@?|AlAhDrChAv@XP|@d@`A`@t@Tl@Pr@Nh@Fz@NfAJz@Fr@@p@A"
                                    },
                                    "start_location": {
                                        "lat": 37.7664859,
                                        "lng": -122.4053233
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 mi",
                                        "value": 679
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 29
                                    },
                                    "end_location": {
                                        "lat": 37.7339385,
                                        "lng": -122.4113246
                                    },
                                    "html_instructions": "Take exit <b>431</b> for <b>Interstate 280 S</b> toward <b>Daly City</b>",
                                    "maneuver": "ramp-right",
                                    "polyline": {
                                        "points": "c|ieF`zbjVPR@@B?@@L?v@CrBC`@?T?N?B?B?D?`@Bf@B@?F?TBRBl@JD@F@B@@?LDRDPFJD^NXLb@V@?DD@?BBFFHFLPLJLHRRTTPPRTRVNTRVLVNVNZZt@\\x@L\\DJBFDFBDBDBD@BBBLH"
                                    },
                                    "start_location": {
                                        "lat": 37.7390601,
                                        "lng": -122.4081727
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "3.0 mi",
                                        "value": 4828
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 181
                                    },
                                    "end_location": {
                                        "lat": 37.713842,
                                        "lng": -122.4517389
                                    },
                                    "html_instructions": "Merge onto <b>I-280 S</b>",
                                    "maneuver": "merge",
                                    "polyline": {
                                        "points": "c|heFvmcjV`AdCd@`A|@vBd@lAXt@N\\HVFTPj@Pr@Jf@Nx@Hf@F`@D\\R`CFrA@j@EvI?tA?h@?Z@z@?`@@^@d@@d@Bd@Fx@HfARxBd@dFHnBDpB@v@AfA?`@Cr@E|AIbBAX?LEd@It@OlAIt@S|AGh@A@E`@MbAW|BKnAGr@C~@AnA?nAFtBPbCBN?DHn@Nx@XbBPbATrAJl@@FH^Jn@DZBP@D@B?@?DHd@BL@HPz@Hd@R`A^pB@Hj@rCXhABNf@tBj@vBNh@@H@@Jp@tApERn@DLz@jCJ`@dAtC`@bAXt@b@|@?B@?LXtA|Bh@v@x@dAnBrBVTFF@?f@b@x@r@hCdBd@Vj@ZdAf@r@ZlBp@r@Tx@Tl@LD@H@HB\\HRBzATf@D|AL^BP@D?hAJ`BH`BFP@T@L@r@DnBPTB`@BH@J?J@H@^@v@Dd@FPB\\D\\Hl@Nj@PD@LDNFdAf@LFNJPJVNh@`@XTp@p@l@p@VXh@r@t@z@hC`D"
                                    },
                                    "start_location": {
                                        "lat": 37.7339385,
                                        "lng": -122.4113246
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 358
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 25
                                    },
                                    "end_location": {
                                        "lat": 37.71198589999999,
                                        "lng": -122.4550032
                                    },
                                    "html_instructions": "Take exit <b>50</b> for <b>CA-82 N</b> toward <b>CA-1 N/San Jose Ave/Mission St</b>",
                                    "maneuver": "ramp-right",
                                    "polyline": {
                                        "points": "o~deFjjkjVB`@@D?DBD@B@BHLPVt@lAxBhDRf@Rf@DVJb@FVHVLXDJDHLR\\h@DF"
                                    },
                                    "start_location": {
                                        "lat": 37.713842,
                                        "lng": -122.4517389
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "249 ft",
                                        "value": 76
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 14
                                    },
                                    "end_location": {
                                        "lat": 37.7114911,
                                        "lng": -122.4556034
                                    },
                                    "html_instructions": "Continue onto <b>CA-82 S/San Jose Avenue</b>",
                                    "polyline": {
                                        "points": "}rdeFv~kjVv@dAj@p@"
                                    },
                                    "start_location": {
                                        "lat": 37.71198589999999,
                                        "lng": -122.4550032
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 mi",
                                        "value": 154
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 38
                                    },
                                    "end_location": {
                                        "lat": 37.710494,
                                        "lng": -122.4550054
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Sickles Ave</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "yodeFnbljVZb@FHJNLYTU@A?ABAV[@ABC@CHGbAoA"
                                    },
                                    "start_location": {
                                        "lat": 37.7114911,
                                        "lng": -122.4556034
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 333
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 37
                                    },
                                    "end_location": {
                                        "lat": 37.71203870000001,
                                        "lng": -122.4519249
                                    },
                                    "html_instructions": "Turn <b>left</b> at the 1st cross street onto <b>Alemany Blvd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "qideFx~kjVLUEUEOy@wCsAeDoA{ByAsB"
                                    },
                                    "start_location": {
                                        "lat": 37.710494,
                                        "lng": -122.4550054
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 mi",
                                        "value": 224
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 46
                                    },
                                    "end_location": {
                                        "lat": 37.710609,
                                        "lng": -122.450138
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Farragut Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "gsdeFnkkjV|@kAxBwCdB_C"
                                    },
                                    "start_location": {
                                        "lat": 37.71203870000001,
                                        "lng": -122.4519249
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "151 ft",
                                        "value": 46
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 12
                                    },
                                    "end_location": {
                                        "lat": 37.7108981,
                                        "lng": -122.4497719
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "ijdeFj`kjVy@iA"
                                    },
                                    "start_location": {
                                        "lat": 37.710609,
                                        "lng": -122.450138
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "yzreFdrbjV}CgEBUFOlCuDtAgBlCsDjBaC|CmEnDuE|CgE~@@b@Hb@Tn@b@bAdA`BlBjA|APJHBJNrAjBnApBlArB~BxEnAfCdAhBx@hAj@l@LH`@VlAl@|Ah@~AVrABbBGxAMp@MxA]rB_A~@]NG~@_@j@QbB[h@GbESpCI`GWpBEhCObCOlBAnAJx@NrA`@z@\\nCxA|@^fA^t@Nz@DrA?pAQnA]~AaAf@c@d@g@fA{ArAuBf@s@hAkAhAq@ZOdA[lAOpFYvHYtACtCJ`@D`C\\zDz@xBh@f@J~Bh@bGlAlCr@dEz@`Dt@nBv@xAz@~AlAhDrChAv@vAv@`A`@t@T`B`@dBVbCRdB?RTD@dACzDCn@BfAFnARRFpAb@fAj@JJVXdA~@hAtA`AbB~AtDVVfBfEbBdEz@`Cb@~AZ`BPhAX~CH~BElL@bDHpCP`Cx@~IN`F?~BIrDQpDaAbISdBc@lEKrBA~CFtBPbCBTXhBj@fDl@hDVbBl@jD`BpI\\xArAlFRt@Jp@tApEX|@fAlDfBxE~@vBbBvCbB|BnCpCh@b@x@r@hCdBpAr@xBbA`DfAfBb@XFlCb@dDVbEVvCL|Fb@fCPn@HjAXnA`@rAn@`@V`Ap@jAfAdDzDhC`DB`@@JPZfAdBxBhDRf@X~@Rz@Vp@JThBjCzAnBLYTU@C`@c@|AqBKe@y@wCsAeDoA{ByAsBvDcFdB_Cy@iA"
                    },
                    "summary": "US-101 S and I-280 S",
                    "warnings": [],
                    "waypoint_order": [],
                    "travelMode": "driving"
                }
            ],
            [
                {
                    "bounds": {
                        "northeast": {
                            "lat": 37.7849348,
                            "lng": -122.4069135
                        },
                        "southwest": {
                            "lat": 37.7107629,
                            "lng": -122.4497719
                        }
                    },
                    "copyrights": "Map data ©2015 Google",
                    "legs": [
                        {
                            "distance": {
                                "text": "6.1 mi",
                                "value": 9813
                            },
                            "duration": {
                                "text": "2 hours 8 mins",
                                "value": 7684
                            },
                            "end_address": "175-181 Rae Avenue, San Francisco, CA 94112, USA",
                            "end_location": {
                                "lat": 37.7108981,
                                "lng": -122.4497719
                            },
                            "start_address": "835-853 Market Street, San Francisco, CA 94103, USA",
                            "start_location": {
                                "lat": 37.7849348,
                                "lng": -122.4069135
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "1.0 mi",
                                        "value": 1529
                                    },
                                    "duration": {
                                        "text": "20 mins",
                                        "value": 1183
                                    },
                                    "end_location": {
                                        "lat": 37.7752057,
                                        "lng": -122.4192085
                                    },
                                    "html_instructions": "Head <b>southwest</b> on <b>Market St</b> toward <b>Powell St</b>",
                                    "polyline": {
                                        "points": "yzreFdrbjVFJx@fAV\\|AxBd@l@b@l@Zb@v@fAlA~Ax@hAV\\h@r@`@j@^d@`@l@JNt@bAd@n@n@z@~AxBZ`@T\\`@h@bB~Bn@z@tBtCjAbBlBhCx@dAhBfCnAdBLLrC|DJNPTj@t@JNVZ"
                                    },
                                    "start_location": {
                                        "lat": 37.7849348,
                                        "lng": -122.4069135
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 255
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 186
                                    },
                                    "end_location": {
                                        "lat": 37.7729719,
                                        "lng": -122.4185412
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>S Van Ness Ave</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "a~peF`_ejVd@Kn@IbIaBd@M"
                                    },
                                    "start_location": {
                                        "lat": 37.7752057,
                                        "lng": -122.4192085
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "3.0 mi",
                                        "value": 4860
                                    },
                                    "duration": {
                                        "text": "1 hour 3 mins",
                                        "value": 3784
                                    },
                                    "end_location": {
                                        "lat": 37.7317277,
                                        "lng": -122.4283511
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Mission St</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "appeFzzdjVVPdAv@^RJD`@Tb@RtAf@|Ah@hAV|@PTDPBf@FnAJl@DB?ND^AzCK`I_@bI[dI]fAGbAEr@CVCbBIfBIhCMlAE~AI|BM`BItAGfCKbBIvAGrCOnAGpAGpCOzAInAGTCtBIh@Cx@EbACZC`FSz@Ez@EjAEf@CRA~@E~@EP?N?L?F?F@JBF@FBFBTL^VnAn@rAv@B@`Aj@vBjAh@Xz@f@NHr@^~FdDtAv@rAt@NH|@h@NJdAj@^R|Az@xAv@r@`@jAp@tCfBHDPHz@b@XHFBH@F@H?`ADR?H@Z?X@h@?R?V@l@BR@d@@R?^BzA^VFnBd@VFv@RPDPDFBJDLJPNh@j@d@b@j@j@~@~@PPXVBBNPv@v@tArAfBhBNP^b@VVRRZZDFLL`@^PNFD"
                                    },
                                    "start_location": {
                                        "lat": 37.7729719,
                                        "lng": -122.4185412
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "1.8 mi",
                                        "value": 2910
                                    },
                                    "duration": {
                                        "text": "39 mins",
                                        "value": 2339
                                    },
                                    "end_location": {
                                        "lat": 37.7107629,
                                        "lng": -122.4476986
                                    },
                                    "html_instructions": "Slight <b>right</b> to stay on <b>Mission St</b>",
                                    "maneuver": "turn-slight-right",
                                    "polyline": {
                                        "points": "inheFdxfjVNXHHNPpAlA\\`@^`@RRv@t@tApATRTVLB|A|ApAtAHJhAhAXVjArAn@d@LLJLJLJJFHDDBDDBFDLJXRVP|@n@PLt@f@~AhAvBvA~AfAPNbAp@r@f@NRrCpBTNd@\\lAx@nDbCtA`AbFjDrBxA`BhA|AdA^VLJtBvAr@d@JHPJbBhAv@f@NJv@l@fAt@b@\\\\VLHFBDDDDFDDDDFnBtB`ChCfAjAh@l@|@`Az@|@\\^jBrBPRDDBDBBDFTf@b@dA\\t@l@vA|AlD"
                                    },
                                    "start_location": {
                                        "lat": 37.7317277,
                                        "lng": -122.4283511
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "456 ft",
                                        "value": 139
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 93
                                    },
                                    "end_location": {
                                        "lat": 37.7116565,
                                        "lng": -122.4488027
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Whipple Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "gkdeFbqjjVgAvAaBxBIH"
                                    },
                                    "start_location": {
                                        "lat": 37.7107629,
                                        "lng": -122.4476986
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "394 ft",
                                        "value": 120
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 99
                                    },
                                    "end_location": {
                                        "lat": 37.7108981,
                                        "lng": -122.4497719
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "{pdeF~wjjVJNjCpD"
                                    },
                                    "start_location": {
                                        "lat": 37.7116565,
                                        "lng": -122.4488027
                                    },
                                    "travel_mode": "WALKING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "yzreFdrbjVtIrLxHjKbLrO~I~L`G`I|ExGb@j@tAUhJoB|AhApBbArDpAfCh@f@HvBRp@DND^A|Mk@hSy@vEUbLg@lZwAtScAfRw@dDMl@@b@Lt@d@bDfBfFrC~JvFjMhHlCxA`FxCpB|@b@FzBFnBB`ADx@@^BzA^fCl@rBf@RH^ZzDzD~@~@lCjCvBzBfBjBfAdAV^XZnBnBr@t@xDrDLB|A|AzA`BbB`BjArAn@d@XZVXVXfAv@rOpKr@f@NRhD`CrBvAdGdEvOtKvE`DxDfCrDlCx@j@XXfRlS^b@|AjDjCdGiDpEIHJNjCpD"
                    },
                    "summary": "Mission St",
                    "warnings": [
                        "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
                    ],
                    "waypoint_order": [],
                    "travelMode": "walking"
                }
            ],
            [
                {
                    "bounds": {
                        "northeast": {
                            "lat": 37.7849348,
                            "lng": -122.4069135
                        },
                        "southwest": {
                            "lat": 37.7108981,
                            "lng": -122.4497719
                        }
                    },
                    "copyrights": "Map data ©2015 Google",
                    "legs": [
                        {
                            "distance": {
                                "text": "6.3 mi",
                                "value": 10132
                            },
                            "duration": {
                                "text": "45 mins",
                                "value": 2709
                            },
                            "end_address": "175-181 Rae Avenue, San Francisco, CA 94112, USA",
                            "end_location": {
                                "lat": 37.7108981,
                                "lng": -122.4497719
                            },
                            "start_address": "835-853 Market Street, San Francisco, CA 94103, USA",
                            "start_location": {
                                "lat": 37.7849348,
                                "lng": -122.4069135
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "1.2 mi",
                                        "value": 1958
                                    },
                                    "duration": {
                                        "text": "9 mins",
                                        "value": 543
                                    },
                                    "end_location": {
                                        "lat": 37.7725376,
                                        "lng": -122.4227233
                                    },
                                    "html_instructions": "Head <b>southwest</b> on <b>Market St</b> toward <b>Powell St</b>",
                                    "polyline": {
                                        "points": "yzreFdrbjVFJx@fAV\\|AxBd@l@b@l@Zb@v@fAlA~Ax@hAV\\h@r@`@j@^d@`@l@JNt@bAd@n@n@z@~AxBZ`@T\\`@h@bB~Bn@z@tBtCjAbBlBhCx@dAhBfCnAdBLLrC|DJNPTj@t@JNVZRXlA`Bv@fAFPHTd@r@HLpAfBh@v@x@fAV`@JLLPpAdB"
                                    },
                                    "start_location": {
                                        "lat": 37.7849348,
                                        "lng": -122.4069135
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "1.8 mi",
                                        "value": 2888
                                    },
                                    "duration": {
                                        "text": "11 mins",
                                        "value": 675
                                    },
                                    "end_location": {
                                        "lat": 37.7466652,
                                        "lng": -122.4201411
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Valencia St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "kmpeF~tejVHIBABE`DINAd@Af@CfAI^CfAIrAEjACh@CdBK\\CR?hAIhCKXC|CObDM~AK~@Cp@EpGYjAEbAE~BMn@Cj@CrG]p@C|AGTAbBIt@Cx@EdBIlBKp@Cr@ChBKlBKp@Cr@AJAr@EpCKx@Gx@CdEU~@Ev@C\\AlDQz@Er@CnEUz@E`BIp@ERA\\ADAhAEXAnCK"
                                    },
                                    "start_location": {
                                        "lat": 37.7725376,
                                        "lng": -122.4227233
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "82 ft",
                                        "value": 25
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 5
                                    },
                                    "end_location": {
                                        "lat": 37.7465357,
                                        "lng": -122.4203694
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Duncan St</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "ukkeFzdejVXl@"
                                    },
                                    "start_location": {
                                        "lat": 37.7466652,
                                        "lng": -122.4201411
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 315
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 71
                                    },
                                    "end_location": {
                                        "lat": 37.7439918,
                                        "lng": -122.4219344
                                    },
                                    "html_instructions": "Slight <b>left</b> onto <b>San Francisco Bicycle Rte 45</b>",
                                    "maneuver": "turn-slight-left",
                                    "polyline": {
                                        "points": "{jkeFhfejVLDxBfA|I`FVF"
                                    },
                                    "start_location": {
                                        "lat": 37.7465357,
                                        "lng": -122.4203694
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "233 ft",
                                        "value": 71
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 13
                                    },
                                    "end_location": {
                                        "lat": 37.7439401,
                                        "lng": -122.4227363
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>29th St</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "}zjeF`pejVFfC@X"
                                    },
                                    "start_location": {
                                        "lat": 37.7439918,
                                        "lng": -122.4219344
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 mi",
                                        "value": 1266
                                    },
                                    "duration": {
                                        "text": "7 mins",
                                        "value": 438
                                    },
                                    "end_location": {
                                        "lat": 37.7344839,
                                        "lng": -122.4297187
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>San Jose Avenue</b><div style=\"font-size:0.9em\">Turn is not allowed Mon–Fri 3:00 – 6:00 pm</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "szjeFbuejVJ@TFbCp@bD|@F@HBJBvAb@d@Nj@NXJbA^VLDBJDJBJBF@HB`BZNBnAP~@NH@j@L`@JVHZJXNVJPLd@Xb@^`@^NNl@l@X\\TXTZFFh@t@d@j@^b@RZv@pAj@~@^p@b@t@r@vAJRl@jA@BN^h@nA"
                                    },
                                    "start_location": {
                                        "lat": 37.7439401,
                                        "lng": -122.4227363
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 mi",
                                        "value": 195
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 36
                                    },
                                    "end_location": {
                                        "lat": 37.7337771,
                                        "lng": -122.4316955
                                    },
                                    "html_instructions": "Take the <b>Wilder St</b> exit toward <b>Bosworth St/Arlington/Monterey Blvd</b>",
                                    "maneuver": "ramp-right",
                                    "polyline": {
                                        "points": "o_ieFv`gjVALAJ?B?B?D@BBDh@~A`AbCBJHTHVBV@b@"
                                    },
                                    "start_location": {
                                        "lat": 37.7344839,
                                        "lng": -122.4297187
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "413 ft",
                                        "value": 126
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 17
                                    },
                                    "end_location": {
                                        "lat": 37.7332545,
                                        "lng": -122.4329205
                                    },
                                    "html_instructions": "Slight <b>right</b> onto <b>Arlington St</b>",
                                    "maneuver": "turn-slight-right",
                                    "polyline": {
                                        "points": "c{heFbmgjVFTLh@Pr@Pt@Rl@FRRF"
                                    },
                                    "start_location": {
                                        "lat": 37.7337771,
                                        "lng": -122.4316955
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "157 ft",
                                        "value": 48
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 41
                                    },
                                    "end_location": {
                                        "lat": 37.7331072,
                                        "lng": -122.4324148
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Bosworth St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "ywheFvtgjV@M?KBMBI@GBIBKFU"
                                    },
                                    "start_location": {
                                        "lat": 37.7332545,
                                        "lng": -122.4329205
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 298
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 54
                                    },
                                    "end_location": {
                                        "lat": 37.7306193,
                                        "lng": -122.4312622
                                    },
                                    "html_instructions": "Slight <b>right</b> onto <b>Lyell St</b>",
                                    "maneuver": "turn-slight-right",
                                    "polyline": {
                                        "points": "}vheFpqgjVb@a@FGFELKLINIFETCp@Eh@ITG\\QRGbC{@jA]"
                                    },
                                    "start_location": {
                                        "lat": 37.7331072,
                                        "lng": -122.4324148
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "1.5 mi",
                                        "value": 2345
                                    },
                                    "duration": {
                                        "text": "10 mins",
                                        "value": 579
                                    },
                                    "end_location": {
                                        "lat": 37.7146972,
                                        "lng": -122.4473429
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Alemany Blvd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "kgheFjjgjVFVF\\F\\F\\H`@DNF^H^Jh@DPJZ?@DLHRL\\FLVl@X`@PVPT`@b@v@p@z@p@LLJJPPLJt@h@xAtAXTPNTLh@Tl@Vf@Tz@^|Ap@bCfA`Bt@t@\\ZNRFj@LvANXHXHl@X^RzBlAv@b@zAv@NHRJl@Zx@d@dAj@PJLFNFZRTLNJRPRPTV^b@V\\p@`A~@rAj@t@n@~@f@t@dArAz@jA\\d@TZFFBDt@`AfAxAzAtBJLRV`@j@LRNVN\\NZJV\\|@JXpAvDVr@HX"
                                    },
                                    "start_location": {
                                        "lat": 37.7306193,
                                        "lng": -122.4312622
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "226 ft",
                                        "value": 69
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 84
                                    },
                                    "end_location": {
                                        "lat": 37.7142608,
                                        "lng": -122.4467847
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Foote Ave</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "{ceeFznjjVLShA{A"
                                    },
                                    "start_location": {
                                        "lat": 37.7146972,
                                        "lng": -122.4473429
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 328
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 95
                                    },
                                    "end_location": {
                                        "lat": 37.7121841,
                                        "lng": -122.4494277
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Huron Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "caeeFjkjjV~AzBpBlCnBnC|AvB"
                                    },
                                    "start_location": {
                                        "lat": 37.7142608,
                                        "lng": -122.4467847
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "262 ft",
                                        "value": 80
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 24
                                    },
                                    "end_location": {
                                        "lat": 37.7116565,
                                        "lng": -122.4488027
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Whipple Ave</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "ctdeF|{jjVJMzAoB"
                                    },
                                    "start_location": {
                                        "lat": 37.7121841,
                                        "lng": -122.4494277
                                    },
                                    "travel_mode": "BICYCLING"
                                },
                                {
                                    "distance": {
                                        "text": "394 ft",
                                        "value": 120
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 34
                                    },
                                    "end_location": {
                                        "lat": 37.7108981,
                                        "lng": -122.4497719
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "{pdeF~wjjVJNjCpD"
                                    },
                                    "start_location": {
                                        "lat": 37.7116565,
                                        "lng": -122.4488027
                                    },
                                    "travel_mode": "BICYCLING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "yzreFdrbjVtIrLxHjKbLrO~I~L`G`I|ExGb@j@`BzBv@fAFPHTd@r@zAtBbB~BbCfDLKBE`DIt@CnBMfBM~CI`ESjKi@v[wAnTaA|R_AdGUxJg@~H]`Li@hBKbBGnCKXl@fClA|I`FVFH`D`@HxHtBtDfA|Aj@\\Pj@NjB^~AThAPlAXr@Tp@Zv@f@dA~@|@|@n@v@lBdCr@~@bBpCbCrEn@nAx@nBC`@n@nBdAnCRl@Dz@T~@b@hBZ`ARF@MBYLg@FUb@a@NMr@e@fAI~@Qp@YnEyA^pB`@pB\\xAd@lAVl@X`@b@l@`@b@v@p@hA~@\\\\bAt@rBjBf@\\zDbBxJlEn@Vj@LvANr@RlAl@~GrD`ExBjAn@lA|@t@z@hA~AjBhCvAtBtD`FhChD|CfE|@dBfCfH`@lAvAoB~KpOfB}BvC`E"
                    },
                    "summary": "Valencia St",
                    "warnings": [
                        "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
                    ],
                    "waypoint_order": [],
                    "travelMode": "bicycling"
                }
            ],
            [
                {
                    "bounds": {
                        "northeast": {
                            "lat": 37.7849348,
                            "lng": -122.402979
                        },
                        "southwest": {
                            "lat": 37.709959,
                            "lng": -122.450138
                        }
                    },
                    "copyrights": "Map data ©2015 Google",
                    "fare": {
                        "currency": "USD",
                        "text": "$2.25",
                        "value": 2.25
                    },
                    "legs": [
                        {
                            "arrival_time": {
                                "text": "5:20pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433377257
                            },
                            "departure_time": {
                                "text": "4:44pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433375098
                            },
                            "distance": {
                                "text": "7.0 mi",
                                "value": 11259
                            },
                            "duration": {
                                "text": "36 mins",
                                "value": 2159
                            },
                            "end_address": "175-181 Rae Avenue, San Francisco, CA 94112, USA",
                            "end_location": {
                                "lat": 37.7108981,
                                "lng": -122.4497719
                            },
                            "start_address": "835-853 Market Street, San Francisco, CA 94103, USA",
                            "start_location": {
                                "lat": 37.7849348,
                                "lng": -122.4069135
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 337
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 241
                                    },
                                    "end_location": {
                                        "lat": 37.782725,
                                        "lng": -122.40664
                                    },
                                    "html_instructions": "Walk to Mission St & 5th St",
                                    "polyline": {
                                        "points": "yzreFdrbjVFJx@fAV\\|AxBJMtAiBZe@NQV_@j@u@`@k@LN"
                                    },
                                    "start_location": {
                                        "lat": 37.7849348,
                                        "lng": -122.4069135
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "479 ft",
                                                "value": 146
                                            },
                                            "duration": {
                                                "text": "2 mins",
                                                "value": 103
                                            },
                                            "end_location": {
                                                "lat": 37.7840081,
                                                "lng": -122.408092
                                            },
                                            "html_instructions": "Head <b>southwest</b> on <b>Market St</b> toward <b>Powell St</b>",
                                            "polyline": {
                                                "points": "yzreFdrbjVFJx@fAV\\|AxB"
                                            },
                                            "start_location": {
                                                "lat": 37.7849348,
                                                "lng": -122.4069135
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "0.1 mi",
                                                "value": 191
                                            },
                                            "duration": {
                                                "text": "2 mins",
                                                "value": 138
                                            },
                                            "end_location": {
                                                "lat": 37.782725,
                                                "lng": -122.40664
                                            },
                                            "html_instructions": "Turn <b>left</b> onto <b>5th St</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                            "maneuver": "turn-left",
                                            "polyline": {
                                                "points": "aureFpybjVJMtAiBZe@NQV_@j@u@`@k@LN"
                                            },
                                            "start_location": {
                                                "lat": 37.7840081,
                                                "lng": -122.408092
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "6.6 mi",
                                        "value": 10668
                                    },
                                    "duration": {
                                        "text": "29 mins",
                                        "value": 1742
                                    },
                                    "end_location": {
                                        "lat": 37.71048,
                                        "lng": -122.44834
                                    },
                                    "html_instructions": "Bus towards Daly City",
                                    "polyline": {
                                        "points": "_mreFnpbjVJO~AxBLPbFbHvAmBhA}ArAiBtAkBjA{AtAmBtAmBjA{A`AsARUrAhBl@x@xAtB`C`DJLzAj@nCn@~ARnABjAErAYpCu@hBq@hBu@|Ae@jBe@rBU|Qw@jFSfCK|AHhAPdBb@jBr@pBjAzAr@lCh@tAAzASdAYp@[r@i@nAgAdAcBl@_Ah@y@h@s@nAoAbAm@`A]z@QpAKxNo@~AEz@D`CLfBTvBd@nAZzEfApFhAvCr@jCj@fCd@zAZlAVlBz@nAv@hAz@dEdDtA~@jAn@`Ad@v@Vj@RhAT~@NfBL~@FtAD`BFfB?bCC`AFpARhA\\x@^l@^d@b@|B`D`AhBBb@Y~@AN`E`K`BbEjAzCfAtDj@jERtD@nHE~DD`C@^^pEf@xDRbDEjA?vC@fBCjBGb@\\b@d@Pz@Ez@ACV@TRrKFtDbAbA|A|ANL|B|BbB~AJLrAtAhBnBNP~@fAZRtBxAv@j@LH~AfArBxA`BfARL~@p@r@f@RLzCtBNJv@h@z@l@pDdCbAp@LJfFlDjCjBd@\\`C~A~CxBrA~@|CtBHF`CbBd@ZZRVR`CdC@@NN~BhCbAfAj@n@nBvBBB^`@rC~Cz@nB\\v@HP~BpF`AxBKH"
                                    },
                                    "start_location": {
                                        "lat": 37.782725,
                                        "lng": -122.40664
                                    },
                                    "transit_details": {
                                        "arrival_stop": {
                                            "location": {
                                                "lat": 37.71048,
                                                "lng": -122.44834
                                            },
                                            "name": "Mission St & Whittier St"
                                        },
                                        "arrival_time": {
                                            "text": "5:17pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433377022
                                        },
                                        "departure_stop": {
                                            "location": {
                                                "lat": 37.782725,
                                                "lng": -122.40664
                                            },
                                            "name": "Mission St & 5th St"
                                        },
                                        "departure_time": {
                                            "text": "4:48pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433375280
                                        },
                                        "headsign": "Daly City",
                                        "line": {
                                            "agencies": [
                                                {
                                                    "name": "SFMTA",
                                                    "url": "http://www.sfmta.com/"
                                                }
                                            ],
                                            "name": "Mission Express",
                                            "short_name": "14X",
                                            "vehicle": {
                                                "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus.png",
                                                "name": "Bus",
                                                "type": "BUS"
                                            }
                                        },
                                        "num_stops": 15
                                    },
                                    "travel_mode": "TRANSIT"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 254
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 183
                                    },
                                    "end_location": {
                                        "lat": 37.7108981,
                                        "lng": -122.4497719
                                    },
                                    "html_instructions": "Walk to 175-181 Rae Avenue, San Francisco, CA 94112, USA",
                                    "polyline": {
                                        "points": "oideFbujjVFIJTJXRd@Td@@D@DXjAUTkBfCy@iA"
                                    },
                                    "start_location": {
                                        "lat": 37.71048,
                                        "lng": -122.44834
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "354 ft",
                                                "value": 108
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 82
                                            },
                                            "end_location": {
                                                "lat": 37.709959,
                                                "lng": -122.449354
                                            },
                                            "html_instructions": "Head <b>southwest</b> on <b>Mission St</b> toward <b>Whittier St</b>",
                                            "polyline": {
                                                "points": "oideFbujjVFIJTJXRd@Td@@D@DXjA"
                                            },
                                            "start_location": {
                                                "lat": 37.71048,
                                                "lng": -122.44834
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "328 ft",
                                                "value": 100
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 72
                                            },
                                            "end_location": {
                                                "lat": 37.710609,
                                                "lng": -122.450138
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Farragut Ave</b>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "gfdeFl{jjVUTkBfC"
                                            },
                                            "start_location": {
                                                "lat": 37.709959,
                                                "lng": -122.449354
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "151 ft",
                                                "value": 46
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 29
                                            },
                                            "end_location": {
                                                "lat": 37.7108981,
                                                "lng": -122.4497719
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "ijdeFj`kjVy@iA"
                                            },
                                            "start_location": {
                                                "lat": 37.710609,
                                                "lng": -122.450138
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "yzreFdrbjVvDjFlCoDbAuA`@k@LNJO~AxBpFtHjIaLbIsKtAiB`CbDzEvGJLzAj@nCn@~ARnABjAErAYpCu@rEgBhEkArBU|Qw@rJ_@|AHhAPdBb@jBr@pBjAzAr@lCh@tAAzASdAYp@[r@i@nAgAdAcBvAyBh@s@nAoAbAm@`A]z@QpAKxQu@|DRfBTvBd@jHbBhK|BjCj@fCd@hDr@lBz@nAv@nG`FtA~@jAn@xB|@tBh@~@NfBL~@FtAD`BFfB?bCC`AFpARhA\\x@^l@^d@b@|B`D`AhBBb@Y~@ANbHdQjAzCfAtDj@jERtD@nHE~DF`D^pEf@xDRbDEjA@~FCjBGb@\\b@d@PvBGAl@ZhQnHlHnBlB|DdEnAxApClBxGvE`NhJzYhSzKvHzEfDrG`HbFrFrD`ExAfDhCbG`AxBKHFIJT^~@Vj@ZpAaC|Cy@iA"
                    },
                    "summary": "",
                    "warnings": [
                        "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
                    ],
                    "waypoint_order": [],
                    "travelMode": "transit"
                },
                {
                    "bounds": {
                        "northeast": {
                            "lat": 37.784991,
                            "lng": -122.406857
                        },
                        "southwest": {
                            "lat": 37.709959,
                            "lng": -122.450138
                        }
                    },
                    "copyrights": "Map data ©2015 Google",
                    "fare": {
                        "currency": "USD",
                        "text": "$4.15",
                        "value": 4.15
                    },
                    "legs": [
                        {
                            "arrival_time": {
                                "text": "5:14pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433376892
                            },
                            "departure_time": {
                                "text": "4:46pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433375160
                            },
                            "distance": {
                                "text": "6.6 mi",
                                "value": 10656
                            },
                            "duration": {
                                "text": "29 mins",
                                "value": 1732
                            },
                            "end_address": "175-181 Rae Avenue, San Francisco, CA 94112, USA",
                            "end_location": {
                                "lat": 37.7108981,
                                "lng": -122.4497719
                            },
                            "start_address": "835-853 Market Street, San Francisco, CA 94103, USA",
                            "start_location": {
                                "lat": 37.784991,
                                "lng": -122.406857
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "5.3 mi",
                                        "value": 8573
                                    },
                                    "duration": {
                                        "text": "10 mins",
                                        "value": 600
                                    },
                                    "end_location": {
                                        "lat": 37.7219809,
                                        "lng": -122.4474142
                                    },
                                    "html_instructions": "Metro rail towards Daly City",
                                    "polyline": {
                                        "points": "e{reFzqbjV?AdEtF`J~LnD`FjDvE`ErFbDpEbF|Gh@x@zC`E`EpFpAjBNNLJJDLBXFvCvAr@X`@Jp@HhBXv@Fp@?~@?nA@nFUz@G`@EV?\\APAPA`AKd@CnCGjEUjBGzH]FAz@C`GYzHa@fI[jIc@xEQ~BKxG_@bIYrH]^CrH[bH[j@DZDb@FTDRDPFNFr@PRHPHf@RtAl@pC|AfCvAvI`FrIzEdCrAlEjChC`CXb@VRd@n@Xd@NT\\b@V`@n@`A^h@h@x@fAbBfD`GbDxFfDbGnCzEbAjBbBxCf@t@dAlBp@nAf@x@`@n@h@|@n@lANPNVZh@^r@b@r@JNPXZf@d@v@b@n@`@t@f@`Az@hBxApDRv@r@`ChAzDl@zB^nAf@xA\\~@\\x@HPXl@Vf@Xj@xAbCRVPVNRRTRXRPNPVXjAhAlA`ANLRLPJPLNJTHRLPHnB|@fCz@jDl@zC`@n@J?C"
                                    },
                                    "start_location": {
                                        "lat": 37.784991,
                                        "lng": -122.406857
                                    },
                                    "transit_details": {
                                        "arrival_stop": {
                                            "location": {
                                                "lat": 37.7219809,
                                                "lng": -122.4474142
                                            },
                                            "name": "Balboa Park"
                                        },
                                        "arrival_time": {
                                            "text": "4:56pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433375760
                                        },
                                        "departure_stop": {
                                            "location": {
                                                "lat": 37.784991,
                                                "lng": -122.406857
                                            },
                                            "name": "Powell St."
                                        },
                                        "departure_time": {
                                            "text": "4:46pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433375160
                                        },
                                        "headsign": "Daly City",
                                        "line": {
                                            "agencies": [
                                                {
                                                    "name": "Bay Area Rapid Transit",
                                                    "url": "http://www.bart.gov/"
                                                }
                                            ],
                                            "color": "#0099cc",
                                            "name": "Dublin/Pleasanton - Daly City",
                                            "url": "http://www.bart.gov/schedules/bylineresults?route=11",
                                            "vehicle": {
                                                "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/subway.png",
                                                "local_icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ca-bart.png",
                                                "name": "Metro rail",
                                                "type": "SUBWAY"
                                            }
                                        },
                                        "num_stops": 5
                                    },
                                    "travel_mode": "TRANSIT"
                                },
                                {
                                    "distance": {
                                        "text": "410 ft",
                                        "value": 125
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 125
                                    },
                                    "end_location": {
                                        "lat": 37.720863,
                                        "lng": -122.44723
                                    },
                                    "html_instructions": "Walk to Geneva Ave/Balboa Park BART",
                                    "polyline": {
                                        "points": "kqfeFhojjV~Ec@"
                                    },
                                    "start_location": {
                                        "lat": 37.7219809,
                                        "lng": -122.4474142
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "410 ft",
                                                "value": 125
                                            },
                                            "duration": {
                                                "text": "2 mins",
                                                "value": 125
                                            },
                                            "end_location": {
                                                "lat": 37.720863,
                                                "lng": -122.44723
                                            },
                                            "polyline": {
                                                "points": "kqfeFhojjV~Ec@"
                                            },
                                            "start_location": {
                                                "lat": 37.7219809,
                                                "lng": -122.4474142
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "1.1 mi",
                                        "value": 1704
                                    },
                                    "duration": {
                                        "text": "7 mins",
                                        "value": 417
                                    },
                                    "end_location": {
                                        "lat": 37.71048,
                                        "lng": -122.44834
                                    },
                                    "html_instructions": "Bus towards Mission & Sickles",
                                    "polyline": {
                                        "points": "kjfeFdnjjVOIh@qBdBkFPi@FQdF}G`@i@X]dAyAxAoBrBkCnAkAnAm@HF`CbBd@ZZRVR`CdC@@NN~BhCbAfAj@n@nBvBBB^`@rC~Cz@nB\\v@HP~BpF`AxBKH"
                                    },
                                    "start_location": {
                                        "lat": 37.720863,
                                        "lng": -122.44723
                                    },
                                    "transit_details": {
                                        "arrival_stop": {
                                            "location": {
                                                "lat": 37.71048,
                                                "lng": -122.44834
                                            },
                                            "name": "Mission St & Whittier St"
                                        },
                                        "arrival_time": {
                                            "text": "5:11pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433376717
                                        },
                                        "departure_stop": {
                                            "location": {
                                                "lat": 37.720863,
                                                "lng": -122.44723
                                            },
                                            "name": "Geneva Ave/Balboa Park BART"
                                        },
                                        "departure_time": {
                                            "text": "5:05pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433376300
                                        },
                                        "headsign": "Mission & Sickles",
                                        "line": {
                                            "agencies": [
                                                {
                                                    "name": "SFMTA",
                                                    "url": "http://www.sfmta.com/"
                                                }
                                            ],
                                            "name": "Bart Shuttle",
                                            "short_name": "88",
                                            "vehicle": {
                                                "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus.png",
                                                "name": "Bus",
                                                "type": "BUS"
                                            }
                                        },
                                        "num_stops": 7
                                    },
                                    "travel_mode": "TRANSIT"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 254
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 183
                                    },
                                    "end_location": {
                                        "lat": 37.7108981,
                                        "lng": -122.4497719
                                    },
                                    "html_instructions": "Walk to 175-181 Rae Avenue, San Francisco, CA 94112, USA",
                                    "polyline": {
                                        "points": "oideFbujjVFIJTJXRd@Td@@D@DXjAUTkBfCy@iA"
                                    },
                                    "start_location": {
                                        "lat": 37.71048,
                                        "lng": -122.44834
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "354 ft",
                                                "value": 108
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 82
                                            },
                                            "end_location": {
                                                "lat": 37.709959,
                                                "lng": -122.449354
                                            },
                                            "html_instructions": "Head <b>southwest</b> on <b>Mission St</b> toward <b>Whittier St</b>",
                                            "polyline": {
                                                "points": "oideFbujjVFIJTJXRd@Td@@D@DXjA"
                                            },
                                            "start_location": {
                                                "lat": 37.71048,
                                                "lng": -122.44834
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "328 ft",
                                                "value": 100
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 72
                                            },
                                            "end_location": {
                                                "lat": 37.710609,
                                                "lng": -122.450138
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Farragut Ave</b>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "gfdeFl{jjVUTkBfC"
                                            },
                                            "start_location": {
                                                "lat": 37.709959,
                                                "lng": -122.449354
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "151 ft",
                                                "value": 46
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 29
                                            },
                                            "end_location": {
                                                "lat": 37.7108981,
                                                "lng": -122.4497719
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "ijdeFj`kjVy@iA"
                                            },
                                            "start_location": {
                                                "lat": 37.710609,
                                                "lng": -122.450138
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "e{reFzqbjVdErFpO`TtVz\\dEzF`EpFpAjB\\ZXHXFvCvAtAd@zCb@hBFnC@jH]hBIrAMtDKvH]bI_@|H]zHa@fI[jIc@xEQxKk@bIYrH]rI_@bH[j@D~@LjAZfAZx@\\tAl@pC|A~MxHxMnHlEjChC`CXb@VR~@tAtB|ChAbBnFdJ~OdYbBxCf@t@vB|DbDtF^h@z@|A|AdChAfBhAvBz@hBxApDfAxDvBvHfAhD~AxDp@rAlBzChAzAfCfC|AnAd@XjAp@`CfAfCz@jDl@jEl@~Eg@OIh@qBvBuGFQdF}Gz@gA~CiErBkCnAkAnAm@HFfD~Br@f@bCfC~FpGfH|HbFjL`AxBKHFIJT^~@Vj@ZpAaC|Cy@iA"
                    },
                    "summary": "",
                    "warnings": [
                        "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
                    ],
                    "waypoint_order": [],
                    "travelMode": "transit"
                },
                {
                    "bounds": {
                        "northeast": {
                            "lat": 37.784991,
                            "lng": -122.406857
                        },
                        "southwest": {
                            "lat": 37.7108981,
                            "lng": -122.4497719
                        }
                    },
                    "copyrights": "Map data ©2015 Google",
                    "fare": {
                        "currency": "USD",
                        "text": "$1.90",
                        "value": 1.9
                    },
                    "legs": [
                        {
                            "arrival_time": {
                                "text": "5:16pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433376971
                            },
                            "departure_time": {
                                "text": "4:44pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433375040
                            },
                            "distance": {
                                "text": "6.4 mi",
                                "value": 10230
                            },
                            "duration": {
                                "text": "32 mins",
                                "value": 1931
                            },
                            "end_address": "175-181 Rae Avenue, San Francisco, CA 94112, USA",
                            "end_location": {
                                "lat": 37.7108981,
                                "lng": -122.4497719
                            },
                            "start_address": "835-853 Market Street, San Francisco, CA 94103, USA",
                            "start_location": {
                                "lat": 37.784991,
                                "lng": -122.406857
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "5.3 mi",
                                        "value": 8573
                                    },
                                    "duration": {
                                        "text": "10 mins",
                                        "value": 600
                                    },
                                    "end_location": {
                                        "lat": 37.7219809,
                                        "lng": -122.4474142
                                    },
                                    "html_instructions": "Metro rail towards San Francisco Int'l Airport",
                                    "polyline": {
                                        "points": "e{reFzqbjV?AdEtF`J~LnD`FjDvE`ErFbDpEbF|Gh@x@zC`E`EpFpAjBNNLJJDLBXFvCvAr@X`@Jp@HhBXv@Fp@?~@?nA@nFUz@G`@EV?\\APAPA`AKd@CnCGjEUjBGzH]FAz@C`GYzHa@fI[jIc@xEQ~BKxG_@bIYrH]^CrH[bH[j@DZDb@FTDRDPFNFr@PRHPHf@RtAl@pC|AfCvAvI`FrIzEdCrAlEjChC`CXb@VRd@n@Xd@NT\\b@V`@n@`A^h@h@x@fAbBfD`GbDxFfDbGnCzEbAjBbBxCf@t@dAlBp@nAf@x@`@n@h@|@n@lANPNVZh@^r@b@r@JNPXZf@d@v@b@n@`@t@f@`Az@hBxApDRv@r@`ChAzDl@zB^nAf@xA\\~@\\x@HPXl@Vf@Xj@xAbCRVPVNRRTRXRPNPVXjAhAlA`ANLRLPJPLNJTHRLPHnB|@fCz@jDl@zC`@n@J?C"
                                    },
                                    "start_location": {
                                        "lat": 37.784991,
                                        "lng": -122.406857
                                    },
                                    "transit_details": {
                                        "arrival_stop": {
                                            "location": {
                                                "lat": 37.7219809,
                                                "lng": -122.4474142
                                            },
                                            "name": "Balboa Park"
                                        },
                                        "arrival_time": {
                                            "text": "4:53pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433375580
                                        },
                                        "departure_stop": {
                                            "location": {
                                                "lat": 37.784991,
                                                "lng": -122.406857
                                            },
                                            "name": "Powell St."
                                        },
                                        "departure_time": {
                                            "text": "4:43pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433374980
                                        },
                                        "headsign": "San Francisco Int'l Airport",
                                        "line": {
                                            "agencies": [
                                                {
                                                    "name": "Bay Area Rapid Transit",
                                                    "url": "http://www.bart.gov/"
                                                }
                                            ],
                                            "color": "#f2f230",
                                            "name": "Pittsburg/Bay Point - SFIA/Millbrae",
                                            "url": "http://www.bart.gov/schedules/bylineresults?route=1",
                                            "vehicle": {
                                                "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/subway.png",
                                                "local_icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ca-bart.png",
                                                "name": "Metro rail",
                                                "type": "SUBWAY"
                                            }
                                        },
                                        "num_stops": 5
                                    },
                                    "travel_mode": "TRANSIT"
                                },
                                {
                                    "distance": {
                                        "text": "1.0 mi",
                                        "value": 1657
                                    },
                                    "duration": {
                                        "text": "22 mins",
                                        "value": 1329
                                    },
                                    "end_location": {
                                        "lat": 37.7108981,
                                        "lng": -122.4497719
                                    },
                                    "html_instructions": "Walk to 175-181 Rae Avenue, San Francisco, CA 94112, USA",
                                    "polyline": {
                                        "points": "kqfeFhojjV^d@J@HC\\BHDP@F?LAFDR?PBj@gBDSXoA@E@A?AtA_FDMBIDIBIDKJMlBbAbCrAtBdAnBfAjBdA`ClA~@qAzAqBlA_BJOXa@vApBxAnB~AzBpBlCnBnC|AvBJMzAoBJNjCpD"
                                    },
                                    "start_location": {
                                        "lat": 37.7219809,
                                        "lng": -122.4474142
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "279 ft",
                                                "value": 85
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 74
                                            },
                                            "end_location": {
                                                "lat": 37.7210764,
                                                "lng": -122.4476943
                                            },
                                            "html_instructions": "Head <b>south</b> toward <b>Geneva Ave</b>",
                                            "polyline": {
                                                "points": "kqfeFhojjV^d@J@HC\\BHDP@F?LAFDR?PB"
                                            },
                                            "start_location": {
                                                "lat": 37.7219809,
                                                "lng": -122.4474142
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "0.2 mi",
                                                "value": 251
                                            },
                                            "duration": {
                                                "text": "3 mins",
                                                "value": 158
                                            },
                                            "end_location": {
                                                "lat": 37.7200634,
                                                "lng": -122.445146
                                            },
                                            "html_instructions": "Turn <b>left</b> onto <b>Geneva Ave</b>",
                                            "maneuver": "turn-left",
                                            "polyline": {
                                                "points": "wkfeF`qjjVj@gBDSXoA@E@A?AtA_FDMBIDIBIDKJM"
                                            },
                                            "start_location": {
                                                "lat": 37.7210764,
                                                "lng": -122.4476943
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "0.3 mi",
                                                "value": 440
                                            },
                                            "duration": {
                                                "text": "6 mins",
                                                "value": 332
                                            },
                                            "end_location": {
                                                "lat": 37.7165107,
                                                "lng": -122.4473575
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Delano Ave</b>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "kefeFdajjVlBbAbCrAtBdAnBfAjBdA`ClA"
                                            },
                                            "start_location": {
                                                "lat": 37.7200634,
                                                "lng": -122.445146
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "0.1 mi",
                                                "value": 213
                                            },
                                            "duration": {
                                                "text": "3 mins",
                                                "value": 202
                                            },
                                            "end_location": {
                                                "lat": 37.7151495,
                                                "lng": -122.4456545
                                            },
                                            "html_instructions": "Turn <b>left</b> onto <b>Ottawa Ave</b>",
                                            "maneuver": "turn-left",
                                            "polyline": {
                                                "points": "eoeeF~njjV~@qAzAqBlA_BJOXa@"
                                            },
                                            "start_location": {
                                                "lat": 37.7165107,
                                                "lng": -122.4473575
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "0.3 mi",
                                                "value": 468
                                            },
                                            "duration": {
                                                "text": "7 mins",
                                                "value": 397
                                            },
                                            "end_location": {
                                                "lat": 37.7121841,
                                                "lng": -122.4494277
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Huron Ave</b>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "ufeeFhdjjVvApBxAnB~AzBpBlCnBnC|AvB"
                                            },
                                            "start_location": {
                                                "lat": 37.7151495,
                                                "lng": -122.4456545
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "262 ft",
                                                "value": 80
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 67
                                            },
                                            "end_location": {
                                                "lat": 37.7116565,
                                                "lng": -122.4488027
                                            },
                                            "html_instructions": "Turn <b>left</b> onto <b>Whipple Ave</b>",
                                            "maneuver": "turn-left",
                                            "polyline": {
                                                "points": "ctdeF|{jjVJMzAoB"
                                            },
                                            "start_location": {
                                                "lat": 37.7121841,
                                                "lng": -122.4494277
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "394 ft",
                                                "value": 120
                                            },
                                            "duration": {
                                                "text": "2 mins",
                                                "value": 99
                                            },
                                            "end_location": {
                                                "lat": 37.7108981,
                                                "lng": -122.4497719
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "{pdeF~wjjVJNjCpD"
                                            },
                                            "start_location": {
                                                "lat": 37.7116565,
                                                "lng": -122.4488027
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "e{reFzqbjVdErFpO`TtVz\\dEzF`EpFpAjB\\ZXHXFvCvAtAd@zCb@hBFnC@jH]hBIrAMtDKvH]bI_@|H]zHa@fI[jIc@xEQxKk@bIYrH]rI_@bH[j@D~@LjAZfAZx@\\tAl@pC|A~MxHxMnHlEjChC`CXb@VR~@tAtB|ChAbBnFdJ~OdYbBxCf@t@vB|DbDtF^h@z@|A|AdChAfBhAvBz@hBxApDfAxDvBvHfAhD~AxDp@rAlBzChAzAfCfC|AnAd@XjAp@`CfAfCz@jDl@jEl@^`@J@HC\\BHDX@LAFDd@Bp@{B\\yAdBaGHUJMlBbAxFxCzElC`ClA~@qAhDqEd@q@pD`F~KpOfB}BvC`E"
                    },
                    "summary": "",
                    "warnings": [
                        "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
                    ],
                    "waypoint_order": [],
                    "travelMode": "transit"
                },
                {
                    "bounds": {
                        "northeast": {
                            "lat": 37.784991,
                            "lng": -122.406857
                        },
                        "southwest": {
                            "lat": 37.709959,
                            "lng": -122.450138
                        }
                    },
                    "copyrights": "Map data ©2015 Google",
                    "fare": {
                        "currency": "USD",
                        "text": "$4.10",
                        "value": 4.1
                    },
                    "legs": [
                        {
                            "arrival_time": {
                                "text": "5:20pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433377257
                            },
                            "departure_time": {
                                "text": "4:46pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433375160
                            },
                            "distance": {
                                "text": "6.6 mi",
                                "value": 10601
                            },
                            "duration": {
                                "text": "35 mins",
                                "value": 2097
                            },
                            "end_address": "175-181 Rae Avenue, San Francisco, CA 94112, USA",
                            "end_location": {
                                "lat": 37.7108981,
                                "lng": -122.4497719
                            },
                            "start_address": "835-853 Market Street, San Francisco, CA 94103, USA",
                            "start_location": {
                                "lat": 37.784991,
                                "lng": -122.406857
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "4.2 mi",
                                        "value": 6804
                                    },
                                    "duration": {
                                        "text": "8 mins",
                                        "value": 480
                                    },
                                    "end_location": {
                                        "lat": 37.732921,
                                        "lng": -122.434092
                                    },
                                    "html_instructions": "Metro rail towards Daly City",
                                    "polyline": {
                                        "points": "e{reFzqbjV?AdEtF`J~LnD`FjDvE`ErFbDpEbF|Gh@x@zC`E`EpFpAjBNNLJJDLBXFvCvAr@X`@Jp@HhBXv@Fp@?~@?nA@nFUz@G`@EV?\\APAPA`AKd@CnCGjEUjBGzH]FAz@C`GYzHa@fI[jIc@xEQ~BKxG_@bIYrH]^CrH[bH[j@DZDb@FTDRDPFNFr@PRHPHf@RtAl@pC|AfCvAvI`FrIzEdCrAlEjChC`CXb@VRd@n@Xd@NT\\b@V`@n@`A^h@h@x@fAbBfD`GbDxFfDbGnCzEbAjBbBxCf@t@dAlBp@nAf@x@"
                                    },
                                    "start_location": {
                                        "lat": 37.784991,
                                        "lng": -122.406857
                                    },
                                    "transit_details": {
                                        "arrival_stop": {
                                            "location": {
                                                "lat": 37.732921,
                                                "lng": -122.434092
                                            },
                                            "name": "Glen Park"
                                        },
                                        "arrival_time": {
                                            "text": "4:54pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433375640
                                        },
                                        "departure_stop": {
                                            "location": {
                                                "lat": 37.784991,
                                                "lng": -122.406857
                                            },
                                            "name": "Powell St."
                                        },
                                        "departure_time": {
                                            "text": "4:46pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433375160
                                        },
                                        "headsign": "Daly City",
                                        "line": {
                                            "agencies": [
                                                {
                                                    "name": "Bay Area Rapid Transit",
                                                    "url": "http://www.bart.gov/"
                                                }
                                            ],
                                            "color": "#0099cc",
                                            "name": "Dublin/Pleasanton - Daly City",
                                            "url": "http://www.bart.gov/schedules/bylineresults?route=11",
                                            "vehicle": {
                                                "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/subway.png",
                                                "local_icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ca-bart.png",
                                                "name": "Metro rail",
                                                "type": "SUBWAY"
                                            }
                                        },
                                        "num_stops": 4
                                    },
                                    "travel_mode": "TRANSIT"
                                },
                                {
                                    "distance": {
                                        "text": "207 ft",
                                        "value": 63
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 63
                                    },
                                    "end_location": {
                                        "lat": 37.733488,
                                        "lng": -122.43408
                                    },
                                    "html_instructions": "Walk to Bosworth St & Diamond St",
                                    "polyline": {
                                        "points": "wuheF`|gjVqBA"
                                    },
                                    "start_location": {
                                        "lat": 37.732921,
                                        "lng": -122.434092
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "207 ft",
                                                "value": 63
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 63
                                            },
                                            "end_location": {
                                                "lat": 37.733488,
                                                "lng": -122.43408
                                            },
                                            "polyline": {
                                                "points": "wuheF`|gjVqBA"
                                            },
                                            "start_location": {
                                                "lat": 37.732921,
                                                "lng": -122.434092
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 mi",
                                        "value": 909
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 240
                                    },
                                    "end_location": {
                                        "lat": 37.72866,
                                        "lng": -122.431217
                                    },
                                    "html_instructions": "Bus towards Hunter's Point",
                                    "polyline": {
                                        "points": "iyheF~{gjVGAh@yEP[T_Af@}@t@o@f@O|Cg@~By@dA_@RIdAnFVfA~@~BXs@hA_D~@aCl@kABSHB"
                                    },
                                    "start_location": {
                                        "lat": 37.733488,
                                        "lng": -122.43408
                                    },
                                    "transit_details": {
                                        "arrival_stop": {
                                            "location": {
                                                "lat": 37.72866,
                                                "lng": -122.431217
                                            },
                                            "name": "Silver Ave & Mission St"
                                        },
                                        "arrival_time": {
                                            "text": "5:03pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433376180
                                        },
                                        "departure_stop": {
                                            "location": {
                                                "lat": 37.733488,
                                                "lng": -122.43408
                                            },
                                            "name": "Bosworth St & Diamond St"
                                        },
                                        "departure_time": {
                                            "text": "4:59pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433375940
                                        },
                                        "headsign": "Hunter's Point",
                                        "line": {
                                            "agencies": [
                                                {
                                                    "name": "SFMTA",
                                                    "url": "http://www.sfmta.com/"
                                                }
                                            ],
                                            "name": "O'Shaughnessy",
                                            "short_name": "44",
                                            "vehicle": {
                                                "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus.png",
                                                "name": "Bus",
                                                "type": "BUS"
                                            }
                                        },
                                        "num_stops": 3
                                    },
                                    "travel_mode": "TRANSIT"
                                },
                                {
                                    "distance": {
                                        "text": "56 ft",
                                        "value": 17
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 17
                                    },
                                    "end_location": {
                                        "lat": 37.728696,
                                        "lng": -122.431412
                                    },
                                    "html_instructions": "Walk to Mission St & Silver Ave",
                                    "polyline": {
                                        "points": "c{geFbjgjVGd@"
                                    },
                                    "start_location": {
                                        "lat": 37.72866,
                                        "lng": -122.431217
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "56 ft",
                                                "value": 17
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 17
                                            },
                                            "end_location": {
                                                "lat": 37.728696,
                                                "lng": -122.431412
                                            },
                                            "polyline": {
                                                "points": "c{geFbjgjVGd@"
                                            },
                                            "start_location": {
                                                "lat": 37.72866,
                                                "lng": -122.431217
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "1.6 mi",
                                        "value": 2554
                                    },
                                    "duration": {
                                        "text": "11 mins",
                                        "value": 662
                                    },
                                    "end_location": {
                                        "lat": 37.71048,
                                        "lng": -122.44834
                                    },
                                    "html_instructions": "Bus towards Daly City",
                                    "polyline": {
                                        "points": "k{geFhkgjVDGrAtAhBnBNP~@fAZRtBxAv@j@LH~AfArBxA`BfARL~@p@r@f@RLzCtBNJv@h@z@l@pDdCbAp@LJfFlDjCjBd@\\`C~A~CxBrA~@|CtBHF`CbBd@ZZRVR`CdC@@NN~BhCbAfAj@n@nBvBBB^`@rC~Cz@nB\\v@HP~BpF`AxBKH"
                                    },
                                    "start_location": {
                                        "lat": 37.728696,
                                        "lng": -122.431412
                                    },
                                    "transit_details": {
                                        "arrival_stop": {
                                            "location": {
                                                "lat": 37.71048,
                                                "lng": -122.44834
                                            },
                                            "name": "Mission St & Whittier St"
                                        },
                                        "arrival_time": {
                                            "text": "5:17pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433377022
                                        },
                                        "departure_stop": {
                                            "location": {
                                                "lat": 37.728696,
                                                "lng": -122.431412
                                            },
                                            "name": "Mission St & Silver Ave"
                                        },
                                        "departure_time": {
                                            "text": "5:06pm",
                                            "time_zone": "America/Los_Angeles",
                                            "value": 1433376360
                                        },
                                        "headsign": "Daly City",
                                        "line": {
                                            "agencies": [
                                                {
                                                    "name": "SFMTA",
                                                    "url": "http://www.sfmta.com/"
                                                }
                                            ],
                                            "name": "Mission Express",
                                            "short_name": "14X",
                                            "vehicle": {
                                                "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus.png",
                                                "name": "Bus",
                                                "type": "BUS"
                                            }
                                        },
                                        "num_stops": 10
                                    },
                                    "travel_mode": "TRANSIT"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 mi",
                                        "value": 254
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 183
                                    },
                                    "end_location": {
                                        "lat": 37.7108981,
                                        "lng": -122.4497719
                                    },
                                    "html_instructions": "Walk to 175-181 Rae Avenue, San Francisco, CA 94112, USA",
                                    "polyline": {
                                        "points": "oideFbujjVFIJTJXRd@Td@@D@DXjAUTkBfCy@iA"
                                    },
                                    "start_location": {
                                        "lat": 37.71048,
                                        "lng": -122.44834
                                    },
                                    "steps": [
                                        {
                                            "distance": {
                                                "text": "354 ft",
                                                "value": 108
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 82
                                            },
                                            "end_location": {
                                                "lat": 37.709959,
                                                "lng": -122.449354
                                            },
                                            "html_instructions": "Head <b>southwest</b> on <b>Mission St</b> toward <b>Whittier St</b>",
                                            "polyline": {
                                                "points": "oideFbujjVFIJTJXRd@Td@@D@DXjA"
                                            },
                                            "start_location": {
                                                "lat": 37.71048,
                                                "lng": -122.44834
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "328 ft",
                                                "value": 100
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 72
                                            },
                                            "end_location": {
                                                "lat": 37.710609,
                                                "lng": -122.450138
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Farragut Ave</b>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "gfdeFl{jjVUTkBfC"
                                            },
                                            "start_location": {
                                                "lat": 37.709959,
                                                "lng": -122.449354
                                            },
                                            "travel_mode": "WALKING"
                                        },
                                        {
                                            "distance": {
                                                "text": "151 ft",
                                                "value": 46
                                            },
                                            "duration": {
                                                "text": "1 min",
                                                "value": 29
                                            },
                                            "end_location": {
                                                "lat": 37.7108981,
                                                "lng": -122.4497719
                                            },
                                            "html_instructions": "Turn <b>right</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                            "maneuver": "turn-right",
                                            "polyline": {
                                                "points": "ijdeFj`kjVy@iA"
                                            },
                                            "start_location": {
                                                "lat": 37.710609,
                                                "lng": -122.450138
                                            },
                                            "travel_mode": "WALKING"
                                        }
                                    ],
                                    "travel_mode": "WALKING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "e{reFzqbjVdErFpO`TtVz\\dEzF`EpFpAjB\\ZXHXFvCvAtAd@zCb@hBFnC@jH]hBIrAMtDKvH]bI_@|H]zHa@fI[jIc@xEQxKk@bIYrH]rI_@bH[j@D~@LjAZfAZx@\\tAl@pC|A~MxHxMnHlEjChC`CXb@VR~@tAtB|ChAbBnFdJ~OdYbBxCf@t@vB|Df@x@yBCh@yEP[T_Af@}@t@o@f@O|Cg@~By@xAi@|AvH~@~BXs@hCaHl@kABSHBGd@DGrAtAxB`C~@fAZRlDdCbIrFzLnI~\\tU|J`H`An@xCxCtEbF~DlErC~Cz@nBf@hA`EjJKHFIVn@h@jABJXjAUTkBfCy@iA"
                    },
                    "summary": "",
                    "warnings": [
                        "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
                    ],
                    "waypoint_order": [],
                    "travelMode": "transit"
                }
            ]
        ],
        "hasTransit": true
    }
};

    callback(data);

  // $(loginWindow).on('loadstop', function(e) {
  //   console.log('Loadstop triggered')
  //     var url = e.originalEvent.url;
  //     console.log('URL:', url);


  //     // if (code || error){
  //     //   loginWindow.close();

  //     // }
  // });

  // $(loginWindow).on('loaderror', function(e) {
  //   console.log('error');
  // });

  // $(loginWindow).on('exit', function(e) {
  //   console.log('exit');

  // });

};

var getEvents = function(callback) {
    // $.ajax({
    //   url: serverUrl + '/auth/google',
    // })
    //   .done(function(token) {
    //     console.log(token);
    //   })

    var data = {
        "events": {
            "kind": "calendar#events",
            "etag": "\"1433023511290000\"",
            "summary": "thealmonds86@gmail.com",
            "updated": "2015-05-30T22:05:11.290Z",
            "timeZone": "America/Los_Angeles",
            "accessRole": "owner",
            "defaultReminders": [{
                "method": "popup",
                "minutes": 30
            }],
            "items": [{
                "kind": "calendar#event",
                "etag": "\"2866047022258000\"",
                "id": "8idsq9cgmb7m81rv3nu4ivsc3g",
                "status": "confirmed",
                "htmlLink": "https://www.google.com/calendar/event?eid=OGlkc3E5Y2dtYjdtODFydjNudTRpdnNjM2cgdGhlYWxtb25kczg2QG0",
                "created": "2015-05-30T22:05:11.000Z",
                "updated": "2015-05-30T22:05:11.129Z",
                "summary": "Gym",
                "location": "45 Montgomery Street San Francisco, CA 94101",
                "creator": {
                    "email": "thealmonds86@gmail.com",
                    "displayName": "Bill Smith",
                    "self": true
                },
                "organizer": {
                    "email": "thealmonds86@gmail.com",
                    "displayName": "Bill Smith",
                    "self": true
                },
                "start": {
                    "dateTime": "2015-05-30T17:00:00-07:00"
                },
                "end": {
                    "dateTime": "2015-05-30T18:00:00-07:00"
                },
                "iCalUID": "8idsq9cgmb7m81rv3nu4ivsc3g@google.com",
                "sequence": 0,
                "reminders": {
                    "useDefault": true
                }
            }, {
                "kind": "calendar#event",
                "etag": "\"2866046973968000\"",
                "id": "o1tb4q12pq4s1eind3g0um9oc4",
                "status": "confirmed",
                "htmlLink": "https://www.google.com/calendar/event?eid=bzF0YjRxMTJwcTRzMWVpbmQzZzB1bTlvYzQgdGhlYWxtb25kczg2QG0",
                "created": "2015-05-30T22:04:46.000Z",
                "updated": "2015-05-30T22:04:46.984Z",
                "summary": "Meeting",
                "location": " 944 Market St #8, San Francisco, CA 94102",
                "creator": {
                    "email": "thealmonds86@gmail.com",
                    "displayName": "Bill Smith",
                    "self": true
                },
                "organizer": {
                    "email": "thealmonds86@gmail.com",
                    "displayName": "Bill Smith",
                    "self": true
                },
                "start": {
                    "dateTime": "2015-05-30T20:00:00-07:00"
                },
                "end": {
                    "dateTime": "2015-05-30T21:00:00-07:00"
                },
                "iCalUID": "o1tb4q12pq4s1eind3g0um9oc4@google.com",
                "sequence": 0,
                "reminders": {
                    "useDefault": true
                }
            }]
        }
    };

    callback(data);
};

var getUberEstimates = function(callback) {
        // $.ajax({
        //   url: serverUrl + '/auth/google',
        // })
        //   .done(function(token) {
        //     console.log(token);
        //   })
        var data = {
            "estimates": {
                "timeEstimate": "{\"times\":[{\"localized_display_name\":\"uberX\",\"estimate\":214,\"display_name\":\"uberX\",\"product_id\":\"a1111c8c-c720-46c3-8534-2fcdd730040d\"},{\"localized_display_name\":\"uberXL\",\"estimate\":289,\"display_name\":\"uberXL\",\"product_id\":\"821415d8-3bd5-4e27-9604-194e4359a449\"},{\"localized_display_name\":\"UberBLACK\",\"estimate\":119,\"display_name\":\"UberBLACK\",\"product_id\":\"d4abaae7-f4d6-4152-91cc-77523e8165a4\"},{\"localized_display_name\":\"UberSUV\",\"estimate\":119,\"display_name\":\"UberSUV\",\"product_id\":\"8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0\"},{\"localized_display_name\":\"uberTAXI\",\"estimate\":267,\"display_name\":\"uberTAXI\",\"product_id\":\"3ab64887-4842-4c8e-9780-ccecd3a0391d\"}]}",
                "priceEstimate": "{\"prices\":[{\"localized_display_name\":\"uberX\",\"high_estimate\":22,\"minimum\":\"16\",\"duration\":1110,\"estimate\":\"$16-22\",\"distance\":7.88,\"display_name\":\"uberX\",\"product_id\":\"a1111c8c-c720-46c3-8534-2fcdd730040d\",\"low_estimate\":16,\"surge_multiplier\":1.0,\"currency_code\":\"USD\"},{\"localized_display_name\":\"uberXL\",\"high_estimate\":37,\"minimum\":\"28\",\"duration\":1110,\"estimate\":\"$28-37\",\"distance\":7.88,\"display_name\":\"uberXL\",\"product_id\":\"821415d8-3bd5-4e27-9604-194e4359a449\",\"low_estimate\":28,\"surge_multiplier\":1.0,\"currency_code\":\"USD\"},{\"localized_display_name\":\"UberBLACK\",\"high_estimate\":58,\"minimum\":\"45\",\"duration\":1110,\"estimate\":\"$45-58\",\"distance\":7.88,\"display_name\":\"UberBLACK\",\"product_id\":\"d4abaae7-f4d6-4152-91cc-77523e8165a4\",\"low_estimate\":45,\"surge_multiplier\":1.0,\"currency_code\":\"USD\"},{\"localized_display_name\":\"UberSUV\",\"high_estimate\":71,\"minimum\":\"56\",\"duration\":1110,\"estimate\":\"$56-71\",\"distance\":7.88,\"display_name\":\"UberSUV\",\"product_id\":\"8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0\",\"low_estimate\":56,\"surge_multiplier\":1.0,\"currency_code\":\"USD\"},{\"localized_display_name\":\"uberTAXI\",\"high_estimate\":null,\"minimum\":\"26\",\"duration\":1110,\"estimate\":\"Metered\",\"distance\":7.88,\"display_name\":\"uberTAXI\",\"product_id\":\"3ab64887-4842-4c8e-9780-ccecd3a0391d\",\"low_estimate\":null,\"surge_multiplier\":1.0,\"currency_code\":null}]}"
            }};

            callback(data);


        };