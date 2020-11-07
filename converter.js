let data_values;

$.getJSON("values.json", function(json) {
    data_values = json;
})

function convert(old1, old2, newValue) {
    text = $("#data")[0].value.split(",");
    new_values = [];
    namespaced = $("#namespace")[0].checked;
    spaces = $("#spaces")[0].checked;
    for( i in text) {;
        value = text[i].toLowerCase().trim();
        done = false;

        for (j in data_values) {;
            data_value = data_values[j];
            if("minecraft:" + value === data_value[old1] || value === data_value[old2]
                     || "minecraft:" + value === data_value[old2] || value === data_value[old2]) {

                new_values.push((namespaced ? "minecraft: " : "") + data_value[newValue]);
                done = true;
                break;
            }
        }

        if (!done) new_values.push((namespaced ? "minecraft: " : "") + value);
    }

    $("#data")[0].value = new_values.join("," + (spaces ? " " : ""));
}

function dump_itemnames() {
    replaces = {};
    for (var i in data_values) {
        value = data_values[i];
        replaces[value["numericalID"]] = value["1.13"].replace("minecraft:", "");
        if (value["1.12"] != value["1.13"]) replaces[value["1.12"].replace("minecraft:", "")] = value["1.13"].replace("minecraft:", "");
    }

    console.log(replaces.map(string => '"' + string + '": ' + replaces[string]).join("\n"));
}
