let data = {
	"text":
	["Жили-были {var1} да {var2}",
	"Была у них {var3}",
	"Снесла {var3} {var4}, не простое - золотое",
	"- {var1} бил, бил - не разбил",
	"- {var2} била, била - не разбила",
	"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
	"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
	"{speach}"]
}

function handleData() {

	let story = "";

	let obj = {
		var1: $("input[name=var1]")[0].value,
		var2: $("input[name=var2]")[0].value,
		var3: $("input[name=var3]")[0].value,
		var4: $("input[name=var4]")[0].value,
		var5: $("input[name=var5]")[0].value,
		var6: $("input[name=var6]")[0].value,
		speach: $("input[name=speach]")[0].value
	}

		data["text"].forEach(function (item, index) {

			for (key in obj) {
				item = item.replace("{" + key + "}", obj[key])
			}

			story = story + item + "<br>"
		})

	$("#result").html(story);
	$("form").hide()
	$("div#button").hide()
}

function init() {
	$("#button-fetch").click(handleData);
}

$(document).ready(init);