// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v342 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v343 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v343, v342],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:81:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v343, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347, v348], secs: v350, time: v349, didSend: v74, from: v346 } = txn1;
      
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v359 = stdlib.safeAdd(v349, v348);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v74, from: v346 } = txn1;
  ;
  const v359 = stdlib.safeAdd(v349, v348);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v359],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v346, v347, v348, v359],
      evt_cnt: 0,
      funcNum: 2,
      lct: v349,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v526, time: v525, didSend: v285, from: v524 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v346,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v526, time: v525, didSend: v285, from: v524 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:73:35:application',
      fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:89:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v365, time: v364, didSend: v83, from: v363 } = txn2;
    const v367 = stdlib.add(v347, v347);
    ;
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v369 = v364;
    let v376 = v367;
    
    let txn3 = txn2;
    while (await (async () => {
      const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v384;})()) {
      const v391 = stdlib.safeAdd(v369, v348);
      const v395 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:98:49:application',
        fs: ['at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v396 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:99:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v397 = stdlib.digest([ctc0, ctc0], [v396, v395]);
      const v399 = stdlib.protect(ctc0, await interact.getGuess(v395), {
        at: './index.rsh:102:46:application',
        fs: ['at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v400 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:103:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:96:19:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v401 = stdlib.digest([ctc0, ctc0], [v400, v399]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v346, v347, v348, v363, v376, v391, v397, v401],
        evt_cnt: 2,
        funcNum: 4,
        lct: v369,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:106:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v404, v405], secs: v407, time: v406, didSend: v115, from: v403 } = txn4;
          
          ;
          const v415 = stdlib.safeAdd(v406, v348);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v391],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v391],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v363,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn5;
        ;
        const v493 = stdlib.addressEq(v346, v490);
        const v494 = stdlib.addressEq(v363, v490);
        const v495 = v493 ? true : v494;
        stdlib.assert(v495, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:107:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:73:35:application',
          fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:107:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v404, v405], secs: v407, time: v406, didSend: v115, from: v403 } = txn4;
        ;
        const v408 = stdlib.addressEq(v346, v403);
        stdlib.assert(v408, {
          at: './index.rsh:106:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v415 = stdlib.safeAdd(v406, v348);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v415],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v405, v415],
            evt_cnt: 0,
            funcNum: 7,
            lct: v406,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v346,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn6;
          ;
          const v475 = stdlib.addressEq(v346, v472);
          const v476 = stdlib.addressEq(v363, v472);
          const v477 = v475 ? true : v476;
          stdlib.assert(v477, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:118:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:73:35:application',
            fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:118:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v422, v423], secs: v425, time: v424, didSend: v127, from: v421 } = txn5;
          ;
          const v426 = stdlib.addressEq(v363, v421);
          stdlib.assert(v426, {
            at: './index.rsh:117:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v433 = stdlib.safeAdd(v424, v348);
          const txn6 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v405, v422, v423, v433, v396, v395, v400, v399],
            evt_cnt: 4,
            funcNum: 8,
            lct: v424,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:127:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v438, v439, v440, v441], secs: v443, time: v442, didSend: v139, from: v437 } = txn6;
              
              ;
              const v450 = stdlib.safeAdd(v439, v422);
              const v451 = stdlib.eq(v441, v423);
              const v452 = stdlib.eq(v450, v441);
              const v453 = stdlib.eq(v450, v423);
              const v541 = v453 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v542 = v452 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v541;
              const v449 = v451 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v542;
              const cv368 = v449;
              const cv369 = v442;
              const cv376 = v376;
              
              await (async () => {
                const v368 = cv368;
                const v369 = cv369;
                const v376 = cv376;
                
                if (await (async () => {
                  const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v384;})()) {
                  const v391 = stdlib.safeAdd(v369, v348);
                  sim_r.isHalt = false;
                  }
                else {
                  const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:14:decimal', stdlib.UInt_max, '2'), v347);
                  const v513 = v508 ? v346 : v363;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v513,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v433],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v346, v347, v348, v363, v376, v404, v405, v422, v423, v433],
              evt_cnt: 0,
              funcNum: 9,
              lct: v424,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v363,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn7;
            ;
            const v457 = stdlib.addressEq(v346, v454);
            const v458 = stdlib.addressEq(v363, v454);
            const v459 = v457 ? true : v458;
            stdlib.assert(v459, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:73:35:application',
              fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v438, v439, v440, v441], secs: v443, time: v442, didSend: v139, from: v437 } = txn6;
            ;
            const v444 = stdlib.addressEq(v346, v437);
            stdlib.assert(v444, {
              at: './index.rsh:127:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v445 = stdlib.digest([ctc0, ctc0], [v438, v439]);
            const v446 = stdlib.digestEq(v404, v445);
            stdlib.assert(v446, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:130:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v447 = stdlib.digest([ctc0, ctc0], [v440, v441]);
            const v448 = stdlib.digestEq(v405, v447);
            stdlib.assert(v448, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:131:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v450 = stdlib.safeAdd(v439, v422);
            const v451 = stdlib.eq(v441, v423);
            const v452 = stdlib.eq(v450, v441);
            const v453 = stdlib.eq(v450, v423);
            const v541 = v453 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v542 = v452 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v541;
            const v449 = v451 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v542;
            const cv368 = v449;
            const cv369 = v442;
            const cv376 = v376;
            
            v368 = cv368;
            v369 = cv369;
            v376 = cv376;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:14:decimal', stdlib.UInt_max, '2'), v347);
    const v513 = v508 ? v346 : v363;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v368), {
      at: './index.rsh:153:28:application',
      fs: ['at ./index.rsh:152:9:application call to [unknown function] (defined at: ./index.rsh:152:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v74, from: v346 } = txn1;
  ;
  const v359 = stdlib.safeAdd(v349, v348);
  stdlib.protect(ctc1, await interact.acceptWager(v347), {
    at: './index.rsh:86:29:application',
    fs: ['at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v346, v347, v348, v359],
    evt_cnt: 0,
    funcNum: 1,
    lct: v349,
    onlyIf: true,
    out_tys: [],
    pay: [v347, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v365, time: v364, didSend: v83, from: v363 } = txn2;
      
      const v367 = stdlib.add(v347, v347);
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v369 = v364;
      const v376 = v367;
      
      if (await (async () => {
        const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v384;})()) {
        const v391 = stdlib.safeAdd(v369, v348);
        sim_r.isHalt = false;
        }
      else {
        const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:14:decimal', stdlib.UInt_max, '2'), v347);
        const v513 = v508 ? v346 : v363;
        sim_r.txns.push({
          kind: 'from',
          to: v513,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v359],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v346, v347, v348, v359],
      evt_cnt: 0,
      funcNum: 2,
      lct: v349,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v526, time: v525, didSend: v285, from: v524 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v346,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v526, time: v525, didSend: v285, from: v524 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:73:35:application',
      fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:89:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v365, time: v364, didSend: v83, from: v363 } = txn2;
    const v367 = stdlib.add(v347, v347);
    ;
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v369 = v364;
    let v376 = v367;
    
    let txn3 = txn2;
    while (await (async () => {
      const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v384;})()) {
      const v391 = stdlib.safeAdd(v369, v348);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v391],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v391],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v363,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn5;
        ;
        const v493 = stdlib.addressEq(v346, v490);
        const v494 = stdlib.addressEq(v363, v490);
        const v495 = v493 ? true : v494;
        stdlib.assert(v495, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:107:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:73:35:application',
          fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:107:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v404, v405], secs: v407, time: v406, didSend: v115, from: v403 } = txn4;
        ;
        const v408 = stdlib.addressEq(v346, v403);
        stdlib.assert(v408, {
          at: './index.rsh:106:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v415 = stdlib.safeAdd(v406, v348);
        const v419 = stdlib.protect(ctc0, await interact.getFingers(), {
          at: './index.rsh:114:59:application',
          fs: ['at ./index.rsh:113:17:application call to [unknown function] (defined at: ./index.rsh:113:21:function exp)'],
          msg: 'getFingers',
          who: 'Bob'
          });
        const v420 = stdlib.protect(ctc0, await interact.getGuess(v419), {
          at: './index.rsh:115:56:application',
          fs: ['at ./index.rsh:113:17:application call to [unknown function] (defined at: ./index.rsh:113:21:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v404, v405, v415, v419, v420],
          evt_cnt: 2,
          funcNum: 6,
          lct: v406,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:117:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v422, v423], secs: v425, time: v424, didSend: v127, from: v421 } = txn5;
            
            ;
            const v433 = stdlib.safeAdd(v424, v348);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v415],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v405, v415],
            evt_cnt: 0,
            funcNum: 7,
            lct: v406,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v346,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn6;
          ;
          const v475 = stdlib.addressEq(v346, v472);
          const v476 = stdlib.addressEq(v363, v472);
          const v477 = v475 ? true : v476;
          stdlib.assert(v477, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:118:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:73:35:application',
            fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:118:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v422, v423], secs: v425, time: v424, didSend: v127, from: v421 } = txn5;
          ;
          const v426 = stdlib.addressEq(v363, v421);
          stdlib.assert(v426, {
            at: './index.rsh:117:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v433 = stdlib.safeAdd(v424, v348);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v433],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v346, v347, v348, v363, v376, v404, v405, v422, v423, v433],
              evt_cnt: 0,
              funcNum: 9,
              lct: v424,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v363,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn7;
            ;
            const v457 = stdlib.addressEq(v346, v454);
            const v458 = stdlib.addressEq(v363, v454);
            const v459 = v457 ? true : v458;
            stdlib.assert(v459, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:73:35:application',
              fs: ['at ./index.rsh:72:13:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:71:30:function exp)', 'at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v438, v439, v440, v441], secs: v443, time: v442, didSend: v139, from: v437 } = txn6;
            ;
            const v444 = stdlib.addressEq(v346, v437);
            stdlib.assert(v444, {
              at: './index.rsh:127:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v445 = stdlib.digest([ctc0, ctc0], [v438, v439]);
            const v446 = stdlib.digestEq(v404, v445);
            stdlib.assert(v446, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:130:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v447 = stdlib.digest([ctc0, ctc0], [v440, v441]);
            const v448 = stdlib.digestEq(v405, v447);
            stdlib.assert(v448, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:131:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v450 = stdlib.safeAdd(v439, v422);
            const v451 = stdlib.eq(v441, v423);
            const v452 = stdlib.eq(v450, v441);
            const v453 = stdlib.eq(v450, v423);
            const v541 = v453 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v542 = v452 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v541;
            const v449 = v451 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v542;
            const cv368 = v449;
            const cv369 = v442;
            const cv376 = v376;
            
            v368 = cv368;
            v369 = cv369;
            v376 = cv376;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v511 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:149:14:decimal', stdlib.UInt_max, '2'), v347);
    const v513 = v508 ? v346 : v363;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v368), {
      at: './index.rsh:153:28:application',
      fs: ['at ./index.rsh:152:9:application call to [unknown function] (defined at: ./index.rsh:152:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJIAIHKJgBqAFYMCYDAQABAQAiNQAxGEEE8ipkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAn5JIQgMQAFySSUMQAEZSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQKSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BoAFbNf5JNQVJSiJbNf0lWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENANXWCA0/RY0/BZQARJENANXeCA0+xY0+hZQARJENPw0AyEKWwg1+TT/NAMhBls0AyEJWzQDVzAgIyI0+TT+Ek0hBzT5NPoSTSM0+jT+Ek0yBjQDJFtCAuxIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC+0mBBgxAAK5IIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEGWzX+IQlbNf1XMCA1/CRbNftXWCA1+ld4IDX5STUFSSJbNfglWzX3gARKIcv8NPgWUDT3FlCwMgY0AyEKWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQU1ATIGNQJCAmJIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB9kkhBwxAAOBJgQQMQACYSCEENAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQlbNf1XMCA1/CRbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULAyBjQDIQxbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQg1ATIGNQJCAWwhBxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQZbsggjshA0A1cAILIHs0IBD0kjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBRzQDVwAgNP80AyEJWzEAIzIGNP9JCEIAX0iBoI0GiAEnIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDT/iAD3MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB+Nf81/jX9Nfw1+zX6Nfk0/SMSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQQ1ATIGNQJCADqxIrIBIQc0+guyCCOyEDT8NPk0/SEHEk2yB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001db138038062001db18339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a34806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461151f565b610197565b6100a16100e8366004611542565b6103fc565b6100a16100fb366004611542565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611542565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be929190611554565b6100a1610159366004611542565b610941565b6100a161016c3660046115b1565b610ad8565b6100a161017f366004611542565b610dad565b6100a161019236600461151f565b610f08565b6101a7600760005414601c611179565b6101c1813515806101ba57506001548235145b601d611179565b6000808055600280546101d3906115c3565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115c3565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061164c565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e611179565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be9291906116f8565b60405180910390a16102d23415601a611179565b60608201516102ed906001600160a01b03163314601b611179565b6102fb43836040015161119f565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611729565b604051602081830303815290604052600290805190602001906103f59291906113d8565b5050505050565b61040c6001600054146009611179565b6104268135158061041f57506001548235145b600a611179565b600080805560028054610438906115c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115c3565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117b0565b90506104dc81606001514310600b611179565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611829565b60405180910390a1610526816020015134146008611179565b61052e61145c565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152518001602082015160400152610586816111f2565b505050565b61059b600160005414600d611179565b6105b5813515806105ae57506001548235145b600e611179565b6000808055600280546105c7906115c3565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906115c3565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117b0565b905061066c8160600151431015600f611179565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611829565b60405180910390a16106b13415600c611179565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114b5565b5050565b6107196005600054146017611179565b6107338135158061072c57506001548235145b6018611179565b600080805560028054610745906115c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906115c3565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d69190611866565b90506107ea8160a001514310156019611179565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611829565b60405180910390a161082f34156015611179565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b6016611179565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906115c3565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906115c3565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b6109516007600054146021611179565b61096b8135158061096457506001548235145b6022611179565b60008080556002805461097d906115c3565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906115c3565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e919061164c565b9050610a228160e001514310156023611179565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611829565b60405180910390a1610a673415601f611179565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b6020611179565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae86009600054146028611179565b610b0281351580610afb57506001548235145b6029611179565b600080805560028054610b14906115c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906115c3565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba591906118fa565b9050610bbd6040518060200160405280600081525090565b610bcf8261012001514310602a611179565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c4234156024611179565b8151610c5a906001600160a01b031633146025611179565b60408051610ca691610c8091602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146026611179565b604080516060858101356020830152608086013592820192909252610cec91016040516020818303038152906040528051906020012060001c8360c00151146027611179565b610d0183602001602001358360e0015161119f565b8152610d0b61145c565b825181516001600160a01b03918216905260208085015183519091015260408085015183519091015260608085015183519216910152610100830151608085013514610d7f578151608085013514610d7857610100830151825114610d71576001610d82565b6000610d82565b6002610d82565b60015b60208083018051929092528151439101526080840151905160400152610da7816111f2565b50505050565b610dbd600960005414602d611179565b610dd781351580610dd057506001548235145b602e611179565b600080805560028054610de9906115c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610e15906115c3565b8015610e625780601f10610e3757610100808354040283529160200191610e62565b820191906000526020600020905b815481529060010190602001808311610e4557829003601f168201915b5050505050806020019051810190610e7a91906118fa565b9050610e8f816101200151431015602f611179565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ec0929190611829565b60405180910390a1610ed43415602b611179565b8051610863906001600160a01b03163314610efe5760608201516001600160a01b03163314610f01565b60015b602c611179565b610f186005600054146012611179565b610f3281351580610f2b57506001548235145b6013611179565b600080805560028054610f44906115c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610f70906115c3565b8015610fbd5780601f10610f9257610100808354040283529160200191610fbd565b820191906000526020600020905b815481529060010190602001808311610fa057829003601f168201915b5050505050806020019051810190610fd59190611866565b9050610fed6040518060200160405280600081525090565b610ffe8260a0015143106014611179565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161102f9291906116f8565b60405180910390a161104334156010611179565b815161105b906001600160a01b031633146011611179565b61106943836040015161119f565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111ac83826119a5565b91508110156111ec5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611196565b92915050565b604080516020810190915260008152602082015151600114156113165761122982602001516020015183600001516040015161119f565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610da79291906113d8565b60208201515160021461132e57815160600151611332565b8151515b6001600160a01b03166108fc6113516002856000015160200151611379565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b600081158061139d5750828261138f81836119bd565b925061139b90836119dc565b145b6111ec5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611196565b8280546113e4906115c3565b90600052602060002090601f016020900481019282611406576000855561144c565b82601f1061141f57805160ff191683800117855561144c565b8280016001018555821561144c579182015b8281111561144c578251825591602001919060010190611431565b506114589291506114f2565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114b060405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114c1906115c3565b6000825580601f106114d1575050565b601f0160209004906000526020600020908101906114ef91906114f2565b50565b5b8082111561145857600081556001016114f3565b60006060828403121561151957600080fd5b50919050565b60006060828403121561153157600080fd5b61153b8383611507565b9392505050565b60006040828403121561151957600080fd5b82815260006020604081840152835180604085015260005b818110156115885785810183015185820160600152820161156c565b8181111561159a576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561151957600080fd5b600181811c908216806115d757607f821691505b6020821081141561151957634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561162a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461164757600080fd5b919050565b600061010080838503121561166057600080fd5b6040519081019067ffffffffffffffff8211818310171561169157634e487b7160e01b600052604160045260246000fd5b8160405261169e84611630565b815260208401516020820152604084015160408201526116c060608501611630565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161153b60208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161176960608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117c257600080fd5b6040516080810181811067ffffffffffffffff821117156117f357634e487b7160e01b600052604160045260246000fd5b6040526117ff83611630565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461185757600080fd5b80604085015250509392505050565b600060c0828403121561187857600080fd5b60405160c0810181811067ffffffffffffffff821117156118a957634e487b7160e01b600052604160045260246000fd5b6040526118b583611630565b815260208301516020820152604083015160408201526118d760608401611630565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561190d57600080fd5b6119156115f8565b61191e83611630565b8152602083015160208201526040830151604082015261194060608401611630565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119b8576119b861198f565b500190565b60008160001904831182151516156119d7576119d761198f565b500290565b6000826119f957634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212209ddab7295217ab8700b889c9e1202b4f977b4426589601b5b32f367643a3ed5764736f6c634300080c0033`,
  BytecodeLen: 7601,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:89:54:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:150:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:94:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:107:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:108:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:118:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:119:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:128:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
