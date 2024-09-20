//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "itscraftee360@gmail.com";
global.location = "Cape Town, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Cape Town";
global.github = process.env.GITHUB || "https://github.com/boruto-/KATAKURI_MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaf5x0eHFxP7JvSRRn1g";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaf5x0eHFxP7JvSRRn1g";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/katakuri.jpg";
global.devs = "27747815326";
global.sudo = process.env.SUDO || "27747815326";
global.owner = process.env.OWNER_NUMBER || "27747815326";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/katakuri.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VzMzJsNjV5Y1ZJUXVoZitJR2JVc2swZjN3eWNHMEc3clk1djVHb2RWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGxpTnJDUmFyNDY5aXM4WVhqbTdxMnFtN0dlZ3I5bVp2QXNRWEN0VEZsOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRFoyN3JzM2VBTitCaklVdnR5Q013THFMRDA3S1U5TXRKMFJOaVpFWG04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHU1JKSkZnU2pTR05EbHBlZWJVMTNjSkhmOFhvM2w0SS8wSEZ0MlVSRkdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLemhVSFd2c1lCUFVzVlNIRk5FcVlXZUthUHVLL3E0R21DaFJRSUdGRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF2V0dmc29ob1Z2aGR4T1FzTEFYWFZFT3J1eEJKeE1EY3ExYXZyRHQra0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NBVGlnbC82TlROVStvNzdNdm82U0UvYStRUFE3bXFuUU9WWVlwQVlFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1Y0ODhjL2x6QVhuWEtpRFFib0JxaFpCOFo2TTU0emVEQndnYzVDWG9tUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEb0JFVTBwUHArcThNT3c0dzhHdUV4eFJhM0VjV1ZyVUNtT0ZQcVFOV3NPTTVBcFFJZUpjUk1wL3RhY3Ryc284YzRHa1dxSCtHREZZOU1CeG5iaEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6IllxVGFpemUyenNNMFNsMmJ2Y0dNcnVDOHMxbWt0MUg3aittbklRdHZhS3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNUbThoRFpMUTlHWHp5LS1rWjFqU0EiLCJwaG9uZUlkIjoiZGI0NTk1ZmMtZWYzOC00NTA3LThhNDAtZTI0NGMzYTg1NmU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM4MmVBMG1GMG9jajJBZGxGYzlyMllDeTFmRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQ3hBRXFNUGVKR0pTSDhOWXJuM0tFa1JHcjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUJaVDk3WEsiLCJtZSI6eyJpZCI6IjIzNDkwMTc0NDI2Mjc6MTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wyajZQZ0dFSVRldDdjR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFCclV6TzdkQXhIdHp3OHg1VkNQUGQ5TWtpZE5xK0pIVzhmcmdtVzZSUkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJYdnBOSTFjTmsvTVdHU0hzb3l6YTFUWnZ5ZXRzK2tYR0g2T0lNOGxENHNyTUxhRTVKTEhPRnFPUUQwdi9DbGYyalZMZnJDUXdoNGkrc3dLVXlrNEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqWmRpb0xPZzl3R0RONlNIWkJoanVZdVdCQk5kUDQycnc2dko4UFdqQlBmRkk2YVlaTURyRmZIRVBZZUxhbGZRbjVqbHc0MlJwaEswNEhWQTliTmdCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTc0NDI2Mjc6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUFhMU16dTNRTVI3YzhQTWVWUWp6M2ZUSkluVGF2aVIxdkg2NEpsdWtVUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjg2OTI2NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQNEcifQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0k4QTVCZjhEYzRGSkJNSGFWWnZpaUxUaDMxZmhPamFmN0h6TmNYTjBsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEpScWUrS09zcTZMTCs3YlVKU2MwSjhQQ1VSZzJCVzJLYXNHTTNsNUYxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RGl2emVqN0haVEJJZForRXJnRS9RUWhrTmg1UXRaYy9NR3g1bEdvdVhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT3FzQTk3TG9YaEpVcFFOTkIrV2JOQVlsS1Uya29GZTMwK0FtWjlXNFVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHYnBGdlRac3BENHh1TitXTlNJNGs1VXhMWmpWQ3lPcExRZzM5anZsM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg5Vkw4VmdkM0pwalh6M3NqODRTUDJwR3NFZTg1b3RRSTdIM29SRGpCbjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBHd0FmazNyL3VvZjY2ejA5SURlcDlhQmxIRnpmdXVISU5RK05xZXVrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFBhaFpObld5MHF5c0c0QjFLZHNqUDZxK3VOWTVMYnVrV0VKTzFVVWwyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNaTDhCRWQvdjhXLzU3SFBSMEpQeC9yYmR1OC8rb3I3dHRoa3pvWXFKcEtBWVNEMGtHeUZXNTFSZlpSYUc5Uy9NUFBtemM3RTVCbEROSzdwcTl4OUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6Inc5RE0xRDk5eTl2Mk1DVlNmejF2akZKYyswejcvYjNENGVObC9pL2wvRWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlkR1QxQ3JkU2Z1d09FY2d5ZDVTekEiLCJwaG9uZUlkIjoiMWVlNzNjYzEtYWUwMy00NWZmLTlkZjEtMjMxMTEwNGJhMzk2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtlNVdOQkswTE9DNUJIY0N1MVBYZDFZVXdmbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJENXA5cnJJNDBNckxMMFRSU1lQNGFaZFdkdzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0dNUEtGWU4iLCJtZSI6eyJpZCI6IjI3NzQ3ODE1MzI2OjI5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVHI3SnNCRUlXbnNiY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHV2ZFRy94N2UwZW00MFVKVG4yU25kbWo5UFVhUHRqTm5yRWxyM1NDZ0dVPSIsImFjY291bnRTaWduYXR1cmUiOiJ0emV3UzVGZERFdWk4blFNZjRDa0l4SWZzK0l3QjFMYUtHSVJtLzM4czVVVjUwMENmUk1nOWN6OGl5Mzh3elA0cFNOMG52M1QzQjZ5eUJpVm5KSXJCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid2J5eTcxaWxSQ0wrcXh1cndXQ3VQRkdWQXV4ZkdwSVpxbFYvanVibmRia2o0QUJvZVRYU1JWYTZjNWdQN05CK0JHOURpZlhVcDA0ZEsrZHZ0Q3oxQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc0NzgxNTMyNjoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbG54QnY4ZTN0SHB1TkZDVTU5a3AzWm8vVDFHajdZelo2eEphOTBnb0JsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NzYzOTIzfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KATAKURI_MD™`",
  author: process.env.PACK_AUTHER || "KATAKURI_MD",
  packname: process.env.PACK_NAME || "K A T A K U R I",
  botname: process.env.BOT_NAME || "KATAKURI_MD",
  ownername: process.env.OWNER_NAME || "~katakuri",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "K A T A K U R I").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
