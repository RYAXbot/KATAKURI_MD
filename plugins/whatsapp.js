const moment = require('moment-timezone');
const Config = require("../config");
let {
  fancytext,
  smd,
  tlang,
  tiny,
  botpic,
  prefix,
  updateProfilePicture,
  parsedJid
} = require("../lib");
const {
  cmd
} = require("../lib/plugins");
cmd({
  'pattern': "privacy",
  'desc': "send ptv Message of video",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x1de00b, _0x3a059e, {
  cmdName: _0x25ae6c
}) => {
  try {
    const _0x5a7352 = await _0x1de00b.bot.fetchPrivacySettings();
    txt = "*[WHATSAPP PRIVACY SETTINGS]*\n\n*PROFILE:* " + _0x5a7352.profile + "\n*STATUS:* " + _0x5a7352.status + "\n*ONLINE:* " + _0x5a7352.online + "\n*LASTSEEN:* " + _0x5a7352.last + "\n*MESSAGE READ:* " + _0x5a7352.readreceipts + "\n\n*Who can add in group:* " + _0x5a7352.groupadd + "\n*Who can call:* " + _0x5a7352.calladd + "\n    ";
    await _0x1de00b.send(txt);
  } catch (_0x450710) {
    await _0x1de00b.error(_0x450710 + "\n\ncommand : privacy", _0x450710);
  }
});
let mtypes = ["imageMessage"];
smd({
  'pattern': "fullpp",
  'desc': "Set full screen profile picture",
  'category': 'whatsapp',
  'use': "<reply to image>",
  'fromMe': true,
  'filename': __filename
}, async _0x29e300 => {
  try {
    let _0x19d7fb = mtypes.includes(_0x29e300.mtype) ? _0x29e300 : _0x29e300.reply_message;
    if (!_0x19d7fb || !mtypes.includes(_0x19d7fb?.["mtype"] || "need_Media")) {
      return await _0x29e300.reply("*Reply to an image, dear*");
    }
    return await updateProfilePicture(_0x29e300, _0x29e300.user, _0x19d7fb, "fullpp");
  } catch (_0x24ab42) {
    await _0x29e300.error(_0x24ab42 + "\n\ncommand : fullpp", _0x24ab42);
  }
  {}
});
smd({
  'pattern': "rpp",
  'desc': "remove profile picture",
  'category': "whatsapp",
  'use': "<chat>",
  'fromMe': true,
  'filename': __filename
}, async _0x576c66 => {
  try {
    await _0x576c66.removepp();
    _0x576c66.send("*_Profile picture removed successfully!_*");
  } catch (_0x5426bd) {
    await _0x576c66.error(_0x5426bd + "\n\ncommand : rpp", _0x5426bd);
  }
});
smd({
  'pattern': "bio",
  'desc': "update profile status of whatsapp",
  'category': "whatsapp",
  'use': "<text>",
  'fromMe': true,
  'filename': __filename
}, async (_0x142a55, _0x46608a) => {
  try {
    if (!_0x46608a) {
      return await _0x142a55.send("*_provide text to update profile status!_*\n*_Example: " + prefix + "bio KATAKURI_MD_*");
    }
    await _0x142a55.bot.updateProfileStatus(_0x46608a);
    _0x142a55.send("*Profile status updated successfully!*");
  } catch (_0x431ce8) {
    await _0x142a55.error(_0x431ce8 + "\n\ncommand : bio", _0x431ce8);
  }
});
cmd({
  'pattern': "ptv",
  'desc': "send ptv Message of video",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x3c447b, _0x380c98, {
  cmdName: _0x1cc2ce
}) => {
  try {
    if (!_0x3c447b.quoted) {
      return await _0x3c447b.send("*Uhh Please, reply to video*");
    }
    let _0x3e5787 = _0x3c447b.quoted.mtype;
    if (_0x3e5787 !== "videoMessage") {
      return await _0x3c447b.send("*Uhh Dear, reply to a video message*");
    }
    return await _0x3c447b.bot.forwardOrBroadCast2(_0x3c447b.chat, _0x3c447b.quoted, {}, _0x1cc2ce);
  } catch (_0xdce52f) {
    await _0x3c447b.error(_0xdce52f + "\n\ncommand : ptv", _0xdce52f);
  }
});
cmd({
  'pattern': 'save',
  'desc': "Save Message to log number",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x3516c9, _0x59b822, {
  cmdName: _0xc432b
}) => {
  try {
    let _0x575bb6 = _0x3516c9.reply_message;
    if (!_0x575bb6) {
      return await _0x3516c9.send("*Uhh Please, reply to to a Message*");
    }
  } catch (_0x311f45) {
    await _0x3516c9.error(_0x311f45 + "\n\ncommand : save", _0x311f45);
  }
});
cmd({
  'pattern': "quoted",
  'desc': "get reply Message from Replied Message",
  'category': 'user',
  'filename': __filename
}, async _0x362f3c => {
  try {
    if (!_0x362f3c.quoted) {
      return await _0x362f3c.send("*_Uhh Dear, Reply to a Message_*");
    }
    var _0x42e5cf = await _0x362f3c.bot.serializeM(await _0x362f3c.getQuotedObj());
    if (!_0x42e5cf || !_0x42e5cf.quoted) {
      return await _0x362f3c.replay("*Message you replied does not contain a reply Message*");
    }
    try {
      await _0x362f3c.react('✨', _0x362f3c);
      let _0x1d5680 = await _0x362f3c.bot.serializeM(await _0x42e5cf.getQuotedObj());
      return await _0x362f3c.bot.copyNForward(_0x362f3c.chat, _0x1d5680, false);
    } catch (_0x34eaa6) {
      await _0x362f3c.bot.forward(_0x362f3c.chat, _0x42e5cf.quoted, {}, _0x362f3c);
      console.log(_0x34eaa6);
    }
  } catch (_0x512af7) {
    await _0x362f3c.error(_0x512af7 + "\n\ncommand : quoted", _0x512af7);
  }
});
cmd({
  'pattern': "blocklist",
  'desc': "get list of all Blocked Numbers",
  'category': 'whatsapp',
  'fromMe': true,
  'filename': __filename,
  'use': "<text>"
}, async _0xfa0e7f => {
  try {
    const _0x4bd729 = await _0xfa0e7f.bot.fetchBlocklist();
    if (_0x4bd729.length === 0x0) {
      return await _0xfa0e7f.reply("Uhh Dear, You don't have any Blocked Numbers.");
    }
    let _0x5749d5 = "\n*≡ List*\n\n*_Total Users:* " + _0x4bd729.length + "_\n\n┌─⊷ \t*BLOCKED USERS*\n";
    for (let _0x2cd015 = 0x0; _0x2cd015 < _0x4bd729.length; _0x2cd015++) {
      _0x5749d5 += "▢ " + (_0x2cd015 + 0x1) + ":- wa.me/" + _0x4bd729[_0x2cd015].split('@')[0x0] + "\n";
    }
    _0x5749d5 += "└───────────";
    return await _0xfa0e7f.bot.sendMessage(_0xfa0e7f.chat, {
      'text': _0x5749d5
    });
  } catch (_0x1ed9b4) {
    await _0xfa0e7f.error(_0x1ed9b4 + "\n\ncommand : blocklist", _0x1ed9b4);
  }
});
cmd({
  'pattern': "location",
  'desc': "Adds *readmore* in given text.",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x4ee956, _0x22e2dc) => {
  try {
    if (!_0x22e2dc) {
      return await _0x4ee956.reply("*Give Coordinates To Send Location!*\n *Ex: " + prefix + "location 24.121231,55.1121221*");
    }
    let _0x23101b = parseFloat(_0x22e2dc.split(',')[0x0]) || '';
    let _0x4b8436 = parseFloat(_0x22e2dc.split(',')[0x1]) || '';
    if (!_0x23101b || isNaN(_0x23101b) || !_0x4b8436 || isNaN(_0x4b8436)) {
      return await _0x4ee956.reply("*_Cordinates Not In Formate, Try Again_*");
    }
    await _0x4ee956.reply("*----------LOCATION------------*\n```Sending Location Of Given Data:\n Latitude: " + _0x23101b + "\n Longitude: " + _0x4b8436 + "```\n\n" + Config.caption);
    return await _0x4ee956.sendMessage(_0x4ee956.jid, {
      'location': {
        'degreesLatitude': _0x23101b,
        'degreesLongitude': _0x4b8436
      }
    }, {
      'quoted': _0x4ee956
    });
  } catch (_0x4d92d0) {
    await _0x4ee956.error(_0x4d92d0 + "\n\ncommand : location", _0x4d92d0);
  }
});
smd({
  'pattern': "listpc",
  'category': "whatsapp",
  'desc': "Finds info about personal chats",
  'filename': __filename
}, async (_0x144fd0, _0x21857a, {
  store: _0x563c73
}) => {
  try {
    _0x144fd0.react('🫡');
    let _0x196bf6 = await _0x563c73.chats.all().filter(_0x8b2b5 => _0x8b2b5.id.endsWith('.net')).map(_0x434198 => _0x434198);
    let _0x4b7ff3 = " 「  " + Config.botname + "'s pm user list  」\n\nTotal " + _0x196bf6.length + " users are text in personal chat.";
    for (let _0x15740d of _0x196bf6) {
      _0x4b7ff3 += "\n\nUser: @" + _0x15740d.id.split('@')[0x0] + "\nMessages : " + _0x15740d.unreadCount + "\nLastchat : " + moment(_0x15740d.conversationTimestamp * 0x3e8).tz(timezone).format("DD/MM/YYYY HH:mm:ss");
    }
    _0x144fd0.bot.sendTextWithMentions(_0x144fd0.chat, _0x4b7ff3, _0x144fd0);
  } catch (_0x170045) {
    return await _0x144fd0.error(_0x170045 + "\n\n command: listpc", _0x170045, "*_Didn't get any results, Sorry!_*");
  }
});
smd({
  'pattern': 'listgc',
  'category': 'whatsapp',
  'desc': "Finds info about all active groups",
  'filename': __filename
}, async (_0xa220f, _0x123a92, {
  store: _0x4ff3e9,
  Void: _0x573654
}) => {
  try {
    _0xa220f.react('🫡');
    let _0x369bef = await _0x4ff3e9.chats.all().filter(_0x17a722 => _0x17a722.id.endsWith('@g.us')).map(_0x2555de => _0x2555de);
    let _0x162811 = " 「  " + Config.botname + "'s group user list  」\n\nTotal " + _0x369bef.length + " active Groups found!";
    for (let _0x37fd61 of _0x369bef) {
      let _0x10ff83 = await _0x573654.groupMetadata(_0x37fd61.id);
      _0x162811 += "\n\nName : " + _0x10ff83.subject + " " + (_0x10ff83.owner ? "\nOwner : @" + _0x10ff83.owner.split('@')[0x0] : '') + "\nID : " + _0x37fd61.id + "\nMade : " + (_0x10ff83.creation ? moment(_0x10ff83.creation * 0x3e8).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss") : _0x10ff83.creation) + "\nMember : " + (_0x10ff83.participants.length || 0x0) + "\n\nMessages : " + _0x37fd61.unreadCount + "\nLastchat : " + moment(_0x37fd61.conversationTimestamp * 0x3e8).tz(timezone).format("DD/MM/YYYY HH:mm:ss");
    }
    _0xa220f.send(_0x162811, {}, "suhail", _0xa220f);
  } catch (_0x383d75) {
    return await _0xa220f.error(_0x383d75 + "\n\n command: listpc", _0x383d75, "*_Didn't get any results, Sorry!_*");
  }
});
cmd({
  'pattern': 'vcard',
  'desc': "Create Contact by given name.",
  'category': "whatsapp",
  'filename': __filename
}, async (_0x2721c0, _0x4a39c4) => {
  try {
    if (!_0x2721c0.quoted) {
      return _0x2721c0.reply("*Please Reply to User With Name*");
    }
    if (!_0x4a39c4) {
      return _0x2721c0.reply("Please Give Me User Name, \n *Example : " + prefix + "vcard Suhail Tech Info* ");
    }
    var _0x96de1e = _0x4a39c4.split(" ");
    if (_0x96de1e.length > 0x3) {
      _0x4a39c4 = _0x96de1e.slice(0x0, 0x3).join(" ");
    }
    const _0x4ef0e2 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x4a39c4 + "\n" + "ORG:;\n" + 'TEL;type=CELL;type=VOICE;waid=' + _0x2721c0.quoted.sender.split('@')[0x0] + ':+' + owner[0x0] + "\n" + 'END:VCARD';
    let _0x2438e1 = {
      'contacts': {
        'displayName': _0x4a39c4,
        'contacts': [{
          'vcard': _0x4ef0e2
        }]
      }
    };
    return await _0x2721c0.bot.sendMessage(_0x2721c0.chat, _0x2438e1, {
      'quoted': _0x2721c0
    });
  } catch (_0x4812de) {
    await _0x2721c0.error(_0x4812de + "\n\ncommand : vcard", _0x4812de);
  }
});
smd({
  'pattern': "edit",
  'fromMe': true,
  'desc': "edit message that sended by bot",
  'type': "whatsapp"
}, async (_0x248e32, _0x36d92f) => {
  try {
    let _0x38f991 = _0x248e32.reply_message && _0x248e32.reply_message.fromMe ? _0x248e32.reply_message : false;
    if (!_0x38f991) {
      return await _0x248e32.reply("_Reply to a message that sent by you!_");
    }
    if (!_0x36d92f) {
      return await _0x248e32.reply("_Need text, Example: edit hi_");
    }
    return await _0x248e32.edit(_0x36d92f, {
      'edit': _0x38f991
    });
  } catch (_0x1ebf78) {
    await _0x248e32.error(_0x1ebf78 + "\n\ncommand : edit", _0x1ebf78);
  }
});
smd({
  'pattern': 'forward',
  'alias': ["send"],
  'desc': "forward your messages in your jid",
  'type': "whatsapp"
}, async (_0x33c3ba, _0xc4c33d) => {
  try {
    if (!_0x33c3ba.reply_message) {
      return _0x33c3ba.reply("*_Reply to something!_*");
    }
    let _0x336179 = await parsedJid(_0xc4c33d);
    if (!_0xc4c33d || !_0x336179 || !_0x336179[0x0]) {
      return await _0x33c3ba.send("*Provide jid to forward message*\n*use _" + prefix + "jid,_ to get jid of users!*");
    }
    for (let _0xcd7afa = 0x0; _0xcd7afa < _0x336179.length; _0xcd7afa++) {
      _0x33c3ba.bot.forwardOrBroadCast(_0x336179[_0xcd7afa], _0x33c3ba.reply_message);
    }
  } catch (_0x5c2093) {
    await _0x33c3ba.error(_0x5c2093 + "\n\ncommand : forward", _0x5c2093);
  }
});
smd({
  'cmdname': "block",
  'info': "blocks a person",
  'fromMe': true,
  'type': 'whatsapp',
  'filename': __filename,
  'use': "<quote/reply user.>"
}, async _0x51ddfa => {
  try {
    let _0x237c49 = _0x51ddfa.reply_message ? _0x51ddfa.reply_message.sender : !_0x51ddfa.isGroup ? _0x51ddfa.from : _0x51ddfa.mentionedJid[0x0] ? _0x51ddfa.mentionedJid[0x0] : '';
    if (!_0x237c49 && !_0x237c49.includes('@s.whatsapp.net')) {
      return await _0x51ddfa.reply("*Uhh dear, reply/mention an User*");
    }
    if (_0x51ddfa.checkBot(_0x237c49)) {
      return await _0x51ddfa.reply("*Huh, I can't block my Creator!!*");
    }
    await _0x51ddfa.bot.updateBlockStatus(_0x237c49, "block").then(_0x3646b4 => {
      _0x51ddfa.react('✨', _0x51ddfa);
    })["catch"](_0x347137 => _0x51ddfa.reply("*_Can't block user, Sorry!!_*"));
  } catch (_0x37166b) {
    await _0x51ddfa.error(_0x37166b + "\n\ncommand: block", _0x37166b, false);
  }
});
smd({
  'cmdname': 'unblock',
  'info': "Unblocked user.",
  'type': 'whatsapp',
  'fromMe': true,
  'filename': __filename
}, async _0x372598 => {
  try {
    let _0x4f0daf = _0x372598.reply_message ? _0x372598.reply_message.sender : !_0x372598.isGroup ? _0x372598.from : _0x372598.mentionedJid[0x0] ? _0x372598.mentionedJid[0x0] : '';
    if (!_0x4f0daf && !_0x4f0daf.includes("@s.whatsapp.net")) {
      return await _0x372598.reply("*Uhh dear, reply/mention an User*");
    }
    await _0x372598.bot.updateBlockStatus(_0x4f0daf, "unblock").then(_0xc1e4ca => _0x372598.send('*@' + _0x4f0daf.split('@')[0x0] + " Unblocked Successfully..!*", {
      'mentions': [users]
    }))['catch'](_0x1b7358 => _0x372598.reply("*_Can't Unblock user, Make sure user blocked!!_*"));
  } catch (_0x181f50) {
    await _0x372598.error(_0x181f50 + "\n\ncommand: unblock", _0x181f50);
  }
});
cmd({
  'pattern': 'vv',
  'alias': ["viewonce", 'retrive'],
  'desc': "download viewOnce Message.",
  'category': "whatsapp",
  'use': "<query>",
  'filename': __filename
}, async (_0x9034b9, _0x25fb23) => {
  try {
    var _0x1fd65b = _0x9034b9.reply_message && _0x9034b9.reply_message.viewOnce ? _0x9034b9.reply_message : false;
    if (!_0x1fd65b) {
      return _0x9034b9.reply("```Please Reply A ViewOnce Message```");
    }
    let _0x1bc847 = {
      'key': _0x1fd65b.key,
      'message': {
        'conversation': "```[VIEWONCE FOUND DOWNLOAD 100%]```"
      }
    };
    let _0x201e84 = await _0x9034b9.bot.downloadAndSaveMediaMessage(_0x1fd65b.msg);
    await _0x9034b9.bot.sendMessage(_0x9034b9.jid, {
      [_0x1fd65b.mtype2.split('Mes')[0x0]]: {
        'url': _0x201e84
      },
      'caption': _0x1fd65b.body
    }, {
      'quoted': _0x1bc847
    });
  } catch (_0x1a1295) {
    await message.error(_0x1a1295 + "\n\ncommand: vv", _0x1a1295);
  }
});
