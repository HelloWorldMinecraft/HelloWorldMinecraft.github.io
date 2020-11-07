let names = ["MagicSpells", "AutomaticInventory", "GraviTree", "MineRaces", "Gringotts", "FancyChat"]
for (let index in names) {
    let name = names[index]
    $.ajax({
        url: "https://api.github.com/repos/HelloWorldMinecraft/" + name + "/releases/latest",
        success: function(data) {
            for(let index in data.assets) {
                let asset = data.assets[index];
                $(".downloads").append("<button onclick='document.location=\"" + asset.browser_download_url + "\"'>" + asset.name + "</button><br>\n");
            }
        },

        error: function(e) {
            $("#download").html("<h3>Failed to load releases.</h3>\n" +
                "<h4>Are you possibly reloading the page a lot?</h4>")
        }
    })
}