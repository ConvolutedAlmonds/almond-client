var serverUrl = 'http://localhost:3000';

var authorizeUser = function(callback) {
    $.ajax({
            url: serverUrl + '/auth/google',
        })
        .done(function(token) {
            console.log(token);
        })
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
        "routes": {
            "modes": [{
                "bounds": {
                    "northeast": {
                        "lat": 37.7839353,
                        "lng": -122.4090909
                    },
                    "southwest": {
                        "lat": 37.7107629,
                        "lng": -122.4496484
                    }
                },
                "copyrights": "Map data ©2015 Google",
                "legs": [{
                    "distance": {
                        "text": "6.0 mi",
                        "value": 9609
                    },
                    "duration": {
                        "text": "2 hours 6 mins",
                        "value": 7534
                    },
                    "end_address": "163-169 Rae Avenue, San Francisco, CA 94112, USA",
                    "end_location": {
                        "lat": 37.7109956,
                        "lng": -122.4496484
                    },
                    "start_address": "54-56 Mason Street, San Francisco, CA 94102, USA",
                    "start_location": {
                        "lat": 37.7839353,
                        "lng": -122.4092531
                    },
                    "steps": [{
                        "distance": {
                            "text": "266 ft",
                            "value": 81
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 67
                        },
                        "end_location": {
                            "lat": 37.7832203,
                            "lng": -122.4090909
                        },
                        "html_instructions": "Head <b>south</b> on <b>Mason St</b> toward <b>Turk St</b>",
                        "polyline": {
                            "points": "streFx`cjVdBS^IHA"
                        },
                        "start_location": {
                            "lat": 37.7839353,
                            "lng": -122.4092531
                        },
                        "travel_mode": "WALKING"
                    }, {
                        "distance": {
                            "text": "0.8 mi",
                            "value": 1259
                        },
                        "duration": {
                            "text": "16 mins",
                            "value": 978
                        },
                        "end_location": {
                            "lat": 37.7752057,
                            "lng": -122.4192085
                        },
                        "html_instructions": "Turn <b>right</b> onto <b>Market St</b>",
                        "maneuver": "turn-right",
                        "polyline": {
                            "points": "cpreFx_cjVlA~Ax@hAV\\h@r@`@j@^d@`@l@JNt@bAd@n@n@z@~AxBZ`@T\\`@h@bB~Bn@z@tBtCjAbBlBhCx@dAxDlFLLrC|DJNPTj@t@JNVZ"
                        },
                        "start_location": {
                            "lat": 37.7832203,
                            "lng": -122.4090909
                        },
                        "travel_mode": "WALKING"
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
                        "distance": {
                            "text": "344 ft",
                            "value": 105
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 87
                        },
                        "end_location": {
                            "lat": 37.7109956,
                            "lng": -122.4496484
                        },
                        "html_instructions": "Turn <b>left</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                        "maneuver": "turn-left",
                        "polyline": {
                            "points": "{pdeF~wjjVJNvBxC"
                        },
                        "start_location": {
                            "lat": 37.7116565,
                            "lng": -122.4488027
                        },
                        "travel_mode": "WALKING"
                    }],
                    "via_waypoint": []
                }],
                "overview_polyline": {
                    "points": "streFx`cjVdC]HAlA~ApAfBjA~AbCfDpEfGjEbG`ExFfDnEfJhM`BvBtAUhJoB|AhAj@XdAh@rDpAfCh@f@HhDXND^A|Mk@tWgAvG[xYsA`VmArS{@fEQnBEb@FdAl@vMlH|MrHbDjBjGhD`FxCZNtAl@PDfBFhBBlBFx@@^BzA^fCl@nAZv@TnBjBxHvHnDvDbAdAr@n@V^XZnBnBr@t@lCfCj@j@LB|A|AzA`BbB`BjArAn@d@XZd@h@^ZnNtJtA`Ar@f@NRhD`CrBvA|QjMlFrDfErCzCpBfAx@vCtBZThNfO`DlDb@x@lE`KiDpEIHJNvBxC"
                },
                "summary": "Mission St",
                "warnings": [
                    "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
                ],
                "waypoint_order": []
            }, {
                "bounds": {
                    "northeast": {
                        "lat": 37.7839353,
                        "lng": -122.4090909
                    },
                    "southwest": {
                        "lat": 37.7109956,
                        "lng": -122.4496484
                    }
                },
                "copyrights": "Map data ©2015 Google",
                "legs": [{
                    "distance": {
                        "text": "6.2 mi",
                        "value": 9928
                    },
                    "duration": {
                        "text": "45 mins",
                        "value": 2711
                    },
                    "end_address": "163-169 Rae Avenue, San Francisco, CA 94112, USA",
                    "end_location": {
                        "lat": 37.7109956,
                        "lng": -122.4496484
                    },
                    "start_address": "54-56 Mason Street, San Francisco, CA 94102, USA",
                    "start_location": {
                        "lat": 37.7839353,
                        "lng": -122.4092531
                    },
                    "steps": [{
                        "distance": {
                            "text": "266 ft",
                            "value": 81
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 39
                        },
                        "end_location": {
                            "lat": 37.7832203,
                            "lng": -122.4090909
                        },
                        "html_instructions": "Head <b>south</b> on <b>Mason St</b> toward <b>Turk St</b>",
                        "polyline": {
                            "points": "streFx`cjVdBS^IHA"
                        },
                        "start_location": {
                            "lat": 37.7839353,
                            "lng": -122.4092531
                        },
                        "travel_mode": "BICYCLING"
                    }, {
                        "distance": {
                            "text": "1.0 mi",
                            "value": 1688
                        },
                        "duration": {
                            "text": "9 mins",
                            "value": 510
                        },
                        "end_location": {
                            "lat": 37.7725376,
                            "lng": -122.4227233
                        },
                        "html_instructions": "Turn <b>right</b> onto <b>Market St</b>",
                        "maneuver": "turn-right",
                        "polyline": {
                            "points": "cpreFx_cjVlA~Ax@hAV\\h@r@`@j@^d@`@l@JNt@bAd@n@n@z@~AxBZ`@T\\`@h@bB~Bn@z@tBtCjAbBlBhCx@dAxDlFLLrC|DJNPTj@t@JNVZRXlA`Bv@fAFPHTd@r@HLpAfBh@v@x@fAV`@JLLPpAdB"
                        },
                        "start_location": {
                            "lat": 37.7832203,
                            "lng": -122.4090909
                        },
                        "travel_mode": "BICYCLING"
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
                        "distance": {
                            "text": "344 ft",
                            "value": 105
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 30
                        },
                        "end_location": {
                            "lat": 37.7109956,
                            "lng": -122.4496484
                        },
                        "html_instructions": "Turn <b>right</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                        "maneuver": "turn-right",
                        "polyline": {
                            "points": "{pdeF~wjjVJNvBxC"
                        },
                        "start_location": {
                            "lat": 37.7116565,
                            "lng": -122.4488027
                        },
                        "travel_mode": "BICYCLING"
                    }],
                    "via_waypoint": []
                }],
                "overview_polyline": {
                    "points": "streFx`cjVdC]HAlA~ApAfBjA~AbCfDpEfGjEbG`ExFfDnEfJhM`BvB`BzBv@fAFPHTd@r@zAtBfCnD~AvBLKBE`DIt@CvE[~CInCOdGYzLm@nMi@xUgAvR}@~ESxH]hYsAjJc@nCKXl@fClA|I`FVFH`DhIxBtBl@pA^|Aj@t@Z~Bd@hDf@lAXr@Tp@Zv@f@dA~@|@|@lAzAbC`DfDxFnBzDx@nBCX@PrBtFRl@Dz@x@hDZ`ARF@MBYDQFUFUb@a@NMZUVOfAI~@Qp@YnEyANt@^lBb@zBZ~@Tj@Vl@X`@b@l@`@b@v@p@hA~@\\\\bAt@rBjBf@\\vAl@dInDfEjBj@LvANr@R`G~ClDhB~CdBpAt@f@b@t@z@tDhFvAtB`C~C~@nAdF~GrAnB^x@h@tA~B~GvAoBpEhGlEfGfB}BbChD"
                },
                "summary": "Valencia St",
                "warnings": [
                    "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
                ],
                "waypoint_order": []
            }, {
                "bounds": {
                    "northeast": {
                        "lat": 37.7839353,
                        "lng": -122.3915734
                    },
                    "southwest": {
                        "lat": 37.7104218,
                        "lng": -122.4559121
                    }
                },
                "copyrights": "Map data ©2015 Google",
                "legs": [{
                    "distance": {
                        "text": "8.3 mi",
                        "value": 13394
                    },
                    "duration": {
                        "text": "17 mins",
                        "value": 1002
                    },
                    "end_address": "163-169 Rae Avenue, San Francisco, CA 94112, USA",
                    "end_location": {
                        "lat": 37.7109956,
                        "lng": -122.4496484
                    },
                    "start_address": "54-56 Mason Street, San Francisco, CA 94102, USA",
                    "start_location": {
                        "lat": 37.7839353,
                        "lng": -122.4092531
                    },
                    "steps": [{
                        "distance": {
                            "text": "187 ft",
                            "value": 57
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 14
                        },
                        "end_location": {
                            "lat": 37.7834308,
                            "lng": -122.4091512
                        },
                        "html_instructions": "Head <b>south</b> on <b>Mason St</b> toward <b>Turk St</b>",
                        "polyline": {
                            "points": "streFx`cjVdBS"
                        },
                        "start_location": {
                            "lat": 37.7839353,
                            "lng": -122.4092531
                        },
                        "travel_mode": "DRIVING"
                    }, {
                        "distance": {
                            "text": "0.2 mi",
                            "value": 291
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 67
                        },
                        "end_location": {
                            "lat": 37.7830119,
                            "lng": -122.4124237
                        },
                        "html_instructions": "Turn <b>right</b> at the 1st cross street onto <b>Turk St</b>",
                        "maneuver": "turn-right",
                        "polyline": {
                            "points": "mqreFd`cjV`@fGH|@f@fI"
                        },
                        "start_location": {
                            "lat": 37.7834308,
                            "lng": -122.4091512
                        },
                        "travel_mode": "DRIVING"
                    }, {
                        "distance": {
                            "text": "341 ft",
                            "value": 104
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 38
                        },
                        "end_location": {
                            "lat": 37.7820851,
                            "lng": -122.4122427
                        },
                        "html_instructions": "Turn <b>left</b> onto <b>Jones St</b>",
                        "maneuver": "turn-left",
                        "polyline": {
                            "points": "ynreFrtcjVvDc@"
                        },
                        "start_location": {
                            "lat": 37.7830119,
                            "lng": -122.4124237
                        },
                        "travel_mode": "DRIVING"
                    }, {
                        "distance": {
                            "text": "0.1 mi",
                            "value": 157
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 54
                        },
                        "end_location": {
                            "lat": 37.78224640000001,
                            "lng": -122.4104733
                        },
                        "html_instructions": "Turn <b>left</b> at the 1st cross street onto <b>Golden Gate Ave</b>",
                        "maneuver": "turn-left",
                        "polyline": {
                            "points": "aireFnscjVOeCKaBCYAQ?OAO?I?G@G?G@K"
                        },
                        "start_location": {
                            "lat": 37.7820851,
                            "lng": -122.4122427
                        },
                        "travel_mode": "DRIVING"
                    }, {
                        "distance": {
                            "text": "0.7 mi",
                            "value": 1155
                        },
                        "duration": {
                            "text": "4 mins",
                            "value": 247
                        },
                        "end_location": {
                            "lat": 37.7749494,
                            "lng": -122.401158
                        },
                        "html_instructions": "Continue onto <b>6th St</b>",
                        "polyline": {
                            "points": "ajreFlhcjV@C@E@C?C@E@C@IBG@C@C@CBCHOz@eAbAwAvAqBtAiBhA{AxAoBnAeBjA_BvAmBz@kAZa@fA{AtAkBn@{@JOX]X_@fCkDzEqG"
                        },
                        "start_location": {
                            "lat": 37.78224640000001,
                            "lng": -122.4104733
                        },
                        "travel_mode": "DRIVING"
                    }, {
                        "distance": {
                            "text": "2.9 mi",
                            "value": 4693
                        },
                        "duration": {
                            "text": "3 mins",
                            "value": 192
                        },
                        "end_location": {
                            "lat": 37.7374897,
                            "lng": -122.4022163
                        },
                        "html_instructions": "Take the ramp onto <b>I-280 S</b>",
                        "polyline": {
                            "points": "m|peFfnajVD?@?@?@?RYd@_@t@k@TQJIJIPOFGHGFIJOX_@T[Zc@@??A@A@Al@{@bAsATWZ]NMLGLKFERKPIJENGRGd@IJCLA\\Cb@AdAC~@CbACn@ENCNCPE^IPGJCZMZMVKVMRMRO\\WPMPQb@c@p@y@PUFKBC@C?C@ABUbDeE~@sA@C@?PWDGLONQLQn@w@lAgAr@e@vAw@|@_@vCu@TEdAEpG_@~DWlCOVA^Ap@C`ACpACvA?r@?T?pA@J?V?@?`A@r@@`@?p@?`@A`@Ax@IZC`@G`AMj@KHCVGZKdCo@hAUlBWv@G`@Al@CD?X@z@@l@Bf@FXDXDh@H\\HTFj@PXJBBPFd@Rf@RHBTHRJJDhA`@D@f@Rv@V|CjA@?nDvAhBt@tAh@LHRJ`Aj@`@Vj@^d@^ZXZVB@`A~@t@r@HHf@b@xApAdBxALJl@h@j@f@LLZV?@`@ZLLdAz@@@d@b@vAnA@?PN`BvA?@@??@HFhB~ADD@@@??@b@^XRBDv@v@B@`@`@bAz@PR@@z@|@r@z@BB@@~@lAVV^h@"
                        },
                        "start_location": {
                            "lat": 37.7749494,
                            "lng": -122.401158
                        },
                        "travel_mode": "DRIVING"
                    }, {
                        "distance": {
                            "text": "3.6 mi",
                            "value": 5731
                        },
                        "duration": {
                            "text": "4 mins",
                            "value": 216
                        },
                        "end_location": {
                            "lat": 37.713842,
                            "lng": -122.4517389
                        },
                        "html_instructions": "Keep <b>right</b> to stay on <b>I-280 S</b>",
                        "maneuver": "keep-right",
                        "polyline": {
                            "points": "irieFztajVHNBHDFFJHLRZNVPXJPBHDHBFTd@\\v@b@|@LXd@dAN^^x@Vt@HXHVDRFTHb@F^F\\Hd@F^Nx@Fd@L~@Fb@RxATxAD`@Lx@Hd@Jj@DRDTNh@FXH\\HVFPRn@Vz@J\\JXL\\Xt@`AdCd@`A|@vBd@lAXt@N\\HVFTPj@Pr@Jf@Nx@Hf@F`@D\\R`CFrA@j@EvI?tA?h@?Z@z@?`@@^@d@@d@Bd@Fx@HfARxBd@dFHnBDpB@v@AfA?`@Cr@E|AIbBAX?LEd@It@OlAIt@S|AGh@A@E`@MbAW|BKnAGr@C~@AnA?nAFtBPbCBN?DHn@Nx@XbBPbATrAJl@@FH^Jn@DZBP@D@B?@?DHd@BL@HPz@Hd@R`A^pB@Hj@rCXhABNf@tBj@vBNh@@H@@Jp@tApERn@DLz@jCJ`@dAtC`@bAXt@b@|@?B@?LXtA|Bh@v@x@dAnBrBVTFF@?f@b@x@r@hCdBd@Vj@ZdAf@r@ZlBp@r@Tx@Tl@LD@H@HB\\HRBzATf@D|AL^BP@D?hAJ`BH`BFP@T@L@r@DnBPTB`@BH@J?J@H@^@v@Dd@FPB\\D\\Hl@Nj@PD@LDNFdAf@LFNJPJVNh@`@XTp@p@l@p@VXh@r@t@z@hC`D"
                        },
                        "start_location": {
                            "lat": 37.7374897,
                            "lng": -122.4022163
                        },
                        "travel_mode": "DRIVING"
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
                        "distance": {
                            "text": "200 ft",
                            "value": 61
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 14
                        },
                        "end_location": {
                            "lat": 37.7109956,
                            "lng": -122.4496484
                        },
                        "html_instructions": "Turn <b>left</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                        "maneuver": "turn-left",
                        "polyline": {
                            "points": "ijdeFj`kjVmAaB"
                        },
                        "start_location": {
                            "lat": 37.710609,
                            "lng": -122.450138
                        },
                        "travel_mode": "DRIVING"
                    }],
                    "via_waypoint": []
                }],
                "overview_polyline": {
                    "points": "streFx`cjVdBS`@fGp@dKvDc@OeCO{BC{@Bc@Nm@HO`F_HdQwUpRoWH?TYzAkA~@u@d@i@pAeBpBoCp@u@r@g@`Ac@rAWfEMrBI^GnA[v@[n@YvAcAt@u@bAoALWDWbFyGT[p@{@n@w@lAgAjC}A|@_@vCu@TEdAEpMw@dDQpAErCGrF@d@?hEBbACtAMxCe@xDcAhAUlBWxAIr@CtABtAJr@JfAR`AXtAj@zAl@bC|@tEbBpDvA~D~A`@TbBbApA~@|BrB`ErDvF~EfNtL|BtBzBrBtB~BxBpCZl@~@zAXl@dBtDt@dBv@nB`@zAb@fCl@~Dv@xFh@~Cf@vB|@tC~@jCfBfEbBdEz@`Cb@~AZ`BPhAX~CH~BElL@bDHpCP`Cx@~IN`F?~BIrDQpDw@vGIj@SdBc@lEKrBA~CFtBPbCBTXhBj@fDl@hDb@tCbCjM\\xArAlFRt@Jp@tApEX|@fAlDfBxE~@vBbBvCbB|BnCpCh@b@x@r@hCdBpAr@xBbA`DfAfBb@XFlCb@dDVbEVvCLzE^hDTn@HjAXnA`@rAn@`@V`Ap@jAfAdDzDhC`DB`@@JPZfAdBxBhDRf@X~@Rz@Vp@JThBjCzAnBLYTU@C`@c@|AqBKe@y@wCsAeDoA{ByAsBvDcFdB_CmAaB"
                },
                "summary": "I-280 S",
                "warnings": [],
                "waypoint_order": []
            }, {
                "bounds": {
                    "northeast": {
                        "lat": 37.784991,
                        "lng": -122.406857
                    },
                    "southwest": {
                        "lat": 37.7107629,
                        "lng": -122.4496484
                    }
                },
                "copyrights": "Map data ©2015 Google",
                "fare": {
                    "currency": "USD",
                    "text": "$4.10",
                    "value": 4.1
                },
                "legs": [{
                    "arrival_time": {
                        "text": "3:39pm",
                        "time_zone": "America/Los_Angeles",
                        "value": 1433025577
                    },
                    "departure_time": {
                        "text": "3:00pm",
                        "time_zone": "America/Los_Angeles",
                        "value": 1433023207
                    },
                    "distance": {
                        "text": "6.3 mi",
                        "value": 10127
                    },
                    "duration": {
                        "text": "40 mins",
                        "value": 2370
                    },
                    "end_address": "163-169 Rae Avenue, San Francisco, CA 94112, USA",
                    "end_location": {
                        "lat": 37.7109956,
                        "lng": -122.4496484
                    },
                    "start_address": "54-56 Mason Street, San Francisco, CA 94102, USA",
                    "start_location": {
                        "lat": 37.7839353,
                        "lng": -122.4092531
                    },
                    "steps": [{
                        "distance": {
                            "text": "0.2 mi",
                            "value": 314
                        },
                        "duration": {
                            "text": "4 mins",
                            "value": 232
                        },
                        "end_location": {
                            "lat": 37.784991,
                            "lng": -122.406857
                        },
                        "html_instructions": "Walk to Powell St.",
                        "polyline": {
                            "points": "streFx`cjVdBSIaACQ[c@c@m@e@m@}AyBW]y@gASU"
                        },
                        "start_location": {
                            "lat": 37.7839353,
                            "lng": -122.4092531
                        },
                        "steps": [{
                            "distance": {
                                "text": "187 ft",
                                "value": 57
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 40
                            },
                            "end_location": {
                                "lat": 37.7834308,
                                "lng": -122.4091512
                            },
                            "html_instructions": "Head <b>south</b> on <b>Mason St</b> toward <b>Turk St</b>",
                            "polyline": {
                                "points": "streFx`cjVdBS"
                            },
                            "start_location": {
                                "lat": 37.7839353,
                                "lng": -122.4092531
                            },
                            "travel_mode": "WALKING"
                        }, {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 257
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 192
                            },
                            "end_location": {
                                "lat": 37.784991,
                                "lng": -122.406857
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>Market St</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "mqreFd`cjVIaACQ[c@c@m@e@m@}AyBW]y@gASU"
                            },
                            "start_location": {
                                "lat": 37.7834308,
                                "lng": -122.4091512
                            },
                            "travel_mode": "WALKING"
                        }],
                        "travel_mode": "WALKING"
                    }, {
                        "distance": {
                            "text": "2.6 mi",
                            "value": 4116
                        },
                        "duration": {
                            "text": "6 mins",
                            "value": 360
                        },
                        "end_location": {
                            "lat": 37.752254,
                            "lng": -122.418466
                        },
                        "html_instructions": "Metro rail towards Daly City",
                        "polyline": {
                            "points": "e{reFzqbjV?AdEtF`J~LnD`FjDvE`ErFbDpEbF|Gh@x@zC`E`EpFpAjBNNLJJDLBXFvCvAr@X`@Jp@HhBXv@Fp@?~@?nA@nFUz@G`@EV?\\APAPA`AKd@CnCGjEUjBGzH]FAz@C`GYzHa@fI[jIc@xEQ~BKxG_@bIYrH]?@"
                        },
                        "start_location": {
                            "lat": 37.784991,
                            "lng": -122.406857
                        },
                        "transit_details": {
                            "arrival_stop": {
                                "location": {
                                    "lat": 37.752254,
                                    "lng": -122.418466
                                },
                                "name": "24th St. Mission"
                            },
                            "arrival_time": {
                                "text": "3:10pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433023800
                            },
                            "departure_stop": {
                                "location": {
                                    "lat": 37.784991,
                                    "lng": -122.406857
                                },
                                "name": "Powell St."
                            },
                            "departure_time": {
                                "text": "3:04pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433023440
                            },
                            "headsign": "Daly City",
                            "line": {
                                "agencies": [{
                                    "name": "Bay Area Rapid Transit",
                                    "url": "http://www.bart.gov/"
                                }],
                                "color": "#f20000",
                                "name": "Richmond - Daly City/Millbrae",
                                "url": "http://www.bart.gov/schedules/bylineresults?route=7",
                                "vehicle": {
                                    "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/subway.png",
                                    "local_icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ca-bart.png",
                                    "name": "Metro rail",
                                    "type": "SUBWAY"
                                }
                            },
                            "num_stops": 3
                        },
                        "travel_mode": "TRANSIT"
                    }, {
                        "distance": {
                            "text": "105 ft",
                            "value": 32
                        },
                        "duration": {
                            "text": "1 min",
                            "value": 32
                        },
                        "end_location": {
                            "lat": 37.751964,
                            "lng": -122.418528
                        },
                        "html_instructions": "Walk to Mission St & 24th St",
                        "polyline": {
                            "points": "qnleFlzdjVx@J"
                        },
                        "start_location": {
                            "lat": 37.752254,
                            "lng": -122.418466
                        },
                        "steps": [{
                            "distance": {
                                "text": "105 ft",
                                "value": 32
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 32
                            },
                            "end_location": {
                                "lat": 37.751964,
                                "lng": -122.418528
                            },
                            "polyline": {
                                "points": "qnleFlzdjVx@J"
                            },
                            "start_location": {
                                "lat": 37.752254,
                                "lng": -122.418466
                            },
                            "travel_mode": "WALKING"
                        }],
                        "travel_mode": "WALKING"
                    }, {
                        "distance": {
                            "text": "3.3 mi",
                            "value": 5292
                        },
                        "duration": {
                            "text": "19 mins",
                            "value": 1134
                        },
                        "end_location": {
                            "lat": 37.711468,
                            "lng": -122.446532
                        },
                        "html_instructions": "Bus towards Daly City",
                        "polyline": {
                            "points": "wlleFxzdjVAUhGY|H]vAIXB|@VtGpDvBlArBjAh@XlGnDvDtBx@d@pAt@FDb@TtAv@rC~AlAn@vC`B~@h@~@ZlAB~GP`@DbB`@dCl@|A^l@NxExE~@~@x@t@fQfQ`D`DNL|B|BbB~AJLrAtAhBnBNP~@fAZRtBxAdAt@~AfArBxA`BfARLrBxARLzCtBNJv@h@z@l@pDdCpA|@fFlDjCjBfD|B~CxBrA~@|CtBHF`CbBd@ZZRVR`CdCPP~BhCbAfAj@n@rBzB^`@rC~Cz@nB\\v@HPOJ"
                        },
                        "start_location": {
                            "lat": 37.751964,
                            "lng": -122.418528
                        },
                        "transit_details": {
                            "arrival_stop": {
                                "location": {
                                    "lat": 37.711468,
                                    "lng": -122.446532
                                },
                                "name": "Mission St & Lowell St"
                            },
                            "arrival_time": {
                                "text": "3:34pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433025294
                            },
                            "departure_stop": {
                                "location": {
                                    "lat": 37.751964,
                                    "lng": -122.418528
                                },
                                "name": "Mission St & 24th St"
                            },
                            "departure_time": {
                                "text": "3:16pm",
                                "time_zone": "America/Los_Angeles",
                                "value": 1433024160
                            },
                            "headsign": "Daly City",
                            "line": {
                                "agencies": [{
                                    "name": "SFMTA",
                                    "url": "http://www.sfmta.com/"
                                }],
                                "name": "Mission Rapid",
                                "short_name": "14R",
                                "vehicle": {
                                    "icon": "//maps.gstatic.com/mapfiles/transit/iw2/6/bus.png",
                                    "name": "Bus",
                                    "type": "BUS"
                                }
                            },
                            "num_stops": 6
                        },
                        "travel_mode": "TRANSIT"
                    }, {
                        "distance": {
                            "text": "0.2 mi",
                            "value": 373
                        },
                        "duration": {
                            "text": "5 mins",
                            "value": 282
                        },
                        "end_location": {
                            "lat": 37.7109956,
                            "lng": -122.4496484
                        },
                        "html_instructions": "Walk to 163-169 Rae Avenue, San Francisco, CA 94112, USA",
                        "polyline": {
                            "points": "uodeFxijjVJIb@dA|AlDgAvAaBxBIHJNvBxC"
                        },
                        "start_location": {
                            "lat": 37.711468,
                            "lng": -122.446532
                        },
                        "steps": [{
                            "distance": {
                                "text": "423 ft",
                                "value": 129
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 102
                            },
                            "end_location": {
                                "lat": 37.7107629,
                                "lng": -122.4476986
                            },
                            "html_instructions": "Head <b>southwest</b> on <b>Mission St</b> toward <b>Whipple Ave</b>",
                            "polyline": {
                                "points": "uodeFxijjVJIb@dA|AlD"
                            },
                            "start_location": {
                                "lat": 37.711468,
                                "lng": -122.446532
                            },
                            "travel_mode": "WALKING"
                        }, {
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
                        }, {
                            "distance": {
                                "text": "344 ft",
                                "value": 105
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 87
                            },
                            "end_location": {
                                "lat": 37.7109956,
                                "lng": -122.4496484
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>Rae Ave</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "{pdeF~wjjVJNvBxC"
                            },
                            "start_location": {
                                "lat": 37.7116565,
                                "lng": -122.4488027
                            },
                            "travel_mode": "WALKING"
                        }],
                        "travel_mode": "WALKING"
                    }],
                    "via_waypoint": []
                }],
                "overview_polyline": {
                    "points": "streFx`cjVdBSIaACQ[c@iA{AuBwCmA}AdErF~Zlb@fKnNdEzF`EpFpAjB\\ZXHXFvCvAtAd@zCb@hBFnC@dJc@n@CrAMtDKvH]`S}@zHa@fI[jIc@xEQxKk@bIYrH]x@LAUhGYtKg@XB|@VlK~F|CdBdMdHjCzAtGrDdFpC~@h@~@ZlJT`@DbB`@bFlAl@NxExExBtBhVhV|FxFlG~GtStN~WxQvZ`Tr@f@rCvCbJ|JrD`ExAfDHPOJJIb@dA|AlDgAvAkBbCbChD"
                },
                "summary": "",
                "warnings": [
                    "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
                ],
                "waypoint_order": []
            }]
        }
    }

    callback(data);

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
            };

            callback(data);

        };