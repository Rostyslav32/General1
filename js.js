let elem = x => document.querySelector(x);
elem('#edit').addEventListener('click', function() {
    elem('.buttons').style.display = 'inline-block';
    elem('.textarea').value = elem('.first').innerHTML;
    elem('.format').style.display = 'none'
})
elem('.save').addEventListener('click', function() {
    elem('.first').innerHTML = elem('.textarea').value;

})
elem('.style').addEventListener('click', function() {
    elem('.buttons').style.display = 'none'
    elem('.format').style.display = 'block'
})


elem('.radio1').addEventListener('click', function() {
    elem('.first').style.fontSize = '12px';
})
elem('.radio2').addEventListener('click', function() {
    elem('.first').style.fontSize = '14px';
})
elem('.radio3').addEventListener('click', function() {
    elem('.first').style.fontSize = '16px';
})
elem('.radio4').addEventListener('click', function() {
    elem('.first').style.fontSize = '18px';
})
elem('.radio5').addEventListener('click', function() {
    elem('.first').style.fontSize = '20px';
})


elem('.select').addEventListener('change', function() {
    elem('.first').style.fontFamily = elem('.select').value
})


elem('.backcolor').addEventListener('click', function() {
    elem('.square').style.display = 'flex';

    elem('.square1').onclick = function() {
        elem('.first').style.backgroundColor = 'blue';
    }
    elem('.square2').onclick = function() {
        elem('.first').style.backgroundColor = 'yellow';
    }
    elem('.square3').onclick = function() {
        elem('.first').style.backgroundColor = 'red';
    }
    elem('.square4').onclick = function() {
        elem('.first').style.backgroundColor = 'green';
    }
    elem('.square5').onclick = function() {
        elem('.first').style.backgroundColor = 'purple';
    }
    elem('.square6').onclick = function() {
        elem('.first').style.backgroundColor = 'rgb(214, 31, 138)';
    }
    elem('.square7').onclick = function() {
        elem('.first').style.backgroundColor = 'rgb(168, 194, 76)';
    }
    elem('.square8').onclick = function() {
        elem('.first').style.backgroundColor = 'rgb(255, 94, 0)';
    }
    elem('.square9').onclick = function() {
        elem('.first').style.backgroundColor = 'rgb(100, 204, 204)';
    }

})

elem('.textcolor').addEventListener('click', function() {
    elem('.square').style.display = 'flex';

    elem('.square1').onclick = function() {
        elem('.first').style.color = 'blue';
    }
    elem('.square2').onclick = function() {
        elem('.first').style.color = 'yellow';
    }
    elem('.square3').onclick = function() {
        elem('.first').style.color = 'red';
    }
    elem('.square4').onclick = function() {
        elem('.first').style.color = 'green';
    }
    elem('.square5').onclick = function() {
        elem('.first').style.color = 'purple';
    }
    elem('.square6').onclick = function() {
        elem('.first').style.color = 'rgb(214, 31, 138)';
    }
    elem('.square7').onclick = function() {
        elem('.first').style.color = 'rgb(168, 194, 76)';
    }
    elem('.square8').onclick = function() {
        elem('.first').style.color = 'rgb(255, 94, 0)';
    }
    elem('.square9').onclick = function() {
        elem('.first').style.color = 'rgb(100, 204, 204)';
    }

})

elem('.boldT').addEventListener('click', function() {
    if (elem('.boldT').checked)
        elem('.first').style.fontWeight = 'bold'
    else
        elem('.first').style.fontWeight = 'normal'
})
elem('.cursiveT').addEventListener('click', function() {
    if (elem('.cursiveT').checked)
        elem('.first').style.fontStyle = 'Italic'
    else
        elem('.first').style.fontStyle = 'normal'
})

elem('.add').addEventListener('click', function() {
    elem('.first').style.display = 'none'
    elem('.second').style.display = 'none'
    elem('.third').style.display = 'none'
    elem('.tableform').style.display = 'block'

})
elem('.radiotable').addEventListener('click', function() {
    elem('.table').style.display = 'block'
    elem('.list').style.display = 'none'
})
elem('.radiolist').addEventListener('click', function() {
    elem('.list').style.display = 'block'
    elem('.table').style.display = 'none'

})
elem('.createtable').addEventListener('click', function() {
    elem('.first').style.display = 'block'
    elem('.second').style.display = 'block'
    elem('.third').style.display = 'block'
    elem('.tableform').style.display = 'none'
    let tr = ``
    let td = ``
    let typeborder = ``
    let colorborder = ``
    for (let k = 0; k < elem('.typeborder').options.length; k++) {
        // console.log(f4.colors.options[i])
        if (elem('.typeborder').options[k].selected) {
            typeborder = elem('.typeborder').options[k].value

        }
    }

    for (let l = 0; l < elem('.colorborder').options.length; l++) {
        // console.log(f4.colors.options[i])
        if (elem('.colorborder').options[l].selected) {
            colorborder = elem('.colorborder').options[l].value

        }
    }

    let style = `style ="width:${elem('.widthTD').value}px; height:${elem('.heightTD').value}px; border:${elem('.widthborder').value}px ${typeborder} ${colorborder}"`

    for (let j = 0; j < elem('.countTD').value; j++) {
        td += `<td ${style}>TD</td>`
    }

    for (let i = 0; i < elem('.countTR').value; i++) {
        tr += `<tr>${td}</tr>`
    }

    elem('.textarea').value += `<table>${tr}</table>`

})


elem('.createlist').addEventListener('click', function() {
    elem('.tableform').style.display = 'none'
    elem('.first').style.display = 'block'
    elem('.second').style.display = 'block'
    elem('.third').style.display = 'block'

    let typelist = ``
    for (let i = 0; i < elem('.listtype').options.length; i++) {
        // console.log(f4.colors.options[i])
        if (elem('.listtype').options[i].selected) {
            typelist = elem('.listtype').options[i].value

        }
    }
    let list = ``
    for (i = 0; i < elem('.countLi').value; i++) {
        list += `<li>Item ${i}</li>`
    }
    elem('.textarea').value += `<ul type='${typelist}'>${list}</ul>`

})