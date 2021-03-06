export enum Gas {
  GZERO = 0,
  GBASE = 2,
  GVERYLOW = 3,
  GLOW = 5,
  GMID = 8,
  GHIGH = 10,
  GEXTCODE = 700,
  GBALANCE = 400,
  GSLOAD = 200,
  GJUMPDEST = 1,
  GSSET = 20000,
  GSRESET = 5000,
  RSCLEAR = 15000,
  RSELFDESTRUCT = 24000,
  GSELFDESTRUCT = 5000,
  GCREATE = 32000,
  GCODEDEPOSIT = 200,
  GCALL = 700,
  GCALLVALUE = 9000,
  GCALLSTIPEND = 2300,
  GNEWACCOUNT = 25000,
  GEXP = 10,
  GEXPBYTE = 50,
  GMEMORY = 3,
  GTXCREATE = 32000,
  GTXDATAZERO = 4,
  GTXDATANONZERO = 68,
  GTRANSACTION = 21000,
  GLOG = 375,
  GLOGDATA = 8,
  GLOGTOPIC = 375,
  GSHA3 = 30,
  GSHA3WORD = 6,
  GCOPY = 3,
  GBLOCKHASH = 20,
  GQUADDIVISOR = 100,
}
