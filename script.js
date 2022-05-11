let w_props = [];
let d_props = [];
let b_props = [];
let a_props = [];
let img_props = [];
let div_props = [];
let audio_props = [];
let video_props = [];
let svg_props = [];
let canvas_props = [];
let table_props = [];
let form_props = [];

for (prop in window)
    w_props.push(prop.toString());
for (prop in document)
    d_props.push(prop.toString());
for (prop in document.body)
    b_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("A")[0])
    a_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("IMG")[0])
    img_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("DIV")[0])
    div_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("AUDIO")[0])
    audio_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("VIDEO")[0])
    video_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("svg")[0])
    svg_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("CANVAS")[0])
    canvas_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("TABLE")[0])
    table_props.push(prop.toString());
for (prop in document.body.getElementsByTagName("FORM")[0])
    form_props.push(prop.toString());

w_props = w_props.sort();
d_props = d_props.sort();
b_props = b_props.sort();
a_props = a_props.sort();
img_props = img_props.sort();
div_props = div_props.sort();
audio_props = audio_props.sort();
video_props = video_props.sort();
svg_props = svg_props.sort();
canvas_props = canvas_props.sort();
table_props = table_props.sort();
form_props = form_props.sort();

document.body.innerHTML += "<b>WINDOW UNIQUE PROPERTIES";
let cnt = 0;
for (el of w_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' && 
	d_props.indexOf(el) == -1 && 
	table_props.indexOf(el) == -1 && 
	b_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+window.${el}" target="_blank">${el}</a>`;
    }
}
document.body.innerHTML += "<b><br><br>WINDOW UNIQUE EVENTS";
cnt = 0;
for (el of w_props) {
    if (el[0] == 'o' && 
	el[1] == 'n' && 
	d_props.indexOf(el) == -1 && 
	table_props.indexOf(el) == -1 && 
	b_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+window+${el}+event" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>DOCUMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of d_props) {
    if (
        el[0] != 'o' &&
        el[1] != 'n' &&
        w_props.indexOf(el) == -1 &&
        b_props.indexOf(el) == -1 &&
        table_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+document.${el}" target="_blank">${el}</a>`;
    }
}
document.body.innerHTML += "<br><br><b>DOCUMENT UNIQUE EVENTS</b>";
cnt = 0;
for (el of d_props) {
    if (
        el[0] == 'o' &&
        el[1] == 'n' &&
        w_props.indexOf(el) == -1 &&
        b_props.indexOf(el) == -1 &&
        table_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+document+${el}+event" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>DOCUMENT & WINDOW COMMON PROPERTIES</b>";
cnt = 0;
for (el of d_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	w_props.indexOf(el) != -1 &&
	b_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>BODY UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of b_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' && 
	w_props.indexOf(el) == -1 &&
	d_props.indexOf(el) == -1 &&
	table_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+document.body.${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>HTML ELEMENTS COMMON PROPERTIES</b>";
cnt = 0;
for (el of table_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) != -1 &&
	b_props.indexOf(el) != -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+${el}+element+property" target="_blank">${el}</a>`;
    }
}
document.body.innerHTML += "<br><br><b>HTML ELEMENTS COMMON EVENTS</b>";
cnt = 0;
for (el of table_props) {
    if (el[0] == 'o' && 
	el[1] == 'n' &&
	d_props.indexOf(el) != -1 &&
	b_props.indexOf(el) != -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+${el}+event" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>A ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of a_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+a+element+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>IMG ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of img_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " +
		`<a href="https://www.google.com/search?q=javascript+img+element+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>AUDIO ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of audio_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " +
		`<a href="https://www.google.com/search?q=javascript+audio+element+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>VIDEO ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of video_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " +
		`<a href="https://www.google.com/search?q=javascript+video+element+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>SVG ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of svg_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " +
		`<a href="https://www.google.com/search?q=javascript+svg+element+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>CANVAS ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of canvas_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " +
		`<a href="https://www.google.com/search?q=javascript+canvas+element+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>TABLE ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of table_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " + 
		`<a href="https://www.google.com/search?q=javascript+table+element+${el}+property" target="_blank">${el}</a>`;
    }
}

document.body.innerHTML += "<br><br><b>FORM ELEMENT UNIQUE PROPERTIES</b>";
cnt = 0;
for (el of form_props) {
    if (el[0] != 'o' && 
	el[1] != 'n' &&
	d_props.indexOf(el) == -1 &&
	b_props.indexOf(el) == -1 &&
	w_props.indexOf(el) == -1) {
        cnt++;
        document.body.innerHTML += "<br>" + cnt + "    " +
		`<a href="https://www.google.com/search?q=javascript+form+element+${el}+property" target="_blank">${el}</a>`;
    }
}
