if (location.hostname == "scratch.mit.edu") {
  var data = location.pathname.split("/");
  var url = "";
  if (data[1] == "projects") {
    url = `https://s0.f5.si/p${Number(data[2]).toString(36)}`;
  } else if (data[1] == "studios") {
    url = `https://s0.f5.si/s${Number(data[2]).toString(36)}`;
  } else if (data[1] == "discuss") {
    url = `https://s0.f5.si/d${Number(data[3]).toString(36)}`;
  }
  if (url == "") {
    alert("対応していません");
  } else {
    prompt("できました！", url);
  }
} else if (location.hostname == "ja.scratch-wiki.info") {
  var url = `https://s0.f5.si/w${Number(
    window.mw.config.get("wgArticleId")
  ).toString(36)}`;
  prompt("できました！", url);
} else {
  alert("対応していないサイトです");
}
