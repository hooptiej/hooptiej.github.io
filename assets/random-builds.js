(function () {
  var ITEMS = [
    // Blog posts
    { title: "Atom mini 83: Flight Time", url: "blog/atom-mini-83-flight-time.html", thumb: "assets/img/atom-mini-83.jpg", note: "Tuning batteries 5-6-7 &mdash; still has a tendency to pull hard near full throttle." },
    { title: "GammaAtom Update: camera mount", url: "blog/gammaatom-update-camera-mount.html", thumb: "assets/img/gammaatom-1.jpg", note: "The standard Atom V2 camera mount, flipped 180 degrees, works for the Mini 83mm too." },
    { title: "Hooptie J's GammaAtom", url: "blog/hooptie-js-gammaatom.html", thumb: "assets/img/gammaatom-2.jpg", note: "A RotorX Atom 83 Mini racequad build &mdash; 2\" of absolute insanity." },
    { title: "My fav video yet.", url: "blog/my-fav-video-yet.html", thumb: "https://img.youtube.com/vi/eDiSclEYOGw/mqdefault.jpg", note: "#FPV #Quadcopter #TinyWhoop" },
    { title: "ReMaidening the Scorpion.", url: "blog/remaidening-the-scorpion.html", thumb: "https://img.youtube.com/vi/YQl5Rdh1vYc/mqdefault.jpg", note: "Spent some time this week rebuilding my Foxflite Scorpion." },
    { title: "Scorpion rebuild..", url: "blog/scorpion-rebuild.html", thumb: "assets/img/scorpion-rebuild-1.jpg", note: "Rebuilding the scorpion &mdash; figured it'd be good for a test post." },
    { title: "DVR from APD-FPV Weekend Warriors 7/9/2017", url: "blog/dvr-apd-fpv-weekend-warriors.html", thumb: "https://img.youtube.com/vi/5DVItkkKwsM/mqdefault.jpg", note: "Heat 2: 2 laps. My very first race!" },
    { title: "Sturdy Work Desk Project", url: "blog/sturdy-work-desk-project.html", thumb: "assets/img/desk-1.jpg", note: "My stepson asked for a new desk. He got a serious battlestation." },

    // Kerbal Space Program Builds
    { title: "Corvus 2 — Vtol", url: "https://www.youtube.com/watch?v=tRKUF0G2_6I", thumb: "https://img.youtube.com/vi/tRKUF0G2_6I/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Corvus3: The SeaCrow", url: "https://www.youtube.com/watch?v=Z-W3FmqXLkc", thumb: "https://img.youtube.com/vi/Z-W3FmqXLkc/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "The Corvus r.2", url: "https://www.youtube.com/watch?v=FHI3IkUz9nQ", thumb: "https://img.youtube.com/vi/FHI3IkUz9nQ/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Walker 2.1: Moar Struts Edition", url: "https://www.youtube.com/watch?v=tVdqpCKNFY4", thumb: "https://img.youtube.com/vi/tVdqpCKNFY4/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Walker Study 2: AT-KT", url: "https://www.youtube.com/watch?v=oVeS9KO7c2o", thumb: "https://img.youtube.com/vi/oVeS9KO7c2o/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Walker Study 1: Eccentric Shaft Walker", url: "https://www.youtube.com/watch?v=jSC0hAgcCio", thumb: "https://img.youtube.com/vi/jSC0hAgcCio/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "KSP Hybrid VTOL — Breaking Ground, Stock Parts", url: "https://www.youtube.com/watch?v=sCSJ4FINhxE", thumb: "https://img.youtube.com/vi/sCSJ4FINhxE/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Miss Kerbweiser Hydroplane (KSP 1.0.5)", url: "https://www.youtube.com/watch?v=P0UtQUgBLVw", thumb: "https://img.youtube.com/vi/P0UtQUgBLVw/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Octo! Kerbal Sea Creatures, Part 1", url: "https://www.youtube.com/watch?v=63KDAI1mIZs", thumb: "https://img.youtube.com/vi/63KDAI1mIZs/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Kerbcules C-130 (including RATOL VAB landing)", url: "https://www.youtube.com/watch?v=p7x2HVo-IDU", thumb: "https://img.youtube.com/vi/p7x2HVo-IDU/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "Kercross VF — Fighter, VTOL, Robot", url: "https://www.youtube.com/watch?v=r5C1eTfMAes", thumb: "https://img.youtube.com/vi/r5C1eTfMAes/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "\"Bones\"", url: "https://www.youtube.com/watch?v=gkTnNa4nUwk", thumb: "https://img.youtube.com/vi/gkTnNa4nUwk/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },
    { title: "VTOL Wing", url: "https://www.youtube.com/watch?v=DTvvtK59Zoo", thumb: "https://img.youtube.com/vi/DTvvtK59Zoo/mqdefault.jpg", external: true, sub: "Kerbal Space Program" },

    // AlienWhoop & TinyShark
    { title: "AlienWhoopV2 F4 Maiden", url: "https://www.youtube.com/watch?v=XNUZMvhyExE", thumb: "https://img.youtube.com/vi/XNUZMvhyExE/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "AlienWhoop F7: LEDs and Battery Run-Down", url: "https://www.youtube.com/watch?v=bs0Sk1xzaTQ", thumb: "https://img.youtube.com/vi/bs0Sk1xzaTQ/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "AlienWhoopV2 F7 \"The Queen\": LED Demo", url: "https://www.youtube.com/watch?v=QFmhsKdeWwY", thumb: "https://img.youtube.com/vi/QFmhsKdeWwY/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "AlienWhoop F7 \"Queen\": LED Test", url: "https://www.youtube.com/watch?v=IvL5PbUjcyk", thumb: "https://img.youtube.com/vi/IvL5PbUjcyk/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Tinysharkin' after Dark", url: "https://www.youtube.com/watch?v=kziEiXoVEhM", thumb: "https://img.youtube.com/vi/kziEiXoVEhM/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Vulture vs. Tinyshark", url: "https://www.youtube.com/watch?v=5MxbLc0T3zw", thumb: "https://img.youtube.com/vi/5MxbLc0T3zw/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Mad Tinyshark Science", url: "https://www.youtube.com/watch?v=VbAfUV3Ibus", thumb: "https://img.youtube.com/vi/VbAfUV3Ibus/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "TInyshark in the Gym", url: "https://www.youtube.com/watch?v=PwYAItldZUo", thumb: "https://img.youtube.com/vi/PwYAItldZUo/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "TinyShark House Hoverin'!", url: "https://www.youtube.com/watch?v=2G18MzDG2c4", thumb: "https://img.youtube.com/vi/2G18MzDG2c4/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "A Week Later... Zero Practice", url: "https://www.youtube.com/watch?v=eCd6P5pJ0Zc", thumb: "https://img.youtube.com/vi/eCd6P5pJ0Zc/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Zero in the Shop", url: "https://www.youtube.com/watch?v=FB15MGN60VM", thumb: "https://img.youtube.com/vi/FB15MGN60VM/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Whoop Footage", url: "https://www.youtube.com/watch?v=T8Mf3VAy5L0", thumb: "https://img.youtube.com/vi/T8Mf3VAy5L0/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "February 17, 2018", url: "https://www.youtube.com/watch?v=U2NRabmH8Kg", thumb: "https://img.youtube.com/vi/U2NRabmH8Kg/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "SMAA Friday Night Flites", url: "https://www.youtube.com/watch?v=dTkZr4zVTGk", thumb: "https://img.youtube.com/vi/dTkZr4zVTGk/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Indoor Plane Chasin'", url: "https://www.youtube.com/watch?v=GyCf-SeRCuU", thumb: "https://img.youtube.com/vi/GyCf-SeRCuU/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Quad-Toberfest 2017: Wind-Tastic Lap", url: "https://www.youtube.com/watch?v=k3eNo-o4FXY", thumb: "https://img.youtube.com/vi/k3eNo-o4FXY/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },
    { title: "Live Flight Stream Test Show", url: "https://www.youtube.com/watch?v=p3TjXk4jXCA", thumb: "https://img.youtube.com/vi/p3TjXk4jXCA/mqdefault.jpg", external: true, sub: "AlienWhoop & TinyShark" },

    // 3D Printing
    { title: "Custom TPU ESC Mount for HJY3", url: "https://www.youtube.com/watch?v=JpHhJCJozuw", thumb: "https://img.youtube.com/vi/JpHhJCJozuw/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "TinyWhoop 3D-Printing!", url: "https://www.youtube.com/watch?v=XZ4MgXxemyU", thumb: "https://img.youtube.com/vi/XZ4MgXxemyU/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "1300 Skid XL", url: "https://www.youtube.com/watch?v=Wo7g_6JcMfQ", thumb: "https://img.youtube.com/vi/Wo7g_6JcMfQ/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "Matchstick Glider", url: "https://www.youtube.com/watch?v=dEFvw7LRwAQ", thumb: "https://img.youtube.com/vi/dEFvw7LRwAQ/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "Turtle Lightswitch", url: "https://www.youtube.com/watch?v=ObN0YnUKpFQ", thumb: "https://img.youtube.com/vi/ObN0YnUKpFQ/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "N64 Cart Hangar", url: "https://www.youtube.com/watch?v=1tD4B7WlxsI", thumb: "https://img.youtube.com/vi/1tD4B7WlxsI/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "Wing Section", url: "https://www.youtube.com/watch?v=wBMO8mtpq5A", thumb: "https://img.youtube.com/vi/wBMO8mtpq5A/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "Basic Nosecone", url: "https://www.youtube.com/watch?v=QN-64io3RSQ", thumb: "https://img.youtube.com/vi/QN-64io3RSQ/mqdefault.jpg", external: true, sub: "3D Printing" },
    { title: "OpenRC Formula1: Rear Axle", url: "https://www.youtube.com/watch?v=jdTUGJEYjRY", thumb: "https://img.youtube.com/vi/jdTUGJEYjRY/mqdefault.jpg", external: true, sub: "3D Printing" },

    // Other Builds and Tech
    { title: "Raspberry Pi Bot 1", url: "https://www.youtube.com/watch?v=2xEu-t-PUyU", thumb: "https://img.youtube.com/vi/2xEu-t-PUyU/mqdefault.jpg", external: true, sub: "Other Builds" },
    { title: "Biped Walker: Range of Motion, Live Test 1", url: "https://www.youtube.com/watch?v=v5KVF-_3Txo", thumb: "https://img.youtube.com/vi/v5KVF-_3Txo/mqdefault.jpg", external: true, sub: "Other Builds" },
    { title: "The Project", url: "https://www.youtube.com/watch?v=Bh9BhP_5Yr0", thumb: "https://img.youtube.com/vi/Bh9BhP_5Yr0/mqdefault.jpg", note: "The oldest footage on the channel.", external: true, sub: "Other Builds" },
    { title: "The Project: Walk Around 2", url: "https://www.youtube.com/watch?v=rhIAzhdHhhU", thumb: "https://img.youtube.com/vi/rhIAzhdHhhU/mqdefault.jpg", external: true, sub: "Other Builds" },
    { title: "Tailmoves — Computer", url: "https://www.youtube.com/watch?v=9nHipTF76Qs", thumb: "https://img.youtube.com/vi/9nHipTF76Qs/mqdefault.jpg", external: true, sub: "Other Builds" },

    // FPV and Flight (non-blogged)
    { title: "Foxflite Scorpion 180: FPV Maiden", url: "https://www.youtube.com/watch?v=AximmwsaYUM", thumb: "https://img.youtube.com/vi/AximmwsaYUM/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "FoxFlite Scorpion 180 Maiden", url: "https://www.youtube.com/watch?v=5GuoCiJ1ITE", thumb: "https://img.youtube.com/vi/5GuoCiJ1ITE/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Atom Mini 83: Test 4", url: "https://www.youtube.com/watch?v=1c_5Qh-GpT4", thumb: "https://img.youtube.com/vi/1c_5Qh-GpT4/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Atom 83: Fixin' Dat Video (Test)", url: "https://www.youtube.com/watch?v=RiaUwqlxnq4", thumb: "https://img.youtube.com/vi/RiaUwqlxnq4/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Maiden Flight Video, HQ", url: "https://www.youtube.com/watch?v=JhlJs0t2Idg", thumb: "https://img.youtube.com/vi/JhlJs0t2Idg/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "My Maiden Maiden Maiden, or A Day of Firsts!", url: "https://www.youtube.com/watch?v=_2ImigwQo9w", thumb: "https://img.youtube.com/vi/_2ImigwQo9w/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Second FPV Flight (Edited)", url: "https://www.youtube.com/watch?v=8d0kGMuPaPc", thumb: "https://img.youtube.com/vi/8d0kGMuPaPc/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "My Second Acro LOS Flight: Tricks!", url: "https://www.youtube.com/watch?v=LevUTuv5lt4", thumb: "https://img.youtube.com/vi/LevUTuv5lt4/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Front Yard Tuning Flight", url: "https://www.youtube.com/watch?v=niRicM0XZSQ", thumb: "https://img.youtube.com/vi/niRicM0XZSQ/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "FPV Whoop Around Work!", url: "https://www.youtube.com/watch?v=LuEOGa22yGo", thumb: "https://img.youtube.com/vi/LuEOGa22yGo/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "TinyWhoopin' Outdoors!", url: "https://www.youtube.com/watch?v=4Ae2qkLGs4g", thumb: "https://img.youtube.com/vi/4Ae2qkLGs4g/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "25 Seconds of TinyWhoop Freestyle (Preview)", url: "https://www.youtube.com/watch?v=Gzu1AJMvwuQ", thumb: "https://img.youtube.com/vi/Gzu1AJMvwuQ/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "NightWhoop After Dark!", url: "https://www.youtube.com/watch?v=SiBrP_wW4ps", thumb: "https://img.youtube.com/vi/SiBrP_wW4ps/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Tree-Runnin' Tiny Whoop T&T", url: "https://www.youtube.com/watch?v=bleKSSK-zqE", thumb: "https://img.youtube.com/vi/bleKSSK-zqE/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "SMAA e-Fly: \"Plane Chasin'\"", url: "https://www.youtube.com/watch?v=_odmM5KKSmw", thumb: "https://img.youtube.com/vi/_odmM5KKSmw/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "First 4S Flight of My 4\"", url: "https://www.youtube.com/watch?v=1X5ma7UyWaA", thumb: "https://img.youtube.com/vi/1X5ma7UyWaA/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Raw HD Biplane", url: "https://www.youtube.com/watch?v=O9RKyD20WGk", thumb: "https://img.youtube.com/vi/O9RKyD20WGk/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "FPV Freestyle Practice on RotorRush", url: "https://www.youtube.com/watch?v=b7NfSq8bWJs", thumb: "https://img.youtube.com/vi/b7NfSq8bWJs/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Weekend of Success", url: "https://www.youtube.com/watch?v=KcatsdX9UHY", thumb: "https://img.youtube.com/vi/KcatsdX9UHY/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Unblocked Atomic Eclipse Magic", url: "https://www.youtube.com/watch?v=1jEQ8cY1D_g", thumb: "https://img.youtube.com/vi/1jEQ8cY1D_g/mqdefault.jpg", external: true, sub: "FPV and Flight" },
    { title: "Whoops!", url: "https://www.youtube.com/watch?v=T5KrhZsrImQ", thumb: "https://img.youtube.com/vi/T5KrhZsrImQ/mqdefault.jpg", external: true, sub: "FPV and Flight" }
  ];

  var COUNT = 3;

  function pick(arr, n) {
    var pool = arr.slice();
    var out = [];
    for (var i = 0; i < n && pool.length; i++) {
      var idx = Math.floor(Math.random() * pool.length);
      out.push(pool[idx]);
      pool.splice(idx, 1);
    }
    return out;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function render() {
    var list = document.getElementById("random-builds-list");
    if (!list) return;
    var chosen = pick(ITEMS, COUNT);
    list.innerHTML = chosen.map(function (item) {
      var note = item.sub ? ('<span style="color:var(--accent2);">' + escapeHtml(item.sub) + '</span>' + (item.note ? " &mdash; " + item.note : "")) : (item.note || "");
      return (
        '<li>' +
          '<img class="thumb" src="' + item.thumb + '" alt="' + escapeHtml(item.title) + '">' +
          '<div>' +
            '<a href="' + item.url + '"' + (item.external ? ' target="_blank" rel="noopener"' : '') + '>' + escapeHtml(item.title) + '</a>' +
            (note ? '<div class="post-excerpt">' + note + '</div>' : '') +
          '</div>' +
        '</li>'
      );
    }).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
